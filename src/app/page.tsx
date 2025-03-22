export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100 font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center mb-6">
            <div className="h-2 w-12 bg-indigo-600 mr-4 rounded-full"></div>
            <p className="text-sm font-medium text-indigo-600 tracking-widest uppercase">Boutique Crypto OTC</p>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">PrimeLayer</h1>
          <h2 className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl">
            Institutional-grade digital asset management and OTC trading for discerning investors
          </h2>
          <p className="text-lg max-w-3xl mb-10 text-slate-700 dark:text-slate-400">
            We help high-net-worth individuals, funds, and founders execute large crypto trades with precision while unlocking premium yield strategies others can&apos;t access.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white rounded-xl text-center font-medium transition-all shadow-lg hover:shadow-xl hover:shadow-indigo-500/20"
            >
              Schedule Consultation
            </a>
            <a
              href="#services"
              className="px-8 py-4 border border-indigo-200 dark:border-indigo-800 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm text-indigo-700 dark:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-700 rounded-xl text-center font-medium transition-all"
            >
              View Our Services
            </a>
          </div>
        </div>
      </header>

      {/* Social Proof */}
      <section className="py-12 bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm border-t border-b border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 text-slate-500 dark:text-slate-400 text-sm font-medium">
            <p>TRUSTED BY INVESTORS FROM</p>
            <div>BlackRock</div>
            <div>Sequoia Capital</div>
            <div>a16z</div>
            <div>Jump Crypto</div>
            <div>Three Arrows Family Office</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-4">
              <div className="h-1 w-8 bg-indigo-600 mr-3 rounded-full"></div>
              <p className="text-sm font-medium text-indigo-600 tracking-widest uppercase">Our Services</p>
              <div className="h-1 w-8 bg-indigo-600 ml-3 rounded-full"></div>
            </div>
            <h2 className="text-4xl font-bold mb-4">Institutional-Grade Solutions</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Tailored services designed for sophisticated investors seeking secure exposure to digital assets</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service cards with more modern styling */}
            <div className="p-8 rounded-2xl bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all group relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-indigo-100 dark:bg-indigo-900/20 rounded-full opacity-70 group-hover:scale-125 transition-transform"></div>
              <div className="relative">
                <div className="text-3xl mb-6 text-indigo-600 bg-indigo-100 dark:bg-indigo-900/30 w-16 h-16 rounded-xl flex items-center justify-center">🔄</div>
                <h3 className="text-xl font-semibold mb-3">OTC Crypto Trading</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Private, slippage-free execution for BTC, ETH, SOL & USDC trades over $100k
                </p>
                <div className="pt-2">
                  <a href="#" className="text-indigo-600 font-medium flex items-center">
                    Learn more <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Additional service cards with similar styling */}
            {/* ... service cards continue ... */}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Top Investors Choose PrimeLayer</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">The trusted partner for digital asset management</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center text-indigo-600 mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Bank-Grade Security</h3>
                <p className="text-slate-600 dark:text-slate-400">Multi-sig infrastructure and institutional custody solutions protecting your assets</p>
              </div>

              {/* Additional feature cards continue */}
            </div>
          </div>
        </div>
      </section>

      {/* Strategies Section - Modernized */}
      {/* ... Updated table with more modern styling ... */}

      {/* Testimonials Section - New */}
      <section className="py-24 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-4">
              <div className="h-1 w-8 bg-indigo-600 mr-3 rounded-full"></div>
              <p className="text-sm font-medium text-indigo-600 tracking-widest uppercase">Client Testimonials</p>
              <div className="h-1 w-8 bg-indigo-600 ml-3 rounded-full"></div>
            </div>
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          </div>

          {/* Testimonial cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border border-slate-100 dark:border-slate-700 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="text-yellow-400 flex">
                  {"\u2605".repeat(5)}
                </div>
              </div>
              <p className="text-lg italic mb-6">&quot;PrimeLayer helped our family office execute a $2.8M ETH position with zero slippage during high volatility. Their advice on staking and yield strategies has been invaluable.&quot;</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 mr-4"></div>
                <div>
                  <p className="font-bold">Michael K.</p>
                  <p className="text-sm text-slate-500">Former VP, Goldman Sachs</p>
                </div>
              </div>
            </div>

            {/* Additional testimonial */}
          </div>
        </div>
      </section>

      {/* Contact Section - Modernized */}
      <section id="contact" className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="h-1 w-8 bg-indigo-600 mr-3 rounded-full"></div>
                  <p className="text-sm font-medium text-indigo-600 tracking-widest uppercase">Contact Us</p>
                </div>
                <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your Digital Asset Strategy?</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                  Schedule a private consultation with our team to discuss your investment goals and explore tailored strategies.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Email Us</p>
                    <a href="mailto:invest@primelayer.xyz" className="text-indigo-600">invest@primelayer.xyz</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Telegram</p>
                    <a href="https://t.me/PrimeLayerOTC" target="_blank" rel="noopener noreferrer" className="text-indigo-600">@PrimeLayerOTC</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700">
                <h3 className="text-2xl font-semibold mb-6">Schedule a Consultation</h3>

                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 dark:bg-slate-700" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 dark:bg-slate-700" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Investment Amount (USD)</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 dark:bg-slate-700">
                      <option>$100,000 - $500,000</option>
                      <option>$500,000 - $1,000,000</option>
                      <option>$1,000,000 - $5,000,000</option>
                      <option>$5,000,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 dark:bg-slate-700"></textarea>
                  </div>

                  <button type="submit" className="w-full py-4 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white rounded-xl text-center font-medium transition-all">
                    Request Consultation
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Modernized */}
      <footer className="py-12 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">PrimeLayer</h3>
              <p className="text-slate-600 dark:text-slate-400">Boutique Crypto OTC & Asset Management</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-8">
              <div>
                <p className="font-medium mb-3">Services</p>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li><a href="#" className="hover:text-indigo-600">OTC Trading</a></li>
                  <li><a href="#" className="hover:text-indigo-600">ETH Staking</a></li>
                  <li><a href="#" className="hover:text-indigo-600">DeFi Strategies</a></li>
                </ul>
              </div>

              <div>
                <p className="font-medium mb-3">Company</p>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li><a href="#" className="hover:text-indigo-600">About Us</a></li>
                  <li><a href="#" className="hover:text-indigo-600">Contact</a></li>
                  <li><a href="#" className="hover:text-indigo-600">Terms of Service</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 dark:border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 dark:text-slate-400 mb-4 md:mb-0">
              © 2024 PrimeLayer | All rights reserved
            </p>

            <div className="flex items-center gap-4">
              <a href="#" className="text-slate-500 hover:text-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
              <a href="#" className="text-slate-500 hover:text-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
              <a href="#" className="text-slate-500 hover:text-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}