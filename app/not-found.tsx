import Link from "next/link";
import { Camera } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center">
      <Camera className="text-gold" size={48} />
      <h1 className="font-display text-4xl font-bold text-white">
        Page Not Found
      </h1>
      <p className="text-muted">
        This frame doesn&apos;t exist — but we can still capture your next one.
      </p>
      <Link
        href="/"
        className="rounded-full bg-gold px-8 py-3 font-semibold text-ink transition-colors hover:bg-gold-bright"
      >
        Back to Home
      </Link>
    </div>
  );
}
