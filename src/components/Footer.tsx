import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer className="bg-foreground">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        {/* Brand */}
        <div>
          <p className="font-semibold text-lg text-background mb-2">Md. Ashfaq Ali</p>
          <p className="text-sm text-background/50 leading-relaxed">
            Professional Electronics Technician providing reliable home appliance repair & maintenance services in Hyderabad.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-sm font-semibold text-background mb-4">Quick Links</p>
          <div className="space-y-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm text-background/50 hover:text-background transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <p className="text-sm font-semibold text-background mb-4">Contact Information</p>
          <div className="space-y-3">
            <a href="tel:95553360977" className="flex items-center gap-2 text-sm text-background/50 hover:text-background transition-colors">
              <Phone size={14} /> 95553360977
            </a>
            <a
              href="https://wa.me/9195553360977"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-background/50 hover:text-background transition-colors"
            >
              <MessageCircle size={14} /> WhatsApp
            </a>
            <a href="mailto:mdashfaqali777@gmail.com" className="flex items-center gap-2 text-sm text-background/50 hover:text-background transition-colors">
              <Mail size={14} /> mdashfaqali777@gmail.com
            </a>
            <div className="flex items-center gap-2 text-sm text-background/50">
              <MapPin size={14} /> Hyderabad, India
            </div>
          </div>
        </div>

        {/* Service Hours */}
        <div>
          <p className="text-sm font-semibold text-background mb-4">Service Hours</p>
          <div className="space-y-2 text-sm text-background/50">
            <div className="flex items-center gap-2">
              <Clock size={14} />
              <span>Mon – Sat: 9 AM – 7 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} />
              <span>Sunday: Emergency Only</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 pt-8">
        <p className="text-sm text-background/30 text-center">
          © {new Date().getFullYear()} Md. Ashfaq Ali – Electronics Technician Portfolio. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
