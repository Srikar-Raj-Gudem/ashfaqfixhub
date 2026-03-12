import { motion } from "framer-motion";
import { AirVent, Refrigerator, Cpu, Search, Settings, Users, ShieldCheck } from "lucide-react";

const skills = [
  { icon: AirVent, label: "AC Repair & Maintenance" },
  { icon: Refrigerator, label: "Refrigerator Troubleshooting" },
  { icon: Cpu, label: "Household Electronics Repair" },
  { icon: Search, label: "Fault Diagnosis & Problem Solving" },
  { icon: Settings, label: "Installation & Servicing" },
  { icon: Users, label: "Customer Service & Communication" },
  { icon: ShieldCheck, label: "Preventive Maintenance" },
];

const spring = { type: "spring" as const, duration: 0.4, bounce: 0 };

const SkillsSection = () => (
  <section id="skills" className="py-16 sm:py-24 bg-muted">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={spring}
      >
        <h2 className="text-foreground mb-12" style={{ fontSize: "clamp(1.75rem, 5vw, 2.25rem)" }}>
          Skills & Expertise
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {skills.map(({ icon: Icon, label }) => (
          <motion.div
            key={label}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: spring },
            }}
            className="flex items-center gap-4 p-4 rounded-xl bg-card shadow-card"
          >
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
              <Icon size={20} className="text-accent-foreground" />
            </div>
            <p className="text-sm font-medium text-card-foreground">{label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;
