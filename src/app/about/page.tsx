import type { Metadata } from "next";
import CTASection from "../../components/CTASection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — e29AI",
  description:
    "e29AI is your AI Tech Buddy. We help growing businesses save time and work smarter with practical AI solutions. Based in Chicago.",
};

const values = [
  {
    title: "Plain English, not tech speak",
    description:
      "We explain things in a way that makes sense. No jargon, no buzzwords — just clear communication about what we're building and why.",
  },
  {
    title: "Results over features",
    description:
      "We don't build technology for its own sake. Every solution we create is designed to save you time, reduce costs, or grow your revenue.",
  },
  {
    title: "Speed matters",
    description:
      "Most projects launch in 2-4 weeks, not months. We know you have a business to run, so we move fast without cutting corners.",
  },
  {
    title: "Partners, not vendors",
    description:
      "We're not here for one-off projects. We want to understand your business and grow with you over time as your needs evolve.",
  },
];

const tools = [
  "OpenAI & GPT",
  "Make.com",
  "Zapier",
  "Next.js",
  "Vercel",
  "Airtable",
  "HubSpot",
  "Slack",
  "Google Workspace",
  "Twilio",
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-white to-[#F8FAFC] py-16">
        <div className="mx-auto w-full max-w-[1120px] px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#16A34A]">
            About e29AI
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-[#0B1F3A] md:text-5xl">
            Your AI Tech Buddy
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#334155]">
            We believe every business deserves access to great technology —
            not just the big guys. e29AI exists to make AI practical, affordable,
            and actually useful for growing businesses.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto w-full max-w-[1120px] px-6 py-16">
        <div className="rounded-2xl bg-[#0B1F3A] p-10 md:p-14">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            Our mission
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-300">
            To help small and growing businesses compete with the big players by
            giving them access to the same AI tools and automation — without the
            enterprise price tag or complexity. We want to be the tech partner
            every business owner wishes they had.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-[1120px] px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#16A34A]">
              How We Work
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#0B1F3A]">
              What makes us different
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-8"
              >
                <h3 className="text-xl font-semibold text-[#0B1F3A]">
                  {value.title}
                </h3>
                <p className="mt-4 leading-relaxed text-[#334155]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools we use */}
      <section className="mx-auto w-full max-w-[1120px] px-6 py-16">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#16A34A]">
            Technology
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[#0B1F3A]">
            Tools we work with
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#334155]">
            We use industry-leading platforms to build reliable, scalable solutions
            for your business.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-sm font-medium text-[#334155]"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* Location */}
      <section className="mx-auto w-full max-w-[1120px] px-6 pb-16">
        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-10 text-center shadow-sm">
          <h2 className="text-2xl font-semibold text-[#0B1F3A]">
            Based in Chicago
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#334155]">
            We&apos;re a Chicago-area team that understands the hustle of running
            a local business. We&apos;re friendly, responsive, and always happy
            to meet for coffee.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex text-sm font-semibold text-[#16A34A] hover:underline"
          >
            Get in touch →
          </Link>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
