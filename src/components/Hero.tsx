import Link from "next/link";
import BookingButton from "./BookingButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50">
      {/* Animated gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-green-400/20 to-cyan-400/20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-tr from-blue-400/20 to-purple-400/20 blur-3xl"></div>
      </div>

      {/* Geometric pattern overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230B1F3A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col gap-12 px-6 py-16 md:flex-row md:items-center md:py-24 lg:py-32">
        {/* Left content */}
        <div className="flex-1">
          <div className="mb-6 inline-flex items-center gap-3">
            <div className="relative">
              <span className="text-5xl font-bold tracking-tight text-[#0B1F3A] md:text-6xl lg:text-7xl">
                e29AI
              </span>
              <div className="absolute -inset-2 -z-10 rounded-2xl bg-gradient-to-r from-green-500/10 via-cyan-500/10 to-blue-500/10 blur-xl"></div>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500/10 to-cyan-500/10 px-5 py-2 backdrop-blur-sm">
            <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
            <p className="text-sm font-semibold text-[#0B1F3A]">
              Powering Midwest Businesses with AI
            </p>
          </div>
          <h1 className="mt-8 text-4xl font-bold leading-tight text-[#0B1F3A] md:text-5xl lg:text-6xl lg:leading-tight">
            Transform Your Business with
            <br />
            <span className="bg-gradient-to-r from-green-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Intelligent Automation
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#475569]">
            Chicago-based AI solutions for small and medium businesses. We build smart agents,
            chatbots, and automation tools that save time, cut costs, and drive growth —
            <strong className="text-[#0B1F3A]"> no technical expertise required</strong>.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <BookingButton variant="primary" className="shadow-lg shadow-green-500/20" />
            <Link
              href="/services"
              className="group rounded-full border-2 border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-[#0B1F3A] transition-all hover:border-green-500/30 hover:bg-green-50/50 hover:shadow-lg"
            >
              Explore Services
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-[#64748B]">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No commitment</span>
            </div>
          </div>
        </div>

        {/* Right card with modern design */}
        <div className="flex-1">
          <div className="group relative">
            {/* Gradient border effect */}
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-green-500 via-cyan-500 to-blue-500 opacity-20 blur transition duration-500 group-hover:opacity-40"></div>

            <div className="relative rounded-3xl border border-slate-200/60 bg-white/80 p-8 shadow-2xl backdrop-blur-sm md:p-10">
              <div className="mb-2 flex items-center gap-2">
                <div className="rounded-lg bg-gradient-to-br from-green-500 to-cyan-600 p-2">
                  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-lg font-bold text-[#0B1F3A]">
                  Launch in 30 Days
                </p>
              </div>
              <p className="mb-6 text-sm text-[#64748B]">What you'll have up and running</p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-cyan-600">
                    <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="flex-1 text-[#334155]">
                    <strong className="text-[#0B1F3A]">Custom AI Agent</strong> handling customer inquiries and support tasks 24/7
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600">
                    <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="flex-1 text-[#334155]">
                    <strong className="text-[#0B1F3A]">Smart Automation</strong> saving 10+ hours per week on repetitive tasks
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                    <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="flex-1 text-[#334155]">
                    <strong className="text-[#0B1F3A]">Real-time Dashboard</strong> tracking key metrics and performance insights
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-600">
                    <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="flex-1 text-[#334155]">
                    <strong className="text-[#0B1F3A]">Growth Strategy</strong> with a clear roadmap for scaling your AI capabilities
                  </span>
                </li>
              </ul>

              <div className="mt-8 rounded-xl bg-gradient-to-r from-green-50 to-cyan-50 p-4">
                <p className="text-center text-sm font-medium text-[#0B1F3A]">
                  🚀 Most clients see ROI within the first month
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
