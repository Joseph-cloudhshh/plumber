import { Phone, Mail, Clock } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-obsidian text-white/80 text-sm py-2 hidden md:block">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="tel:+17035551234" className="flex items-center gap-2 hover:text-cerulean transition-colors">
            <Phone className="w-3.5 h-3.5" />
            <span>(703) 555-1234</span>
          </a>
          <a href="mailto:info@flowfixplumbing.com" className="flex items-center gap-2 hover:text-cerulean transition-colors">
            <Mail className="w-3.5 h-3.5" />
            <span>info@flowfixplumbing.com</span>
          </a>
        </div>
        <div className="flex items-center gap-2 text-red-400 font-medium">
          <Clock className="w-3.5 h-3.5" />
          <span>24/7 Emergency Service Available</span>
        </div>
      </div>
    </div>
  );
}