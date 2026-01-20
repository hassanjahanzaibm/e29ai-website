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

      {/* Stats bar */}
      <section className="border-y border-[#E2E8F0] bg-white py-10">
        <div className="mx-auto grid w-full max-w-[1120px] grid-cols-2 gap-8 px-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-[#16A34A] md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-[#334155]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <ServicesGrid />

      {/* How it works */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-[1120px] px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#16A34A]">
              How It Works
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#0B1F3A] md:text-4xl">
              Simple, transparent, and stress-free
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#334155]">
              We make working with AI easy. Here&apos;s what you can expect.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.title}
                className="group relative rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 transition-all hover:border-[#16A34A]/30 hover:shadow-md"
              >
                <span className="text-3xl font-bold text-[#16A34A]/20 transition-colors group-hover:text-[#16A34A]/40">
                  {step.number}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-[#0B1F3A]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#334155]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/how-it-works"
              className="text-sm font-semibold text-[#16A34A] hover:underline"
            >
              Learn more about our process →
            </Link>
          </div>
        </div>
      </section>

      {/* Social proof / trust */}
      <section className="mx-auto w-full max-w-[1120px] px-6 py-20">
        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-10 shadow-sm md:p-14">
          <div className="flex flex-col items-center gap-10 md:flex-row">
            <div className="flex-1 text-center md:text-left">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#16A34A]">
                Why Businesses Trust Us
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-[#0B1F3A]">
                Built for real businesses, by people who get it.
              </h2>
              <p className="mt-4 leading-relaxed text-[#334155]">
                We&apos;re not a faceless agency. We&apos;re a small team that
                genuinely cares about helping you succeed. We speak your
                language, move fast, and deliver real results.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-block text-sm font-semibold text-[#16A34A] hover:underline"
              >
                Learn more about us →
              </Link>
            </div>
            <div className="w-full flex-1 md:w-auto">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-[#F8FAFC] p-5 text-center">
                  <svg
                    className="mx-auto h-8 w-8 text-[#16A34A]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <p className="mt-2 text-sm font-medium text-[#0B1F3A]">
                    Fast turnaround
                  </p>
                </div>
                <div className="rounded-xl bg-[#F8FAFC] p-5 text-center">
                  <svg
                    className="mx-auto h-8 w-8 text-[#16A34A]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="mt-2 text-sm font-medium text-[#0B1F3A]">
                    Clear pricing
                  </p>
                </div>
                <div className="rounded-xl bg-[#F8FAFC] p-5 text-center">
                  <svg
                    className="mx-auto h-8 w-8 text-[#16A34A]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <p className="mt-2 text-sm font-medium text-[#0B1F3A]">
                    No contracts
                  </p>
                </div>
                <div className="rounded-xl bg-[#F8FAFC] p-5 text-center">
                  <svg
                    className="mx-auto h-8 w-8 text-[#16A34A]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="mt-2 text-sm font-medium text-[#0B1F3A]">
                    Chicago-based
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial placeholder */}
      <section className="bg-[#0B1F3A] py-20">
        <div className="mx-auto w-full max-w-[1120px] px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#16A34A]">
            What People Say
          </p>
          <blockquote className="mt-6">
            <p className="mx-auto max-w-3xl text-2xl font-medium leading-relaxed text-white md:text-3xl">
              &ldquo;e29AI helped us automate our client onboarding process.
              What used to take 3 hours now happens automatically. Game
              changer.&rdquo;
            </p>
          </blockquote>
        <p className="mt-6 text-slate-400">
          — Eric Johnson, Chicago Business Owner
        </p>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
