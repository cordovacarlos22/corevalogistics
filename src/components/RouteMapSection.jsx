const MAP_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuANZXeb5IRlfXOSDAzoxU3rIq6waRpWlShr7Hc7zfTFQYvBe7jWJU03F5AnPJGSn3jcKAMotZ7-lshUbdFoH81XsH77k2fmecXhM6PK416xWYAxQSuPs-a1ezGz7qk0cGY-tnpVlxpD_8YJsNaD0dQt-if27uw063NN712TolNNqnSCMNOAPBX3e6LxqaLRdKga3xe-y0nv0TTvMB05Ww6oF18iwW17HU9LdUUQ77mA2sGcYruEKOeDKFdaX-b-WecnIAsqvmIDfj1j'

const lanes = [
  {
    title: 'Daily lanes between LA ↔ Phoenix',
    description:
      'High-frequency equipment cycling ensures freight moves between Southern California and Arizona without waiting for a backhaul.',
  },
  {
    title: 'Frequent runs LA ↔ Las Vegas',
    description:
      'Dedicated capacity for the growing Nevada market with sub-24 hour transit times from the LA Basin port regions.',
  },
  {
    title: 'Full CA, AZ & NV Coverage',
    description:
      'Comprehensive Southwest coverage with localized dispatch knowledge of desert routes, seasonal traffic, and port congestion.',
  },
]

const RouteMapSection = () => {
  return (
    <section className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-primary font-headline font-bold text-sm tracking-widest uppercase mb-4 block">
              Strategic Network
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-text-base tracking-tight leading-tight">
              Dominate the Southwest Freight Lane
            </h2>
          </div>
          <p className="max-w-sm text-text-muted pb-1 leading-relaxed">
            We&apos;ve built our infrastructure around the high-frequency movement between Los Angeles,
            Phoenix, and Las Vegas — the most critical artery of West Coast commerce.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 rounded-3xl overflow-hidden relative ambient-shadow bg-surface-high aspect-video md:h-100">
            <img
              src={MAP_IMG}
              alt="Southwest freight route map showing connections between LA, Las Vegas, and Phoenix"
              className="w-full h-full object-cover mix-blend-multiply opacity-50"
            />
            <div className="absolute inset-0 p-10 flex flex-col justify-between pointer-events-none">
              <div className="flex justify-between items-start">
                <div className="bg-white px-4 py-2.5 rounded-lg shadow-lg">
                  <p className="text-[10px] font-bold text-slate-400 uppercase mb-0.5">Gateway</p>
                  <p className="font-headline font-bold text-text-base text-sm">Los Angeles, CA</p>
                </div>
                <div className="bg-primary text-white px-4 py-2.5 rounded-lg shadow-lg translate-x-4 translate-y-20">
                  <p className="text-[10px] font-bold text-blue-200 uppercase mb-0.5">Hub</p>
                  <p className="font-headline font-bold text-sm">Las Vegas, NV</p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-primary text-white px-4 py-2.5 rounded-lg shadow-lg">
                  <p className="text-[10px] font-bold text-blue-200 uppercase mb-0.5">Destination</p>
                  <p className="font-headline font-bold text-sm">Phoenix, AZ</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-10">
            {lanes.map((lane, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl ambient-shadow flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-headline font-bold text-lg text-text-base mb-2">{lane.title}</h4>
                  <p className="text-text-muted text-sm leading-relaxed">{lane.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default RouteMapSection
