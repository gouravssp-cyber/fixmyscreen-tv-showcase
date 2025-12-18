import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What types of TVs do you repair?',
    answer: 'We repair all types of televisions including LED, LCD, OLED, QLED, Plasma, and Smart TVs from all major brands like Samsung, LG, Sony, TCL, MI, OnePlus, Panasonic, and more.',
  },
  {
    question: 'Do you offer doorstep repair services?',
    answer: 'Yes! We offer convenient doorstep repair services. Our technicians will visit your location with all necessary tools and parts to diagnose and repair your TV on-site.',
  },
  {
    question: 'How long does a typical repair take?',
    answer: 'Most repairs are completed within 24-48 hours. Simple issues can be fixed on the same day during doorstep service. Complex repairs requiring part replacement may take 3-5 business days.',
  },
  {
    question: 'What warranty do you provide on repairs?',
    answer: 'All our repairs come with a 90-day warranty covering both parts and labor. If the same issue recurs within this period, we will fix it free of charge.',
  },
  {
    question: 'How much does TV repair cost?',
    answer: 'Repair costs vary depending on the issue and TV model. We offer free diagnosis and provide a transparent quote before starting any repair. Basic repairs start from ₹500, while panel replacements may range from ₹3000-15000 depending on size.',
  },
  {
    question: 'Do you use original parts?',
    answer: 'Yes, we prioritize using original manufacturer parts. When original parts are unavailable, we use high-quality compatible parts that meet industry standards and offer the same warranty.',
  },
  {
    question: 'What are your service hours?',
    answer: 'Our service center is open Monday to Saturday from 9 AM to 7 PM. For doorstep service, we offer flexible timing including Sundays by appointment. Emergency services are available 24/7.',
  },
  {
    question: 'Do you sell refurbished TVs?',
    answer: 'Yes, we offer quality refurbished TVs that are thoroughly tested and certified. All refurbished units come with a 6-month warranty and are available at 40-60% less than new TV prices.',
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="faq" className="section-padding bg-gradient-soft">
      <div className="container mx-auto max-w-4xl" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            FAQs
          </span>
          <h2 className="section-title text-foreground">
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-subtitle">
            Find answers to common questions about our TV repair services.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-medium transition-shadow"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary py-5 [&[data-state=open]]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <a href="#contact" className="btn-primary">
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
