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
      "Smart AI agents that handle FAQs, triage support tickets, and update your CRM automatically — freeing your team to focus on growth.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Intelligent Chatbots",
    description:
      "Convert website visitors into qualified leads with AI chatbots that understand context, answer questions 24/7, and route to the right team.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Data Analysis & Insights",
    description:
      "Transform raw data into actionable insights with custom dashboards that help Midwest businesses make smarter, faster decisions.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Workflow Automation",
    description:
      "Eliminate repetitive tasks with intelligent automation that handles admin work, reporting, invoicing, and scheduling — so you don't have to.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Document Processing",
    description:
      "Automate document analysis, data extraction, and report generation — turning hours of manual work into minutes of automated efficiency.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Process Automation",
    description:
      "Streamline client onboarding, project management, and business workflows with AI-powered automation that scales with your business.",
  },
];

export default function ServicesGrid() {
  const gradients = [
    "from-green-500 to-cyan-600",
    "from-cyan-500 to-blue-600",
    "from-blue-500 to-purple-600",
    "from-purple-500 to-pink-600",
    "from-pink-500 to-rose-600",
    "from-orange-500 to-amber-600"
  ];

  return (
    <section className="relative mx-auto w-full max-w-[1200px] px-6 py-24">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500/10 to-cyan-500/10 px-5 py-2 backdrop-blur-sm">
          <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
          <p className="text-sm font-semibold text-[#0B1F3A]">What We Do</p>
        </div>
        <h2 className="mt-6 text-4xl font-bold text-[#0B1F3A] md:text-5xl">
          AI-Powered Solutions for
          <br />
          <span className="bg-gradient-to-r from-green-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Modern Businesses
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-[#64748B]">
          We build intelligent tools that save time, eliminate busywork, and accelerate growth —
          with no technical complexity on your end.
        </p>
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const gradient = gradients[index % gradients.length];
          return (
            <div
              key={service.title}
              className="group relative"
            >
              {/* Gradient border glow */}
              <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${gradient} opacity-0 blur transition duration-500 group-hover:opacity-30`}></div>

              <div className="relative h-full rounded-2xl border border-slate-200/60 bg-white p-8 shadow-lg transition-all hover:shadow-2xl">
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} shadow-lg transition-transform group-hover:scale-110`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-bold text-[#0B1F3A]">
                  {service.title}
                </h3>
                <p className="mt-4 leading-relaxed text-[#64748B]">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-14 text-center">
        <div className="relative inline-block">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-green-500 to-cyan-600 opacity-20 blur"></div>
          <Link
            href="/services"
            className="relative inline-flex items-center gap-2 rounded-full border-2 border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-[#0B1F3A] transition-all hover:border-green-500/30 hover:bg-green-50/50 hover:shadow-lg"
          >
            Explore All Services
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
