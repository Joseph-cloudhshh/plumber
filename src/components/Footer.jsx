const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const SERVICES = [
  "Emergency Plumbing",
  "Leak Detection",
  "Drain Cleaning",
  "Water Heater",
  "Sewer Line Repair",
  "Pipe Installation",
];

const QUICK_LINKS = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-obsidian text-white/70">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <img
                src="https://media.db.com/images/public/69f7eeb56b614a729067a911/b763deea6_generated_image.png"
                alt="FlowFix Plumbing Services"
                className="h-9 w-auto object-contain brightness-200 invert"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-heading font-semibold text-white text-lg tracking-tight">FlowFix</span>
                <span className="text-[10px] text-white/40 uppercase tracking-[0.15em]">Plumbing Services</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              15+ years delivering precision plumbing for homes and businesses across Northern Virginia. Licensed, insured, and committed to excellence.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center hover:bg-cerulean/20 hover:text-cerulean transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm hover:text-cerulean transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-5">Services</h4>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm hover:text-cerulean transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-cerulean shrink-0" />
                <span className="text-sm">1234 Main Street, Arlington, VA 22201</span>
              </li>
              <li>
                <a href="tel:+17035551234" className="flex items-center gap-3 hover:text-cerulean transition-colors">
                  <Phone className="w-4 h-4 text-cerulean shrink-0" />
                  <span className="text-sm">(703) 555-1234</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@flowfixplumbing.com" className="flex items-center gap-3 hover:text-cerulean transition-colors">
                  <Mail className="w-4 h-4 text-cerulean shrink-0" />
                  <span className="text-sm">info@flowfixplumbing.com</span>
                </a>
              </li>
            </ul>
            <div className="mt-6 p-3 rounded-lg bg-white/5 border border-white/10">
              <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Working Hours</p>
              <p className="text-sm text-white/80">Mon–Sat: 7AM – 8PM</p>
              <p className="text-sm text-red-400 font-medium">24/7 Emergency Service</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">© {new Date().getFullYear()} FlowFix Plumbing Services. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="text-xs text-white/40 hover:text-white/60 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-xs text-white/40 hover:text-white/60 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}