import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, ArrowRight, Sparkles } from 'lucide-react';

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-hero rounded-3xl" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30 rounded-3xl" />

          {/* Animated Elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-8 right-12 w-16 h-16 bg-sandy-brown/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-8 left-12 w-20 h-20 bg-tangerine-dream/20 rounded-full blur-xl"
          />

          {/* Content */}
          <div className="relative z-10 px-6 py-12 md:px-12 md:py-16 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-sandy-brown" />
              <span className="text-primary-foreground text-sm font-medium">
                Limited Time Offer - 20% Off on First Service
              </span>
            </motion.div>

            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-4 max-w-3xl mx-auto">
              Ready to Get Your TV{' '}
              <span className="gradient-text-warm">Back to Life?</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Don't let a broken TV ruin your entertainment. Get expert repair 
              service at your doorstep with our 90-day warranty guarantee.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="btn-accent inline-flex items-center justify-center gap-2 text-lg group"
              >
                Request Free Quote
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="tel:9258022331"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-primary-foreground border-2 border-primary-foreground/30 hover:bg-primary-foreground/10 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call: 9258022331
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
