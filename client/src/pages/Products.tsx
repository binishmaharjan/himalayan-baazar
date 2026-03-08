/**
 * Products Page — Himalayan Bazaar
 * Design: Himalayan Warmth & Craft
 * Features: Category filter tabs, product grid with hover cards, search bar
 * Colors: Terracotta primary, Saffron accent, Forest green, Warm cream bg
 * Fonts: Playfair Display (headings) + Lato (body)
 */
import { useState } from "react";
import { motion, type Transition } from "framer-motion";
import { Search, Tag, Package, ImageOff } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] } as Transition,
  }),
};

const CATEGORIES = [
  "All",
  "Spices & Masala",
  "Dal & Lentils",
  "Grains & Rice",
  "Snacks & Noodles",
  "Pickles & Condiments",
  "Fresh Produce",
  "Beverages & Tea",
  "Dairy & Ghee",
];

const PRODUCTS = [
  // Spices & Masala
  { id: 1, name: "Turmeric Powder (Besar)", category: "Spices & Masala", origin: "Ilam, Nepal", weight: "200g", desc: "Pure sun-dried turmeric from the hills of Ilam. Rich golden colour and earthy aroma.", tag: "Best Seller" },
  { id: 2, name: "Timur (Sichuan Pepper)", category: "Spices & Masala", origin: "Jumla, Nepal", weight: "100g", desc: "Authentic Nepali timur with its signature numbing citrusy flavour. Essential for momo chutney.", tag: "Unique" },
  { id: 3, name: "Nepali Garam Masala", category: "Spices & Masala", origin: "Kathmandu, Nepal", weight: "150g", desc: "A hand-blended mix of 12 whole spices, ground fresh. Perfect for curries and dal.", tag: null },
  { id: 4, name: "Red Chilli Powder", category: "Spices & Masala", origin: "Palpa, Nepal", weight: "200g", desc: "Fiery red chilli powder made from sun-dried Nepali chillis. Vibrant colour, intense heat.", tag: null },
  { id: 5, name: "Cumin Seeds (Jeera)", category: "Spices & Masala", origin: "Mustang, Nepal", weight: "200g", desc: "Whole cumin seeds with a warm, earthy aroma. Ideal for tadka and rice dishes.", tag: null },
  { id: 6, name: "Coriander Powder", category: "Spices & Masala", origin: "Chitwan, Nepal", weight: "200g", desc: "Freshly ground coriander with a mild citrusy flavour. A staple in Nepali cooking.", tag: null },
  // Dal & Lentils
  { id: 7, name: "Masoor Dal (Red Lentils)", category: "Dal & Lentils", origin: "Terai, Nepal", weight: "1kg", desc: "Split red lentils that cook quickly into a creamy, comforting dal. A Nepali household staple.", tag: "Best Seller" },
  { id: 8, name: "Kalo Dal (Black Lentils)", category: "Dal & Lentils", origin: "Terai, Nepal", weight: "1kg", desc: "Whole black urad dal with a rich, hearty flavour. Perfect for dal bhat.", tag: null },
  { id: 9, name: "Chana Dal", category: "Dal & Lentils", origin: "Terai, Nepal", weight: "1kg", desc: "Split chickpea lentils with a nutty flavour. Great for curries and snacks.", tag: null },
  { id: 10, name: "Moong Dal (Yellow)", category: "Dal & Lentils", origin: "Terai, Nepal", weight: "500g", desc: "Split yellow moong dal — light, nutritious, and easy to digest. Ideal for soups.", tag: null },
  // Grains & Rice
  { id: 11, name: "Chiura (Beaten Rice)", category: "Grains & Rice", origin: "Chitwan, Nepal", weight: "500g", desc: "Flattened rice — a beloved Nepali snack eaten with yogurt, vegetables, or tea.", tag: "Popular" },
  { id: 12, name: "Basmati Rice (Nepali)", category: "Grains & Rice", origin: "Terai, Nepal", weight: "5kg", desc: "Long-grain aromatic rice grown in the fertile Terai plains. Fluffy and fragrant.", tag: null },
  { id: 13, name: "Kodo Ko Pitho (Millet Flour)", category: "Grains & Rice", origin: "Hilly Region, Nepal", weight: "1kg", desc: "Nutritious finger millet flour used for traditional Nepali rotis and porridge.", tag: "Healthy" },
  // Snacks & Noodles
  { id: 14, name: "Wai Wai Noodles", category: "Snacks & Noodles", origin: "Kathmandu, Nepal", weight: "75g × 5", desc: "The iconic Nepali instant noodle — enjoyed dry as a snack or cooked as a quick meal.", tag: "Iconic" },
  { id: 15, name: "Sel Roti Mix", category: "Snacks & Noodles", origin: "Nepal", weight: "500g", desc: "Ready-mix for making traditional Nepali sel roti — crispy ring-shaped rice bread.", tag: "Festive" },
  { id: 16, name: "Chatpate Masala", category: "Snacks & Noodles", origin: "Kathmandu, Nepal", weight: "100g", desc: "The tangy, spicy street food seasoning mix. Toss with puffed rice for authentic chatpate.", tag: "Street Food" },
  // Pickles & Condiments
  { id: 17, name: "Achar (Mixed Pickle)", category: "Pickles & Condiments", origin: "Kathmandu, Nepal", weight: "400g", desc: "Traditional Nepali mixed vegetable pickle in mustard oil. Tangy, spicy, and addictive.", tag: "Best Seller" },
  { id: 18, name: "Mustard Oil (Tori Ko Tel)", category: "Pickles & Condiments", origin: "Terai, Nepal", weight: "1L", desc: "Cold-pressed mustard oil with a pungent, nutty flavour. Essential in Nepali cooking.", tag: null },
  { id: 19, name: "Lapsi Candy", category: "Pickles & Condiments", origin: "Kathmandu, Nepal", weight: "200g", desc: "Sweet-sour candy made from the Nepali hog plum (lapsi). A nostalgic childhood treat.", tag: "Unique" },
  // Fresh Produce
  { id: 20, name: "Fresh Methi (Fenugreek)", category: "Fresh Produce", origin: "Local Farm, Japan", weight: "100g", desc: "Freshly grown fenugreek leaves with a slightly bitter, aromatic flavour.", tag: "Fresh" },
  { id: 21, name: "Bitter Gourd (Karela)", category: "Fresh Produce", origin: "Local Farm, Japan", weight: "300g", desc: "Fresh bitter gourd — a popular vegetable in Nepali and South Asian cuisine.", tag: "Fresh" },
  { id: 22, name: "Taro Root (Pindalu)", category: "Fresh Produce", origin: "Local Farm, Japan", weight: "500g", desc: "Starchy taro root used in traditional Nepali curries and stews.", tag: "Fresh" },
  // Beverages & Tea
  { id: 23, name: "Ilam Tea (Orthodox)", category: "Beverages & Tea", origin: "Ilam, Nepal", weight: "200g", desc: "Premium first-flush orthodox tea from the Ilam hills. Delicate, floral, and aromatic.", tag: "Premium" },
  { id: 24, name: "Masala Tea Mix", category: "Beverages & Tea", origin: "Nepal", weight: "200g", desc: "A blend of Nepali black tea with cardamom, ginger, and cinnamon for the perfect chai.", tag: "Popular" },
  // Dairy & Ghee
  { id: 25, name: "Pure Cow Ghee", category: "Dairy & Ghee", origin: "Nepal", weight: "500g", desc: "Traditionally churned pure cow ghee with a rich, nutty aroma. Ideal for dal and rotis.", tag: "Premium" },
  { id: 26, name: "Yak Cheese (Chhurpi)", category: "Dairy & Ghee", origin: "Solukhumbu, Nepal", weight: "100g", desc: "Hard yak cheese from the Himalayan highlands — a traditional high-altitude snack.", tag: "Unique" },
];

const tagColors: Record<string, string> = {
  "Best Seller": "bg-[oklch(0.52_0.14_38)] text-white",
  "Popular": "bg-[oklch(0.32_0.09_145)] text-white",
  "Premium": "bg-[oklch(0.38_0.08_50)] text-white",
  "Unique": "bg-[oklch(0.72_0.16_65)] text-[oklch(0.22_0.05_50)]",
  "Fresh": "bg-emerald-600 text-white",
  "Healthy": "bg-teal-600 text-white",
  "Festive": "bg-rose-600 text-white",
  "Iconic": "bg-indigo-600 text-white",
  "Street Food": "bg-orange-600 text-white",
};

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = PRODUCTS.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

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
              Our Selection
            </p>
            <h1 className="font-display text-5xl sm:text-6xl font-black text-white mb-4">
              All Products
            </h1>
            <p className="font-body text-lg text-white/70 max-w-xl">
              Over 500 authentic Nepali and South Asian products — from fragrant spices to beloved snacks, all carefully sourced from Nepal.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative max-w-lg mb-8"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[oklch(0.52_0.05_60)]" />
            <input
              type="text"
              placeholder="Search products, categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white border border-amber-200 rounded-full font-body text-sm text-[oklch(0.22_0.05_50)] placeholder:text-[oklch(0.62_0.03_60)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.52_0.14_38)]/30 focus:border-[oklch(0.52_0.14_38)] transition-all shadow-sm"
            />
          </motion.div>

          {/* Category filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-body text-sm font-semibold px-4 py-2 rounded-full border transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[oklch(0.52_0.14_38)] text-white border-[oklch(0.52_0.14_38)] shadow-md"
                    : "bg-white text-[oklch(0.38_0.05_60)] border-amber-200 hover:border-[oklch(0.52_0.14_38)] hover:text-[oklch(0.52_0.14_38)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Results count */}
          <div className="flex items-center gap-2 mb-6">
            <Package className="w-4 h-4 text-[oklch(0.52_0.05_60)]" />
            <p className="font-body text-sm text-[oklch(0.52_0.05_60)]">
              Showing <span className="font-semibold text-[oklch(0.22_0.05_50)]">{filtered.length}</span> products
              {activeCategory !== "All" && (
                <span> in <span className="font-semibold text-[oklch(0.52_0.14_38)]">{activeCategory}</span></span>
              )}
            </p>
          </div>

          {/* Product Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-display text-2xl text-[oklch(0.52_0.05_60)] mb-2">No products found</p>
              <p className="font-body text-sm text-[oklch(0.62_0.03_60)]">Try a different search or category</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={fadeUp}
                  custom={i % 8}
                  className="group bg-white rounded-2xl overflow-hidden border border-amber-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Product image */}
                  <div className="relative aspect-square overflow-hidden bg-[oklch(0.94_0.015_75)] flex items-center justify-center">
                    <ImageOff className="w-16 h-16 text-[oklch(0.65_0.08_60)]" aria-hidden />
                    <span className="sr-only">Image placeholder</span>
                    {product.tag && (
                      <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-body font-bold ${tagColors[product.tag] || "bg-gray-600 text-white"}`}>
                        <Tag className="w-2.5 h-2.5 inline mr-1" />
                        {product.tag}
                      </div>
                    )}
                  </div>

                  {/* Product info */}
                  <div className="p-4">
                    <p className="font-body text-xs font-semibold text-[oklch(0.52_0.14_38)] uppercase tracking-wider mb-1">
                      {product.category}
                    </p>
                    <h3 className="font-display text-base font-bold text-[oklch(0.22_0.05_50)] mb-2 leading-snug">
                      {product.name}
                    </h3>
                    <p className="font-body text-xs text-[oklch(0.52_0.05_60)] leading-relaxed mb-3 line-clamp-2">
                      {product.desc}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-body text-xs text-[oklch(0.62_0.03_60)]">
                        {product.weight} · {product.origin}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
