/**
 * Home Page — Himalayan Bazaar
 * Design: Himalayan Warmth & Craft
 * Sections: Hero, Features, Categories, Featured Products, Testimonials, Newsletter
 * Colors: Terracotta primary, Saffron accent, Forest green, Warm cream bg
 * Fonts: Playfair Display (headings) + Lato (body)
 */
import { motion, type Transition } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  Star,
  Truck,
  ShieldCheck,
  Leaf,
  Heart,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663413124505/525q8PM2kAPEprfxnwWS5B/hero-banner-Zai4hkQumtyb5TEampvCUP.webp";
const SPICES_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663413124505/525q8PM2kAPEprfxnwWS5B/spices-category-SqdwPHP3iSpZdssGgESKwr.webp";
const PRODUCE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663413124505/525q8PM2kAPEprfxnwWS5B/fresh-produce-VRX8hnzVCjDsRkhJT4wygV.webp";
const DAL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663413124505/525q8PM2kAPEprfxnwWS5B/dal-grains-PYfCHQsPywXmRYuxdF42Wj.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] } as Transition,
  }),
};

const features = [
  {
    icon: Leaf,
    title: "100% Authentic",
    desc: "Directly sourced from Nepal — genuine products you know and love.",
  },
  {
    icon: Truck,
    title: "Weekly Deliveries",
    desc: "Fresh stock arrives every week from our trusted suppliers in Nepal.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    desc: "Every product is carefully inspected before reaching our shelves.",
  },
  {
    icon: Heart,
    title: "Community First",
    desc: "Supporting the Nepali community in Japan since 2015.",
  },
];

const categories = [
  {
    title: "Spices & Masala",
    count: "40+ items",
    img: SPICES_IMG,
    color: "from-amber-900/70",
  },
  {
    title: "Fresh Produce",
    count: "25+ items",
    img: PRODUCE_IMG,
    color: "from-green-900/70",
  },
  {
    title: "Dal & Grains",
    count: "30+ items",
    img: DAL_IMG,
    color: "from-orange-900/70",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[oklch(0.985_0.012_80)]">
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        {/* Gradient overlay — dark on left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />
        {/* Warm bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[oklch(0.985_0.012_80)] to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            animate="visible"
          >
            {/* Tag */}
            <motion.div
              variants={fadeUp}
              custom={0}
              className="inline-flex items-center gap-2 bg-[oklch(0.72_0.16_65)]/20 border border-[oklch(0.72_0.16_65)]/40 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[oklch(0.72_0.16_65)] animate-pulse" />
              <span className="font-body text-sm font-semibold text-[oklch(0.92_0.05_75)] tracking-wide">
                Japan's Authentic Nepali Grocery
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6"
            >
              Taste of{" "}
              <span className="text-[oklch(0.72_0.16_65)] italic">Nepal</span>
              <br />
              in the Heart of Japan
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              custom={2}
              className="font-body text-lg text-white/80 leading-relaxed mb-8 max-w-xl"
            >
              From fragrant spices and hearty dal to fresh Nepali vegetables and beloved snacks — everything you need to cook the flavours of home.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp}
              custom={3}
              className="flex flex-wrap gap-4"
            >
              <Link href="/products">
                <button className="group inline-flex items-center gap-2 bg-[oklch(0.52_0.14_38)] hover:bg-[oklch(0.46_0.14_38)] text-white font-body font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Browse Products
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/about">
                <button className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-body font-semibold px-7 py-3.5 rounded-full border border-white/30 transition-all duration-200 backdrop-blur-sm">
                 About Us
                </button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              custom={4}
              className="flex flex-wrap gap-8 mt-12"
            >
              {[
                { value: "500+", label: "Products" },
                { value: "9 yrs", label: "In Business" },
                { value: "2,000+", label: "Happy Customers" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl font-bold text-[oklch(0.72_0.16_65)]">
                    {stat.value}
                  </p>
                  <p className="font-body text-sm text-white/70">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-14"
          >
            <motion.div variants={fadeUp} custom={0} className="flex justify-center mb-4">
              <div className="section-divider" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-display text-4xl font-bold text-[oklch(0.22_0.05_50)]"
            >
              Why Choose Himalayan Bazaar?
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                custom={i * 0.15}
                className="group bg-[oklch(0.985_0.012_80)] rounded-2xl p-7 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-amber-100"
              >
                <div className="w-14 h-14 rounded-2xl bg-[oklch(0.52_0.14_38)]/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-[oklch(0.52_0.14_38)] transition-colors duration-300">
                  <f.icon className="w-6 h-6 text-[oklch(0.52_0.14_38)] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display text-lg font-bold text-[oklch(0.22_0.05_50)] mb-2">
                  {f.title}
                </h3>
                <p className="font-body text-sm text-[oklch(0.52_0.05_60)] leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CATEGORIES ─── */}
      <section className="py-20 bg-[oklch(0.985_0.012_80)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4"
          >
            <div>
              <motion.div variants={fadeUp} custom={0} className="flex mb-3">
                <div className="section-divider" />
              </motion.div>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="font-display text-4xl font-bold text-[oklch(0.22_0.05_50)]"
              >
                Shop by Category
              </motion.h2>
            </div>
            <motion.div variants={fadeUp} custom={2}>
              <Link href="/products">
                <button className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-[oklch(0.52_0.14_38)] hover:text-[oklch(0.42_0.14_38)] transition-colors group">
                  View all products
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                custom={i * 0.15}
              >
                <Link href="/products">
                  <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer">
                    <img
                      src={cat.img}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} to-transparent`} />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="font-body text-xs font-semibold text-white/70 uppercase tracking-widest mb-1">
                        {cat.count}
                      </p>
                      <h3 className="font-display text-2xl font-bold text-white">
                        {cat.title}
                      </h3>
                      <div className="flex items-center gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="font-body text-sm text-[oklch(0.72_0.16_65)] font-semibold">
                          Explore
                        </span>
                        <ArrowRight className="w-4 h-4 text-[oklch(0.72_0.16_65)]" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BANNER STRIP ─── */}
      <section className="py-16 bg-[oklch(0.52_0.14_38)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px)"
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
                Can't find what you're looking for?
              </h2>
              <p className="font-body text-white/80 text-lg">
                We take special orders! Contact us and we'll source it directly from Nepal.
              </p>
            </div>
            <Link href="/contact">
              <button className="shrink-0 bg-white text-[oklch(0.52_0.14_38)] font-body font-bold px-8 py-4 rounded-full hover:bg-[oklch(0.72_0.16_65)] hover:text-white transition-all duration-200 shadow-lg">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
