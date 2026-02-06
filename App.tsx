import React from 'react';
import RetailTile from './components/RetailTile';

export default function App() {
  return (
    <div className="bg-white font-display text-[#3A0CA3] min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md px-6 md:px-20 lg:px-40 py-4">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-10 bg-[#FF006E] rounded-xl flex items-center justify-center text-white shadow-[0_10px_25px_-5px_rgba(255,0,110,0.3)]">
              <span className="material-symbols-outlined text-2xl">shopping_bag</span>
            </div>
            <h2 className="text-2xl font-extrabold tracking-tight text-[#3A0CA3]">
              Retail<span className="text-[#FF006E]">Pulse</span>
            </h2>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-sm font-semibold text-[#3A0CA3]/70 hover:text-[#FF006E] transition-colors" href="#">Analytics</a>
            <a className="text-sm font-semibold text-[#3A0CA3]/70 hover:text-[#FF006E] transition-colors" href="#">Inventory</a>
            <a className="text-sm font-semibold text-[#3A0CA3]/70 hover:text-[#FF006E] transition-colors" href="#">Customers</a>
            <a className="text-sm font-semibold text-[#3A0CA3]/70 hover:text-[#FF006E] transition-colors" href="#">Marketplace</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-sm font-bold text-[#3A0CA3] hover:text-[#FF006E] transition-colors px-4">Log In</button>
            <button className="bg-[#3A0CA3] text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-[#FF006E] transition-all shadow-[0_10px_30px_-10px_rgba(58,12,163,0.1)]">Join Now</button>
          </div>
        </div>
      </header>

      <main className="relative">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center py-20 px-6 overflow-hidden">
          <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Hero Text */}
            <div className="flex flex-col gap-8 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF006E]/10 border border-[#FF006E]/20 text-[#FF006E] text-xs font-extrabold uppercase tracking-widest w-fit">
                <span className="material-symbols-outlined text-sm">local_fire_department</span>
                Next-Gen Retail Growth
              </div>
              <h1 className="text-5xl md:text-7xl font-black leading-[1] tracking-tighter text-[#3A0CA3]">
                Scale Your <span className="text-[#FF006E]">Retail Empire.</span>
              </h1>
              <p className="text-xl text-[#3A0CA3]/60 max-w-lg leading-relaxed">
                The ultimate growth engine for modern commerce. Track conversions, optimize basket sizes, and build brand loyalty with high-energy insights.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-[#FF006E] text-white text-lg font-bold px-10 py-5 rounded-2xl hover:translate-y-[-2px] transition-all flex items-center gap-3 shadow-[0_10px_25px_-5px_rgba(255,0,110,0.3)]">
                  Get Started Free
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <button className="bg-white border-2 border-[#3A0CA3]/10 text-[#3A0CA3] text-lg font-bold px-10 py-5 rounded-2xl hover:bg-[#3A0CA3] hover:text-white transition-all">
                  View Demo
                </button>
              </div>
            </div>

            {/* --- REPLACED HTML WITH REACT COMPONENT --- */}
            <RetailTile />
            {/* ------------------------------------------ */}

          </div>
        </section>

        {/* Stats Grid Section */}
        <section className="max-w-[1200px] mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <div className="flex flex-col gap-3 rounded-2xl p-8 bg-white border border-gray-100 shadow-[0_10px_30px_-10px_rgba(58,12,163,0.1)] group hover:border-[#FF006E]/20 transition-all">
              <div className="flex justify-between items-start">
                <p className="text-[#3A0CA3]/50 text-xs font-bold uppercase tracking-wider">Add-to-Cart Rate</p>
                <span className="material-symbols-outlined text-[#FF006E]">shopping_cart_checkout</span>
              </div>
              <p className="text-[#3A0CA3] tracking-tighter text-4xl font-black">28.4%</p>
              <p className="text-[#FF006E] text-sm font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">trending_up</span> +5.2% vs last week
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col gap-3 rounded-2xl p-8 bg-white border border-gray-100 shadow-[0_10px_30px_-10px_rgba(58,12,163,0.1)] group hover:border-[#FF006E]/20 transition-all">
              <div className="flex justify-between items-start">
                <p className="text-[#3A0CA3]/50 text-xs font-bold uppercase tracking-wider">Avg. Basket Value</p>
                <span className="material-symbols-outlined text-[#3A0CA3]">payments</span>
              </div>
              <p className="text-[#3A0CA3] tracking-tighter text-4xl font-black">$142.00</p>
              <p className="text-[#FF006E] text-sm font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">trending_up</span> +18.4% boost
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col gap-3 rounded-2xl p-8 bg-white border border-gray-100 shadow-[0_10px_30px_-10px_rgba(58,12,163,0.1)] group hover:border-[#FF006E]/20 transition-all">
              <div className="flex justify-between items-start">
                <p className="text-[#3A0CA3]/50 text-xs font-bold uppercase tracking-wider">Brand Loyalty</p>
                <span className="material-symbols-outlined text-[#FF006E]">favorite</span>
              </div>
              <p className="text-[#3A0CA3] tracking-tighter text-4xl font-black">92%</p>
              <p className="text-[#FF006E] text-sm font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">verified</span> Market Leader
              </p>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col gap-3 rounded-2xl p-8 bg-white border border-gray-100 shadow-[0_10px_30px_-10px_rgba(58,12,163,0.1)] group hover:border-[#FF006E]/20 transition-all">
              <div className="flex justify-between items-start">
                <p className="text-[#3A0CA3]/50 text-xs font-bold uppercase tracking-wider">Checkout Churn</p>
                <span className="material-symbols-outlined text-[#3A0CA3]">no_accounts</span>
              </div>
              <p className="text-[#3A0CA3] tracking-tighter text-4xl font-black">1.2%</p>
              <p className="text-[#FF006E] text-sm font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">check_circle</span> Optimized
              </p>
            </div>

          </div>
        </section>

        {/* Omnichannel Section */}
        <section className="max-w-[1200px] mx-auto px-6 py-16">
          <div className="rounded-3xl bg-[#3A0CA3] p-12 shadow-2xl relative overflow-hidden">
            {/* Background Grid for Dark Area */}
            <div 
              className="absolute top-0 right-0 w-1/2 h-full opacity-10"
              style={{
                backgroundImage: 'radial-gradient(#FFFFFF 0.5px, transparent 0.5px)',
                backgroundSize: '24px 24px'
              }}
            />
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 relative z-10">
              <div>
                <h2 className="text-3xl font-black text-white mb-2">Omnichannel Performance</h2>
                <p className="text-white/60 font-medium">Tracking sales velocity across physical and digital storefronts</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-xs font-black text-white">
                  <span className="size-2.5 rounded-full bg-[#FF006E]"></span> E-Commerce
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-xs font-black text-white">
                  <span className="size-2.5 rounded-full bg-white"></span> Retail Stores
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center relative z-10">
              <div className="lg:col-span-2">
                <div className="w-full h-72">
                  <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 472 150" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H0V109Z" fill="url(#retail_chart_grad)"></path>
                    <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25" stroke="#FF006E" strokeLinecap="round" strokeWidth="4"></path>
                    <defs>
                      <linearGradient gradientUnits="userSpaceOnUse" id="retail_chart_grad" x1="0" x2="0" y1="0" y2="150">
                        <stop stopColor="#FF006E" stopOpacity="0.4"></stop>
                        <stop offset="1" stopColor="#FF006E" stopOpacity="0"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="flex justify-between mt-6 px-4">
                    <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">January</span>
                    <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">April</span>
                    <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">July</span>
                    <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">October</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                  <div className="text-[#FF006E] text-[10px] font-black mb-1 uppercase tracking-widest">Growth Driver</div>
                  <div className="text-xl font-bold text-white mb-3">Flash Sales ROI</div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="h-full bg-[#FF006E] w-[88%]"></div>
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                  <div className="text-[#FF006E] text-[10px] font-black mb-1 uppercase tracking-widest">Market Sentiment</div>
                  <div className="text-xl font-bold text-white mb-3">Highly Trendy</div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="h-full bg-white w-[94%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="size-8 bg-[#FF006E] rounded-lg flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-xl">shopping_bag</span>
            </div>
            <h2 className="text-xl font-black tracking-tight text-[#3A0CA3]">RetailPulse</h2>
          </div>
          <div className="flex gap-10 text-sm font-bold text-[#3A0CA3]/50">
            <a className="hover:text-[#FF006E] transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-[#FF006E] transition-colors" href="#">Terms of Service</a>
            <a className="hover:text-[#FF006E] transition-colors" href="#">Partner Portal</a>
            <a className="hover:text-[#FF006E] transition-colors" href="#">System Status</a>
          </div>
          <div className="text-sm font-medium text-[#3A0CA3]/30">
            © 2024 RetailPulse Growth Systems.
          </div>
        </div>
      </footer>
    </div>
  );
}