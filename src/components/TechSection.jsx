const TechSection = () => {
  return (
    <section className="py-32 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-20">
          <span className="text-primary font-headline font-bold text-sm tracking-widest uppercase mb-4 block">
            Tech-Enabled Freight
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-text-base tracking-tight">
            Total Visibility at Your Fingertips
          </h2>
          <p className="text-text-muted mt-4 max-w-xl mx-auto leading-relaxed">
            No more check calls. No more chasing paperwork. Just real-time data, automated alerts,
            and instant digital documents from pickup to delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Real-Time Tracking */}
          <div className="bg-surface-high rounded-3xl p-8 flex flex-col justify-between min-h-[420px]">
            <div>
              <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center ambient-shadow text-primary mb-8">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="font-headline text-2xl font-bold text-text-base mb-4">Real-Time Tracking</h4>
              <p className="text-text-muted text-sm mb-8 leading-relaxed">
                GPS-enabled assets provide precise location tracking down to the city block level,
                accessible through our client portal 24/7 with no check calls required.
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 ambient-shadow rotate-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-bold flex-shrink-0">
                  AZ
                </div>
                <div className="flex-1">
                  <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-primary rounded-full" />
                  </div>
                </div>
              </div>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">
                ETA: 4h 12m to Phoenix, AZ
              </p>
            </div>
          </div>

          {/* Automated Alerts */}
          <div className="bg-navy rounded-3xl p-8 flex flex-col justify-between min-h-[420px] text-white">
            <div>
              <div className="bg-blue-600 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg mb-8">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h4 className="font-headline text-2xl font-bold mb-4">Automated Alerts</h4>
              <p className="text-blue-200 text-sm mb-8 leading-relaxed">
                Proactive status updates via SMS or Email for every milestone — pickup confirmation,
                transit updates, ETA changes, and delivery confirmation.
              </p>
            </div>
            <div className="space-y-2">
              <div className="bg-white/10 p-3 rounded-lg flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0 inline-block" />
                <span className="text-[11px] font-medium">Shipment Picked Up — Los Angeles, CA</span>
              </div>
              <div className="bg-white/10 p-3 rounded-lg flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0 inline-block" />
                <span className="text-[11px] font-medium">In-Transit — Barstow, CA</span>
              </div>
              <div className="bg-white/10 p-3 rounded-lg flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0 inline-block" />
                <span className="text-[11px] font-medium">ETA Update — Arriving in 4h 12m</span>
              </div>
            </div>
          </div>

          {/* Digital Paperwork */}
          <div className="bg-surface-high rounded-3xl p-8 flex flex-col justify-between min-h-[420px]">
            <div>
              <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center ambient-shadow text-primary mb-8">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="font-headline text-2xl font-bold text-text-base mb-4">Digital Paperwork</h4>
              <p className="text-text-muted text-sm mb-8 leading-relaxed">
                Access digital PODs, Invoices, and BOLs seconds after delivery. Signed, verified,
                and stored automatically — no waiting for mail or manual filing.
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 ambient-shadow -rotate-1 border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-text-base">POD_99421_SIG.pdf</p>
                  <p className="text-[9px] text-slate-400 mt-0.5">Verified BOL & Digital Signature</p>
                </div>
                <div className="ml-auto">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechSection
