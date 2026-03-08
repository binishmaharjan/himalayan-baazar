/**
 * Footer — Himalayan Bazaar
 * Design: Dark forest green footer with warm cream text, mandala-inspired divider
 */
import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[oklch(0.22_0.07_145)] text-[oklch(0.92_0.02_80)]">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-[oklch(0.52_0.14_38)] via-[oklch(0.72_0.16_65)] to-[oklch(0.52_0.14_38)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h3 className="font-display text-2xl font-bold text-white leading-tight">
                Himalayan Bazaar
              </h3>
              <p className="font-body text-xs font-semibold tracking-[0.2em] text-[oklch(0.72_0.16_65)] uppercase mt-1">
                ネパール食料品店
              </p>
            </div>
            <p className="font-body text-sm text-[oklch(0.78_0.03_80)] leading-relaxed mb-5">
              Bringing the authentic tastes of Nepal to Japan since 2015. Your home away from home for Nepali groceries, spices, and more.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[oklch(0.52_0.14_38)] transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-base font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="font-body text-sm text-[oklch(0.78_0.03_80)] hover:text-[oklch(0.72_0.16_65)] transition-colors duration-200 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[oklch(0.52_0.14_38)] inline-block" />
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-base font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[oklch(0.52_0.14_38)] mt-0.5 shrink-0" />
                <span className="font-body text-sm text-[oklch(0.78_0.03_80)]">
                  2-14-8 Shin-Okubo, Shinjuku-ku<br />Tokyo 169-0073, Japan
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[oklch(0.52_0.14_38)] shrink-0" />
                <span className="font-body text-sm text-[oklch(0.78_0.03_80)]">+81 3-1234-5678</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[oklch(0.52_0.14_38)] shrink-0" />
                <span className="font-body text-sm text-[oklch(0.78_0.03_80)]">info@himalayanbazaar.jp</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-base font-bold text-white mb-4">Store Hours</h4>
            <ul className="space-y-2">
              {[
                { day: "Mon – Fri", hours: "10:00 – 20:00" },
                { day: "Saturday", hours: "09:00 – 21:00" },
                { day: "Sunday", hours: "10:00 – 19:00" },
                { day: "Holidays", hours: "10:00 – 18:00" },
              ].map((item) => (
                <li key={item.day} className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[oklch(0.52_0.14_38)] shrink-0" />
                  <span className="font-body text-xs text-[oklch(0.78_0.03_80)]">
                    <span className="font-semibold text-white">{item.day}:</span> {item.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-[oklch(0.60_0.03_80)]">
            © 2024 Himalayan Bazaar. All rights reserved.
          </p>
          <p className="font-body text-xs text-[oklch(0.60_0.03_80)]">
            Made with ❤️ for the Nepali community in Japan
          </p>
        </div>
      </div>
    </footer>
  );
}
