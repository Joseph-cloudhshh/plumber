const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Under-Sink Pipe Replacement",
    category: "Before & After",
    before: "https://media.db.com/images/public/69f7eeb56b614a729067a911/30dcfa35e_generated_image.png",
    after: "https://media.db.com/images/public/69f7eeb56b614a729067a911/f79aa542b_generated_image.png",
    type: "before-after",
  },
  {
    id: 2,
    title: "Tankless Water Heater Install",
    category: "Installation",
    image: "https://media.db.com/images/public/69f7eeb56b614a729067a911/6b560c437_generated_image.png",
    type: "single",
  },
  {
    id: 3,
    title: "Hydro-Jetting Drain Service",
    category: "Drain Cleaning",
    image: "https://media.db.com/images/public/69f7eeb56b614a729067a911/a0113a747_generated_image.png",
    type: "single",
  },
  {
    id: 4,
    title: "Luxury Bathroom Completion",
    category: "Full Renovation",
    image: "https://media.db.com/images/public/69f7eeb56b614a729067a911/a2b88a291_generated_image.png",
    type: "single",
  },
  {
    id: 5,
    title: "Sewer Camera Inspection",
    category: "Diagnostics",
    image: "https://media.db.com/images/public/69f7eeb56b614a729067a911/bccda3235_generated_image.png",
    type: "single",
  },
];

function BeforeAfterCard({ item }) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div className="group relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer" onClick={() => setShowAfter(!showAfter)}>
      <img
        src={showAfter ? item.after : item.before}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
      <div className="absolute top-3 left-3 flex gap-2">
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${showAfter ? "bg-cerulean text-white" : "bg-red-500/80 text-white"}`}>
          {showAfter ? "AFTER" : "BEFORE"}
        </span>
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-black/40 text-white backdrop-blur-sm">Tap to toggle</span>
      </div>
      <div className="absolute bottom-4 left-4">
        <p className="font-heading font-semibold text-white text-sm">{item.title}</p>
        <p className="text-white/60 text-xs">{item.category}</p>
      </div>
    </div>
  );
}

export default function GallerySection() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-cerulean font-heading font-medium text-sm uppercase tracking-wider">Restoration Archive</span>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mt-3 mb-4">
            Our Work in Detail
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Surgical precision, documented. Every project completed to the highest standard.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              {item.type === "before-after" ? (
                <BeforeAfterCard item={item} />
              ) : (
                <div
                  className="group relative rounded-xl overflow-hidden aspect-[4/3] cursor-zoom-in"
                  onClick={() => setLightbox(item)}
                >
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="font-heading font-semibold text-white text-sm">{item.title}</p>
                    <p className="text-white/60 text-xs">{item.category}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/gallery">
            <Button variant="outline" className="border-cerulean/30 text-cerulean hover:bg-cerulean/8 font-heading rounded-lg px-8">
              View Full Gallery
            </Button>
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/20 transition-colors">
              <X className="w-5 h-5" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full rounded-2xl overflow-hidden"
            >
              <img src={lightbox.image} alt={lightbox.title} className="w-full object-contain max-h-[80vh]" />
              <div className="bg-obsidian/90 px-6 py-4">
                <p className="font-heading font-semibold text-white">{lightbox.title}</p>
                <p className="text-white/50 text-sm">{lightbox.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}