import { Link } from 'react-router-dom';
import { Instagram, Send, MessageCircle } from 'lucide-react';

const Footer = () => {
  const links = [
    { path: '/', label: 'خانه' },
    { path: '/about', label: 'درباره ما' },
    { path: '/services', label: 'خدمات ما' },
    { path: '/contact', label: 'تماس با ما' },
    { path: '/dashboard', label: 'پنل کاربری' },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'اینستاگرام' },
    { icon: Send, href: '#', label: 'تلگرام' },
    { icon: MessageCircle, href: '#', label: 'واتساپ' },
  ];

  return (
    <footer className="relative mt-20 glass border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      
      <div className="relative container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold glow-text mb-4">پرایم جیم</h3>
            <p className="text-foreground/70 leading-relaxed">
              بهترین مرکز تناسب اندام با مربیان حرفه‌ای، رژیم‌های تخصصی و امکانات پیشرفته برای رسیدن به بدن ایده‌آل شما.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-primary">لینک‌های سریع</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-primary">تماس با ما</h4>
            <div className="space-y-3 text-foreground/70">
              <p>تهران، خیابان ولیعصر</p>
              <p className="ltr text-right">021-12345678</p>
              <p className="ltr text-right">info@primegym.ir</p>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Social Icons */}
            <div className="flex items-center gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-hover p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/30"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-primary" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-foreground/60 text-sm">
              © {new Date().getFullYear()} باشگاه بدنسازی پرایم. تمامی حقوق محفوظ است.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
