import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-gray-600 tracking-tight">
            P<span className="inline-flex items-center justify-center w-12 h-12 mx-1">
              <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                <line x1="12" y1="6" x2="12" y2="12" stroke="currentColor" strokeWidth="2"/>
                <line x1="12" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </span>WER SLIM
          </h1>
          <div className="bg-green-500 text-white py-2 px-8 mt-2 inline-block rounded">
            <p className="text-lg">Your powerbank</p>
          </div>
        </div>

        {/* Cable and plug illustration */}
        <div className="mt-12">
          <svg width="300" height="100" viewBox="0 0 300 100" className="mx-auto">
            {/* Cable */}
            <line x1="50" y1="50" x2="200" y2="50" stroke="#9CA3AF" strokeWidth="4"/>
            {/* Plug outline */}
            <rect x="200" y="35" width="40" height="30" fill="none" stroke="#9CA3AF" strokeWidth="3" rx="2"/>
            <rect x="240" y="40" width="15" height="20" fill="none" stroke="#9CA3AF" strokeWidth="3"/>
            {/* Prongs */}
            <line x1="255" y1="45" x2="270" y2="45" stroke="#9CA3AF" strokeWidth="3"/>
            <line x1="255" y1="55" x2="270" y2="55" stroke="#9CA3AF" strokeWidth="3"/>
          </svg>
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Request a Quote
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
