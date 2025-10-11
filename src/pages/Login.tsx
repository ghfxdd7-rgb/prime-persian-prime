import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        if (error.message.includes('Invalid login credentials')) {
          toast({
            title: 'خطا در ورود',
            description: 'حساب کاربری یافت نشد. لطفاً ابتدا ثبت نام کنید.',
            variant: 'destructive',
          });
        } else {
          toast({
            title: 'خطا در ورود',
            description: error.message,
            variant: 'destructive',
          });
        }
        return;
      }

      if (data.user) {
        toast({
          title: 'ورود موفق',
          description: 'به باشگاه پرایم خوش آمدید',
        });
        navigate('/');
      }
    } catch (error) {
      toast({
        title: 'خطا',
        description: 'مشکلی پیش آمده است. لطفاً دوباره تلاش کنید.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-md animate-fade-in">
        <div className="glass rounded-3xl p-10">
          <h1 className="text-4xl font-black text-center mb-2 glow-text">
            ورود
          </h1>
          <p className="text-center text-foreground/70 mb-8">
            به باشگاه پرایم خوش آمدید
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">ایمیل</label>
              <Input
                type="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-white/5 border-white/10 ltr text-right"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">رمز عبور</label>
              <Input
                type="password"
                placeholder="رمز عبور خود را وارد کنید"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="bg-white/5 border-white/10"
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <Link to="/forgot-password" className="text-primary hover:underline">
                رمز عبور را فراموش کرده‌اید؟
              </Link>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary text-primary-foreground hover:scale-105 transition-all duration-300 text-lg py-6 font-bold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'در حال ورود...' : 'ورود'}
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-foreground/70">
              حساب کاربری ندارید؟{' '}
              <Link to="/signup" className="text-primary font-semibold hover:underline">
                ثبت نام کنید
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
