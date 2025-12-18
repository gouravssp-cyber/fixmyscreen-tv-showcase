import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Eye, Lightbulb, Rocket } from 'lucide-react';

const VisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding overflow-hidden">
      <div className="container mx-auto" ref={ref}>
        <div className="relative">
          {/* Background Decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-primary/5 to-accent/5 blur-3xl" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-warm rounded-full opacity-20 blur-2xl" />
              <div className="relative bg-card rounded-3xl p-8 md:p-10 border border-border shadow-card">
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 text-foreground">
                  Our <span className="gradient-text">Vision</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  To become India's most trusted and preferred TV repair service provider, 
                  setting new standards in quality, reliability, and customer satisfaction 
                  across the nation.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We envision a future where every household can access professional, 
                  affordable, and convenient TV repair services, extending the life of 
                  their entertainment systems and reducing electronic waste.
                </p>
              </div>
            </motion.div>

            {/* Mission & Goals */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Mission */}
              <div className="bg-gradient-to-br from-pacific-blue/10 to-transparent rounded-2xl p-6 border border-pacific-blue/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-pacific-blue/20 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-pacific-blue" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-xl mb-2 text-foreground">
                      Our Mission
                    </h3>
                    <p className="text-muted-foreground">
                      To provide exceptional TV repair services with honesty, expertise, 
                      and dedication, ensuring every customer receives the best value 
                      and experience.
                    </p>
                  </div>
                </div>
              </div>

              {/* Goals */}
              <div className="bg-gradient-to-br from-accent/10 to-transparent rounded-2xl p-6 border border-accent/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-xl mb-2 text-foreground">
                      Our Goals
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        Expand services to 50+ cities by 2025
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        Train 500+ certified technicians
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        Achieve 99% customer satisfaction rate
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        Launch mobile app for easy booking
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
