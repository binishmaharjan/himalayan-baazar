/**
 * Navbar — Himalayan Bazaar
 * Design: Sticky translucent nav with terracotta accent underlines
 * Font: Playfair Display for brand name, Lato for nav links
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ShoppingBag, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-amber-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Brand */}
            <Link href="/">
              <div className="flex items-center gap-2 group">
                <div className="w-9 h-9 rounded-full bg-terracotta flex items-center justify-center shadow-md">
                  <ShoppingBag className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="font-display text-xl font-bold text-[oklch(0.52_0.14_38)] leading-none block">
                    Himalayan
                  </span>
                  <span className="font-body text-xs font-semibold tracking-[0.2em] text-[oklch(0.32_0.09_145)] uppercase leading-none">
                    Bazaar
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = location === link.href;
                return (
                  <Link key={link.href} href={link.href}>
                    <span
                      className={`relative font-body text-sm font-semibold tracking-wide transition-colors duration-200 group ${
                        isActive
                          ? "text-[oklch(0.52_0.14_38)]"
                          : "text-[oklch(0.38_0.08_50)] hover:text-[oklch(0.52_0.14_38)]"
                      }`}
                    >
                      {link.label}
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-[oklch(0.72_0.16_65)] transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* Location badge */}
            <div className="hidden md:flex items-center gap-1.5 bg-[oklch(0.32_0.09_145)]/10 px-3 py-1.5 rounded-full">
              <MapPin className="w-3.5 h-3.5 text-[oklch(0.32_0.09_145)]" />
              <span className="font-body text-xs font-semibold text-[oklch(0.32_0.09_145)]">
                Tokyo, Japan
              </span>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-lg text-[oklch(0.38_0.08_50)] hover:bg-amber-50 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-100 shadow-lg md:hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link) => {
                const isActive = location === link.href;
                return (
                  <Link key={link.href} href={link.href}>
                    <span
                      className={`block py-3 font-body font-semibold text-base border-b border-amber-50 last:border-0 transition-colors ${
                        isActive
                          ? "text-[oklch(0.52_0.14_38)]"
                          : "text-[oklch(0.38_0.08_50)]"
                      }`}
                    >
                      {link.label}
                    </span>
                  </Link>
                );
              })}
              <div className="flex items-center gap-1.5 pt-3">
                <MapPin className="w-3.5 h-3.5 text-[oklch(0.32_0.09_145)]" />
                <span className="font-body text-xs font-semibold text-[oklch(0.32_0.09_145)]">
                  Tokyo, Japan
                </span>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
