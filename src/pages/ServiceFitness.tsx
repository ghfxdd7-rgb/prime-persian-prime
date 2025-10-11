import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ServiceFitness = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center justify-center px-6">
      <Card className="glass max-w-4xl w-full animate-fade-in">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl md:text-5xl font-black glow-text">
            تناسب اندام
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8 md:p-12">
          <p className="text-lg md:text-xl leading-relaxed text-foreground/90 text-center">
            تناسب اندام یعنی هماهنگی کامل بین بدن، ذهن و عملکرد. در این بخش ما به شما کمک می‌کنیم تا با برنامه‌های اصولی، به بهترین نسخه از خودتان برسید. کلاس‌های گروهی متنوع ما شامل یوگا، پیلاتس، ایروبیک و زومبا است که علاوه بر تقویت بدن، انرژی مثبت و لذت از ورزش را به شما هدیه می‌دهد.
          </p>
          <div className="mt-8 grid md:grid-cols-4 gap-4 text-center">
            <div className="glass-hover p-4 rounded-lg">
              <h3 className="text-primary font-bold mb-2">یوگا</h3>
              <p className="text-sm text-foreground/70">آرامش و تمرکز</p>
            </div>
            <div className="glass-hover p-4 rounded-lg">
              <h3 className="text-primary font-bold mb-2">پیلاتس</h3>
              <p className="text-sm text-foreground/70">تقویت عضلات مرکزی</p>
            </div>
            <div className="glass-hover p-4 rounded-lg">
              <h3 className="text-primary font-bold mb-2">ایروبیک</h3>
              <p className="text-sm text-foreground/70">افزایش استقامت</p>
            </div>
            <div className="glass-hover p-4 rounded-lg">
              <h3 className="text-primary font-bold mb-2">زومبا</h3>
              <p className="text-sm text-foreground/70">شادابی و انرژی</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceFitness;
