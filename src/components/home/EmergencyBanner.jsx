import { Phone } from "lucide-react";

export default function EmergencyBanner({ bannerImage }) {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img src={bannerImage} alt="Professional plumbing tools" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-obsidian/90" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/15 text-red-400 text-xs font-medium uppercase tracking-wider mb-6">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          24/7 Emergency Response
        </div>

        <h2 className="font-heading font-bold text-3xl lg:text-5xl text-white mb-5">
          Need Emergency Plumbing Help?
        </h2>
        <p className="text-white/50 text-lg mb-8 max-w-xl mx-auto">
          Burst pipes, severe leaks, or flooding? Our emergency team is standing by. Call now for immediate dispatch.
        </p>

        <a
          href="tel:+17035551234"
          className="inline-flex items-center gap-3 bg-red-500 hover:bg-red-600 text-white font-heading font-semibold text-lg rounded-xl px-8 py-4 transition-colors emergency-pulse"
        >
          <Phone className="w-5 h-5" />
          Call (703) 555-1234 Now
        </a>
      </div>
    </section>
  );
}