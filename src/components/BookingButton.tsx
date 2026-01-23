"use client";

interface BookingButtonProps {
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  children?: React.ReactNode;
}

export default function BookingButton({
  variant = "primary",
  className = "",
  children,
}: BookingButtonProps) {
  const handleBooking = () => {
    // Construct URL on client-side to avoid crawler scraping
    const base = "calendly";
    const domain = ".com";
    const path = "/hassanjahanzaib";
    window.open(`https://${base}${domain}${path}`, "_blank", "noopener");
  };

  const baseStyles =
    "rounded-full text-sm font-semibold transition-all active:scale-[0.98]";

  const variants = {
    primary:
      "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg hover:shadow-xl hover:from-emerald-700 hover:to-teal-700 px-8 py-4",
    secondary:
      "bg-white text-emerald-900 border-2 border-emerald-200 hover:bg-emerald-50 hover:shadow-lg px-8 py-4",
    outline:
      "border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/10 px-8 py-4",
  };

  return (
    <button
      onClick={handleBooking}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children || "Book a Free Consultation"}
    </button>
  );
}

export function EmailLink({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const handleEmail = () => {
    // Construct email on client-side
    const user = "evolakinllc";
    const domain = "gmail.com";
    const subject = encodeURIComponent("Free Consultation Request");
    window.location.href = `mailto:${user}@${domain}?subject=${subject}`;
  };

  return (
    <button onClick={handleEmail} className={className}>
      {children || "Email Us"}
    </button>
  );
}
