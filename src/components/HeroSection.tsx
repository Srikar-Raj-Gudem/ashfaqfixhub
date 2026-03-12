import { motion } from "framer-motion";
import { AirVent, Refrigerator, Wrench, Phone } from "lucide-react";
import profileImg from "@/assets/ashfaq-profile.jpg";

const highlights = [
  { icon: AirVent, label: "AC Repair" },
  { icon: Refrigerator, label: "Refrigerator Repair" },
  { icon: Wrench, label: "Appliance Maintenance" },
];

const spring = { type: "spring" as const, duration: 0.4, bounce: 0 };

const HeroSection = () => (
  <section id="home" className="min-h-[85svh] flex items-center pt-16 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-24">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.1 }}
        >
          <p className="text-sm font-medium text-primary mb-4 uppercase tracking-wide">
            Electronics Technician · Hyderabad
          </p>
          <h1 className="text-foreground leading-tight mb-6" style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)" }}>
            Expert Appliance Repair for Your Home
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-[55ch] mb-8">
            Reliable service for air conditioners, refrigerators, and more in Hyderabad. Fast, professional, and trustworthy.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center h-11 px-6 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-colors"
            >
              Book a Service
            </motion.a>
            <motion.a
              href="tel:95553360977"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 h-11 px-6 rounded-full border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors"
            >
              <Phone size={16} />
              Contact Now
            </motion.a>
          </div>

          <div className="flex flex-wrap gap-6">
            {highlights.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
                  <Icon size={18} className="text-accent-foreground" />
                </div>
                {label}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...spring, delay: 0.3 }}
          className="flex justify-center lg:justify-end"
        >
          <img
            src={profileImg}
            alt="Md. Ashfaq Ali - Electronics Technician"
            className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-2xl"
            style={{ outline: "1px solid rgba(0,0,0,0.05)", outlineOffset: "-1px" }}
            loading="eager"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
