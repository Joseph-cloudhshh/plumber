import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wrench, Search, Waves, Flame, Pipette, Gauge, CircleDot, Droplets, Trash2, Building2, ArrowRight, Phone } from "lucide-react";

const SERVICES = [
  { icon: Wrench, title: "Emergency Plumbing Repairs", desc: "When disaster strikes, our emergency team is ready. We handle burst pipes, severe leaks, flooding, and all critical plumbing failures with average response times under 60 minutes.", features: ["24/7 availability", "Under 60-min response", "Damage mitigation"] },
  { icon: Search, title: "Leak Detection & Repair", desc: "Using advanced thermal imaging and acoustic detection technology, we pinpoint hidden leaks behind walls, under floors, and in slabs — minimizing destructive exploratory work.", features: ["Non-invasive detection", "Thermal imaging", "Foundation leak repair"] },
  { icon: Waves, title: "Drain Cleaning", desc: "From slow kitchen drains to completely blocked sewer lines, our hydro-jetting and mechanical clearing methods restore full flow without damaging your pipes.", features: ["Hydro-jetting", "Camera inspection", "Preventive maintenance"] },
  { icon: Flame, title: "Water Heater Installation", desc: "Expert installation, repair, and replacement of both traditional tank and modern tankless water heater systems. We help you choose the right system for your needs.", features: ["Tank & tankless systems", "Energy-efficient options", "Same-day service"] },
  { icon: Pipette, title: "Sewer Line Repair", desc: "We specialize in trenchless sewer repair technology, allowing us to fix or replace damaged sewer lines with minimal disruption to your landscaping.", features: ["Trenchless technology", "Video inspection", "Root removal"] },
  { icon: Gauge, title: "Pipe Installation & Replacement", desc: "Complete pipe services for new construction, renovations, and aging infrastructure. We work with copper, PEX, and PVC systems.", features: ["New construction", "Repiping services", "All pipe materials"] },
  { icon: CircleDot, title: "Toilet Repair & Installation", desc: "From running toilets and phantom flushes to complete new installations, we handle every toilet issue with efficiency and precision.", features: ["All brands serviced", "Water-saving upgrades", "ADA-compliant installs"] },
  { icon: Droplets, title: "Faucet & Sink Repairs", desc: "Stop the drip. We repair, replace, and upgrade all faucet and sink types — from kitchen to bathroom to utility fixtures.", features: ["Drip repair", "Fixture upgrades", "All brands"] },
  { icon: Trash2, title: "Garbage Disposal Repair", desc: "Jammed, leaking, or non-functioning garbage disposals diagnosed and repaired. We also handle new installations of all major brands.", features: ["Jam clearing", "Motor replacement", "New installations"] },
  { icon: Building2, title: "Commercial Plumbing", desc: "Full-service commercial plumbing solutions for restaurants, offices, retail, and multi-unit properties. We understand the urgency of keeping your business running.", features: ["Code compliance", "Preventive contracts", "Backflow testing"] },
];

export default function Services() {
  return (
    <div>
      {/* Header */}
      <section className="bg-obsidian py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-cerulean font-heading font-medium text-sm uppercase tracking-wider">Infrastructure Grid</span>
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-white mt-3 mb-4">Our Services</h1>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Precision plumbing solutions for every system in your home or business.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 space-y-6">
          {SERVICES.map(({ icon: Icon, title, desc, features }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group bg-card border border-border rounded-xl p-6 lg:p-8 hover:border-cerulean/30 hover:shadow-lg hover:shadow-cerulean/5 transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-cerulean/10 flex items-center justify-center shrink-0 group-hover:bg-cerulean/20 transition-colors">
                  <Icon className="w-6 h-6 text-cerulean" />
                </div>
                <div className="flex-1">
                  <h2 className="font-heading font-semibold text-xl text-foreground mb-3">{title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">{desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {features.map((f) => (
                      <span key={f} className="text-xs font-medium px-3 py-1.5 rounded-full bg-cerulean/8 text-cerulean">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
                <Link to="/contact" className="shrink-0">
                  <Button variant="outline" className="border-cerulean/30 text-cerulean hover:bg-cerulean/10 font-heading rounded-lg">
                    Get Quote <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cerulean py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading font-bold text-3xl text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/70 text-lg mb-8">Contact us today for a free estimate on any plumbing service.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-cerulean hover:bg-white/90 font-heading font-semibold rounded-lg px-8">
                Get Free Quote
              </Button>
            </Link>
            <a href="tel:+17035551234">
              <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 font-heading font-semibold rounded-lg px-8">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}