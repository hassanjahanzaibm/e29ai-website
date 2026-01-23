import Link from "next/link";

const services = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "AI Agents for Customer Service",
    description:
      "Intelligent agents that handle customer inquiries, triage support tickets, and update your CRM automatically — freeing your team for strategic work.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Intelligent Chatbots",
    description:
      "Convert visitors into qualified leads with contextual AI chatbots that provide instant answers and seamlessly route to your team.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Business Analytics",
    description:
      "Real-time dashboards that transform complex data into clear, actionable insights for faster, smarter decision-making.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Workflow Automation",
    description:
      "Eliminate repetitive tasks with intelligent automation for reporting, invoicing, scheduling, and administrative processes.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Document Intelligence",
    description:
      "Automated document analysis and data extraction that converts hours of manual work into minutes of precise, efficient processing.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Process Optimization",
    description:
      "Streamlined client onboarding and project management workflows that scale seamlessly as your business grows.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="relative bg-slate-50 py-24">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div className="text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-600"></div>
            <p className="text-sm font-medium text-emerald-900">Premium AI Solutions</p>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-[#0B1F3A] md:text-5xl">
            Tailored Automation for
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Discerning Businesses
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            Sophisticated AI solutions designed to elevate your operations,
            reduce costs, and accelerate growth.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-emerald-200 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 transition-transform group-hover:scale-110">
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <h3 className="mb-3 text-lg font-semibold text-[#0B1F3A]">
                  {service.title}
                </h3>
                <p className="leading-relaxed text-slate-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-[#0B1F3A] transition-all hover:border-emerald-200 hover:bg-slate-50 hover:shadow-lg"
          >
            View All Solutions
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
