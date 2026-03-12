import { useState } from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { toast } from "sonner";
import heroImg from "@/assets/hero-technician.jpg";

const spring = { type: "spring" as const, duration: 0.4, bounce: 0 };

const HeroSection = () => {
  const [form, setForm] = useState({ name: "", phone: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Booking request sent! Ashfaq will call you shortly.");
    setForm({ name: "", phone: "" });
  };

  return (
    <section id="home" className="relative min-h-[90svh] flex items-center pt-16 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.1 }}
            className="relative z-10"
          >
            <p className="text-sm font-medium text-muted-foreground mb-3">
              Expert Repairs | Quick Maintenance | Hassle-Free Cooling
            </p>
            <h1 className="text-foreground leading-[1.1] mb-6" style={{ fontSize: "clamp(2.25rem, 6vw, 3.75rem)" }}>
              Professional{" "}
              <span className="text-primary">AC Repair</span>
              ?{"\n"}We Are Ready!
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-[50ch] mb-8">
              Reliable service for air conditioners, refrigerators, and more in Hyderabad. Fast, professional, and trustworthy.
            </p>

            {/* Booking Form Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.3 }}
              className="bg-primary rounded-2xl p-6 max-w-sm"
            >
              <h3 className="text-lg font-semibold text-primary-foreground mb-4">
                Book Your Service Now
              </h3>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="Enter your full name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full h-11 px-4 rounded-lg bg-primary-foreground text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full h-11 px-4 rounded-lg bg-primary-foreground text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full h-11 rounded-lg bg-foreground text-background font-medium text-sm transition-colors"
                >
                  Book Now
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Right hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...spring, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <img
              src={heroImg}
              alt="Technician repairing air conditioner"
              className="w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-2xl object-cover"
              style={{ outline: "1px solid rgba(0,0,0,0.05)", outlineOffset: "-1px" }}
              loading="eager"
            />
            {/* Floating badge */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-background/90 backdrop-blur-sm rounded-xl p-3 shadow-card flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Phone size={18} className="text-primary-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Call Now</p>
                <p className="text-sm font-semibold text-foreground">95553360977</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
