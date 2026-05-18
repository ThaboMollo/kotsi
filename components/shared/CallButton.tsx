import { Phone } from "lucide-react";
import { site } from "@/content/site";

interface CallButtonProps {
  variant?: "primary" | "outline";
  className?: string;
}

export function CallButton({
  variant = "outline",
  className = "",
}: CallButtonProps) {
  const base = "inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition-colors";
  const variants = {
    primary: "bg-ink text-white hover:bg-stone px-8 py-4",
    outline: "border-2 border-ink text-ink hover:bg-ink hover:text-white px-8 py-4",
  };

  return (
    <a
      href={site.phone.link}
      className={`${base} ${variants[variant]} ${className}`}
    >
      <Phone size={20} />
      <span>Call Now</span>
    </a>
  );
}
