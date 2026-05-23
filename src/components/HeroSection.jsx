import { useState } from 'react'
import { supabase } from '../lib/supabase'

const HERO_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDtLI4APNjKXWnjtlivI6fQHHiD4xt0Snn0gl6-ifa2wNHilBsIaMh3n67qeMsOUMZpOsqD1CkFzcRyIafT10yhpPqh24hRI0y2GNwlxD-Lm0xuSfORX0GUUAOTLXknuZu8gGWiAPTPvR5plXE6hjf2QbDkH4JDvqUN0awkZ3UO-Ze5GfVKZXGQPZrgs-5s9p_hvKt7na4rczEykqBZir9VOk4es7eyIhxS9VNy0pzcZV2hp4FBkO-rkoNXPAey3E9kdA9ZkadTOrlO'

const trustBadges = [
  'Carrier Operations',
  'Brokerage Solutions',
  'Insured Logistics',
  'Dedicated Support',
]

const FIELD_CLASS =
  'w-full bg-surface-high rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-text-base font-medium'

const Label = ({ children }) => (
  <label className="text-xs font-bold text-text-muted uppercase tracking-wider block mb-1.5">
    {children}
  </label>
)

const TruckIcon = () => (
  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8zM13 8h3l3 4v5h-3" />
  </svg>
)

const initialForm = {
  name: '',
  email: '',
  phone: '',
  pickup_zip: '',
  delivery_zip: '',
  equipment_type: 'Dry Van',
  shipment_type: 'Full Truckload (FTL)',
}

const QuoteForm = () => {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const set = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.pickup_zip || !form.delivery_zip) {
      setErrorMsg('Please fill in all required fields.')
      setStatus('error')
      return
    }

    setStatus('loading')
    setErrorMsg('')

    const { error } = await supabase.from('quote_requests').insert([
      {
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        phone: form.phone.trim() || null,
        pickup_zip: form.pickup_zip.trim(),
        delivery_zip: form.delivery_zip.trim(),
        equipment_type: form.equipment_type,
        shipment_type: form.shipment_type,
      },
    ])

    if (error) {
      console.error(error)
      setErrorMsg('Something went wrong. Please try again or call us directly.')
      setStatus('error')
      return
    }

    setStatus('success')
    setForm(initialForm)
  }

  if (status === 'success') {
    return (
      <div className="bg-white ambient-shadow rounded-2xl p-8 md:p-10 w-full max-w-md border-t-4 border-green-500 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-headline font-bold text-2xl text-text-base mb-2">Quote Received!</h3>
        <p className="text-sm text-text-muted mb-6 leading-relaxed">
          We&apos;ve got your request. Our team will reach out within 1 business hour with a competitive rate.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-primary font-bold text-sm underline underline-offset-4 hover:text-primary-mid transition-colors"
        >
          Submit another request
        </button>
      </div>
    )
  }

  return (
    <div id="quote" className="bg-white ambient-shadow rounded-2xl p-8 md:p-10 w-full max-w-md border-t-4 border-primary">
      <h3 className="font-headline font-bold text-2xl text-text-base mb-1 tracking-tight">Quick Quote</h3>
      <p className="text-sm text-text-muted mb-6">Instant freight estimate — no account required.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Name *</Label>
            <input
              type="text"
              placeholder="Jane Smith"
              value={form.name}
              onChange={set('name')}
              required
              className={FIELD_CLASS}
            />
          </div>
          <div>
            <Label>Phone</Label>
            <input
              type="tel"
              placeholder="(213) 555-0100"
              value={form.phone}
              onChange={set('phone')}
              className={FIELD_CLASS}
            />
          </div>
        </div>

        <div>
          <Label>Email *</Label>
          <input
            type="email"
            placeholder="you@company.com"
            value={form.email}
            onChange={set('email')}
            required
            className={FIELD_CLASS}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Pickup ZIP *</Label>
            <input
              type="text"
              placeholder="90001"
              value={form.pickup_zip}
              onChange={set('pickup_zip')}
              required
              maxLength={10}
              className={FIELD_CLASS}
            />
          </div>
          <div>
            <Label>Delivery ZIP *</Label>
            <input
              type="text"
              placeholder="85001"
              value={form.delivery_zip}
              onChange={set('delivery_zip')}
              required
              maxLength={10}
              className={FIELD_CLASS}
            />
          </div>
        </div>

        <div>
          <Label>Equipment Type</Label>
          <select
            value={form.equipment_type}
            onChange={set('equipment_type')}
            className={`${FIELD_CLASS} appearance-none cursor-pointer`}
          >
            <option>Dry Van</option>
            <option>Expedited</option>
          </select>
        </div>

        <div>
          <Label>Shipment Type</Label>
          <select
            value={form.shipment_type}
            onChange={set('shipment_type')}
            className={`${FIELD_CLASS} appearance-none cursor-pointer`}
          >
            <option>Full Truckload (FTL)</option>
            <option>Less Than Truckload (LTL)</option>
            <option>Expedited</option>
          </select>
        </div>

        {status === 'error' && (
          <p className="text-xs text-red-500 font-medium">{errorMsg}</p>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full kinetic-gradient text-white font-bold py-4 rounded-xl shadow-lg hover:opacity-90 transition-opacity uppercase tracking-widest text-sm disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {status === 'loading' ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              Sending...
            </>
          ) : (
            'Get Instant Rate'
          )}
        </button>
        <p className="text-[11px] text-center text-slate-400 italic">We respond within 1 business hour</p>
      </form>
    </div>
  )
}

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMG}
          alt="Semi-truck on Southwest desert highway at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/65" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 py-32 pt-40">
        <div className="flex flex-col justify-center">
          <span className="text-blue-400 font-headline font-bold tracking-[0.1em] uppercase text-sm mb-5 drop-shadow-sm">
            Southwest Logistics Ecosystem
          </span>

          <h1 className="font-headline font-extrabold text-5xl md:text-6xl xl:text-7xl text-white leading-[1.05] tracking-tight mb-6">
            Freight Movement.<br />
            <span className="text-blue-400">Simplified.</span>
          </h1>

          <p className="text-lg text-slate-200 max-w-xl mb-10 leading-relaxed font-light">
            Coreva Logistics combines direct carrier operations, trucking capacity, freight brokerage,
            and logistics coordination to move freight with reliability and transparency.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {trustBadges.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
              >
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                <span className="text-white text-sm font-medium">{badge}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mb-14">
            <a
              href="#quote"
              className="kinetic-gradient text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:opacity-90 transition-opacity text-sm uppercase tracking-widest"
            >
              Request a Quote
            </a>
            <a
              href="#services"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-xl transition-all text-sm uppercase tracking-widest"
            >
              Explore Services
            </a>
          </div>

          <div className="glass-panel ambient-shadow rounded-xl p-4 max-w-xs border border-white/30">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse inline-block" />
                <span className="text-xs font-bold text-text-base uppercase tracking-wider">Live Visibility</span>
              </div>
              <span className="text-[10px] text-slate-500 font-mono">ID: CRV-99421</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2.5 rounded-lg">
                <TruckIcon />
              </div>
              <div>
                <p className="text-sm font-bold text-text-base">In-Transit</p>
                <p className="text-xs text-slate-500">I-10 E near Blythe, CA</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center lg:justify-end">
          <QuoteForm />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
