import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Monitor, 
  Tv2, 
  Smartphone, 
  Wallpaper, 
  Home, 
  Package,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'LED TV Repair',
    description: 'Expert repair for all LED TV brands including backlight, panel, and motherboard issues.',
    features: ['Backlight Repair', 'Panel Replacement', 'Power Supply Fix'],
    color: 'from-dark-blue to-medium-blue',
    span: 'col-span-1 md:col-span-2 lg:col-span-1',
  },
  {
    icon: Tv2,
    title: 'LCD TV Repair',
    description: 'Comprehensive LCD TV repair services for display issues, dead pixels, and circuit problems.',
    features: ['Display Repair', 'Circuit Board Fix', 'Component Replacement'],
    color: 'from-medium-blue to-light-blue',
    span: 'col-span-1',
  },
  {
    icon: Smartphone,
    title: 'Smart TV Repair',
    description: 'Specialized repair for Smart TVs including software, connectivity, and hardware issues.',
    features: ['Software Update', 'WiFi Issues', 'App Problems'],
    color: 'from-deep-blue to-dark-blue',
    span: 'col-span-1',
  },
  {
    icon: Wallpaper,
    title: 'TV Wall Installation',
    description: 'Professional wall mounting service with proper cable management and alignment.',
    features: ['Wall Mounting', 'Cable Management', 'Bracket Installation'],
    color: 'from-light-blue to-medium-blue',
    span: 'col-span-1 md:col-span-2 lg:col-span-1',
  },
  {
    icon: Home,
    title: 'Doorstep Service',
    description: 'Convenient home service - our technicians come to you for diagnosis and repair.',
    features: ['Home Visit', 'On-site Repair', 'Same Day Service'],
    color: 'from-dark-blue to-deep-blue',
    span: 'col-span-1',
  },
  {
    icon: Package,
    title: 'Refurbished TVs',
    description: 'Quality refurbished TVs and genuine accessories at affordable prices.',
    features: ['Tested & Certified', 'Warranty Included', 'Best Prices'],
    color: 'from-medium-blue to-dark-blue',
    span: 'col-span-1',
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="section-title text-foreground">
            Comprehensive{' '}
            <span className="gradient-text">TV Repair Services</span>
          </h2>
          <p className="section-subtitle">
            From simple fixes to complex repairs, we handle all types of TV problems 
            with expertise and care.
          </p>
        </motion.div>

        {/* Services Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${service.span} group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-medium`}
            >
              <div className="p-6 md:p-8">
                {/* Gradient Background */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${service.color} opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:opacity-20 transition-opacity`} />
                
                {/* Icon */}
                <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-soft`}>
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-5">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary font-medium group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
