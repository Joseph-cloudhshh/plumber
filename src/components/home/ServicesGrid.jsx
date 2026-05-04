import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Wrench, Search, Waves, Flame, Pipette, Gauge, ArrowRight, CircleDot, Droplets, Trash2, Building2 } from "lucide-react";

const SERVICES = [
  { icon: Wrench, title: "Emergency Plumbing Repairs", desc: "Immediate response for burst pipes, major leaks, and plumbing emergencies. Available 24/7." },
  { icon: Search, title: "Leak Detection & Repair", desc: "Advanced technology to locate hidden leaks and prevent water damage to your property." },
  { icon: Waves, title: "Drain Cleaning", desc: "Professional drain clearing using hydro-jetting and mechanical methods for all blockages." },
  { icon: Flame, title: "Water Heater Installation", desc: "Expert installation and repair of tank and tankless water heater systems." },
  { icon: Pipette, title: "Sewer Line Repair", desc: "Trenchless sewer repair and replacement with minimal disruption to your landscape." },
  { icon: Gauge, title: "Pipe Installation", desc: "Complete pipe installation and replacement for new construction and renovations." },
  { icon: CircleDot, title: "Toilet Repair & Installation", desc: "All toilet issues handled from running toilets to complete new installations." },
  { icon: Droplets, title: "Faucet & Sink Repairs", desc: "Fix dripping faucets, upgrade fixtures, and resolve all sink-related issues." },
  { icon: Trash2, title: "Garbage Disposal Repair", desc: "Installation, repair, and replacement of all garbage disposal brands and models." },
  { icon: Building2, title: "Commercial Plumbing", desc: "Full-service commercial plumbing for offices, restaurants, and retail spaces." },
];

export default function ServicesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-cerulean font-heading font-medium text-sm uppercase tracking-wider">Infrastructure Grid</span>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mt-3 mb-4">
            Our Plumbing Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Complete plumbing solutions engineered for residential and commercial properties.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {SERVICES.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to="/services"
                className="group block h-full p-5 rounded-xl border border-border bg-card hover:border-cerulean/30 hover:shadow-lg hover:shadow-cerulean/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-cerulean/10 flex items-center justify-center mb-4 group-hover:bg-cerulean/20 transition-colors">
                  <Icon className="w-5 h-5 text-cerulean" />
                </div>
                <h3 className="font-heading font-semibold text-sm text-foreground mb-2">{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">{desc}</p>
                <span className="inline-flex items-center gap-1 text-cerulean text-xs font-medium group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}