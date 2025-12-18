import { motion } from 'framer-motion';
import { Target, Heart, Award, Users, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const values = [
  {
    icon: Target,
    title: 'Quality First',
    description: 'We use only genuine parts and follow industry best practices for every repair.',
  },
  {
    icon: Heart,
    title: 'Customer Care',
    description: 'Your satisfaction is our priority with dedicated 24/7 support available.',
  },
  {
    icon: Award,
    title: 'Expert Team',
    description: 'Certified technicians with years of hands-on experience in TV repairs.',
  },
  {
    icon: Users,
    title: 'Trust & Reliability',
    description: 'Building long-term relationships through honest and transparent service.',
  },
];

const stats = [
  { value: '10K+', label: 'Happy Customers' },
  { value: '8+', label: 'Years Experience' },
  { value: '98%', label: 'Success Rate' },
  { value: '50+', label: 'Expert Technicians' },
];

const About = () => {
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About Us
            </span>
            <h1 className="section-title text-foreground mb-6">
              Your Trusted Partner for{' '}
              <span className="gradient-text">TV Repair Solutions</span>
            </h1>
            <p className="section-subtitle">
              Fixmyscreen TV Repair has been serving customers with excellence since 2015. 
              We specialize in repairing all types of televisions including LED, LCD, OLED, 
              and Smart TVs from all major brands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">
                Company Overview
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Our team of certified technicians brings expertise and dedication to every repair. 
                We understand how important your TV is to your daily entertainment and information needs, 
                which is why we offer quick turnaround times and doorstep service.
              </p>
              <p className="text-muted-foreground mb-8">
                From simple screen repairs to complex motherboard issues, we handle it all with precision 
                and care. Our state-of-the-art diagnostic tools ensure accurate problem identification, 
                and our genuine spare parts guarantee long-lasting repairs.
              </p>
              
              <ul className="space-y-4">
                {['Genuine spare parts only', 'Same-day service available', '90-day warranty on repairs', 'Transparent pricing'].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bento-card text-center"
                >
                  <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-gradient-primary">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto text-primary-foreground"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              "To provide fast, reliable, and affordable TV repair services that exceed customer 
              expectations. We are committed to delivering excellence through skilled craftsmanship, 
              genuine parts, and exceptional customer service."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title text-foreground">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bento-card group text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 mx-auto group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-3 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;