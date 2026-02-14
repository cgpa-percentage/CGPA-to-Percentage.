import { Link } from "react-router-dom";
import { Calculator, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border mt-20 bg-card/60">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Calculator className="text-primary" size={20} />
              <span className="font-bold text-foreground">CGPA <span className="text-primary">Calculator</span></span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Free online CGPA, GPA and percentage calculators for students worldwide. Accurate, fast, and easy to use.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://instagram.com/zavify" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://x.com/hassan_zaviar" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="X (Twitter)">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/hassanzaviar/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Calculators</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/cgpa-to-percentage" className="text-muted-foreground hover:text-primary transition-colors">CGPA to Percentage</Link></li>
              <li><Link to="/percentage-to-cgpa" className="text-muted-foreground hover:text-primary transition-colors">Percentage to CGPA</Link></li>
              <li><Link to="/gpa-to-cgpa" className="text-muted-foreground hover:text-primary transition-colors">GPA to CGPA</Link></li>
              <li><Link to="/grade-to-gpa" className="text-muted-foreground hover:text-primary transition-colors">Grade to GPA</Link></li>
              <li><Link to="/target-gpa" className="text-muted-foreground hover:text-primary transition-colors">Target GPA Calculator</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/disclaimer" className="text-muted-foreground hover:text-primary transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} CGPA Calculator. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
