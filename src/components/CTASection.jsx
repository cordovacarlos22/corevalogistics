const CTASection = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="kinetic-gradient rounded-[3rem] p-14 md:p-24 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <span className="inline-block bg-white/10 border border-white/20 text-blue-200 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
              Start Moving Freight
            </span>
            <h2 className="font-headline text-4xl md:text-6xl font-extrabold mb-6 tracking-tighter leading-tight">
              Ready to move freight?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Join hundreds of shippers and carriers who trust Coreva Logistics to move freight
              across California, Arizona, and Nevada — reliably, every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <a
                href="#quote"
                className="bg-white text-primary font-bold px-10 py-5 rounded-xl shadow-lg hover:bg-blue-50 transition-colors text-sm uppercase tracking-widest min-w-[220px] text-center"
              >
                Request a Quote
              </a>
              <a
                href="tel:8402101449"
                className="bg-transparent border-2 border-white/30 hover:border-white text-white font-bold px-10 py-5 rounded-xl transition-all text-sm uppercase tracking-widest min-w-[220px] text-center"
              >
                Contact Dispatch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
