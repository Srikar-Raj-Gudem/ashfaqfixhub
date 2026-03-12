import { motion } from "framer-motion";
import { AirVent, Refrigerator, Wrench, CalendarCheck } from "lucide-react";

const services = [
  {
    icon: AirVent,
    title: "AC Installation & Repair",
    items: ["Installation of air conditioning systems", "AC servicing and maintenance", "Gas refilling", "Troubleshooting cooling problems"],
  },
  {
    icon: Refrigerator,
    title: "Refrigerator Repair",
    items: ["Cooling issue diagnosis", "Compressor repair", "Electrical fault repair", "Thermostat troubleshooting"],
  },
  {
    icon: Wrench,
    title: "Home Appliance Maintenance",
    items: ["Repair and servicing of household electronic appliances", "Electrical diagnostics", "Component replacement"],
  },
  {
    icon: CalendarCheck,
    title: "Preventive Maintenance",
    items: ["Regular servicing to improve performance", "Increase appliance lifespan", "Prevent future technical problems"],
  },
];

const spring = { type: "spring" as const, duration: 0.4, bounce: 0 };

const ServicesSection = () => (
  <section id="services" className="py-16 sm:py-24 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={spring}
      >
        <h2 className="text-foreground mb-4" style={{ fontSize: "clamp(1.75rem, 5vw, 2.25rem)" }}>
          Services
        </h2>
        <p className="text-muted-foreground mb-12 max-w-[55ch]">
          Comprehensive appliance repair and maintenance services for your home.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {services.map(({ icon: Icon, title, items }) => (
          <motion.div
            key={title}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: spring },
            }}
            whileHover={{ y: -4, transition: spring }}
            className="p-6 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-shadow duration-200"
          >
            <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center mb-4">
              <Icon size={22} className="text-accent-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground mb-3">{title}</h3>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;
