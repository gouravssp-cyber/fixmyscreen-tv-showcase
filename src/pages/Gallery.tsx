import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ZoomIn, Filter } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';

const categories = ['All', 'Before & After', 'Installation', 'Technical Work', 'Customer Stories'];

const galleryItems = [
  {
    image: gallery1,
    title: 'Screen Repair',
    category: 'Before & After',
    description: 'Complete screen replacement for a 55" LED TV',
  },
  {
    image: gallery2,
    title: 'Wall Mounting',
    category: 'Installation',
    description: 'Professional wall mounting with cable management',
  },
  {
    image: gallery3,
    title: 'Circuit Repair',
    category: 'Technical Work',
    description: 'Motherboard repair and component replacement',
  },
  {
    image: gallery4,
    title: 'Happy Customers',
    category: 'Customer Stories',
    description: 'Satisfied customer with repaired Smart TV',
  },
  {
    image: gallery1,
    title: 'Backlight Repair',
    category: 'Technical Work',
    description: 'LED backlight strip replacement',
  },
  {
    image: gallery2,
    title: 'Multi-TV Setup',
    category: 'Installation',
    description: 'Commercial installation project',
  },
  {
    image: gallery3,
    title: 'Power Board Fix',
    category: 'Before & After',
    description: 'Power supply unit replacement',
  },
  {
    image: gallery4,
    title: 'Family Room Setup',
    category: 'Customer Stories',
    description: 'Complete home theater installation',
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<{image: string; title: string; description: string} | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

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
              Our Work
            </span>
            <h1 className="section-title text-foreground mb-6">
              Project <span className="gradient-text">Gallery</span>
            </h1>
            <p className="section-subtitle">
              See the quality of our work through these snapshots of our repairs and installations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all ${
                  activeFilter === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div 
            layout 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={`${item.title}-${index}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-square"
                  onClick={() => setSelectedImage({ image: item.image, title: item.title, description: item.description })}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="text-primary-foreground/80 text-xs uppercase tracking-wider">
                        {item.category}
                      </span>
                      <h3 className="text-primary-foreground font-display font-bold text-lg">
                        {item.title}
                      </h3>
                    </div>
                    
                    {/* Zoom Icon */}
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center">
                        <ZoomIn className="w-5 h-5 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-card/20 flex items-center justify-center hover:bg-card/40 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6 text-primary-foreground" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full max-h-[70vh] rounded-2xl shadow-heavy object-contain"
              />
              <div className="mt-4 text-center text-primary-foreground">
                <h3 className="font-display font-bold text-2xl">{selectedImage.title}</h3>
                <p className="text-primary-foreground/80">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
};

export default Gallery;