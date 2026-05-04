import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Shield, Clock, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection({ heroImage }) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-obsidian">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Professional plumbing infrastructure" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/90 to-obsidian/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-0 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-cerulean text-xs font-medium uppercase tracking-wider mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-cerulean animate-pulse" />
                Serving Northern Virginia Since 2009
              </div>

              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight mb-6">
                {"Fast & Reliable "}
                <span className="text-cerulean">Plumbing Services</span>
                {" You Can Trust"}
              </h1>

              <p className="text-lg text-white/60 leading-relaxed max-w-xl mb-8 font-body">
                24/7 emergency plumbing, drain cleaning, leak repairs, water heater installation, and complete plumbing solutions for homes and businesses.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link to="/contact">
                  <Button size="lg" className="bg-cerulean hover:bg-cerulean/90 text-white font-heading font-semibold rounded-xl px-8 h-14 text-base shadow-lg shadow-cerulean/25">
                    Get Free Quote
                  </Button>
                </Link>
                <a href="tel:+17035551234">
                  <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white font-heading font-semibold rounded-xl px-8 h-14 text-base emergency-pulse shadow-lg shadow-red-500/25">
                    <Phone className="w-4 h-4 mr-2" />
                    Emergency: (703) 555-1234
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              {[
                { icon: Shield, label: "Licensed & Insured" },
                { icon: Award, label: "Satisfaction Guarantee" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4 text-cerulean" />
                  <span className="text-sm text-white/60">{label}</span>
                </div>
              ))}
              <span className="text-white/20">|</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-white/60">24/7 Service Available</span>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass rounded-2xl p-8 space-y-6"
            >
              {[
                { value: "15+", label: "Years Experience" },
                { value: "5,000+", label: "Projects Completed" },
                { value: "4.9", label: "Customer Rating" },
                { value: "<60min", label: "Emergency Response" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center justify-between py-3 border-b border-white/8 last:border-0">
                  <span className="text-white/50 text-sm">{stat.label}</span>
                  <span className="font-heading font-bold text-2xl text-cerulean">{stat.value}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}