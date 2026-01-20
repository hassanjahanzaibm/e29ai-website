import Link from "next/link";

const services = [
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "AI Agents for Customer Service",
    description:
      "Let AI handle FAQs, triage support tickets, and update your CRM — so you can focus on what matters.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Chatbots for Sales & Support",
    description:
      "Convert website visitors into leads and answer customer questions 24/7, even while you sleep.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Data Analysis & Dashboards",
    description:
      "See your key numbers at a glance with clear, real-time dashboards built for business owners.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Repeat-Task Automation",
    description:
      "Stop doing the same thing twice. We automate admin, reporting, invoicing, and scheduling.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Client Onboarding Automation",
    description:
      "Streamline new client intake with automated forms, reminders, and follow-up sequences.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    title: "Marketing Campaigns & Content",
    description:
      "Generate emails, social posts, and ad content faster with AI-powered workflows.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="mx-auto w-full max-w-[1120px] px-6 py-20">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#16A34A]">
          What We Do
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-[#0B1F3A] md:text-4xl">
          Practical AI solutions for real businesses
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-[#334155]">
          We build tools that save you time, reduce busywork, and help your
          business grow — without the tech headaches.
        </p>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="group rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm transition-all hover:border-[#16A34A]/30 hover:shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#16A34A]/10 text-[#16A34A] transition-colors group-hover:bg-[#16A34A] group-hover:text-white">
              {service.icon}
            </div>
            <h3 className="mt-5 text-lg font-semibold text-[#0B1F3A]">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#334155]">
              {service.description}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link
          href="/services"
          className="inline-flex rounded-full border-2 border-[#E2E8F0] bg-white px-6 py-3 text-sm font-semibold text-[#0B1F3A] transition-all hover:border-[#16A34A] hover:bg-[#16A34A]/5"
        >
          View All Services
        </Link>
      </div>
    </section>
  );
}
