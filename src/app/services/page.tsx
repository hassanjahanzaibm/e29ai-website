import type { Metadata } from "next";
import CTASection from "../../components/CTASection";
import ServicesGrid from "../../components/ServicesGrid";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — e29AI",
  description:
    "AI agents, chatbots, automation, and dashboards for growing businesses. See how we can help you save time and grow.",
};

const detailedServices = [
  {
    title: "AI Agents & Intelligent Chatbots",
    description:
      "Deploy sophisticated AI agents that understand context, learn from interactions, and handle complex customer service tasks 24/7 — freeing your team to focus on high-value work.",
    benefits: [
      "Instant, accurate responses to customer inquiries",
      "Intelligent lead qualification and routing",
      "Automated CRM updates and ticket management",
      "Seamless integration with your existing tech stack",
      "Continuous learning and improvement from interactions",
    ],
    gradient: "from-green-500 to-cyan-600",
  },
  {
    title: "Workflow & Process Automation",
    description:
      "Transform repetitive, time-consuming tasks into automated workflows. We connect your tools and build intelligent systems that handle the busywork while you focus on growth.",
    benefits: [
      "Automated invoicing, reporting, and data entry",
      "Cross-platform data synchronization",
      "Streamlined client onboarding and project management",
      "Custom workflow triggers and smart notifications",
      "Document processing and approval automation",
    ],
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "Analytics Dashboards & Business Intelligence",
    description:
      "Turn data chaos into clarity. We build custom dashboards that aggregate your business metrics in real-time, giving you the insights you need to make confident decisions fast.",
    benefits: [
      "Real-time KPI tracking and alerts",
      "Beautiful, intuitive visual reports",
      "Multi-source data integration",
      "Predictive analytics and trend analysis",
      "Mobile-friendly access to critical metrics",
    ],
    gradient: "from-blue-500 to-purple-600",
  },
];

export default function ServicesPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50 py-20">
        {/* Animated gradient orbs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-green-400/20 to-cyan-400/20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-tr from-blue-400/20 to-purple-400/20 blur-3xl"></div>
        </div>

        <div className="relative mx-auto w-full max-w-[1200px] px-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500/10 to-cyan-500/10 px-5 py-2 backdrop-blur-sm">
            <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            <p className="text-sm font-semibold text-[#0B1F3A]">Our Services</p>
          </div>
          <h1 className="mt-6 text-5xl font-bold text-[#0B1F3A] md:text-6xl">
            AI-Powered Solutions for
            <br />
            <span className="bg-gradient-to-r from-green-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Midwest Businesses
            </span>
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-[#475569]">
            From intelligent agents and automation to real-time analytics — we build
            cutting-edge AI tools designed specifically for small and medium businesses
            in Chicago and across the Midwest. <strong className="text-[#0B1F3A]">No complexity, just results</strong>.
          </p>
        </div>
      </section>

      <ServicesGrid />

      {/* Detailed services with modern cards */}
      <section className="relative bg-white py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-transparent to-slate-50/50"></div>

        <div className="relative mx-auto w-full max-w-[1200px] px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#0B1F3A] md:text-5xl">
              How we <span className="bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent">accelerate your growth</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[#64748B]">
              Every business is unique. Here's a detailed look at our most impactful AI solutions
              for Midwest SMBs.
            </p>
          </div>

          <div className="mt-16 space-y-8">
            {detailedServices.map((service, index) => (
              <div
                key={service.title}
                className="group relative"
              >
                {/* Gradient border glow effect */}
                <div className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-r ${service.gradient} opacity-0 blur transition duration-500 group-hover:opacity-20`}></div>

                <div className={`relative flex flex-col gap-10 rounded-3xl border border-slate-200/60 bg-white p-10 shadow-xl md:flex-row md:items-center md:p-12 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}>
                  <div className="flex-1">
                    <div className={`mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${service.gradient} bg-clip-text px-4 py-2 text-transparent`}>
                      <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                      <span className="text-sm font-semibold">Premium Service</span>
                    </div>
                    <h3 className="text-3xl font-bold text-[#0B1F3A]">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-[#475569]">
                      {service.description}
                    </p>
                    <Link
                      href="/contact"
                      className={`mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${service.gradient} bg-clip-text px-6 py-3 text-sm font-semibold text-transparent transition-all hover:scale-105`}
                    >
                      Get started with this service
                      <span>→</span>
                    </Link>
                  </div>
                  <div className="flex-1">
                    <div className="rounded-2xl border border-slate-200/60 bg-gradient-to-br from-slate-50 to-white p-8">
                      <p className="mb-6 text-sm font-semibold uppercase tracking-wider text-[#64748B]">What's included</p>
                      <ul className="space-y-4">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-3">
                            <div className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${service.gradient}`}>
                              <svg className="h-3.5 w-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-[#334155]">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Add CTA section */}
          <div className="mt-16 text-center">
            <div className="relative inline-block">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-green-500 via-cyan-500 to-blue-500 opacity-20 blur"></div>
              <Link
                href="/contact"
                className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-cyan-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl"
              >
                Schedule Your Free Consultation
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
            <p className="mt-4 text-sm text-[#64748B]">
              Let's discuss which AI solution is right for your business
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
