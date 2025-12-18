import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Heart, Award, Users } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Quality First',
    description: 'We use only genuine parts and follow industry best practices.',
  },
  {
    icon: Heart,
    title: 'Customer Care',
    description: 'Your satisfaction is our priority with dedicated support.',
  },
  {
    icon: Award,
    title: 'Expert Team',
    description: 'Certified technicians with years of experience.',
  },
  {
    icon: Users,
    title: 'Trust & Reliability',
    description: 'Building long-term relationships through honest service.',
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-gradient-soft">
      <div className="container mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="section-title text-foreground">
              Your Trusted Partner for{' '}
              <span className="gradient-text">TV Repair Solutions</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Fixmyscreen TV Repair has been serving customers with excellence since 2015. 
              We specialize in repairing all types of televisions including LED, LCD, OLED, 
              and Smart TVs from all major brands.
            </p>
            <p className="text-muted-foreground mb-8">
              Our team of certified technicians brings expertise and dedication to every repair. 
              We understand how important your TV is to your daily entertainment and information needs, 
              which is why we offer quick turnaround times and doorstep service.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '10K+', label: 'Happy Customers' },
                { value: '8+', label: 'Years Experience' },
                { value: '98%', label: 'Success Rate' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-card shadow-soft"
                >
                  <div className="text-2xl md:text-3xl font-display font-bold gradient-text-warm">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bento-card group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2 text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
