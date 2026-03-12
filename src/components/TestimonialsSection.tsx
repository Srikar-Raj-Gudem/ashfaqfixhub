import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ravi Kumar",
    text: "Professional and reliable technician. Fixed my AC quickly and explained the issue clearly. Highly recommended! Arrived very fast and fixed the issue in minutes.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    text: "Got emergency support even at night. Highly recommended! Arrived very fast and fixed the wiring issue in minutes. Excellent communication throughout.",
    rating: 5,
  },
  {
    name: "Mohd. Irfan",
    text: "Very skilled in diagnosing refrigerator problems. My fridge is working perfectly now. Great work! Will definitely call again for any appliance issues.",
    rating: 5,
  },
];

const spring = { type: "spring" as const, duration: 0.4, bounce: 0 };

const TestimonialsSection = () => (
  <section id="testimonials" className="py-16 sm:py-24 bg-muted">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={spring}
        className="text-center mb-12"
      >
        <h2 className="text-foreground mb-2" style={{ fontSize: "clamp(1.75rem, 5vw, 2.25rem)" }}>
          What Our Clients Say
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Hear from our satisfied customers who trust us for fast, reliable, and professional electrical services for their homes.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {testimonials.map(({ name, text, rating }) => (
          <motion.div
            key={name}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: spring },
            }}
            whileHover={{ y: -4, transition: spring }}
            className="p-6 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-shadow duration-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">
                {name.charAt(0)}
              </div>
              <p className="text-sm font-semibold text-card-foreground">{name}</p>
            </div>
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: rating }).map((_, i) => (
                <Star key={i} size={14} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default TestimonialsSection;
