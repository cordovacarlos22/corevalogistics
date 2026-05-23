const AVATAR_1 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAryJfFkzo9Op5bfYNLOzBdR6z6Eafp9wKMUc7Fk2lvflABTObf0g7c9fQeUxOmoCD9aI9O6fw3AEipms4WWTCRDDIGBKC6SjWoTyMuQphYVWkj8lSUYQSAF-r8MVryslc1I_dL4P9liiGt29jLRZ4mWWo3q77v1nKbeaX89HrqYMIIAxHDRSS4-c7KvGT2cZTVwa1raxPnw6lsIhRVrZbFYziltpbn6bZIiJ9QgK64WNbRjmt3qJEfaUQ9Sou1knxoHJjK2PedBGS6'
const AVATAR_2 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCBv6yXbofNUTYZY0vyv3JZNbnAbEGHLFD7pGNeiP5HleAncJFLxlRHDFTV13B2u5ab7T4wFrzw-Mx0AymyFtGcoH5V_ZD4jmaSx91N3SGh-agzqs5RnjYVUWjibVC36d3zRYvEeEbMEqDEn0K_utrX2NI5otCP7Zs30T6wWexR86E4fyZuvSjEWp-C0cNTkj2ISWQ1_A-3kTUmyPHjg9gb0LL7XXCYdMtIqTslOk4qmmd_X0iphAbEYMi_soI-a0AdvwXdJtLdMrAu'

const testimonials = [
  {
    quote:
      'Coreva Logistics has been a game-changer for our multi-state operations. Their consistency on the I-10 and I-15 corridors is unmatched, and the tech platform makes our logistics team far more efficient.',
    name: 'Marcus Chen',
    title: 'Director of Logistics',
    company: 'WestCorp Freight',
    avatar: AVATAR_1,
  },
  {
    quote:
      'Moving perishables through Arizona and Nevada heat is high-stakes. Coreva\'s reefer service is impeccable — their real-time temp alerts and on-time record give us total confidence every single run.',
    name: 'Sarah Jenkins',
    title: 'Supply Chain VP',
    company: 'BioLink Pharma',
    avatar: AVATAR_2,
  },
]

const StarIcon = () => (
  <svg className="w-4 h-4 fill-yellow-400 text-yellow-400" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const TestimonialsSection = () => {
  return (
    <section className="py-32 bg-surface-low">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <span className="text-primary font-headline font-bold text-sm tracking-widest uppercase mb-4 block">
              Partner Voices
            </span>
            <h2 className="font-headline text-4xl font-extrabold text-text-base tracking-tight mb-6 leading-tight">
              Built on Trust.<br />Proven in the Field.
            </h2>
            <p className="text-text-muted leading-relaxed">
              Hear from the logistics leaders who rely on our Southwest network every single day
              to keep their supply chains moving.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl ambient-shadow flex flex-col">
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, s) => <StarIcon key={s} />)}
                </div>
                <p className="text-slate-700 italic mb-8 leading-relaxed text-sm flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-100 overflow-hidden flex-shrink-0">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-headline font-bold text-sm text-text-base">{t.name}</p>
                    <p className="text-[10px] text-text-muted uppercase font-bold tracking-widest">
                      {t.title}, {t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
