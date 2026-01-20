import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-6xl font-bold text-[#16A34A]">404</p>
      <h1 className="mt-4 text-2xl font-semibold text-[#0B1F3A]">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-[#334155]">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It might
        have been moved or doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-[#16A34A] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#15803D] hover:shadow-md"
      >
        Back to Home
      </Link>
    </div>
  );
}
