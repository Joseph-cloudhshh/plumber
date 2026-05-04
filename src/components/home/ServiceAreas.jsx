import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const AREAS = [
  "Arlington", "Alexandria", "Fairfax", "Leesburg",
  "Ashburn", "Reston", "McLean", "Vienna",
  "Herndon", "Manassas", "Centreville", "Chantilly",
];

export default function ServiceAreas() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-cerulean font-heading font-medium text-sm uppercase tracking-wider">Coverage Zone</span>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mt-3 mb-4">
            Service Areas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Serving communities across Northern Virginia with rapid response.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {AREAS.map((area, i) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="flex items-center gap-3 bg-card border border-border rounded-xl p-4 hover:border-cerulean/30 hover:shadow-md hover:shadow-cerulean/5 transition-all"
            >
              <MapPin className="w-4 h-4 text-cerulean shrink-0" />
              <span className="font-heading font-medium text-sm text-foreground">{area}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}