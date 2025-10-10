import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('رمز عبور و تکرار آن یکسان نیستند');
      return;
    }

    // Handle signup logic here
    console.log('Signup:', formData);
    // Navigate to login after successful signup
    navigate('/login');
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
              className="w-full bg-primary text-primary-foreground hover:scale-105 transition-all duration-300 text-lg py-6 font-bold"
            >
              ثبت نام
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
