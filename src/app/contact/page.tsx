import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — e29AI",
  description:
    "Get in touch with e29AI. Book a free consultation or send us a message. We respond within one business day.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-white to-[#F8FAFC] py-16">
        <div className="mx-auto w-full max-w-[1120px] px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#16A34A]">
            Get in Touch
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-[#0B1F3A] md:text-5xl">
            Let&apos;s talk about your business.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#334155]">
            Whether you have a specific project in mind or just want to explore
            what AI can do for you — we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1120px] px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Contact form */}
          <form className="rounded-2xl border border-[#E2E8F0] bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-[#0B1F3A]">
              Send us a message
            </h2>
            <p className="mt-2 text-sm text-[#334155]">
              Fill out the form and we&apos;ll get back to you within one business day.
            </p>
            <div className="mt-6 grid gap-5">
              <label className="block">
                <span className="text-sm font-medium text-[#0B1F3A]">
                  Name <span className="text-red-500">*</span>
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  className="mt-2 w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#334155] transition-colors focus:border-[#16A34A] focus:outline-none focus:ring-2 focus:ring-[#16A34A]/20"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-[#0B1F3A]">
                  Email <span className="text-red-500">*</span>
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-2 w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#334155] transition-colors focus:border-[#16A34A] focus:outline-none focus:ring-2 focus:ring-[#16A34A]/20"
                  placeholder="you@company.com"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-[#0B1F3A]">
                  Company <span className="text-slate-400">(optional)</span>
                </span>
                <input
                  type="text"
                  name="company"
                  className="mt-2 w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#334155] transition-colors focus:border-[#16A34A] focus:outline-none focus:ring-2 focus:ring-[#16A34A]/20"
                  placeholder="Your company"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-[#0B1F3A]">
                  What can we help with? <span className="text-red-500">*</span>
                </span>
                <select
                  name="service"
                  required
                  className="mt-2 w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#334155] transition-colors focus:border-[#16A34A] focus:outline-none focus:ring-2 focus:ring-[#16A34A]/20"
                >
                  <option value="">Select a service...</option>
                  <option value="ai-agent">AI Agent or Chatbot</option>
                  <option value="automation">Business Automation</option>
                  <option value="website">Website or Landing Page</option>
                  <option value="dashboard">Dashboard or Analytics</option>
                  <option value="marketing">Marketing Automation</option>
                  <option value="other">Something else</option>
                </select>
              </label>
              <label className="block">
                <span className="text-sm font-medium text-[#0B1F3A]">
                  Tell us more
                </span>
                <textarea
                  name="message"
                  rows={4}
                  className="mt-2 w-full resize-none rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#334155] transition-colors focus:border-[#16A34A] focus:outline-none focus:ring-2 focus:ring-[#16A34A]/20"
                  placeholder="What are you trying to achieve? What problems do you want to solve?"
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-full bg-[#16A34A] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#15803D] hover:shadow-md active:scale-[0.98]"
              >
                Send Message
              </button>
              <p className="text-center text-xs text-slate-400">
                By submitting, you agree to be contacted about our services.
              </p>
            </div>
          </form>

          {/* Contact info */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-[#0B1F3A]">
                Prefer to talk?
              </h2>
              <p className="mt-4 leading-relaxed text-[#334155]">
                Book a free 30-minute consultation. We&apos;ll learn about your
                business, explore opportunities, and answer any questions — no
                strings attached.
              </p>
              <Link
                href="mailto:evolakinllc@gmail.com?subject=Free Consultation Request"
                className="mt-6 inline-flex rounded-full bg-[#16A34A] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#15803D] hover:shadow-md"
              >
                Book Free Consultation
              </Link>
            </div>

            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-[#0B1F3A]">
                Contact details
              </h2>
              <div className="mt-4 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#16A34A]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <p className="font-medium text-[#0B1F3A]">Email</p>
                    <a
                      href="mailto:evolakinllc@gmail.com"
                      className="text-[#16A34A] hover:underline"
                    >
                      evolakinllc@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#16A34A]"
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
                  <div>
                    <p className="font-medium text-[#0B1F3A]">Location</p>
                    <p className="text-[#334155]">Chicago, IL</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#16A34A]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <p className="font-medium text-[#0B1F3A]">Response time</p>
                    <p className="text-[#334155]">Within 1 business day</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-8">
              <h2 className="text-lg font-semibold text-[#0B1F3A]">
                Follow us
              </h2>
              <p className="mt-2 text-sm text-[#334155]">
                Stay updated with AI tips and business insights.
              </p>
              <a
                href="https://www.facebook.com/profile.php?id=61586462471189"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#16A34A] hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
