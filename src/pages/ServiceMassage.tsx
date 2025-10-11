import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ServiceMassage = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center justify-center px-6">
      <Card className="glass max-w-4xl w-full animate-fade-in">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl md:text-5xl font-black glow-text">
            ماساژ ورزشی
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8 md:p-12">
          <p className="text-lg md:text-xl leading-relaxed text-foreground/90 text-center">
            ماساژ ورزشی یکی از مهم‌ترین روش‌های بهبود عملکرد ورزشکاران و افراد فعال است. این نوع ماساژ به کاهش خستگی عضلانی، پیشگیری از آسیب‌های ورزشی، بهبود گردش خون و افزایش انعطاف‌پذیری کمک می‌کند. تیم متخصص ما با استفاده از تکنیک‌های حرفه‌ای، به شما در رسیدن به بهترین عملکرد ورزشی یاری می‌رسانند.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-4 text-center">
            <div className="glass-hover p-4 rounded-lg">
              <h3 className="text-primary font-bold mb-2">ماساژ بافت عمیق</h3>
              <p className="text-sm text-foreground/70">درمان نقاط ماهیچه‌ای</p>
            </div>
            <div className="glass-hover p-4 rounded-lg">
              <h3 className="text-primary font-bold mb-2">ماساژ ریکاوری</h3>
              <p className="text-sm text-foreground/70">بازیابی سریع عضلات</p>
            </div>
            <div className="glass-hover p-4 rounded-lg">
              <h3 className="text-primary font-bold mb-2">رفع خستگی</h3>
              <p className="text-sm text-foreground/70">کاهش درد و التهاب</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceMassage;
