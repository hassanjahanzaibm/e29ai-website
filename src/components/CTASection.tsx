import Link from "next/link";
import BookingButton, { EmailLink } from "./BookingButton";

export default function CTASection() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-6 py-20">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B1F3A] to-[#1a3a5c] p-12 text-center md:p-16">
        {/* Subtle pattern overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310B981' fill-opacity='1'%3E%3Cpath d='M36 30a6 6 0 11-12 0 6 6 0 0112 0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Premium accent glow */}
        <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 opacity-20">
          <div className="h-full w-full rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 blur-3xl"></div>
        </div>

        <div className="relative">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-5 py-2">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-400"></div>
            <p className="text-sm font-medium text-emerald-100">
              Start Your AI Journey
            </p>
          </div>

          <h3 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Ready to Elevate Your Business?
          </h3>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">
            Schedule a complimentary consultation. We'll analyze your operations,
            identify optimization opportunities, and design a tailored AI strategy.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <BookingButton variant="secondary" />
            <Link
              href="/contact"
              className="rounded-full border-2 border-white/20 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-300">
            No obligations · Confidential consultation · 30 minutes
          </p>
        </div>
      </div>
    </section>
  );
}
