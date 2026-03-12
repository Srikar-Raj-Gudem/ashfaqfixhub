import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How much does AC repair cost?",
    a: "The cost depends on the problem. After diagnosis, I provide transparent pricing before starting any work.",
  },
  {
    q: "Do you provide home service?",
    a: "Yes, I provide doorstep service across the greater Hyderabad area for all types of appliance repairs.",
  },
  {
    q: "Do you use original replacement parts?",
    a: "Yes, I always use genuine or high-quality compatible parts to ensure long-lasting repairs.",
  },
  {
    q: "What if the appliance stops working again?",
    a: "I offer a service guarantee. If the same issue recurs within the warranty period, I'll fix it at no extra charge.",
  },
  {
    q: "Do you repair all types of air conditioners?",
    a: "Yes, I repair and service split ACs, window ACs, and portable air conditioning units of all major brands.",
  },
];

const spring = { type: "spring" as const, duration: 0.4, bounce: 0 };

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 sm:py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={spring}
          className="text-center mb-12"
        >
          <h2 className="text-foreground mb-2" style={{ fontSize: "clamp(1.75rem, 5vw, 2.25rem)" }}>
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">Answers to Common Questions from Our Customers</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...spring, delay: 0.1 }}
          className="space-y-3"
        >
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-xl shadow-card overflow-hidden bg-card">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-sm font-semibold text-card-foreground pr-4">{faq.q}</span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={18} className="text-muted-foreground shrink-0" />
                </motion.div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
