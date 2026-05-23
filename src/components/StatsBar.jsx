const stats = [
  { value: '98%', label: 'On-Time Delivery' },
  { value: '50+', label: 'Loads Per Month' },
  { value: '4+', label: 'Dedicated Assets' },
  { value: '24/7', label: 'Live Dispatch' },
]

const StatsBar = () => {
  return (
    <section className="bg-navy py-14">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`text-center md:text-left ${i > 0 ? 'md:border-l md:border-white/10 md:pl-8' : ''}`}
          >
            <div className="font-headline text-4xl font-extrabold text-white mb-1">{stat.value}</div>
            <div className="text-blue-400 text-xs font-bold uppercase tracking-widest">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsBar
