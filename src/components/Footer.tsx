import { Link } from "react-router-dom";
import { Calculator } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Calculator className="text-primary" size={20} />
              <span className="font-bold text-foreground">CGPA <span className="text-primary">Calculator</span></span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Free online CGPA, GPA and percentage calculators for students worldwide. Accurate, fast, and easy to use.
            </p>
          </div>

          {/* Calculators */}
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

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/disclaimer" className="text-muted-foreground hover:text-primary transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} CGPA Calculator. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
