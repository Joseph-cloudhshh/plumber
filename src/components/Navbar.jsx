const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-lg shadow-lg shadow-obsidian/5" : "bg-white/80 backdrop-blur-md"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <img
            src="https://media.db.com/images/public/69f7eeb56b614a729067a911/b763deea6_generated_image.png"
            alt="FlowFix Plumbing Services"
            className="h-10 w-auto object-contain"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-heading font-semibold text-obsidian text-lg tracking-tight">FlowFix</span>
            <span className="text-[10px] text-muted-foreground uppercase tracking-[0.15em]">Plumbing Services</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                location.pathname === link.path
                  ? "text-cerulean bg-cerulean/8"
                  : "text-obsidian/70 hover:text-obsidian hover:bg-muted/50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+17035551234" className="flex items-center gap-2 text-sm font-medium text-obsidian/70 hover:text-cerulean transition-colors">
            <Phone className="w-4 h-4" />
            (703) 555-1234
          </a>
          <Link to="/contact">
            <Button className="bg-cerulean hover:bg-cerulean/90 text-white font-heading font-medium rounded-lg px-5">
              Get Free Quote
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border px-6 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "text-cerulean bg-cerulean/8"
                  : "text-obsidian/70 hover:bg-muted/50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 space-y-2">
            <a href="tel:+17035551234" className="flex items-center justify-center gap-2 py-3 rounded-lg bg-destructive text-white font-medium emergency-pulse">
              <Phone className="w-4 h-4" />
              Emergency: (703) 555-1234
            </a>
            <Link to="/contact" className="block">
              <Button className="w-full bg-cerulean hover:bg-cerulean/90 text-white font-heading rounded-lg">
                Get Free Quote
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}