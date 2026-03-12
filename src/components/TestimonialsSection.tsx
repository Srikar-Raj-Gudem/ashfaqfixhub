import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ravi Kumar",
    rating: 5,
    text: "Professional and reliable technician. Fixed my AC quickly and explained the issue clearly. Highly recommended!",
  },
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Excellent service and clear communication. Ashfaq arrived on time and resolved the problem efficiently.",
  },
  {
    name: "Mohd. Irfan",
    rating: 5,
    text: "Very skilled in diagnosing refrigerator problems. My fridge is working perfectly now. Great work!",
  },
];

const spring = { type: "spring" as const, duration: 0.4, bounce: 0 };

const TestimonialsSection = () => (
  <section id="testimonials" className="py-16 sm:py-24 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={spring}
      >
        <h2 className="text-foreground mb-12" style={{ fontSize: "clamp(1.75rem, 5vw, 2.25rem)" }}>
          Customer Reviews
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {testimonials.map(({ name, rating, text }) => (
          <motion.div
            key={name}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: spring },
            }}
            className="p-6 rounded-2xl bg-card shadow-card"
          >
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: rating }).map((_, i) => (
                <Star key={i} size={16} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{text}"</p>
            <p className="text-sm font-medium text-card-foreground">{name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default TestimonialsSection;
