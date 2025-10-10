import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-black mb-6 glow-text">
            تماس با ما
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            سوالی دارید؟ ما آماده پاسخگویی به شما هستیم
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="glass rounded-3xl p-8 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-primary">ارسال پیام</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">نام</label>
                  <Input
                    type="text"
                    placeholder="نام خود را وارد کنید"
                    className="bg-white/5 border-white/10"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">نام خانوادگی</label>
                  <Input
                    type="text"
                    placeholder="نام خانوادگی"
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
                  className="bg-white/5 border-white/10 ltr text-right"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">شماره تماس</label>
                <Input
                  type="tel"
                  placeholder="09123456789"
                  className="bg-white/5 border-white/10 ltr text-right"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">پیام</label>
                <Textarea
                  placeholder="پیام خود را بنویسید..."
                  rows={6}
                  className="bg-white/5 border-white/10 resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:scale-105 transition-all duration-300 text-lg py-6"
              >
                ارسال پیام
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="glass rounded-3xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-primary">اطلاعات تماس</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="glass p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">آدرس</h3>
                    <p className="text-foreground/70">
                      تهران، خیابان ولیعصر، پلاک ۱۲۳
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="glass p-3 rounded-full">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">تلفن</h3>
                    <p className="text-foreground/70 ltr text-right">021-12345678</p>
                    <p className="text-foreground/70 ltr text-right">0912-3456789</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="glass p-3 rounded-full">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">ایمیل</h3>
                    <p className="text-foreground/70 ltr text-right">info@primegym.ir</p>
                    <p className="text-foreground/70 ltr text-right">support@primegym.ir</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="glass p-3 rounded-full">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">ساعات کاری</h3>
                    <p className="text-foreground/70">شنبه تا پنجشنبه: ۶ صبح تا ۱۱ شب</p>
                    <p className="text-foreground/70">جمعه: ۸ صبح تا ۹ شب</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="glass rounded-3xl p-4 h-64 flex items-center justify-center">
              <p className="text-foreground/50">نقشه موقعیت مکانی</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
