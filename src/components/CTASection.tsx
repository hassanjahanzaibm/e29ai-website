import Link from "next/link";

export default function CTASection() {
  return (
    <section className="mx-auto w-full max-w-[1120px] px-6 py-20">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#16A34A] to-[#15803D] p-10 text-center md:p-16">
        {/* Subtle pattern overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative">
          <h3 className="text-3xl font-semibold text-white md:text-4xl">
            Ready to work smarter with AI?
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
            Book a free 30-minute consultation. We&apos;ll learn about your
            business, find the best opportunities, and create a plan to get you
            started.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="mailto:evolakinllc@gmail.com?subject=Free Consultation Request"
              className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#16A34A] shadow-sm transition-all hover:bg-slate-50 hover:shadow-md active:scale-[0.98]"
            >
              Book a Free Consultation
            </Link>
            <Link
              href="/contact"
              className="rounded-full border-2 border-white/30 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10"
            >
              Send Us a Message
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/70">
            No commitment required. We&apos;ll just have a friendly conversation.
          </p>
        </div>
      </div>
    </section>
  );
}
