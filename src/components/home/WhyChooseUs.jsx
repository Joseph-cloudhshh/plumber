import { motion } from "framer-motion";
import { Users, DollarSign, Zap, ShieldCheck, Cpu, Clock } from "lucide-react";

const REASONS = [
  { icon: Users, title: "Experienced Technicians", desc: "Our certified plumbers bring 15+ years of expertise to every job, ensuring precise diagnosis and repair." },
  { icon: DollarSign, title: "Upfront Pricing", desc: "No hidden fees. We provide detailed quotes before work begins so you know exactly what to expect." },
  { icon: Zap, title: "Fast Response", desc: "Average response time under 60 minutes. We respect your time and arrive when we say we will." },
  { icon: ShieldCheck, title: "Guaranteed Work", desc: "Every repair and installation is backed by our comprehensive workmanship guarantee." },
  { icon: Cpu, title: "Modern Equipment", desc: "We use the latest diagnostic tools and repair technology for accurate, long-lasting solutions." },
  { icon: Clock, title: "Emergency Availability", desc: "Plumbing emergencies don't wait — neither do we. 24/7 emergency service, 365 days a year." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-obsidian text-white relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(56,189,248,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,.3) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-cerulean font-heading font-medium text-sm uppercase tracking-wider">The FlowFix Difference</span>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-white mt-3 mb-4">
            Why Choose FlowFix
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            We deliver precision plumbing with transparency, speed, and unwavering quality.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REASONS.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-lg bg-cerulean/15 flex items-center justify-center mb-4 group-hover:bg-cerulean/25 transition-colors">
                <Icon className="w-5 h-5 text-cerulean" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-white mb-2">{title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}