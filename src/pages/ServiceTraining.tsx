import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ServiceTraining = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center justify-center px-6">
      <Card className="glass max-w-4xl w-full animate-fade-in">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl md:text-5xl font-black glow-text">
            تمرینات شخصی
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8 md:p-12">
          <p className="text-lg md:text-xl leading-relaxed text-foreground/90 text-center">
            هر فردی ساختار بدنی، توانایی و اهداف منحصر به فردی دارد. برنامه‌های تمرینی شخصی ما کاملاً متناسب با نیازهای شما طراحی شده و با پیگیری مستمر مربیان حرفه‌ای، اطمینان حاصل می‌کنیم که به بهترین نتایج برسید. از تمرینات قدرتی و عضله‌سازی تا کاردیو و انعطاف‌پذیری، همه چیز برای شما شخصی‌سازی می‌شود.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-4 text-center">
            <div className="glass-hover p-4 rounded-lg">
              <h3 className="text-primary font-bold mb-2">برنامه شخصی‌سازی</h3>
              <p className="text-sm text-foreground/70">متناسب با شما</p>
            </div>
            <div className="glass-hover p-4 rounded-lg">
              <h3 className="text-primary font-bold mb-2">پیگیری مستمر</h3>
              <p className="text-sm text-foreground/70">ارزیابی و تنظیم</p>
            </div>
            <div className="glass-hover p-4 rounded-lg">
              <h3 className="text-primary font-bold mb-2">تنوع تمرینات</h3>
              <p className="text-sm text-foreground/70">جلوگیری از یکنواختی</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceTraining;
