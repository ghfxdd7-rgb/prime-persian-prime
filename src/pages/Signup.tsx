import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: 'خطا',
        description: 'رمز عبور و تکرار آن یکسان نیستند',
        variant: 'destructive',
      });
      return;
    }

    if (formData.password.length < 8) {
      toast({
        title: 'خطا',
        description: 'رمز عبور باید حداقل ۸ کاراکتر باشد',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            first_name: formData.firstName,
            last_name: formData.lastName,
          },
          emailRedirectTo: `${window.location.origin}/`,
        },
      });

      if (error) {
        if (error.message.includes('already registered')) {
          toast({
            title: 'خطا',
            description: 'این ایمیل قبلاً ثبت شده است. لطفاً وارد شوید.',
            variant: 'destructive',
          });
        } else {
          toast({
            title: 'خطا در ثبت نام',
            description: error.message,
            variant: 'destructive',
          });
        }
        return;
      }

      if (data.user) {
        toast({
          title: 'ثبت نام موفق',
          description: 'اکنون می‌توانید وارد شوید',
        });
        navigate('/login');
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
            ثبت نام
          </h1>
          <p className="text-center text-foreground/70 mb-8">
            عضو خانواده پرایم شوید
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">نام</label>
                <Input
                  type="text"
                  placeholder="نام"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="bg-white/5 border-white/10"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">نام خانوادگی</label>
                <Input
                  type="text"
                  placeholder="نام خانوادگی"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="bg-white/5 border-white/10"
                  required
                />
              </div>
            </div>

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
                placeholder="حداقل ۸ کاراکتر"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="bg-white/5 border-white/10"
                minLength={8}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">تکرار رمز عبور</label>
              <Input
                type="password"
                placeholder="رمز عبور را مجدداً وارد کنید"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="bg-white/5 border-white/10"
                required
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary text-primary-foreground hover:scale-105 transition-all duration-300 text-lg py-6 font-bold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'در حال ثبت نام...' : 'ثبت نام'}
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-foreground/70">
              قبلاً ثبت نام کرده‌اید؟{' '}
              <Link to="/login" className="text-primary font-semibold hover:underline">
                وارد شوید
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
