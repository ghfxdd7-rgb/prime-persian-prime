import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import heroImage from '@/assets/hero-gym.jpg';
import massageImage from '@/assets/service-massage.jpg';
import nutritionImage from '@/assets/service-nutrition.jpg';
import trainingImage from '@/assets/service-training.jpg';
import coachImage from '@/assets/service-coach.jpg';
import fitnessImage from '@/assets/service-fitness.jpg';

const services = [
  {
    id: 1,
    title: 'ماساژ ورزشی',
    image: massageImage,
    path: '/services/massage',
  },
  {
    id: 2,
    title: 'رژیم غذایی',
    image: nutritionImage,
    path: '/services/nutrition',
  },
  {
    id: 3,
    title: 'تمرینات شخصی',
    image: trainingImage,
    path: '/services/training',
  },
  {
    id: 4,
    title: 'مربی خصوصی',
    image: coachImage,
    path: '/services/coach',
  },
  {
    id: 5,
    title: 'تناسب اندام',
    image: fitnessImage,
    path: '/services/fitness',
  },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="باشگاه بدنسازی پرایم"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center space-y-6 px-6 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-black glow-text leading-tight">
            بدن سالم
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            زندگی سالم‌تر
          </h2>
          <p className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto leading-relaxed mt-6">
            در باشگاه بدنسازی پرایم بدنت رو بساز با بهترین ابزارهای ورزشی و مشاوران متخصص
            <br />
            رژیم‌های غذایی متنوع با توجه به وضعیت شما
          </p>
          <Link
            to="/signup"
            className="inline-block mt-8 px-10 py-4 bg-primary text-primary-foreground text-xl font-bold rounded-full hover:scale-105 transition-all duration-300 glow-border animate-glow"
          >
            همین الان شروع کن
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 right-1/2 transform translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black mb-4 glow-text">
            خدمات ما
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            مجموعه کامل خدمات برای رسیدن به بدن و زندگی ایده‌آل
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={service.id}
              to={service.path}
              className="group glass-hover rounded-2xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <h3 className="absolute bottom-6 right-6 text-2xl font-bold text-white">
                  {service.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About Preview Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="glass rounded-3xl p-12 text-center space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black glow-text">
            درباره باشگاه پرایم
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            باشگاه بدنسازی پرایم با بیش از ده سال تجربه در زمینه تناسب اندام و بدنسازی، 
            با مجهزترین امکانات و حرفه‌ای‌ترین مربیان آماده خدمت‌رسانی به شماست.
            ما با ارائه برنامه‌های تمرینی شخصی‌سازی شده و رژیم‌های غذایی اختصاصی،
            به شما کمک می‌کنیم تا به اهداف فیتنس خود برسید.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-lg font-bold rounded-full hover:scale-105 transition-all duration-300 glow-border"
          >
            <span>شروع کنید</span>
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
