const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8zM13 8h3l3 4v5h-3" />
      </svg>
    ),
    title: 'Full Truckload (FTL)',
    description:
      'Dedicated capacity for large shipments. Direct door-to-door transit across CA, AZ, and NV with zero handling and full accountability.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: 'Less Than Truckload (LTL)',
    description:
      'Cost-effective shipping for smaller volumes through our Southwest regional consolidation network. Pay only for the space you use.',
  },
  // {
  //   icon: (
  //     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
  //         d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  //     </svg>
  //   ),
  //   title: 'Temperature Controlled',
  //   description:
  //     'Specialized reefer units for perishables and pharmaceuticals. Precise climate management across desert heat with real-time temp monitoring.',
  // },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Expedited Freight',
    description:
      'Time-critical delivery with team drivers and priority routing. Get freight from Los Angeles to Phoenix or Las Vegas in record time.',
  },
  // {
  //   icon: (
  //     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
  //         d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
  //     </svg>
  //   ),
  //   title: 'Cross-Docking',
  //   description:
  //     'Strategic transloading in the Inland Empire. Streamline distribution and minimize warehouse dwell time on high-frequency Southwest lanes.',
  // },
]

const ArrowIcon = () => (
  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
)

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-headline font-bold text-sm tracking-widest uppercase mb-4 block">
            Core Capabilities
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-text-base tracking-tight mb-6">
            Tailored Freight Solutions
          </h2>
          <p className="text-text-muted leading-relaxed">
            Every shipment has unique requirements. We provide the right equipment and expertise for
            the Southwest&apos;s most demanding shippers — backed by both our own fleet and a vetted carrier network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-white p-10 rounded-2xl ambient-shadow hover:-translate-y-2 transition-all duration-300 border-b-4 border-transparent hover:border-primary"
            >
              <div className="text-primary mb-6">{service.icon}</div>
              <h3 className="font-headline font-bold text-xl text-text-base mb-4">{service.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-6">{service.description}</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest hover:gap-3 transition-all"
              >
                Learn More <ArrowIcon />
              </a>
            </div>
          ))}

          <div className="kinetic-gradient p-10 rounded-2xl shadow-xl flex flex-col justify-center text-white">
            <h3 className="font-headline font-bold text-2xl mb-4">Ready to Quote?</h3>
            <p className="text-blue-100 text-sm mb-8 leading-relaxed">
              Get precise pricing for your Southwest regional lanes in minutes.
            </p>
            <a
              href="#quote"
              className="inline-flex items-center gap-2 bg-white text-primary font-bold py-3 px-6 rounded-lg text-sm uppercase tracking-widest hover:bg-blue-50 transition-colors self-start"
            >
              Start Now <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
