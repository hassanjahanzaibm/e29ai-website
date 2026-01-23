import CTASection from "../components/CTASection";
import Hero from "../components/Hero";
import ServicesGrid from "../components/ServicesGrid";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We learn about your business, goals, and pain points. No sales pitch — just a conversation.",
  },
  {
    number: "02",
    title: "Custom Plan",
    description:
      "We identify the best AI opportunities and create a clear plan tailored to your needs.",
  },
  {
    number: "03",
    title: "Build & Launch",
    description:
      "We build your solution in 2-4 weeks. You stay in the loop every step of the way.",
  },
  {
    number: "04",
    title: "Grow Together",
    description:
      "We measure results, fine-tune performance, and help you scale what works.",
  },
];

const stats = [
  { value: "2-4", label: "weeks to launch" },
  { value: "10+", label: "hours saved weekly" },
  { value: "24/7", label: "AI availability" },
  { value: "100%", label: "satisfaction focus" },
];

export default function HomePage() {
  return (
    <div>
      <Hero />

      {/* Stats bar with modern gradient */}
      <section className="relative border-y border-slate-200/60 bg-gradient-to-r from-white via-slate-50 to-white py-12">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-cyan-500/5 to-blue-500/5"></div>
        <div className="relative mx-auto grid w-full max-w-[1200px] grid-cols-2 gap-8 px-6 md:grid-cols-4">
          {stats.map((stat, index) => {
            const gradients = [
              "from-green-500 to-cyan-600",
              "from-cyan-500 to-blue-600",
              "from-blue-500 to-purple-600",
              "from-purple-500 to-pink-600"
            ];
            return (
              <div key={stat.label} className="group text-center">
                <div className="inline-block rounded-2xl bg-white px-6 py-4 shadow-lg shadow-slate-200/50 transition-all hover:scale-105 hover:shadow-xl">
                  <p className={`bg-gradient-to-r ${gradients[index]} bg-clip-text text-4xl font-bold text-transparent md:text-5xl`}>
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm font-medium text-[#64748B]">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <ServicesGrid />

      {/* How it works with modern design */}
      <section className="relative bg-white py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-transparent to-slate-50/50"></div>
        <div className="relative mx-auto w-full max-w-[1200px] px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500/10 to-cyan-500/10 px-5 py-2">
              <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              <p className="text-sm font-semibold text-[#0B1F3A]">How It Works</p>
            </div>
            <h2 className="mt-6 text-4xl font-bold text-[#0B1F3A] md:text-5xl">
              From idea to impact in
              <span className="bg-gradient-to-r from-green-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent"> four simple steps</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[#64748B]">
              We've streamlined the process to get your AI solution up and running fast — no complexity, no confusion.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const gradients = [
                "from-green-500 to-cyan-600",
                "from-cyan-500 to-blue-600",
                "from-blue-500 to-purple-600",
                "from-purple-500 to-pink-600"
              ];
              return (
                <div
                  key={step.title}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r opacity-0 blur transition duration-500 group-hover:opacity-20" style={{backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`}}></div>
                  <div className="relative h-full rounded-2xl border border-slate-200/60 bg-white p-8 shadow-lg transition-all hover:shadow-xl">
                    <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${gradients[index]} shadow-lg`}>
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#0B1F3A]">
                      {step.title}
                    </h3>
                    <p className="mt-4 leading-relaxed text-[#64748B]">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/how-it-works"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500/10 to-cyan-500/10 px-6 py-3 text-sm font-semibold text-[#0B1F3A] transition-all hover:from-green-500/20 hover:to-cyan-500/20"
            >
              Learn more about our process
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Social proof / trust with modern cards */}
      <section className="mx-auto w-full max-w-[1200px] px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-gradient-to-br from-white via-slate-50/50 to-cyan-50/30 p-12 shadow-2xl md:p-16">
          {/* Gradient orb background */}
          <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-br from-green-400/10 to-cyan-400/10 blur-3xl"></div>

          <div className="relative flex flex-col items-center gap-12 md:flex-row">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <p className="text-sm font-semibold text-[#0B1F3A]">Why Midwest Businesses Trust Us</p>
              </div>
              <h2 className="mt-6 text-4xl font-bold text-[#0B1F3A]">
                Built for real businesses,<br />by people who <span className="bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent">understand your challenges</span>.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[#475569]">
                We're not a faceless tech company. We're a Chicago-based team that genuinely cares about helping
                small and medium businesses succeed with AI. We speak your language, move fast, and deliver
                measurable results.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500/10 to-cyan-500/10 px-6 py-3 text-sm font-semibold text-[#0B1F3A] transition-all hover:from-green-500/20 hover:to-cyan-500/20"
              >
                Learn more about us
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
            <div className="w-full flex-1 md:w-auto">
              <div className="grid grid-cols-2 gap-4">
                <div className="group rounded-2xl border border-slate-200/60 bg-white/80 p-6 text-center shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl">
                  <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-cyan-600 shadow-lg">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-sm font-bold text-[#0B1F3A]">2-4 Week Launch</p>
                </div>
                <div className="group rounded-2xl border border-slate-200/60 bg-white/80 p-6 text-center shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl">
                  <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-sm font-bold text-[#0B1F3A]">Transparent Pricing</p>
                </div>
                <div className="group rounded-2xl border border-slate-200/60 bg-white/80 p-6 text-center shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl">
                  <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <p className="text-sm font-bold text-[#0B1F3A]">No Lock-in</p>
                </div>
                <div className="group rounded-2xl border border-slate-200/60 bg-white/80 p-6 text-center shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl">
                  <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 shadow-lg">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-sm font-bold text-[#0B1F3A]">Chicago Based</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial with modern gradient design */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 py-24">
        {/* Animated gradient orbs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-green-500/20 to-cyan-500/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-3xl"></div>
        </div>

        <div className="relative mx-auto w-full max-w-[1200px] px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 backdrop-blur-sm">
            <svg className="h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <p className="text-sm font-semibold text-white/90">Client Success Story</p>
          </div>

          <blockquote className="mt-10">
            <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl md:p-14">
              <svg className="mx-auto h-10 w-10 text-green-400/50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="mx-auto mt-6 max-w-3xl text-2xl font-medium leading-relaxed text-white md:text-3xl">
                e29AI transformed our client onboarding process. What used to take our team
                <span className="text-green-400"> 3 hours now happens automatically in minutes</span>.
                The AI agent they built handles everything from intake forms to scheduling — it's been a complete game changer for our business.
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-green-400 to-cyan-500"></div>
                <div className="text-left">
                  <p className="font-semibold text-white">Eric Johnson</p>
                  <p className="text-sm text-slate-300">Operations Director, Chicago SMB</p>
                </div>
              </div>
            </div>
          </blockquote>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
