import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  { name: "Sarah M.", location: "Arlington, VA", rating: 5, review: "FlowFix responded within 30 minutes to our kitchen flood. The technician was professional, explained everything, and had the issue fixed in under an hour. Absolutely the best plumbing service we've ever used.", service: "Emergency Plumbing" },
  { name: "David K.", location: "Fairfax, VA", rating: 5, review: "They installed our new tankless water heater with incredible precision. The upfront pricing was exactly what we paid — no surprises. Our hot water system has never been better.", service: "Water Heater Installation" },
  { name: "Jennifer L.", location: "Alexandria, VA", rating: 5, review: "After two other companies couldn't find our leak, FlowFix used thermal imaging and pinpointed it in minutes. Their technology and expertise are truly next-level.", service: "Leak Detection" },
  { name: "Michael R.", location: "Reston, VA", rating: 5, review: "We've used FlowFix for our restaurant's commercial plumbing for 3 years. They understand the urgency of keeping a business running and always deliver fast, reliable service.", service: "Commercial Plumbing" },
  { name: "Lisa T.", location: "Ashburn, VA", rating: 5, review: "Professional, punctual, and fair pricing. They replaced our entire main sewer line with minimal disruption to our yard. Highly recommend to anyone in the area.", service: "Sewer Line Repair" },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const t = TESTIMONIALS[current];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-cerulean font-heading font-medium text-sm uppercase tracking-wider">Client Feedback</span>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mt-3">
            What Our Clients Say
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-2xl border border-border p-8 lg:p-12 relative"
            >
              <Quote className="w-10 h-10 text-cerulean/15 absolute top-6 right-6" />

              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-cerulean text-cerulean" />
                ))}
              </div>

              <p className="text-lg lg:text-xl text-foreground/80 leading-relaxed mb-8 font-body">
                "{t.review}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-heading font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.location} — {t.service}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-cerulean w-6" : "bg-border"}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}