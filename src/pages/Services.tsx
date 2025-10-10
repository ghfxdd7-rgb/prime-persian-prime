import { Link } from 'react-router-dom';
import massageImage from '@/assets/service-massage.jpg';
import nutritionImage from '@/assets/service-nutrition.jpg';
import trainingImage from '@/assets/service-training.jpg';
import coachImage from '@/assets/service-coach.jpg';
import fitnessImage from '@/assets/service-fitness.jpg';

const services = [
  {
    id: 1,
    title: 'ماساژ ورزشی',
    description: 'ماساژ درمانی تخصصی برای بهبود عملکرد عضلات و پیشگیری از آسیب‌دیدگی',
    image: massageImage,
    path: '/services/massage',
    features: ['ماساژ بافت عمیق', 'ماساژ ریکاوری', 'رفع خستگی عضلانی']
  },
  {
    id: 2,
    title: 'رژیم غذایی تخصصی',
    description: 'برنامه‌های تغذیه شخصی‌سازی شده متناسب با اهداف و نیازهای بدن شما',
    image: nutritionImage,
    path: '/services/nutrition',
    features: ['رژیم کاهش وزن', 'رژیم افزایش حجم', 'مشاوره تغذیه']
  },
  {
    id: 3,
    title: 'تمرینات شخصی',
    description: 'برنامه تمرینی اختصاصی طراحی شده توسط مربیان حرفه‌ای',
    image: trainingImage,
    path: '/services/training',
    features: ['برنامه شخصی‌سازی', 'پیگیری مستمر', 'تنوع تمرینات']
  },
  {
    id: 4,
    title: 'مربی خصوصی',
    description: 'راهنمایی تخصصی یک‌به‌یک با مربی شخصی در تمام مراحل',
    image: coachImage,
    path: '/services/coach',
    features: ['آموزش تکنیک', 'انگیزه‌بخشی', 'بازخورد لحظه‌ای']
  },
  {
    id: 5,
    title: 'تناسب اندام گروهی',
    description: 'کلاس‌های متنوع گروهی برای تناسب اندام و لذت بردن از ورزش',
    image: fitnessImage,
    path: '/services/fitness',
    features: ['یوگا', 'پیلاتس', 'ایروبیک', 'زومبا']
  },
];

const Services = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-black mb-6 glow-text">
            خدمات ما
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            مجموعه کاملی از خدمات حرفه‌ای برای کمک به شما در رسیدن به اهداف تناسب اندام
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Link
              key={service.id}
              to={service.path}
              className="group glass-hover rounded-2xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-l" />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-bold mb-4 text-primary group-hover:glow-text transition-all">
                      {service.title}
                    </h3>
                    <p className="text-foreground/80 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-foreground/70">
                          <span className="text-primary">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <span className="text-primary group-hover:underline">
                      اطلاعات بیشتر ←
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
