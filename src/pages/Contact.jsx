const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, CheckCircle2, Send } from "lucide-react";

import { toast } from "sonner";

const SERVICES_LIST = [
  "Emergency Plumbing", "Leak Detection", "Drain Cleaning", "Water Heater",
  "Sewer Line", "Pipe Installation", "Toilet Repair", "Faucet & Sink",
  "Garbage Disposal", "Commercial Plumbing", "Other",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service_needed: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await db.entities.ContactSubmission.create(form);
    setSubmitting(false);
    setSubmitted(true);
    toast.success("Message sent! We'll be in touch shortly.");
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-obsidian py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-cerulean font-heading font-medium text-sm uppercase tracking-wider">Get In Touch</span>
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-white mt-3 mb-4">Contact FlowFix</h1>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Ready for precision plumbing? Reach out for a free estimate or emergency service.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="bg-card border border-cerulean/30 rounded-2xl p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-cerulean/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-cerulean" />
                  </div>
                  <h2 className="font-heading font-bold text-2xl text-foreground mb-3">Message Received</h2>
                  <p className="text-muted-foreground">Our team will contact you within 1 business hour. For emergencies, call us directly.</p>
                </div>
              ) : (
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h2 className="font-heading font-semibold text-xl text-foreground mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label>Full Name *</Label>
                        <Input
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="John Smith"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Phone *</Label>
                        <Input
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="(703) 555-1234"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label>Email</Label>
                        <Input
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="john@example.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Service Needed *</Label>
                        <Select value={form.service_needed} onValueChange={(v) => setForm({ ...form, service_needed: v })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {SERVICES_LIST.map((s) => (
                              <SelectItem key={s} value={s}>{s}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Message</Label>
                      <Textarea
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us about your plumbing issue..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-cerulean hover:bg-cerulean/90 text-white font-heading font-semibold rounded-lg h-12 text-base"
                    >
                      {submitting ? "Sending..." : "Send Message"}
                      <Send className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </div>
              )}
            </motion.div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-5">
              <div className="bg-card border border-border rounded-xl p-6 space-y-5">
                <h3 className="font-heading font-semibold text-lg text-foreground">Contact Info</h3>
                {[
                  { icon: MapPin, label: "1234 Main Street, Arlington, VA 22201" },
                  { icon: Phone, label: "(703) 555-1234", href: "tel:+17035551234" },
                  { icon: Mail, label: "info@flowfixplumbing.com", href: "mailto:info@flowfixplumbing.com" },
                ].map(({ icon: Icon, label, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-cerulean/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-cerulean" />
                    </div>
                    {href ? (
                      <a href={href} className="text-sm text-foreground/80 hover:text-cerulean transition-colors pt-2">{label}</a>
                    ) : (
                      <span className="text-sm text-foreground/80 pt-2">{label}</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">Working Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">Monday - Friday</span><span className="font-medium">7:00 AM - 8:00 PM</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Saturday</span><span className="font-medium">8:00 AM - 6:00 PM</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Sunday</span><span className="font-medium">Emergency Only</span></div>
                </div>
                <div className="mt-4 p-3 rounded-lg bg-red-500/8 border border-red-500/15">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-red-500" />
                    <span className="text-sm font-medium text-red-600">24/7 Emergency Service Available</span>
                  </div>
                </div>
              </div>

              <a
                href="tel:+17035551234"
                className="block bg-red-500 hover:bg-red-600 text-white rounded-xl p-6 text-center transition-colors emergency-pulse"
              >
                <Phone className="w-6 h-6 mx-auto mb-2" />
                <div className="font-heading font-semibold text-lg">Emergency Line</div>
                <div className="text-white/80 text-sm">(703) 555-1234</div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}