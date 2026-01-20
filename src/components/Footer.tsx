import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#E2E8F0] bg-white">
      <div className="mx-auto w-full max-w-[1120px] px-6 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold text-[#0B1F3A]">e29AI</span>
            </Link>
            <p className="mt-1 text-sm font-medium text-[#16A34A]">
              Your AI Tech Buddy
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#334155]">
              Practical AI solutions for growing businesses. We help you save
              time, work smarter, and focus on what you do best.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61586462471189"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8FAFC] text-[#334155] transition-colors hover:bg-[#16A34A] hover:text-white"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="mailto:evolakinllc@gmail.com"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8FAFC] text-[#334155] transition-colors hover:bg-[#16A34A] hover:text-white"
                aria-label="Email"
              >
                <svg
                  className="h-5 w-5"
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
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-12 md:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0B1F3A]">
                Company
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <Link
                  href="/services"
                  className="text-sm text-[#334155] transition-colors hover:text-[#16A34A]"
                >
                  Services
                </Link>
                <Link
                  href="/how-it-works"
                  className="text-sm text-[#334155] transition-colors hover:text-[#16A34A]"
                >
                  How It Works
                </Link>
                <Link
                  href="/about"
                  className="text-sm text-[#334155] transition-colors hover:text-[#16A34A]"
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="text-sm text-[#334155] transition-colors hover:text-[#16A34A]"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0B1F3A]">
                Services
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <span className="text-sm text-[#334155]">AI Agents</span>
                <span className="text-sm text-[#334155]">Chatbots</span>
                <span className="text-sm text-[#334155]">Automation</span>
                <span className="text-sm text-[#334155]">Web Design</span>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0B1F3A]">
                Contact
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <a
                  href="mailto:evolakinllc@gmail.com"
                  className="text-sm text-[#334155] transition-colors hover:text-[#16A34A]"
                >
                  evolakinllc@gmail.com
                </a>
                <span className="text-sm text-[#334155]">Chicago, IL</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#E2E8F0] pt-8 text-xs text-[#64748B] md:flex-row">
          <p>© {new Date().getFullYear()} e29AI. All rights reserved.</p>
          <p>
            Built with care in Chicago.
          </p>
        </div>
      </div>
    </footer>
  );
}
