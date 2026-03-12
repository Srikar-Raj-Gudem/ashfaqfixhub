import { motion } from "framer-motion";
import { ShieldCheck, Zap, Wind, DollarSign, Timer } from "lucide-react";

const benefits = [
  { icon: ShieldCheck, text: "Protects your family from allergies and bacteria" },
  { icon: Wind, text: "Improves air quality and cooling performance" },
  { icon: DollarSign, text: "Reduces electricity bills" },
  { icon: Zap, text: "Prevents bad odor and mold buildup" },
  { icon: Timer, text: "Extends AC lifespan significantly" },
];

const spring = { type: "spring" as const, duration: 0.4, bounce: 0 };

const WhyChooseSection = () => (
  <section className="py-16 sm:py-24 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={spring}
        >
          <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wide">Why It Matters</p>
          <h2 className="text-foreground mb-4" style={{ fontSize: "clamp(1.75rem, 5vw, 2.25rem)" }}>
            Why Regular AC Cleaning{" "}
            <span className="text-primary">Matters</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-[55ch]">
            Regular AC cleaning improves cooling efficiency, ensures cleaner and healthier indoor air, and reduces electricity costs.
          </p>

          <div className="space-y-4">
            {benefits.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-accent-foreground" />
                </div>
                <p className="text-sm font-medium text-foreground">{text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...spring, delay: 0.1 }}
          className="grid grid-cols-2 gap-4"
        >
          {[
            { value: "500+", label: "Services Completed" },
            { value: "2+", label: "Years Experience" },
            { value: "98%", label: "Customer Satisfaction" },
            { value: "24/7", label: "Support Available" },
          ].map((stat) => (
            <div key={stat.label} className="p-6 rounded-2xl bg-muted text-center">
              <p className="text-2xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
