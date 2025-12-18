import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Verma',
    location: 'Delhi',
    rating: 5,
    text: 'Excellent service! My Samsung TV had a black screen issue and they fixed it the same day. Very professional team and reasonable pricing. Highly recommended!',
  },
  {
    name: 'Sneha Gupta',
    location: 'Noida',
    rating: 5,
    text: 'The technician arrived on time and explained everything clearly. My LG Smart TV is working perfectly now. Great doorstep service!',
  },
  {
    name: 'Amit Sharma',
    location: 'Gurgaon',
    rating: 5,
    text: 'I was worried about my Sony TV repair cost elsewhere, but Fixmyscreen offered the best price with genuine parts. 90-day warranty gives peace of mind.',
  },
  {
    name: 'Priya Singh',
    location: 'Faridabad',
    rating: 5,
    text: 'Got my wall mounting done by their team. Very neat work with proper cable management. The team was courteous and cleaned up after installation.',
  },
  {
    name: 'Vikash Kumar',
    location: 'Ghaziabad',
    rating: 5,
    text: 'Bought a refurbished TV from them. Works like new! Great value for money with warranty. Will definitely recommend to friends and family.',
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding overflow-hidden">
      <div className="container mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="section-title text-foreground">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="section-subtitle">
            Don't just take our word for it - hear from our satisfied customers.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Quote Icon */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-warm flex items-center justify-center shadow-glow z-10">
              <Quote className="w-6 h-6 text-accent-foreground" />
            </div>

            {/* Main Card */}
            <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-card text-center">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Rating */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-sandy-brown text-sandy-brown" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author */}
                <div>
                  <p className="font-display font-semibold text-foreground">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-accent w-8'
                        : 'bg-muted hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
