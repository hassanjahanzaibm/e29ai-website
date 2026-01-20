import type { Metadata } from "next";
import CTASection from "../../components/CTASection";

export const metadata: Metadata = {
  title: "How It Works — e29AI",
  description:
    "Our simple 4-step process: Discovery, proposal, build, and ongoing support. See how easy it is to work with e29AI.",
};

const steps = [
  {
    number: "01",
    title: "Free Discovery Call",
    description:
      "We start with a conversation. Tell us about your business, what's working, and where you're stuck. No pressure, no sales pitch — just a friendly chat to see if we're a good fit.",
    duration: "30 minutes",
  },
  {
    number: "02",
    title: "Custom Proposal",
    description:
      "Within a few days, you'll receive a clear proposal outlining exactly what we'll build, how long it will take, and what it costs. No surprises, no hidden fees.",
    duration: "2-3 days",
  },
  {
    number: "03",
    title: "Build & Launch",
    description:
      "Once you approve, we get to work. You'll have visibility into progress with regular updates. Most projects launch in 2-4 weeks, and we handle all the technical details.",
    duration: "2-4 weeks",
  },
  {
    number: "04",
    title: "Support & Growth",
    description:
      "After launch, we stick around to make sure everything runs smoothly. We measure results, fix any issues, and help you expand when you're ready.",
    duration: "Ongoing",
  },
];

const faqs = [
  {
    question: "Do I need to be technical?",
    answer:
      "Not at all. We handle all the technical work. You just need to tell us about your business and what you want to achieve.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Most projects launch in 2-4 weeks. Many clients start seeing time savings and improved efficiency within the first month.",
  },
  {
    question: "What if I'm not happy with the result?",
    answer:
      "We work closely with you throughout the project and make revisions until you're satisfied. Your success is our success.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes! We offer flexible support packages to help you maintain, update, and expand your AI solutions over time.",
  },
];

export default function HowItWorksPage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-white to-[#F8FAFC] py-16">
        <div className="mx-auto w-full max-w-[1120px] px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#16A34A]">
            How It Works
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-[#0B1F3A] md:text-5xl">
            A simple, stress-free process.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#334155]">
            Working with us is easy. We handle the tech so you can focus on
            running your business.
          </p>
        </div>
      </section>

      {/* Timeline steps */}
      <section className="mx-auto w-full max-w-[1120px] px-6 py-16">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 hidden h-full w-px bg-[#E2E8F0] md:block" />

          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.title} className="relative flex gap-6 md:gap-10">
                {/* Number circle */}
                <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-[#16A34A] text-xl font-bold text-white">
                  {step.number}
                </div>

                {/* Content */}
                <div className="flex-1 rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold text-[#0B1F3A]">
                      {step.title}
                    </h3>
                    <span className="rounded-full bg-[#F8FAFC] px-3 py-1 text-xs font-medium text-[#334155]">
                      {step.duration}
                    </span>
                  </div>
                  <p className="mt-4 leading-relaxed text-[#334155]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-[1120px] px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#16A34A]">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#0B1F3A]">
              Common questions
            </h2>
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6"
              >
                <h3 className="font-semibold text-[#0B1F3A]">{faq.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#334155]">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
