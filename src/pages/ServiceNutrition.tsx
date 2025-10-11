import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ServiceNutrition = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center justify-center px-6">
      <Card className="glass max-w-4xl w-full animate-fade-in">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl md:text-5xl font-black glow-text">
            رژیم غذایی تخصصی
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8 md:p-12">
          <p className="text-lg md:text-xl leading-relaxed text-foreground/90 text-center">
            تغذیه صحیح پایه و اساس هر برنامه ورزشی موفق است. تیم مشاوران تغذیه ما با تحلیل دقیق وضعیت بدنی، اهداف و سبک زندگی شما، برنامه‌های غذایی شخصی‌سازی شده طراحی می‌کنند. این رژیم‌ها شامل تمام ریز و درشت مغذی‌های مورد نیاز بدن شما بوده و به شما در رسیدن به اهداف کاهش وزن، افزایش حجم عضلانی یا حفظ سلامت کمک می‌کنند.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-4 text-center">
            <div className="glass-hover p-4 rounded-lg">
              <h3 className="text-primary font-bold mb-2">رژیم کاهش وزن</h3>
              <p className="text-sm text-foreground/70">چربی‌سوزی اصولی</p>
            </div>
            <div className="glass-hover p-4 rounded-lg">
              <h3 className="text-primary font-bold mb-2">رژیم افزایش حجم</h3>
              <p className="text-sm text-foreground/70">رشد عضلانی سالم</p>
            </div>
            <div className="glass-hover p-4 rounded-lg">
              <h3 className="text-primary font-bold mb-2">مشاوره تغذیه</h3>
              <p className="text-sm text-foreground/70">راهنمایی تخصصی</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceNutrition;
