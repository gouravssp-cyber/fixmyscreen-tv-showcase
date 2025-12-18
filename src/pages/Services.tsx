import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Monitor, 
  Tv2, 
  Smartphone, 
  Wallpaper, 
  Home, 
  Package,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const services = [
  {
    icon: Monitor,
    title: 'LED TV Repair',
    description: 'Expert repair for all LED TV brands including backlight, panel, and motherboard issues. Our technicians specialize in diagnosing and fixing LED display problems.',
    features: ['Backlight Repair', 'Panel Replacement', 'Power Supply Fix', 'Motherboard Repair', 'Color Calibration'],
  },
  {
    icon: Tv2,
    title: 'LCD TV Repair',
    description: 'Comprehensive LCD TV repair services for display issues, dead pixels, and circuit problems. We restore your LCD TV to its original quality.',
    features: ['Display Repair', 'Circuit Board Fix', 'Component Replacement', 'Inverter Repair', 'Contrast Issues'],
  },
  {
    icon: Smartphone,
    title: 'Smart TV Repair',
    description: 'Specialized repair for Smart TVs including software, connectivity, and hardware issues. Keep your smart features running smoothly.',
    features: ['Software Update', 'WiFi Connectivity', 'App Problems', 'System Reset', 'Firmware Updates'],
  },
  {
    icon: Wallpaper,
    title: 'TV Wall Installation',
    description: 'Professional wall mounting service with proper cable management and alignment. Transform your viewing experience.',
    features: ['Wall Mounting', 'Cable Management', 'Bracket Installation', 'Optimal Positioning', 'Safety Secured'],
  },
  {
    icon: Home,
    title: 'Doorstep Service',
    description: 'Convenient home service - our technicians come to you for diagnosis and repair. Save time with our at-home solutions.',
    features: ['Home Visit', 'On-site Repair', 'Same Day Service', 'No Transportation Hassle', 'Flexible Scheduling'],
  },
  {
    icon: Package,
    title: 'Refurbished TVs',
    description: 'Quality refurbished TVs and genuine accessories at affordable prices. Get premium quality without the premium price.',
    features: ['Tested & Certified', 'Warranty Included', 'Best Prices', 'All Major Brands', 'Quality Assured'],
  },
];

const Services = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="page-container section-padding bg-gradient-soft">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Our Services
            </span>
            <h1 className="section-title text-foreground mb-6">
              Comprehensive{' '}
              <span className="gradient-text">TV Repair Services</span>
            </h1>
            <p className="section-subtitle">
              From simple fixes to complex repairs, we handle all types of TV problems 
              with expertise and care. Quality service at affordable prices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl border border-border overflow-hidden group hover:border-primary/30 transition-all duration-300 hover:shadow-medium"
              >
                {/* Header with gradient */}
                <div className="bg-gradient-primary p-6 text-primary-foreground">
                  <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display font-bold text-xl">
                    {service.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-muted-foreground mb-6">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3 text-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-primary font-medium group/link"
                  >
                    Get Quote
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-soft">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="section-title text-foreground mb-6">
              Need a Repair? <span className="gradient-text">Contact Us Now!</span>
            </h2>
            <p className="section-subtitle mb-8">
              Get a free diagnosis and quote for your TV repair. Our expert technicians 
              are ready to help you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-accent">
                Request Service
              </Link>
              <a href="tel:9258022331" className="btn-primary">
                Call: 9258022331
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;