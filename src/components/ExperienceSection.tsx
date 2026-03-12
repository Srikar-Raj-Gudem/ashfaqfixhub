import { motion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";

const responsibilities = [
  "Installation, repair, and maintenance of air conditioners, refrigerators, and other home appliances.",
  "Diagnosing technical faults and implementing efficient repair solutions.",
  "Delivering high-quality customer service and maintaining strong communication with clients.",
  "Following safety standards and professional technical guidelines.",
];

const spring = { type: "spring" as const, duration: 0.4, bounce: 0 };

const ExperienceSection = () => (
  <section id="experience" className="py-16 sm:py-24 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={spring}
      >
        <h2 className="text-foreground mb-12" style={{ fontSize: "clamp(1.75rem, 5vw, 2.25rem)" }}>
          Work Experience
        </h2>

        <div className="shadow-card rounded-2xl p-6 sm:p-8 bg-card">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
              <Briefcase size={22} className="text-accent-foreground" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-card-foreground">Electronics Technician</h3>
              <p className="text-sm text-primary font-medium">Urban Company</p>
              <p className="text-sm text-muted-foreground mt-1">2 Years of Experience</p>
            </div>
          </div>

          <div className="space-y-3">
            {responsibilities.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;
