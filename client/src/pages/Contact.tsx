/**
 * Contact Page — Himalayan Bazaar
 * Design: Himalayan Warmth & Craft
 * Sections: Header, Contact form, Store info, Map, FAQ
 * Colors: Terracotta primary, Saffron accent, Forest green, Warm cream bg
 * Fonts: Playfair Display (headings) + Lato (body)
 */
import { useState } from "react";
import { motion, type Transition } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] } as Transition,
  }),
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
    toast.success("Message sent! We'll get back to you within 24 hours.");
  };

  const inputClass =
    "w-full px-4 py-3 bg-white border border-amber-200 rounded-xl font-body text-sm text-[oklch(0.22_0.05_50)] placeholder:text-[oklch(0.62_0.03_60)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.52_0.14_38)]/30 focus:border-[oklch(0.52_0.14_38)] transition-all";

  return (
    <div className="min-h-screen bg-[oklch(0.985_0.012_80)]">
      <Navbar />

      {/* Page Header */}
      <section className="pt-28 pb-14 bg-[oklch(0.22_0.07_145)] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.05) 20px, rgba(255,255,255,0.05) 40px)",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-xs font-semibold tracking-[0.25em] text-[oklch(0.72_0.16_65)] uppercase mb-3">
              Get In Touch
            </p>
            <h1 className="font-display text-5xl sm:text-6xl font-black text-white mb-4">
              Contact Us
            </h1>
            <p className="font-body text-lg text-white/70 max-w-xl">
              Have a question, special order request, or just want to say namaste? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── MAIN CONTENT ─── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Contact Form — 3 cols */}
            <motion.div
              initial="hidden"
              animate="visible"
              className="lg:col-span-3"
            >
              <motion.div variants={fadeUp} custom={0} className="flex mb-4">
                <div className="section-divider" />
              </motion.div>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="font-display text-3xl font-bold text-[oklch(0.22_0.05_50)] mb-8"
              >
                Send Us a Message
              </motion.h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-2xl p-12 border border-amber-100 text-center shadow-sm"
                >
                  <div className="w-16 h-16 rounded-full bg-[oklch(0.32_0.09_145)]/10 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8 text-[oklch(0.32_0.09_145)]" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[oklch(0.22_0.05_50)] mb-3">
                    Message Received!
                  </h3>
                  <p className="font-body text-[oklch(0.52_0.05_60)] mb-6">
                    Thank you for reaching out. Our team will respond within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                    className="font-body text-sm font-semibold text-[oklch(0.52_0.14_38)] hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  variants={fadeUp}
                  custom={2}
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl p-8 border border-amber-100 shadow-sm space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-body text-xs font-semibold text-[oklch(0.38_0.05_60)] uppercase tracking-wider mb-1.5 block">
                        Full Name <span className="text-[oklch(0.52_0.14_38)]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Ramesh Shrestha"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="font-body text-xs font-semibold text-[oklch(0.38_0.05_60)] uppercase tracking-wider mb-1.5 block">
                        Email Address <span className="text-[oklch(0.52_0.14_38)]">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-body text-xs font-semibold text-[oklch(0.38_0.05_60)] uppercase tracking-wider mb-1.5 block">
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        placeholder="+81 90-0000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="font-body text-xs font-semibold text-[oklch(0.38_0.05_60)] uppercase tracking-wider mb-1.5 block">
                        Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className={inputClass}
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Enquiry</option>
                        <option value="special-order">Special Order Request</option>
                        <option value="wholesale">Wholesale Enquiry</option>
                        <option value="delivery">Delivery Question</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="font-body text-xs font-semibold text-[oklch(0.38_0.05_60)] uppercase tracking-wider mb-1.5 block">
                      Message <span className="text-[oklch(0.52_0.14_38)]">*</span>
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[oklch(0.52_0.14_38)] hover:bg-[oklch(0.46_0.14_38)] text-white font-body font-semibold py-3.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </motion.form>
              )}
            </motion.div>

            {/* Store Info — 2 cols */}
            <motion.div
              initial="hidden"
              animate="visible"
              className="lg:col-span-2 space-y-6"
            >
              {/* Info card */}
              <motion.div
                variants={fadeUp}
                custom={0}
                className="bg-[oklch(0.22_0.07_145)] rounded-2xl p-7 text-white"
              >
                <h3 className="font-display text-xl font-bold mb-6">Store Information</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[oklch(0.52_0.14_38)] flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-body text-xs font-semibold text-[oklch(0.72_0.16_65)] uppercase tracking-wider mb-1">Address</p>
                      <p className="font-body text-sm text-white/80 leading-relaxed">
                        2-14-8 Shin-Okubo<br />
                        Shinjuku-ku, Tokyo 169-0073<br />
                        Japan
                      </p>
                      <p className="font-body text-xs text-white/50 mt-1">
                        新大久保駅 徒歩3分
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[oklch(0.52_0.14_38)] flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-body text-xs font-semibold text-[oklch(0.72_0.16_65)] uppercase tracking-wider mb-1">Phone</p>
                      <p className="font-body text-sm text-white/80">+81 3-1234-5678</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[oklch(0.52_0.14_38)] flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-body text-xs font-semibold text-[oklch(0.72_0.16_65)] uppercase tracking-wider mb-1">Email</p>
                      <p className="font-body text-sm text-white/80">info@himalayanbazaar.jp</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Hours card */}
              <motion.div
                variants={fadeUp}
                custom={1}
                className="bg-white rounded-2xl p-7 border border-amber-100 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-5">
                  <Clock className="w-5 h-5 text-[oklch(0.52_0.14_38)]" />
                  <h3 className="font-display text-xl font-bold text-[oklch(0.22_0.05_50)]">Store Hours</h3>
                </div>
                <div className="space-y-2.5">
                  {[
                    { day: "Monday – Friday", hours: "10:00 – 20:00", open: true },
                    { day: "Saturday", hours: "09:00 – 21:00", open: true },
                    { day: "Sunday", hours: "10:00 – 19:00", open: true },
                    { day: "Public Holidays", hours: "10:00 – 18:00", open: true },
                  ].map((item) => (
                    <div key={item.day} className="flex items-center justify-between py-2 border-b border-amber-50 last:border-0">
                      <span className="font-body text-sm text-[oklch(0.38_0.05_60)]">{item.day}</span>
                      <span className="font-body text-sm font-semibold text-[oklch(0.22_0.05_50)]">{item.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-2 bg-emerald-50 rounded-lg px-3 py-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-body text-xs font-semibold text-emerald-700">Open Now</span>
                </div>
              </motion.div>

              {/* Map placeholder */}
              <motion.div
                variants={fadeUp}
                custom={2}
                className="bg-white rounded-2xl overflow-hidden border border-amber-100 shadow-sm"
              >
                <div className="h-48 bg-gradient-to-br from-[oklch(0.94_0.015_75)] to-[oklch(0.88_0.02_70)] flex flex-col items-center justify-center gap-3">
                  <MapPin className="w-10 h-10 text-[oklch(0.52_0.14_38)]" />
                  <div className="text-center">
                    <p className="font-display text-base font-bold text-[oklch(0.22_0.05_50)]">Shin-Okubo, Shinjuku</p>
                    <p className="font-body text-xs text-[oklch(0.52_0.05_60)] mt-1">3 min walk from Shin-Okubo Station</p>
                  </div>
                </div>
                <div className="p-4">
                  <a
                    href="https://maps.google.com/?q=Shin-Okubo+Shinjuku+Tokyo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[oklch(0.52_0.14_38)]/10 hover:bg-[oklch(0.52_0.14_38)]/20 text-[oklch(0.52_0.14_38)] font-body text-sm font-semibold py-2.5 rounded-lg transition-colors"
                  >
                    <MapPin className="w-4 h-4" />
                    Open in Google Maps
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
