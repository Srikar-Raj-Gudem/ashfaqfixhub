import { Phone, Mail } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer className="py-12 bg-foreground">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid sm:grid-cols-3 gap-8 mb-8">
        <div>
          <p className="font-semibold text-background mb-2">Md. Ashfaq Ali</p>
          <p className="text-sm text-background/60">Electronics Technician</p>
        </div>
        <div>
          <p className="text-sm font-medium text-background mb-3">Quick Links</p>
          <div className="space-y-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm text-background/60 hover:text-background transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-background mb-3">Contact</p>
          <div className="space-y-2">
            <a href="tel:95553360977" className="flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors">
              <Phone size={14} /> 95553360977
            </a>
            <a href="mailto:mdashfaqali777@gmail.com" className="flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors">
              <Mail size={14} /> mdashfaqali777@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-background/10 pt-8">
        <p className="text-sm text-background/40 text-center">
          © {new Date().getFullYear()} Md. Ashfaq Ali – Electronics Technician Portfolio
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
