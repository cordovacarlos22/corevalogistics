const reasons = [
  {
    icon: (
      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8zM13 8h3l3 4v5h-3" />
      </svg>
    ),
    title: 'Asset-Based Foundation',
    description:
      'Unlike pure brokerages, Coreva operates its own fleet — ensuring reliable capacity even when the spot market tightens.',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Full Shipment Visibility',
    description:
      'GPS-tracked assets and automated milestone alerts keep every stakeholder informed from pickup to delivery.',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Carrier & Shipper First',
    description:
      'Built to serve both sides of freight — transparent pricing, fast carrier payment, and a mutual partnership model.',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Southwest Specialists',
    description:
      'Deep knowledge of desert routes, seasonal demand, and regional infrastructure across CA, AZ, and NV.',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Modern Digital Operations',
    description:
      'Digital BOLs, automated PODs, online invoicing, and a client portal built for speed and efficiency.',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: '24/7 Dispatch Coverage',
    description:
      'A dedicated operations team available around the clock for every shipment, every lane, every day of the year.',
  },
]

const WhyCorevaSection = () => {
  return (
    <section id="about" className="py-32 bg-surface-low">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-primary font-headline font-bold text-sm tracking-widest uppercase mb-4 block">
              Why Coreva?
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-text-base tracking-tight mb-6 leading-tight">
              More Than a Carrier.<br />
              <span className="text-primary">More Than a Broker.</span>
            </h2>
            <p className="text-text-muted leading-relaxed mb-8 max-w-lg">
              Coreva was built to solve the reliability gap between asset-heavy carriers and flexible
              brokerages. We combine the best of both worlds into a single, accountable logistics
              partner — so you always know who is responsible for your freight.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 kinetic-gradient text-white font-bold px-8 py-4 rounded-xl text-sm uppercase tracking-widest hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
              >
                Learn Our Story
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-surface-high text-text-base font-bold px-8 py-4 rounded-xl text-sm hover:bg-surface-highest transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((reason, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl ambient-shadow hover:bg-surface transition-colors group"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  {reason.icon}
                </div>
                <h4 className="font-headline font-bold text-sm text-text-base mb-2">{reason.title}</h4>
                <p className="text-text-muted text-xs leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyCorevaSection
