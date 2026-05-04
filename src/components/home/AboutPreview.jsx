import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const HIGHLIGHTS = [
  "15+ years of professional experience",
  "Fully certified and licensed plumbers",
  "Residential and commercial services",
  "Fast response team — under 60 minutes",
  "Transparent and affordable pricing",
];

export default function AboutPreview({ aboutImage }) {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={aboutImage} alt="Modern luxury bathroom installation" className="w-full h-full object-cover" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 lg:right-auto lg:-left-6 glass-light rounded-xl p-5 shadow-xl">
              <div className="font-heading font-bold text-3xl text-cerulean">5,000+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-cerulean font-heading font-medium text-sm uppercase tracking-wider">About FlowFix</span>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mt-3 mb-5">
              Precision Plumbing, Engineered for Your Home
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              FlowFix Plumbing Services has been the trusted name in Northern Virginia for over 15 years. We combine technical mastery with a client-first approach, treating every pipe, fixture, and drain as critical infrastructure that deserves expert attention.
            </p>

            <ul className="space-y-3 mb-8">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cerulean shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>

            <Link to="/about">
              <Button className="bg-cerulean hover:bg-cerulean/90 text-white font-heading font-medium rounded-lg px-6">
                Learn More About Us <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}