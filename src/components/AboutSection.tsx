import { motion } from "framer-motion";
import { MapPin, GraduationCap, User } from "lucide-react";

const spring = { type: "spring" as const, duration: 0.4, bounce: 0 };

const AboutSection = () => (
  <section id="about" className="py-16 sm:py-24 bg-muted">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={spring}
      >
        <h2 className="text-foreground mb-12" style={{ fontSize: "clamp(1.75rem, 5vw, 2.25rem)" }}>
          About Me
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-muted-foreground leading-relaxed max-w-[65ch] mb-6">
              I am a dedicated and skilled Electronics Technician specializing in the repair and maintenance of home appliances such as air conditioners, refrigerators, and other household electronic devices. With hands-on experience in diagnosing technical issues and providing efficient solutions, I am committed to delivering reliable service and ensuring customer satisfaction.
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-[65ch]">
              My practical knowledge and problem-solving abilities allow me to handle various appliance-related technical challenges effectively.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <User size={18} className="text-accent-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Md. Ashfaq Ali</p>
                <p className="text-sm text-muted-foreground">Electronics Technician</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <GraduationCap size={18} className="text-accent-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Intermediate (Inter Pass)</p>
                <p className="text-sm text-muted-foreground">Higher secondary education with practical technical focus</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-accent-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Hyderabad, India</p>
                <p className="text-sm text-muted-foreground">Serving the greater Hyderabad area</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
