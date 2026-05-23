const OPS_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDlJilQ4GFPLfR6irKLMgvA74qLuVMssgjvxmDJtHNDBJtZEf4BpFYqSQYQGlrN2xkqBKY2tKwhnvHgxxP0RT89yAjPsvF6MSmt1GcZHuhxIjYvWdCFFM7Qkl8C1wJq722H3YPzaU4bO7DK_BYp0YeexS_h1eFZDo9yVRXcc0xuYWNJai6CNnIjsLie7cAZej4zW30O_DH2I3R6doYPXajcJys5kj93R5uRX_nI4MlxNkBvwEs7cZVa_CJHdDGaKo9edaqdhJb3D-wL'

const steps = [
  {
    number: '1',
    title: 'Submit Your Load',
    description:
      'Provide pickup and delivery details via our quick portal, phone, or direct API integration. No complicated onboarding — we get you moving fast.',
  },
  {
    number: '2',
    title: 'We Assign Dedicated Capacity',
    description:
      'Our routing engine matches your freight to the optimal asset from our dedicated fleet or vetted carrier network — confirmed within 15 minutes.',
  },
  {
    number: '3',
    title: 'Track, Deliver & Document',
    description:
      'Monitor progress in real time via GPS. Digital PODs and invoices are generated automatically upon delivery — no follow-up calls needed.',
  },
]

const OperationsSection = () => {
  return (
    <section className="py-32 bg-navy text-white overflow-hidden relative">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/10 -skew-x-12 translate-x-24 pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-blue-400 font-headline font-bold text-sm tracking-widest uppercase mb-4 block">
              Our Process
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold mb-12 tracking-tight">
              Seamless Logistics in 3 Steps
            </h2>

            <div className="space-y-12">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-8">
                  <div className="flex-shrink-0 w-12 h-12 kinetic-gradient rounded-full flex items-center justify-center font-headline font-extrabold text-xl shadow-lg shadow-primary/30">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="font-headline text-xl font-bold mb-2">{step.title}</h4>
                    <p className="text-slate-400 leading-relaxed text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-14 flex flex-wrap gap-4">
              <a
                href="#quote"
                className="inline-flex items-center gap-2 kinetic-gradient text-white font-bold px-8 py-4 rounded-xl text-sm uppercase tracking-widest hover:opacity-90 transition-opacity shadow-lg"
              >
                Get Started
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 hover:border-white/40 text-white font-bold px-8 py-4 rounded-xl text-sm uppercase tracking-widest transition-all"
              >
                Talk to Dispatch
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <img
              src={OPS_IMG}
              alt="Modern logistics operations center"
              className="rounded-3xl shadow-2xl w-full object-cover"
            />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OperationsSection
