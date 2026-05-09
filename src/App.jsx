import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-gray-700 tracking-tight">
              P<span className="inline-flex items-center justify-center w-6 h-6 mx-1">
                <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.5" fill="none"/>
                  <line x1="12" y1="6" x2="12" y2="12" stroke="currentColor" strokeWidth="2.5"/>
                  <line x1="12" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="2.5"/>
                </svg>
              </span>WER SLIM
            </h1>
          </div>
          <a 
            href="mailto:hello@trendsetpromo.com"
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            Contact Us
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-700 tracking-tight mb-4">
              P<span className="inline-flex items-center justify-center w-16 h-16 mx-2 align-middle">
                <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <line x1="12" y1="6" x2="12" y2="12" stroke="currentColor" strokeWidth="2"/>
                  <line x1="12" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </span>WER SLIM
            </h1>
            <div className="bg-green-500 text-white py-3 px-12 inline-block rounded-lg">
              <p className="text-xl font-medium">Your powerbank</p>
            </div>
          </div>

          {/* Cable illustration */}
          <div className="mt-16 mb-12">
            <svg width="400" height="120" viewBox="0 0 400 120" className="mx-auto">
              <line x1="80" y1="60" x2="280" y2="60" stroke="#D1D5DB" strokeWidth="5" strokeLinecap="round"/>
              <rect x="280" y="45" width="50" height="30" fill="none" stroke="#9CA3AF" strokeWidth="3" rx="3"/>
              <rect x="330" y="50" width="20" height="20" fill="none" stroke="#9CA3AF" strokeWidth="3"/>
              <line x1="350" y1="57" x2="370" y2="57" stroke="#9CA3AF" strokeWidth="3" strokeLinecap="round"/>
              <line x1="350" y1="63" x2="370" y2="63" stroke="#9CA3AF" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Ultra-slim portable power solutions for modern lifestyle
          </p>

          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-10 rounded-lg transition-all transform hover:scale-105 shadow-lg">
            Request a Quote
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Why Choose POWER SLIM</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Fast Charging</h3>
              <p className="text-gray-600">Advanced charging technology powers up your devices in minutes</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Ultra Portable</h3>
              <p className="text-gray-600">Slim design fits perfectly in your pocket or bag</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Safe & Reliable</h3>
              <p className="text-gray-600">Built-in protection against overcharge and short circuit</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Premium Quality Power Banks</h2>
              <p className="text-lg text-gray-600 mb-8">
                Custom branding available. Perfect for corporate gifts, promotions, and retail.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Custom logo printing</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Multiple capacity options</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Bulk order discounts</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center">
              <p className="text-gray-400 text-lg">Product Image</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-green-100 mb-8">
            Contact us for custom quotes and bulk pricing
          </p>
          <a 
            href="mailto:hello@trendsetpromo.com"
            className="inline-block bg-white text-green-600 font-semibold py-4 px-10 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Email Us Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold">POWER SLIM</h3>
              <p className="text-gray-400 mt-2">Your powerbank</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">Contact: hello@trendsetpromo.com</p>
              <p className="text-gray-500 text-sm mt-2">© 2026 POWER SLIM. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
