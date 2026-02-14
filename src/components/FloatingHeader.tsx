import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Calculator, ChevronDown } from "lucide-react";

const toolLinks = [
  { to: "/cgpa-to-percentage", label: "CGPA to Percentage" },
  { to: "/percentage-to-cgpa", label: "Percentage to CGPA" },
  { to: "/gpa-to-cgpa", label: "GPA to CGPA" },
  { to: "/grade-to-gpa", label: "Grade to GPA" },
  { to: "/target-gpa", label: "Target GPA Calculator" },
];

const FloatingHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <div className="glass-panel px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Calculator className="text-primary" size={24} />
            <span className="text-lg font-bold tracking-tight text-foreground">
              CGPA <span className="text-primary">Calculator</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                location.pathname === "/" ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setToolsOpen(true)}
              onMouseLeave={() => setToolsOpen(false)}
            >
              <button
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-1 ${
                  toolLinks.some(l => l.to === location.pathname) ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Calculators <ChevronDown size={14} />
              </button>
              <AnimatePresence>
                {toolsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-56 glass-panel p-2"
                  >
                    {toolLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        className={`block px-4 py-2.5 rounded-xl text-sm transition-all ${
                          location.pathname === link.to
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/about"
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                location.pathname === "/about" ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                location.pathname === "/contact" ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Contact
            </Link>
          </nav>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-foreground p-2">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="glass-panel mt-2 p-4 lg:hidden"
            >
              <nav className="flex flex-col gap-1">
                <Link to="/" onClick={() => setMobileOpen(false)} className="px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50">Home</Link>
                <div className="px-4 py-2 text-xs uppercase tracking-wider text-muted-foreground/60">Calculators</div>
                {toolLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm transition-all ${
                      location.pathname === link.to ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="border-t border-border mt-2 pt-2">
                  <Link to="/about" onClick={() => setMobileOpen(false)} className="px-4 py-3 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 block">About</Link>
                  <Link to="/contact" onClick={() => setMobileOpen(false)} className="px-4 py-3 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 block">Contact</Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default FloatingHeader;
