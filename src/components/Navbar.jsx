import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'Carrier Division', href: '#divisions' },
  { label: 'Brokerage Division', href: '#divisions' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 glass-panel shadow-sm">
      <div className="flex justify-between items-center h-20 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="font-headline text-2xl font-extrabold tracking-tighter text-navy">
          Coreva Logistics
        </div>

        <div className="hidden lg:flex items-center gap-8 font-headline text-sm font-semibold tracking-tight">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-600 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#quote"
            className="hidden md:inline-flex kinetic-gradient text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity shadow-md"
          >
            Get Quote
          </a>
          <button
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-primary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-slate-100 px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-semibold text-slate-600 hover:text-primary transition-colors border-b border-slate-50 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#quote"
            className="mt-4 block w-full text-center kinetic-gradient text-white px-6 py-3 rounded-lg font-semibold text-sm"
          >
            Get Quote
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
