import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Clock, 
  Shield, 
  Wrench, 
  BadgeCheck, 
  Banknote,
  Headphones
} from 'lucide-react';

const reasons = [
  {
    icon: Clock,
    title: 'Quick Turnaround',
    description: 'Most repairs completed within 24-48 hours. Same-day service available for urgent cases.',
  },
  {
    icon: Shield,
    title: '90-Day Warranty',
    description: 'All our repairs come with a 90-day warranty on parts and labor for peace of mind.',
  },
  {
    icon: Wrench,
    title: 'Genuine Parts',
    description: 'We use only original and high-quality replacement parts for lasting repairs.',
  },
  {
    icon: BadgeCheck,
    title: 'Certified Experts',
    description: 'Our technicians are certified and trained to handle all TV brands and models.',
  },
  {
    icon: Banknote,
    title: 'Affordable Pricing',
    description: 'Transparent pricing with no hidden charges. Free diagnosis for all repairs.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock customer support to address your queries and concerns.',
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="section-title text-foreground">
            The <span className="gradient-text">Fixmyscreen</span> Advantage
          </h2>
          <p className="section-subtitle">
            Experience the difference with our customer-first approach and 
            commitment to quality service.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="flex gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-medium transition-all duration-300">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-warm flex items-center justify-center shadow-glow">
                    <reason.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="font-display font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a href="#contact" className="btn-accent inline-flex items-center gap-2">
            Schedule Your Repair Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
