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
    title: "AI Agents & Chatbots",
    description:
      "Custom AI that works for your business 24/7. Handle customer questions, qualify leads, and automate repetitive support tasks.",
    benefits: [
      "Answer customer questions instantly",
      "Qualify leads while you sleep",
      "Reduce support workload by 50%+",
      "Integrate with your existing tools",
    ],
  },
  {
    title: "Business Automation",
    description:
      "Stop doing the same tasks over and over. We connect your tools and automate workflows so your team can focus on what matters.",
    benefits: [
      "Automate invoicing and reporting",
      "Sync data across platforms",
      "Streamline client onboarding",
      "Eliminate manual data entry",
    ],
  },
  {
    title: "Data Dashboards & Analytics",
    description:
      "See your key numbers at a glance. We build clear, real-time dashboards that help you make better decisions faster.",
    benefits: [
      "Track KPIs in real-time",
      "Visual reports you can understand",
      "Connect all your data sources",
      "Make data-driven decisions",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-white to-[#F8FAFC] py-16">
        <div className="mx-auto w-full max-w-[1120px] px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#16A34A]">
            Our Services
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-[#0B1F3A] md:text-5xl">
            AI solutions built for your business.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#334155]">
            From AI agents and chatbots to automation and dashboards — we build
            practical tools that help you grow without the complexity.
          </p>
        </div>
      </section>

      <ServicesGrid />

      {/* Detailed services */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-[1120px] px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-[#0B1F3A]">
              How we help you grow
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#334155]">
              Every business is different. Here&apos;s a deeper look at our most
              popular services.
            </p>
          </div>

          <div className="mt-14 space-y-12">
            {detailedServices.map((service, index) => (
              <div
                key={service.title}
                className={`flex flex-col gap-8 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-8 md:flex-row md:items-center md:p-10 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-[#0B1F3A]">
                    {service.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-[#334155]">
                    {service.description}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex text-sm font-semibold text-[#16A34A] hover:underline"
                  >
                    Learn more →
                  </Link>
                </div>
                <div className="flex-1">
                  <ul className="space-y-3">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <svg
                          className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#16A34A]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-[#334155]">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
