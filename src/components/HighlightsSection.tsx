import { motion } from "framer-motion";
import { CheckCircle2, AirVent, Refrigerator, Settings } from "lucide-react";

const highlights = [
  {
    icon: AirVent,
    title: "AC Installations & Servicing",
    description: "Successfully completed multiple AC installations and servicing projects for residential customers through Urban Company.",
  },
  {
    icon: Refrigerator,
    title: "Complex Refrigerator Repairs",
    description: "Diagnosed and repaired complex refrigerator cooling issues, restoring proper functionality for satisfied clients.",
  },
  {
    icon: Settings,
    title: "Preventive Maintenance Programs",
    description: "Provided preventive maintenance services that improved appliance efficiency and extended product life.",
  },
];

const spring = { type: "spring" as const, duration: 0.4, bounce: 0 };

const HighlightsSection = () => (
  <section className="py-16 sm:py-24 bg-muted">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={spring}
      >
        <h2 className="text-foreground mb-12" style={{ fontSize: "clamp(1.75rem, 5vw, 2.25rem)" }}>
          Work Highlights
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {highlights.map(({ icon: Icon, title, description }) => (
          <motion.div
            key={title}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: spring },
            }}
            className="p-6 rounded-2xl bg-card shadow-card"
          >
            <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center mb-4">
              <Icon size={22} className="text-accent-foreground" />
            </div>
            <h3 className="font-semibold text-card-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HighlightsSection;
