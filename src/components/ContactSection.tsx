import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const spring = { type: "spring" as const, duration: 0.4, bounce: 0 };

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! Ashfaq will get back to you soon.");
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={spring}
        >
          <h2 className="text-foreground mb-4" style={{ fontSize: "clamp(1.75rem, 5vw, 2.25rem)" }}>
            Get In Touch
          </h2>
          <p className="text-muted-foreground mb-12 max-w-[55ch]">
            Need appliance repair? Reach out directly or fill out the form below.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...spring, delay: 0.1 }}
            className="space-y-6"
          >
            <a href="tel:95553360977" className="flex items-center gap-4 p-4 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-shadow group">
              <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center shrink-0">
                <Phone size={20} className="text-accent-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-card-foreground">Call Now</p>
                <p className="text-sm text-muted-foreground">95553360977</p>
              </div>
            </a>

            <a href="mailto:mdashfaqali777@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-shadow">
              <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center shrink-0">
                <Mail size={20} className="text-accent-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-card-foreground">Email</p>
                <p className="text-sm text-muted-foreground">mdashfaqali777@gmail.com</p>
              </div>
            </a>

            <a
              href="https://wa.me/9195553360977"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center shrink-0">
                <MessageCircle size={20} className="text-accent-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-card-foreground">WhatsApp</p>
                <p className="text-sm text-muted-foreground">Send a message</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-card shadow-card">
              <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-accent-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-card-foreground">Location</p>
                <p className="text-sm text-muted-foreground">Hyderabad, India</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...spring, delay: 0.2 }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full h-12 px-4 rounded-lg bg-input text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background transition-shadow"
            />
            <input
              type="tel"
              placeholder="Your Phone Number"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full h-12 px-4 rounded-lg bg-input text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background transition-shadow"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-input text-foreground placeholder:text-muted-foreground text-sm resize-none focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background transition-shadow"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="h-11 px-6 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-colors"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
