import Link from "next/link";
import BookingButton from "./BookingButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle premium accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] opacity-[0.03]">
          <div className="h-full w-full rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 blur-3xl"></div>
        </div>
      </div>

      {/* Elegant grid pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.015]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230B1F3A' fill-opacity='1'%3E%3Cpath d='M36 30a6 6 0 11-12 0 6 6 0 0112 0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1200px] px-6 py-20 md:py-28 lg:py-36">
        {/* Centered premium layout */}
        <div className="mx-auto max-w-4xl text-center">
          {/* Logo */}
          <div className="mb-8">
            <span className="text-5xl font-bold tracking-tight text-[#0B1F3A] md:text-6xl lg:text-7xl">
              e29AI
            </span>
          </div>

          {/* Premium badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-600"></div>
            <p className="text-sm font-medium text-emerald-900">
              Elite AI Solutions for Midwest Businesses
            </p>
          </div>

          {/* Headline */}
          <h1 className="mb-8 text-4xl font-bold leading-tight tracking-tight text-[#0B1F3A] md:text-5xl lg:text-6xl lg:leading-tight">
            Transform Your Business with
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Intelligent Automation
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
            Chicago-based AI consultancy delivering premium automation solutions.
            We build intelligent agents that save time, reduce costs, and accelerate growth
            for discerning businesses.
          </p>

          {/* CTA Buttons */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
            <BookingButton variant="primary" className="shadow-lg shadow-emerald-500/20" />
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-[#0B1F3A] transition-all hover:border-emerald-200 hover:bg-slate-50"
            >
              Explore Solutions
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Complimentary Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No Obligations</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>30-Day Launch</span>
            </div>
          </div>
        </div>

        {/* Premium features cards */}
        <div className="mx-auto mt-20 grid max-w-5xl gap-6 md:grid-cols-3">
          <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-emerald-200 hover:shadow-xl">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600">
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="mb-2 font-semibold text-[#0B1F3A]">Custom AI Agents</h3>
            <p className="text-sm leading-relaxed text-slate-600">
              Bespoke automation tailored to your business processes
            </p>
          </div>

          <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-emerald-200 hover:shadow-xl">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600">
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="mb-2 font-semibold text-[#0B1F3A]">Analytics & Insights</h3>
            <p className="text-sm leading-relaxed text-slate-600">
              Real-time dashboards tracking your key performance metrics
            </p>
          </div>

          <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-emerald-200 hover:shadow-xl">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600">
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="mb-2 font-semibold text-[#0B1F3A]">Rapid Deployment</h3>
            <p className="text-sm leading-relaxed text-slate-600">
              Live in 30 days with dedicated support and training
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
