import Link from "next/link";
import BookingButton from "./BookingButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-white to-[#F8FAFC]">
      {/* Subtle background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230B1F3A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1120px] flex-col gap-12 px-6 py-16 md:flex-row md:items-center md:py-24 lg:py-28">
        {/* Left content */}
        <div className="flex-1">
          <div className="mb-4 inline-flex items-center gap-3">
            <span className="text-4xl font-bold tracking-tight text-[#0B1F3A] md:text-5xl lg:text-6xl">
              e29AI
            </span>
          </div>
          <p className="inline-block rounded-full bg-[#16A34A]/10 px-4 py-1.5 text-sm font-semibold text-[#16A34A]">
            Your AI Tech Buddy
          </p>
          <h1 className="mt-6 text-3xl font-semibold leading-tight text-[#0B1F3A] md:text-4xl lg:text-[2.75rem] lg:leading-tight">
            Save time. Grow revenue.
            <br />
            <span className="text-[#16A34A]">Work smarter with AI.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#334155]">
            We build AI agents, chatbots, and automation for growing businesses.
            No tech headaches — just practical tools that help you do more with
            less.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <BookingButton variant="primary" />
            <Link
              href="/services"
              className="rounded-full border-2 border-[#E2E8F0] bg-white px-7 py-3.5 text-sm font-semibold text-[#0B1F3A] transition-all hover:border-[#16A34A] hover:bg-[#16A34A]/5"
            >
              See What We Do
            </Link>
          </div>
          <p className="mt-6 text-sm text-[#64748B]">
            Free 30-minute call. No commitment required.
          </p>
        </div>

        {/* Right card */}
        <div className="flex-1">
          <div className="rounded-2xl border border-[#E2E8F0] bg-white p-8 shadow-xl shadow-slate-200/50">
            <p className="text-lg font-semibold text-[#0B1F3A]">
              What you get in 30 days
            </p>
            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-4">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#16A34A]">
                  <svg
                    className="h-3.5 w-3.5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-[#334155]">
                  <strong className="text-[#0B1F3A]">AI agent or chatbot</strong>{" "}
                  handling real work for you
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#16A34A]">
                  <svg
                    className="h-3.5 w-3.5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-[#334155]">
                  <strong className="text-[#0B1F3A]">Automation</strong> that
                  saves 10+ hours every week
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#16A34A]">
                  <svg
                    className="h-3.5 w-3.5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-[#334155]">
                  <strong className="text-[#0B1F3A]">Dashboard</strong> to track
                  what matters most
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#16A34A]">
                  <svg
                    className="h-3.5 w-3.5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-[#334155]">
                  <strong className="text-[#0B1F3A]">Clear roadmap</strong>{" "}
                  showing how AI will help you grow
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
