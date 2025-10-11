import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import type { User as SupabaseUser } from '@supabase/supabase-js';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<SupabaseUser | null>(null);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);
  
  const links = [
    { path: '/', label: 'خانه' },
    { path: '/about', label: 'درباره ما' },
    { path: '/services', label: 'خدمات ما' },
    { path: '/contact', label: 'تماس با ما' },
  ];

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: 'خروج موفق',
      description: 'شما با موفقیت از حساب کاربری خود خارج شدید',
    });
    navigate('/');
    setMobileMenuOpen(false);
  };

  const handleDashboardClick = () => {
    if (!user) {
      toast({
        title: 'دسترسی محدود',
        description: 'برای دسترسی به حساب کاربری ابتدا باید ثبت نام کنید یا وارد شوید',
        variant: 'destructive',
      });
      navigate('/login');
    } else {
      navigate('/dashboard');
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 glass border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold glow-text">
            پرایم جیم
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg transition-all duration-300 hover:text-primary ${
                  location.pathname === link.path
                    ? 'text-primary font-semibold'
                    : 'text-foreground/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <>
                <button
                  onClick={handleDashboardClick}
                  className="px-6 py-2 text-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <User size={20} />
                  پنل کاربری
                </button>
                <button
                  onClick={handleLogout}
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-medium flex items-center gap-2"
                >
                  <LogOut size={20} />
                  خروج
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-6 py-2 text-foreground hover:text-primary transition-colors"
                >
                  ورود
                </Link>
                <Link
                  to="/signup"
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-medium"
                >
                  ثبت نام
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-foreground"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-lg ${
                  location.pathname === link.path
                    ? 'text-primary font-semibold'
                    : 'text-foreground/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
              {user ? (
                <>
                  <button
                    onClick={handleDashboardClick}
                    className="text-center py-2 text-foreground flex items-center justify-center gap-2"
                  >
                    <User size={20} />
                    پنل کاربری
                  </button>
                  <button
                    onClick={handleLogout}
                    className="text-center py-2 bg-primary text-primary-foreground rounded-full flex items-center justify-center gap-2"
                  >
                    <LogOut size={20} />
                    خروج
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-center py-2 text-foreground"
                  >
                    ورود
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-center py-2 bg-primary text-primary-foreground rounded-full"
                  >
                    ثبت نام
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
