import { motion } from 'framer-motion';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { z } from 'zod';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    value: '9258022331',
    link: 'tel:9258022331',
    description: 'Mon-Sat 9AM-7PM',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'info@fixmyscreen.com',
    link: 'mailto:info@fixmyscreen.com',
    description: 'We reply within 24hrs',
  },
  {
    icon: MapPin,
    title: 'Address',
    value: 'Delhi NCR, India',
    link: 'https://maps.google.com',
    description: 'Serving all areas',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    value: 'Mon-Sat: 9AM - 7PM',
    link: '#',
    description: 'Sunday by appointment',
  },
];

const formSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100),
  phone: z.string().trim().min(10, 'Valid phone number required').max(15),
  email: z.string().trim().email('Invalid email').optional().or(z.literal('')),
  tvBrand: z.string().optional(),
  issue: z.string().optional(),
  message: z.string().max(1000).optional(),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    tvBrand: '',
    issue: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    const result = formSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: 'Message Sent!',
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({
      name: '',
      phone: '',
      email: '',
      tvBrand: '',
      issue: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

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
              Get In Touch
            </span>
            <h1 className="section-title text-foreground mb-6">
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p className="section-subtitle">
              Ready to get your TV fixed? Reach out to us for a free quote and fast service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bento-card flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{info.title}</p>
                  <p className="font-semibold text-foreground">{info.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{info.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground h-full">
                <h3 className="font-display font-bold text-2xl mb-6">
                  Let's Fix Your TV!
                </h3>
                <p className="text-primary-foreground/80 mb-8">
                  Whether it's a cracked screen, display issue, or smart TV problem - 
                  we've got you covered. Contact us today!
                </p>

                {/* Map Placeholder */}
                <div className="aspect-video rounded-xl overflow-hidden bg-primary-foreground/10 mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.54004509045!2d77.06889665!3d28.527280850000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1703000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location Map"
                  />
                </div>

                <ul className="space-y-3">
                  {['Free diagnosis', 'Same-day service available', '90-day warranty'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <form
                onSubmit={handleSubmit}
                className="bg-card rounded-2xl p-8 border border-border shadow-card"
              >
                <h3 className="font-display font-bold text-2xl mb-6 text-foreground">
                  Send Us a Message
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all ${
                        errors.name ? 'border-destructive' : 'border-border'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all ${
                        errors.phone ? 'border-destructive' : 'border-border'
                      }`}
                      placeholder="9876543210"
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive mt-1">{errors.phone}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all ${
                        errors.email ? 'border-destructive' : 'border-border'
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* TV Brand */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      TV Brand
                    </label>
                    <select
                      name="tvBrand"
                      value={formData.tvBrand}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    >
                      <option value="">Select Brand</option>
                      <option value="samsung">Samsung</option>
                      <option value="lg">LG</option>
                      <option value="sony">Sony</option>
                      <option value="mi">MI / Xiaomi</option>
                      <option value="oneplus">OnePlus</option>
                      <option value="tcl">TCL</option>
                      <option value="panasonic">Panasonic</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Issue Type */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Type of Issue
                    </label>
                    <select
                      name="issue"
                      value={formData.issue}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    >
                      <option value="">Select Issue</option>
                      <option value="no-display">No Display / Black Screen</option>
                      <option value="broken-screen">Broken / Cracked Screen</option>
                      <option value="no-power">TV Not Turning On</option>
                      <option value="sound-issue">No Sound / Audio Issue</option>
                      <option value="smart-tv">Smart TV / Software Issue</option>
                      <option value="wall-mount">Wall Mounting Service</option>
                      <option value="other">Other Issue</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Describe Your Issue
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                      placeholder="Please describe your TV issue in detail..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-accent w-full mt-6 flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;