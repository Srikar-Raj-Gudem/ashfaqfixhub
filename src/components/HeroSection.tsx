import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, AirVent, Refrigerator, Wrench, Star, CheckCircle2, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import heroImg from "@/assets/hero-technician.jpg";
import profileImg from "@/assets/ashfaq-profile.jpg";

const spring = { type: "spring" as const, duration: 0.5, bounce: 0 };

const services = [
  { icon: AirVent, label: "AC Repair" },
  { icon: Refrigerator, label: "Fridge Repair" },
  { icon: Wrench, label: "Maintenance" },
];

const HeroSection = () => {
  const [form, setForm] = useState({ name: "", phone: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Booking request sent! Ashfaq will call you shortly.");
    setForm({ name: "", phone: "" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-accent/80 via-accent/30 to-transparent" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-center">

          {/* Left content — 7 cols */}
          <div className="lg:col-span-7 relative z-10">
            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0 }}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 mb-6"
            >
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-primary text-primary" />
                ))}
              </div>
              <span className="text-xs font-medium text-accent-foreground">Trusted by 500+ customers in Hyderabad</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.08 }}
              className="text-foreground leading-[1.08] mb-5"
              style={{ fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)" }}
            >
              Expert{" "}
              <span className="relative inline-block">
                <span className="text-primary">Appliance Repair</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
                  className="absolute -bottom-1 left-0 w-full h-1 bg-primary/20 rounded-full origin-left"
                />
              </span>
              <br />
              for Your Home
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.16 }}
              className="text-muted-foreground text-lg leading-relaxed max-w-[52ch] mb-8"
            >
              Fast & reliable AC repair, refrigerator troubleshooting, and home appliance maintenance across Hyderabad. Professional service you can trust.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.24 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 h-12 px-7 rounded-full bg-primary text-primary-foreground font-medium text-sm shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
              >
                Book a Service
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </motion.a>
              <motion.a
                href="tel:95553360977"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 h-12 px-7 rounded-full border border-border bg-background text-foreground font-medium text-sm hover:bg-secondary transition-colors"
              >
                <Phone size={16} />
                Call Now
              </motion.a>
            </motion.div>

            {/* Service pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.32 }}
              className="flex flex-wrap gap-3"
            >
              {services.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ ...spring, delay: 0.36 + i * 0.06 }}
                  className="flex items-center gap-2.5 bg-card rounded-xl px-4 py-2.5 shadow-card"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                    <Icon size={16} className="text-accent-foreground" />
                  </div>
                  <span className="text-sm font-medium text-card-foreground">{label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right side — 5 cols */}
          <div className="lg:col-span-5 relative">
            {/* Main hero image */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ ...spring, delay: 0.15 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
                <img
                  src={heroImg}
                  alt="Technician repairing air conditioner"
                  className="w-full aspect-[4/5] object-cover"
                  loading="eager"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <div className="flex items-center gap-3">
                    <img
                      src={profileImg}
                      alt="Md. Ashfaq Ali"
                      className="w-11 h-11 rounded-full object-cover ring-2 ring-background"
                    />
                    <div>
                      <p className="text-sm font-semibold text-background">Md. Ashfaq Ali</p>
                      <p className="text-xs text-background/70">Electronics Technician</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating call card */}
              <motion.a
                href="tel:95553360977"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...spring, delay: 0.5 }}
                whileHover={{ scale: 1.03 }}
                className="absolute -left-4 top-8 sm:-left-6 bg-background rounded-2xl p-4 shadow-card-hover flex items-center gap-3 z-10"
              >
                <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center">
                  <Phone size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">24/7 Support</p>
                  <p className="text-sm font-bold text-foreground">95553360977</p>
                </div>
              </motion.a>

              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...spring, delay: 0.6 }}
                className="absolute -right-2 top-1/3 sm:-right-4 bg-background rounded-2xl p-4 shadow-card-hover z-10"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <CheckCircle2 size={16} className="text-primary" />
                  <span className="text-xs font-semibold text-foreground">500+</span>
                </div>
                <p className="text-[11px] text-muted-foreground">Services Completed</p>
              </motion.div>
            </motion.div>

            {/* Booking form card — below image on mobile, overlapping on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.4 }}
              className="mt-6 lg:-mt-16 relative z-20 bg-primary rounded-2xl p-6 shadow-xl shadow-primary/20"
            >
              <h3 className="text-base font-semibold text-primary-foreground mb-4">
                Book Your Service Now
              </h3>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="flex-1 h-11 px-4 rounded-lg bg-primary-foreground text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="flex-1 h-11 px-4 rounded-lg bg-primary-foreground text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="h-11 px-6 rounded-lg bg-foreground text-background font-medium text-sm transition-colors whitespace-nowrap"
                >
                  Book Now
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
