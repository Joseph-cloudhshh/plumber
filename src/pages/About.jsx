const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Users, Award, Clock, Shield, Wrench, ArrowRight } from "lucide-react";

const ABOUT_IMG = "https://media.db.com/images/public/69f7eeb56b614a729067a911/c9519ca1f_generated_9ef11f69.png";

const STATS = [
  { value: "15+", label: "Years in Business" },
  { value: "5,000+", label: "Completed Projects" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "50+", label: "Team Members" },
];

const VALUES = [
  { icon: Shield, title: "Integrity", desc: "We operate with complete transparency. Every quote is honest, every timeline is realistic, and every interaction is respectful." },
  { icon: Award, title: "Excellence", desc: "We hold ourselves to the highest standards of workmanship. Every job is completed as if it were in our own home." },
  { icon: Clock, title: "Reliability", desc: "When we say we will be there, we show up. On time, every time, with the right tools and expertise." },
  { icon: Users, title: "Community", desc: "We are proud members of the Northern Virginia community and treat every client like a neighbor." },
];

export default function About() {
  return (
    <div>
      {/* Header */}
      <section className="bg-obsidian py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-cerulean font-heading font-medium text-sm uppercase tracking-wider">About FlowFix</span>
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-white mt-3 mb-4">
            Precision Plumbing, Since 2009
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Built on trust, technical mastery, and a relentless commitment to quality.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <img src={ABOUT_IMG} alt="FlowFix team at work" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading font-bold text-3xl text-foreground mb-5">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  FlowFix Plumbing Services was founded in 2009 with a simple mission: bring precision engineering and genuine care to every plumbing job. What began as a two-person operation has grown into Northern Virginia's most trusted plumbing team.
                </p>
                <p>
                  Our certified technicians are trained in the latest plumbing technology and techniques, from thermal imaging for leak detection to trenchless sewer repair. We invest in our people and our tools because we believe every home and business deserves the highest standard of service.
                </p>
                <p>
                  Today, with over 5,000 completed projects and a 4.9-star average rating, we continue to set the standard for professional plumbing in the region.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                {[
                  "Licensed & insured",
                  "Certified plumbers",
                  "Background-checked team",
                  "Ongoing training",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cerulean" />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-obsidian">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="font-heading font-bold text-4xl lg:text-5xl text-cerulean mb-2">{value}</div>
                <div className="text-sm text-white/50 uppercase tracking-wider">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-cerulean font-heading font-medium text-sm uppercase tracking-wider">Our Foundation</span>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mt-3">Core Values</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-cerulean/30 transition-all"
              >
                <div className="w-11 h-11 rounded-lg bg-cerulean/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-cerulean" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cerulean py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading font-bold text-3xl text-white mb-4">Work With FlowFix</h2>
          <p className="text-white/70 text-lg mb-8">Experience the precision plumbing difference. Get your free estimate today.</p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-cerulean hover:bg-white/90 font-heading font-semibold rounded-lg px-8">
              Get Free Quote <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}