const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-8 glow-text text-center animate-fade-in">
            درباره ما
          </h1>
          
          <div className="glass rounded-3xl p-12 space-y-8 animate-fade-in">
            <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
              <p>
                باشگاه بدنسازی پرایم با افتخار بیش از ده سال است که در خدمت علاقه‌مندان به تناسب اندام و سلامتی است.
                ما با ارائه مجهزترین فضا و امکانات، تیمی از مربیان حرفه‌ای و متخصصان تغذیه، 
                به شما کمک می‌کنیم تا به بهترین نسخه از خودتان تبدیل شوید.
              </p>

              <p>
                فلسفه ما در پرایم ساده است: بدن سالم، زندگی سالم‌تر. 
                ما معتقدیم که تناسب اندام فقط یک هدف نیست، بلکه یک سبک زندگی است.
                به همین دلیل خدمات ما فراتر از یک باشگاه معمولی است.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-4">
                چرا پرایم؟
              </h2>

              <ul className="space-y-4 mr-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary text-2xl">•</span>
                  <span>مجهزترین امکانات ورزشی با دستگاه‌های به‌روز</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-2xl">•</span>
                  <span>مربیان حرفه‌ای با مدارک معتبر بین‌المللی</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-2xl">•</span>
                  <span>برنامه‌های تمرینی شخصی‌سازی شده</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-2xl">•</span>
                  <span>مشاوره تغذیه با رژیم‌های اختصاصی</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-2xl">•</span>
                  <span>فضای مدرن و انگیزه‌بخش</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-2xl">•</span>
                  <span>خدمات ماساژ ورزشی تخصصی</span>
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-4">
                ماموریت ما
              </h2>

              <p>
                ماموریت ما در پرایم جیم، الهام‌بخشی و کمک به افراد برای دستیابی به اهداف سلامتی و تناسب اندام آن‌هاست.
                ما می‌خواهیم محیطی ایجاد کنیم که در آن همه افراد، صرف‌نظر از سطح آمادگی جسمانی‌شان، 
                احساس پذیرش، حمایت و انگیزه کنند.
              </p>

              <p>
                با ترکیب تکنولوژی پیشرفته، دانش علمی روز و رویکردی شخصی‌سازی‌شده، 
                ما به شما کمک می‌کنیم که نه‌تنها به اهداف کوتاه‌مدت خود برسید، 
                بلکه سبک زندگی سالمی را برای همیشه در پیش بگیرید.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
