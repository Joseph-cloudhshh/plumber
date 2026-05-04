const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { Users, MessageSquare, FileText, Clock, CheckCircle2, Phone, Mail, Calendar, Droplets } from "lucide-react";
import moment from "moment";

const STATUS_COLORS = {
  new: "bg-blue-100 text-blue-700",
  contacted: "bg-yellow-100 text-yellow-700",
  scheduled: "bg-purple-100 text-purple-700",
  completed: "bg-green-100 text-green-700",
  pending: "bg-blue-100 text-blue-700",
  confirmed: "bg-cyan-100 text-cyan-700",
  in_progress: "bg-yellow-100 text-yellow-700",
  cancelled: "bg-red-100 text-red-700",
};

export default function Admin() {
  const [tab, setTab] = useState("contacts");
  const [contacts, setContacts] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const [c, b] = await Promise.all([
        db.entities.ContactSubmission.list("-created_date", 100),
        db.entities.Booking.list("-created_date", 100),
      ]);
      setContacts(c);
      setBookings(b);
      setLoading(false);
    };
    load();
  }, []);

  const updateContactStatus = async (id, status) => {
    await db.entities.ContactSubmission.update(id, { status });
    setContacts((prev) => prev.map((c) => (c.id === id ? { ...c, status } : c)));
  };

  const updateBookingStatus = async (id, status) => {
    await db.entities.Booking.update(id, { status });
    setBookings((prev) => prev.map((b) => (b.id === id ? { ...b, status } : b)));
  };

  const TABS = [
    { id: "contacts", label: "Contact Messages", icon: MessageSquare, count: contacts.filter((c) => c.status === "new").length },
    { id: "bookings", label: "Quote Requests", icon: FileText, count: bookings.filter((b) => b.status === "pending").length },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-obsidian px-6 py-5">
        <div className="max-w-6xl mx-auto flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-cerulean flex items-center justify-center">
            <Droplets className="w-4 h-4 text-white" />
          </div>
          <div>
            <h1 className="font-heading font-semibold text-white text-lg">FlowFix Admin</h1>
            <p className="text-white/40 text-xs">Leads and Bookings Dashboard</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Contacts", value: contacts.length, icon: MessageSquare, color: "text-blue-600", bg: "bg-blue-50" },
            { label: "New Messages", value: contacts.filter((c) => c.status === "new").length, icon: Clock, color: "text-yellow-600", bg: "bg-yellow-50" },
            { label: "Total Bookings", value: bookings.length, icon: FileText, color: "text-purple-600", bg: "bg-purple-50" },
            { label: "Pending Quotes", value: bookings.filter((b) => b.status === "pending").length, icon: Users, color: "text-cyan-600", bg: "bg-cyan-50" },
          ].map(({ label, value, icon: Icon, color, bg }) => (
            <div key={label} className="bg-white rounded-xl border border-slate-200 p-5 flex items-center gap-4">
              <div className={`w-11 h-11 rounded-lg ${bg} flex items-center justify-center`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <div>
                <div className="font-heading font-bold text-2xl text-slate-800">{value}</div>
                <div className="text-xs text-slate-500">{label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                tab === t.id ? "bg-obsidian text-white" : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              <t.icon className="w-4 h-4" />
              {t.label}
              {t.count > 0 && (
                <span className={`text-xs rounded-full px-2 py-0.5 font-semibold ${tab === t.id ? "bg-cerulean text-white" : "bg-red-100 text-red-600"}`}>
                  {t.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-4 border-slate-200 border-t-cerulean rounded-full animate-spin" />
          </div>
        ) : tab === "contacts" ? (
          <ContactsTable contacts={contacts} onUpdateStatus={updateContactStatus} />
        ) : (
          <BookingsTable bookings={bookings} onUpdateStatus={updateBookingStatus} />
        )}
      </div>
    </div>
  );
}

function ContactsTable({ contacts, onUpdateStatus }) {
  if (contacts.length === 0) {
    return <EmptyState message="No contact messages yet." />;
  }
  return (
    <div className="space-y-3">
      {contacts.map((c, i) => (
        <motion.div
          key={c.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.04 }}
          className="bg-white rounded-xl border border-slate-200 p-5"
        >
          <div className="flex flex-col lg:flex-row lg:items-start gap-4">
            <div className="flex-1 space-y-2">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-heading font-semibold text-slate-800">{c.name}</span>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${STATUS_COLORS[c.status] || "bg-slate-100 text-slate-600"}`}>
                  {c.status || "new"}
                </span>
                {c.service_needed && (
                  <span className="text-xs px-2.5 py-1 rounded-full bg-cyan-50 text-cyan-700 font-medium">{c.service_needed}</span>
                )}
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                {c.phone && (
                  <a href={`tel:${c.phone}`} className="flex items-center gap-1.5 hover:text-cyan-600 transition-colors">
                    <Phone className="w-3.5 h-3.5" />{c.phone}
                  </a>
                )}
                {c.email && (
                  <a href={`mailto:${c.email}`} className="flex items-center gap-1.5 hover:text-cyan-600 transition-colors">
                    <Mail className="w-3.5 h-3.5" />{c.email}
                  </a>
                )}
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />{moment(c.created_date).fromNow()}
                </span>
              </div>
              {c.message && (
                <p className="text-sm text-slate-600 bg-slate-50 rounded-lg p-3 mt-2">{c.message}</p>
              )}
            </div>
            <div className="flex flex-wrap gap-2 shrink-0">
              {["new", "contacted", "scheduled", "completed"].map((s) => (
                <button
                  key={s}
                  onClick={() => onUpdateStatus(c.id, s)}
                  className={`text-xs px-3 py-1.5 rounded-lg border transition-all capitalize ${
                    c.status === s
                      ? "bg-obsidian text-white border-obsidian"
                      : "border-slate-200 text-slate-500 hover:border-cyan-400 hover:text-cyan-600"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function BookingsTable({ bookings, onUpdateStatus }) {
  if (bookings.length === 0) {
    return <EmptyState message="No quote requests yet." />;
  }
  return (
    <div className="space-y-3">
      {bookings.map((b, i) => (
        <motion.div
          key={b.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.04 }}
          className="bg-white rounded-xl border border-slate-200 p-5"
        >
          <div className="flex flex-col lg:flex-row lg:items-start gap-4">
            <div className="flex-1 space-y-2">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-heading font-semibold text-slate-800">{b.name}</span>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${STATUS_COLORS[b.status] || "bg-slate-100 text-slate-600"}`}>
                  {b.status || "pending"}
                </span>
                {b.service && (
                  <span className="text-xs px-2.5 py-1 rounded-full bg-cyan-50 text-cyan-700 font-medium">{b.service}</span>
                )}
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                {b.phone && (
                  <a href={`tel:${b.phone}`} className="flex items-center gap-1.5 hover:text-cyan-600 transition-colors">
                    <Phone className="w-3.5 h-3.5" />{b.phone}
                  </a>
                )}
                {b.email && (
                  <a href={`mailto:${b.email}`} className="flex items-center gap-1.5 hover:text-cyan-600 transition-colors">
                    <Mail className="w-3.5 h-3.5" />{b.email}
                  </a>
                )}
                {b.preferred_date && (
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />{b.preferred_date} — {b.preferred_time}
                  </span>
                )}
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />{moment(b.created_date).fromNow()}
                </span>
              </div>
              {b.address && <p className="text-sm text-slate-500">Service address: {b.address}</p>}
              {b.description && (
                <p className="text-sm text-slate-600 bg-slate-50 rounded-lg p-3">{b.description}</p>
              )}
            </div>
            <div className="flex flex-wrap gap-2 shrink-0">
              {["pending", "confirmed", "in_progress", "completed", "cancelled"].map((s) => (
                <button
                  key={s}
                  onClick={() => onUpdateStatus(b.id, s)}
                  className={`text-xs px-3 py-1.5 rounded-lg border transition-all capitalize ${
                    b.status === s
                      ? "bg-obsidian text-white border-obsidian"
                      : "border-slate-200 text-slate-500 hover:border-cyan-400 hover:text-cyan-600"
                  }`}
                >
                  {s.replace("_", " ")}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function EmptyState({ message }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 py-16 text-center">
      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
        <CheckCircle2 className="w-6 h-6 text-slate-400" />
      </div>
      <p className="text-slate-500">{message}</p>
    </div>
  );
}