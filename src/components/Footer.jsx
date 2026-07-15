const serviceLinks = [
  'Full Truckload (FTL)',
  'Temperature Controlled',
  'Expedited Freight',
  'LTL Consolidation',
  'Cross-Docking',
]

const companyLinks = [
  { label: 'Carrier Division', href: '#divisions' },
  { label: 'Brokerage Division', href: '#divisions' },
  { label: 'Technology', href: '#' },
  { label: 'About Coreva', href: '#about' },
  { label: 'Contact Us', href: '#contact' },
]

const legalLinks = [
  'Privacy Policy',
  'Terms of Service',
  'Carrier Agreement',
  'Shipper Agreement',
]

const Footer = () => {
  return (
    <footer className="bg-slate-900 w-full pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-slate-800">
          <div>
            <div className="font-headline font-extrabold text-xl text-white mb-4 tracking-tight">
              Coreva Logistics
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              A modern logistics ecosystem combining carrier operations, trucking capacity, and freight
              brokerage across the Southwest.
            </p>
            <div className="flex gap-3">
              {['LinkedIn', 'Twitter', 'Email'].map((platform) => (
                <button
                  key={platform}
                  aria-label={platform}
                  className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 cursor-pointer transition-colors"
                >
                  {platform === 'LinkedIn' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  )}
                  {platform === 'Twitter' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  )}
                  {platform === 'Email' && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">Connect</h4>
            <div className="space-y-3 mb-8">
              <p className="text-slate-400 text-sm">Los Angeles, CA</p>
              <a href="tel:8402101449" className="block text-slate-400 hover:text-blue-400 transition-colors text-sm">
                (840) 210-1449
              </a>
              <a
                href="mailto:info@corevalogistics.com"
                className="block text-slate-400 hover:text-blue-400 transition-colors text-sm"
              >
                info@corevalogistics.com
              </a>
            </div>
            <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-widest">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((s) => (
                <li key={s}>
                  <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; 2024 Coreva Logistics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
