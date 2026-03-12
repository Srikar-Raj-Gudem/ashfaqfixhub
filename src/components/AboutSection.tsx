import { motion } from "framer-motion";
import { MapPin, GraduationCap, CheckCircle2 } from "lucide-react";
import aboutImg from "@/assets/about-technician.jpg";

const spring = { type: "spring" as const, duration: 0.4, bounce: 0 };

const highlights = [
  "Specialized in AC, refrigerator & appliance repair",
  "2+ years of professional experience",
  "Trusted by hundreds of satisfied customers",
  "Serving the greater Hyderabad area",
];

const AboutSection = () => (
  <section id="about" className="py-16 sm:py-24 bg-muted">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={spring}
      >
        <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wide">About Us</p>
        <h2 className="text-foreground mb-12" style={{ fontSize: "clamp(1.75rem, 5vw, 2.25rem)" }}>
          Your Trusted Appliance{" "}
          <span className="text-primary">Repair Expert</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...spring, delay: 0.1 }}
        >
          <p className="text-muted-foreground leading-relaxed mb-6">
            I am a dedicated and skilled Electronics Technician specializing in the repair and maintenance of home appliances such as air conditioners, refrigerators, and other household electronic devices. With hands-on experience in diagnosing technical issues and providing efficient solutions, I am committed to delivering reliable service and ensuring customer satisfaction.
          </p>

          <div className="space-y-3 mb-8">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-primary shrink-0" />
                <p className="text-sm text-foreground font-medium">{item}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <GraduationCap size={18} className="text-primary" />
              Intermediate (Inter Pass)
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={18} className="text-primary" />
              Hyderabad, India
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ ...spring, delay: 0.2 }}
          className="flex justify-center"
        >
          <img
            src={aboutImg}
            alt="Md. Ashfaq Ali repairing an air conditioner"
            className="w-full max-w-md rounded-2xl object-cover"
            style={{ outline: "1px solid rgba(0,0,0,0.05)", outlineOffset: "-1px" }}
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
