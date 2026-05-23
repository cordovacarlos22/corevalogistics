const CheckIcon = ({ color = 'text-blue-400' }) => (
  <svg className={`w-3 h-3 ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
)

const carrierFeatures = [
  'Dedicated Fleet Capacity',
  'CA, AZ & NV Core Lanes',
  'GPS-Tracked Assets',
  'Professional CDL Drivers',
  'Owner-Operator Network',
]

const brokerageFeatures = [
  'Vetted Carrier Network',
  'Competitive Spot & Contract Rates',
  'Dedicated Account Manager',
  'Real-Time Load Tracking',
  'Digital POD & Invoicing',
]

const DivisionsSection = () => {
  return (
    <section id="divisions" className="py-32 bg-surface-low">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-headline font-bold text-sm tracking-widest uppercase mb-4 block">
            Two Divisions. One Mission.
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-text-base tracking-tight mb-4">
            The Coreva Logistics Ecosystem
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto leading-relaxed">
            Whether you need dedicated carrier capacity or flexible freight brokerage, Coreva delivers
            both under one trusted name — with full accountability at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Carrier Division */}
          <div className="bg-navy rounded-3xl p-10 md:p-12 text-white relative overflow-hidden hover:-translate-y-1 transition-all duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/15 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-600/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl pointer-events-none" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8zM13 8h3l3 4v5h-3" />
                </svg>
              </div>
              <span className="text-blue-400 font-headline text-xs font-bold uppercase tracking-widest mb-3 block">
                Division 01
              </span>
              <h3 className="font-headline font-bold text-3xl mb-4">Carrier Operations</h3>
              <p className="text-slate-300 leading-relaxed mb-8 text-sm">
                Dedicated transportation capacity, fleet operations, and trucking services across key
                Southwest freight lanes. Our asset-based approach means consistent, reliable service
                you can count on — even when the spot market tightens.
              </p>
              <ul className="space-y-3 mb-10">
                {carrierFeatures.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <CheckIcon color="text-blue-400" />
                    </div>
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#carrier"
                className="inline-flex items-center gap-2 bg-white text-navy font-bold px-8 py-4 rounded-xl text-sm uppercase tracking-widest hover:bg-blue-50 transition-colors"
              >
                Explore Carrier Division
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Brokerage Division */}
          <div className="bg-white ambient-shadow rounded-3xl p-10 md:p-12 relative overflow-hidden hover:-translate-y-1 transition-all duration-300 border border-slate-100">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <span className="text-primary font-headline text-xs font-bold uppercase tracking-widest mb-3 block">
                Division 02
              </span>
              <h3 className="font-headline font-bold text-3xl text-text-base mb-4">Brokerage Solutions</h3>
              <p className="text-text-muted leading-relaxed mb-8 text-sm">
                Flexible freight coordination, shipper support, and scalable capacity solutions through
                a trusted carrier network. Access competitive rates on thousands of lanes with complete
                transparency and a dedicated point of contact.
              </p>
              <ul className="space-y-3 mb-10">
                {brokerageFeatures.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckIcon color="text-primary" />
                    </div>
                    <span className="text-text-muted">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#brokerage"
                className="inline-flex items-center gap-2 kinetic-gradient text-white font-bold px-8 py-4 rounded-xl text-sm uppercase tracking-widest hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
              >
                Explore Brokerage Division
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DivisionsSection
