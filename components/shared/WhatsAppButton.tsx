import { MessageCircle } from "lucide-react";
import { site } from "@/content/site";

interface WhatsAppButtonProps {
  variant?: "primary" | "outline";
  className?: string;
}

export function WhatsAppButton({
  variant = "primary",
  className = "",
}: WhatsAppButtonProps) {
  const base = "inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition-colors";
  const variants = {
    primary: "bg-ink text-white hover:bg-stone px-8 py-4",
    outline: "border-2 border-ink text-ink hover:bg-ink hover:text-white px-8 py-4",
  };

  return (
    <a
      href={site.whatsapp.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
    >
      <MessageCircle size={20} />
      <span>WhatsApp Us</span>
    </a>
  );
}
