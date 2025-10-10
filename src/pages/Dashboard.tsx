import { useState } from 'react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<'reservations' | 'orders' | 'consultants'>('reservations');

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-12 glow-text text-center animate-fade-in">
            حساب کاربری
          </h1>

          {/* Tabs */}
          <div className="glass rounded-3xl p-2 mb-8 animate-fade-in">
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setActiveTab('reservations')}
                className={`py-4 px-6 rounded-2xl font-semibold transition-all duration-300 ${
                  activeTab === 'reservations'
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                    : 'text-foreground/70 hover:bg-white/5'
                }`}
              >
                رزروها
              </button>
              <button
                onClick={() => setActiveTab('orders')}
                className={`py-4 px-6 rounded-2xl font-semibold transition-all duration-300 ${
                  activeTab === 'orders'
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                    : 'text-foreground/70 hover:bg-white/5'
                }`}
              >
                سفارشات من
              </button>
              <button
                onClick={() => setActiveTab('consultants')}
                className={`py-4 px-6 rounded-2xl font-semibold transition-all duration-300 ${
                  activeTab === 'consultants'
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                    : 'text-foreground/70 hover:bg-white/5'
                }`}
              >
                مشاوران من
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="glass rounded-3xl p-8 min-h-[400px] animate-fade-in">
            {activeTab === 'reservations' && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary">رزروهای من</h2>
                <div className="text-center py-20 text-foreground/50">
                  شما هنوز هیچ رزروی ندارید
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary">سفارشات من</h2>
                <div className="text-center py-20 text-foreground/50">
                  شما هنوز هیچ سفارشی ندارید
                </div>
              </div>
            )}

            {activeTab === 'consultants' && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary">مشاوران من</h2>
                <div className="text-center py-20 text-foreground/50">
                  شما هنوز با هیچ مشاوری در ارتباط نیستید
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
