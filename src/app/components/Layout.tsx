import { Outlet, Link, useLocation } from "react-router";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  HeartPulse,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { useEffect, useState } from "react";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Our Doctors", href: "/doctors" },
    { name: "Treatments", href: "/treatments" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  const showMobileSupportBar = !location.pathname.startsWith("/about") && !location.pathname.startsWith("/contact") && location.pathname !== "/";

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col text-slate-900">
      <header className="sticky top-0 z-50 border-b border-white/50 bg-white/65 backdrop-blur-xl shadow-[0_12px_30px_rgba(23,49,62,0.08)]">
        <div className="page-shell">
          <div className="hidden border-b border-slate-200/70 py-3 md:block">
            <div className="flex items-center justify-between text-sm text-slate-600">
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-cyan-700" />
                  <span>080 6297 2813</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-cyan-700" />
                  <span>contact@apolloathena.com</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-rose-700">
                  24/7 Emergency
                </span>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-cyan-700" />
                  <span>Defence Colony, New Delhi</span>
                </div>
              </div>
            </div>
          </div>

          <nav className="flex items-center justify-between py-3 sm:py-4">
            <Link to="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(145deg,#0e7490,#14b8a6_55%,#fb7185)] shadow-[0_20px_45px_rgba(14,116,144,0.28)] sm:h-12 sm:w-12">
                <HeartPulse className="h-5 w-5 text-white sm:h-6 sm:w-6" />
              </div>
              <div className="min-w-0">
                <h1 className="truncate bg-gradient-to-r from-cyan-800 via-teal-700 to-rose-500 bg-clip-text text-lg font-bold text-transparent sm:text-2xl">
                  Apollo Athena
                </h1>
                <p className="hidden text-xs leading-tight text-slate-500 min-[380px]:block">
                  Precision oncology with compassionate care
                </p>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-3 rounded-full border border-white/60 bg-white/70 px-3 py-2 shadow-[0_18px_40px_rgba(23,49,62,0.08)] backdrop-blur-xl">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    isActive(item.href)
                      ? "bg-gradient-to-r from-cyan-700 to-teal-500 text-white shadow-[0_12px_26px_rgba(14,116,144,0.25)]"
                      : "text-slate-700 hover:bg-cyan-50 hover:text-cyan-700"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/contact" className="cta-primary px-6 py-2.5 text-sm">
                Book Appointment
              </Link>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex-shrink-0 rounded-2xl border border-white/60 bg-white/80 p-3 text-slate-700 shadow-[0_12px_24px_rgba(23,49,62,0.08)] transition-colors hover:bg-white lg:hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </nav>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(243,251,252,0.94))] lg:hidden">
            <div className="page-shell space-y-3 py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between rounded-2xl px-4 py-4 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "bg-[linear-gradient(135deg,rgba(14,116,144,0.14),rgba(20,184,166,0.1))] text-cyan-800"
                      : "bg-white/70 text-slate-700 hover:bg-white"
                  }`}
                >
                  {item.name}
                  <ChevronRight className="h-4 w-4" />
                </Link>
              ))}
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="cta-primary w-full text-center">
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className={`flex-1 ${showMobileSupportBar ? "pb-32 sm:pb-24 lg:pb-0" : "pb-0"}`}>
        <Outlet />
      </main>

      <footer className="relative overflow-hidden bg-slate-950 text-slate-300">
        <div className="floating-orb left-0 top-0 h-48 w-48 bg-cyan-500/20" />
        <div className="floating-orb bottom-0 right-0 h-56 w-56 bg-rose-400/15" />
        <div className="page-shell relative py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-bold text-white">Apollo Athena</h3>
              <p className="mb-4 text-sm">
                Leading cancer care hospital dedicated to providing world-class treatment with compassion and excellence.
              </p>
              <div className="flex gap-4">
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/8 transition-colors hover:bg-cyan-600" aria-label="Facebook">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/8 transition-colors hover:bg-cyan-600" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/8 transition-colors hover:bg-cyan-600" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-4 font-bold text-white">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="transition-colors hover:text-white">Home</Link></li>
                <li><Link to="/doctors" className="transition-colors hover:text-white">Our Doctors</Link></li>
                <li><Link to="/treatments" className="transition-colors hover:text-white">Treatments</Link></li>
                <li><Link to="/blog" className="transition-colors hover:text-white">Blog</Link></li>
                <li><Link to="/about" className="transition-colors hover:text-white">About Us</Link></li>
                <li><Link to="/contact" className="transition-colors hover:text-white">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-bold text-white">Treatments</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/treatments/colorectal-cancer" className="transition-colors hover:text-white">Colorectal Cancer</Link></li>
                <li><Link to="/treatments/esophageal-gastric-cancer" className="transition-colors hover:text-white">Esophageal & Gastric Cancer</Link></li>
                <li><Link to="/treatments/liver-cancer" className="transition-colors hover:text-white">Liver Cancer</Link></li>
                <li><Link to="/treatments/gallbladder-biliary-cancer" className="transition-colors hover:text-white">Gall Bladder Cancer</Link></li>
                <li><Link to="/treatments/pancreatic-periampullary-cancer" className="transition-colors hover:text-white">Pancreatic Cancer</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-bold text-white">Contact Us</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-1 h-4 w-4 flex-shrink-0" />
                  <span>Apollo Women's Cancer Centre, Block E, Defence Colony, New Delhi, Delhi 110024</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>080 6297 2813</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span>contact@apolloathena.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm">
            <p>&copy; 2026 Apollo Athena Hospital. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {showMobileSupportBar && (
        <div className="fixed inset-x-3 bottom-2 z-40 lg:hidden sm:inset-x-4 sm:bottom-4">
          <div className="surface-card flex items-center justify-between gap-2.5 px-3 py-2 shadow-[0_18px_40px_rgba(23,49,62,0.18)] sm:gap-3 sm:px-4 sm:py-3">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-800">Need support now?</p>
              <p className="text-[13px] leading-4 text-slate-600 sm:text-sm sm:leading-5">Talk to our oncology care team.</p>
            </div>
            <Link to="/contact" className="cta-primary flex-shrink-0 px-4 py-1.5 text-sm sm:px-4 sm:py-2">
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
