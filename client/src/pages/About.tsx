/**
 * About Us Page — Himalayan Bazaar
 * Design: Himalayan Warmth & Craft
 * Sections: Hero, Story, Values, Team, Gallery
 * Colors: Terracotta primary, Saffron accent, Forest green, Warm cream bg
 * Fonts: Playfair Display (headings) + Lato (body)
 */
import { motion, type Transition } from "framer-motion";
import { Heart, Users, Globe, Award, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663413124505/525q8PM2kAPEprfxnwWS5B/about-store-keB7DEfspjBgMptMvueZ2a.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] } as Transition,
  }),
};

const values = [
  {
    icon: Heart,
    title: "Community",
    desc: "We exist to serve the Nepali community in Japan, providing a taste of home and a gathering place for our people.",
  },
  {
    icon: Globe,
    title: "Authenticity",
    desc: "Every product on our shelves is carefully selected for authenticity — we never compromise on quality or origin.",
  },
  {
    icon: Award,
    title: "Quality",
    desc: "From farm to shelf, we maintain the highest standards. Our suppliers are trusted partners we've worked with for years.",
  },
  {
    icon: Users,
    title: "Inclusivity",
    desc: "While we specialise in Nepali products, we welcome everyone curious about South Asian cuisine and culture.",
  },
];

export default function About() {
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
              Our Story
            </p>
            <h1 className="font-display text-5xl sm:text-6xl font-black text-white mb-4">
              About Us
            </h1>
            <p className="font-body text-lg text-white/80 max-w-xl">
              A family-run Nepali grocery store in the heart of Japan, built on love for our culture and community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── STORY SECTION ─── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={ABOUT_IMG}
                  alt="Himalayan Bazaar store interior"
                  className="w-full h-[480px] object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-[oklch(0.72_0.16_65)] rounded-2xl p-5 shadow-xl">
                <p className="font-display text-3xl font-black text-[oklch(0.22_0.05_50)]">9+</p>
                <p className="font-body text-xs font-semibold text-[oklch(0.32_0.05_50)] uppercase tracking-wide">
                  Years in Japan
                </p>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeUp} custom={0} className="flex mb-4">
                <div className="section-divider" />
              </motion.div>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="font-display text-4xl font-bold text-[oklch(0.22_0.05_50)] mb-6"
              >
                From Kathmandu to Japan — A Story of Home
              </motion.h2>
              <motion.div
                variants={fadeUp}
                custom={2}
                className="space-y-4 font-body text-[oklch(0.38_0.05_60)] leading-relaxed"
              >
                <p>
                  Himalayan Bazaar was born out of a simple longing — the kind every Nepali living abroad knows well. When our founder Ramesh Shrestha arrived in Japan in 2010, he found a vibrant city full of opportunity, but something was missing: the smell of turmeric sizzling in mustard oil, the earthy aroma of freshly ground timur, the comforting taste of dal bhat after a long day.
                </p>
                <p>
                  After years of improvising with substitute ingredients and making expensive trips to import shops, Ramesh decided to do something about it. In 2015, he opened Himalayan Bazaar in Japan's multicultural heart — with a modest selection of 80 products and a big dream.
                </p>
                <p>
                  Today, we stock over 500 authentic Nepali and South Asian products, serve thousands of customers across Japan, and have become more than just a grocery store. We are a community hub — a place where Nepalis gather, share recipes, celebrate festivals, and feel a little closer to home.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} custom={3} className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { value: "500+", label: "Products" },
                  { value: "2,000+", label: "Customers" },
                  { value: "9 yrs", label: "Serving Japan" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center bg-[oklch(0.94_0.015_75)] rounded-xl p-4">
                    <p className="font-display text-2xl font-bold text-[oklch(0.52_0.14_38)]">
                      {stat.value}
                    </p>
                    <p className="font-body text-xs text-[oklch(0.52_0.05_60)] mt-1">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="py-16 bg-[oklch(0.52_0.14_38)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px)"
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <motion.div variants={fadeUp} custom={0} className="flex justify-center mb-4">
              <div className="section-divider" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-display text-4xl font-bold text-white"
            >
              Our Values
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="font-body text-white/70 mt-3 max-w-xl mx-auto"
            >
              Everything we do is guided by four core principles that have shaped Himalayan Bazaar from day one.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i * 0.15}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-7 border border-white/10 hover:bg-white/15 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[oklch(0.52_0.14_38)] flex items-center justify-center mb-5">
                  <v.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">{v.title}</h3>
                <p className="font-body text-sm text-white/70 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
