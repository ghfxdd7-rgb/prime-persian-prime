import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ServiceCoach = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center justify-center px-6">
      <Card className="glass max-w-4xl w-full animate-fade-in">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl md:text-5xl font-black glow-text">
            مربی خصوصی
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8 md:p-12">
          <p className="text-lg md:text-xl leading-relaxed text-foreground/90 text-center">
            داشتن یک مربی خصوصی حرفه‌ای می‌تواند تفاوت بزرگی در سرعت پیشرفت شما ایجاد کند. مربیان ما با تجربه و تخصص بالا، در کنار شما هستند تا تکنیک‌های صحیح را آموزش دهند، انگیزه شما را بالا نگه دارند و در هر مرحله بازخورد تخصصی ارائه کنند. با مربی خصوصی، هر جلسه تمرینی بهینه و مؤثر خواهد بود.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-4 text-center">
            <div className="glass-hover p-4 rounded-lg">
              <h3 className="text-primary font-bold mb-2">آموزش تکنیک</h3>
              <p className="text-sm text-foreground/70">اجرای صحیح حرکات</p>
            </div>
            <div className="glass-hover p-4 rounded-lg">
              <h3 className="text-primary font-bold mb-2">انگیزه‌بخشی</h3>
              <p className="text-sm text-foreground/70">حمایت مستمر</p>
            </div>
            <div className="glass-hover p-4 rounded-lg">
              <h3 className="text-primary font-bold mb-2">بازخورد لحظه‌ای</h3>
              <p className="text-sm text-foreground/70">اصلاح فوری</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceCoach;
