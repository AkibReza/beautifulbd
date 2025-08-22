import React, { useState, useRef, useEffect } from "react";
import {
  MapPin,
  Star,
  Users,
  Calendar,
  Camera,
  Leaf,
  Ship,
  Bird,
  Award,
  ChevronRight,
  Phone,
  Mail,
  ZoomIn,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  const handleNavigation = (path) => {
    // Using React Router navigation
    console.log(`Navigate to: ${path}`);
    // In real implementation: navigate(path);
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageLoaded, setImageLoaded] = useState({});
  const modalRef = useRef(null);

  // Gallery images with different aspect ratios for masonry effect
  const galleryImages = [
    {
      id: 1,
      src: "./assets/img/home/gallery1.jpg",
      alt: "Royal Bengal Tiger",
      height: "tall",
    },
    {
      id: 2,
      src: "./assets/img/home/gallery2.jpg",
      alt: "Mangrove Forest",
      height: "short",
    },
    {
      id: 3,
      src: "./assets/img/home/gallery3.jpg",
      alt: "Boat Safari",
      height: "medium",
    },
    {
      id: 4,
      src: "./assets/img/home/gallery4.jpg",
      alt: "Wildlife Spotting",
      height: "short",
    },
    {
      id: 5,
      src: "./assets/img/home/gallery5.jpg",
      alt: "Sunset View",
      height: "tall",
    },
    {
      id: 6,
      src: "./assets/img/home/gallery6.jpg",
      alt: "Bird Watching",
      height: "medium",
    },
    {
      id: 7,
      src: "./assets/img/home/gallery7.jpg",
      alt: "River Journey",
      height: "short",
    },
    {
      id: 8,
      src: "./assets/img/home/gallery8.jpg",
      alt: "Forest Trail",
      height: "medium",
    },
  ];

  const handleImageLoad = (id) => {
    setImageLoaded((prev) => ({ ...prev, [id]: true }));
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const handleModalClick = (e) => {
    if (e.target === modalRef.current) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [selectedImage]);

  const getHeightClass = (height) => {
    switch (height) {
      case "short":
        return "h-48";
      case "medium":
        return "h-64";
      case "tall":
        return "h-80";
      default:
        return "h-56";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="./assets/img/home/hero-bg.jpg"
            alt="Sundarbans Mangrove Forest"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Discover the
            <span className="block text-secondary">Magical Sundarbans</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Experience the world's largest mangrove forest and home to the Royal
            Bengal Tiger with Beautiful Bangladesh Tours & Travels
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => handleNavigation("/tours")}
              className="bg-primary hover:bg-primary/90 text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              Explore Tours <ChevronRight size={20} />
            </button>
            <button
              onClick={() => handleNavigation("/contact")}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Plan Your Journey
            </button>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden lg:flex gap-8 text-white">
          <div className="text-center">
            <div className="text-3xl font-bold">500+</div>
            <div className="text-sm text-gray-300">Happy Travelers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">50+</div>
            <div className="text-sm text-gray-300">Tour Packages</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">10+</div>
            <div className="text-sm text-gray-300">Years Experience</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-tertiary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Your Gateway to
                <span className="text-primary"> Sundarbans</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Beautiful Bangladesh Tours & Travels specializes in creating
                unforgettable experiences in the mystical Sundarbans. Our expert
                guides and carefully crafted itineraries ensure you witness the
                incredible biodiversity, spot the majestic Royal Bengal Tiger,
                and immerse yourself in the unique ecosystem of the world's
                largest mangrove forest.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <Award className="text-primary" size={24} />
                  <span className="text-gray-700">Licensed & Certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="text-primary" size={24} />
                  <span className="text-gray-700">Expert Local Guides</span>
                </div>
                <div className="flex items-center gap-3">
                  <Leaf className="text-primary" size={24} />
                  <span className="text-gray-700">Eco-Friendly Tours</span>
                </div>
                <div className="flex items-center gap-3">
                  <Ship className="text-primary" size={24} />
                  <span className="text-gray-700">Safe River Cruises</span>
                </div>
              </div>
              <button
                onClick={() => handleNavigation("/about")}
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
              >
                Learn More <ChevronRight size={18} />
              </button>
            </div>
            <div className="relative">
              <img
                src="./assets/img/home/about-section.jpg"
                alt="Sundarbans Wildlife"
                className="w-full rounded-2xl aspect-[4/3] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-secondary p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <Bird className="text-primary mx-auto mb-2" size={32} />
                  <div className="text-2xl font-bold text-gray-900">250+</div>
                  <div className="text-sm text-gray-600">Bird Species</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Popular Tour Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our carefully designed tour packages to experience the
              best of Sundarbans
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tour Package 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img
                src="./assets/img/home/tour-1.jpg"
                alt="Sundarbans Explorer Package"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Sundarbans Explorer
                </h3>
                <p className="text-gray-600 mb-4">
                  Perfect introduction to Sundarbans with boat safari, wildlife
                  spotting, and cultural experiences.
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="text-primary" size={16} />
                    <span className="text-sm text-gray-600">2 Days</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="text-primary" size={16} />
                    <span className="text-sm text-gray-600">4-8 People</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="text-yellow-400" size={16} />
                    <span className="text-sm text-gray-600">4.8</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-primary">
                      ৳8,500
                    </span>
                    <span className="text-gray-600">/person</span>
                  </div>
                  <button
                    onClick={() =>
                      handleNavigation("/tours/sundarbans-explorer")
                    }
                    className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Tour Package 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img
                src="./assets/img/home/tour-2.jpg"
                alt="Tiger Trail Adventure Package"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Tiger Trail Adventure
                </h3>
                <p className="text-gray-600 mb-4">
                  Extended journey with tiger tracking, bird watching, and
                  authentic local cuisine experiences.
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="text-primary" size={16} />
                    <span className="text-sm text-gray-600">3 Days</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="text-primary" size={16} />
                    <span className="text-sm text-gray-600">4-8 People</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="text-yellow-400" size={16} />
                    <span className="text-sm text-gray-600">4.9</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-primary">
                      ৳15,500
                    </span>
                    <span className="text-gray-600">/person</span>
                  </div>
                  <button
                    onClick={() =>
                      handleNavigation("/tours/tiger-trail-adventure")
                    }
                    className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Tour Package 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img
                src="./assets/img/home/tour-3.jpg"
                alt="Tiger Trail Adventure Package"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Complete Sundarbans
                </h3>
                <p className="text-gray-600 mb-4">
                  Ultimate Sundarbans experience with deep forest exploration,
                  photography tours, and cultural immersion.
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="text-primary" size={16} />
                    <span className="text-sm text-gray-600">4 Days</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="text-primary" size={16} />
                    <span className="text-sm text-gray-600">4-8 People</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="text-yellow-400" size={16} />
                    <span className="text-sm text-gray-600">5.0</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-primary">
                      ৳22,500
                    </span>
                    <span className="text-gray-600">/person</span>
                  </div>
                  <button
                    onClick={() =>
                      handleNavigation("/tours/complete-sundarbans")
                    }
                    className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => handleNavigation("/tours")}
              className="bg-secondary hover:bg-secondary/90 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              View All Packages <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide exceptional service and unforgettable experiences in
              the heart of Sundarbans
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Licensed & Certified
              </h3>
              <p className="text-gray-600">
                Fully licensed tour operator with certified guides and safety
                protocols
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Expert Local Guides
              </h3>
              <p className="text-gray-600">
                Experienced guides with deep knowledge of Sundarbans ecosystem
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Eco-Friendly
              </h3>
              <p className="text-gray-600">
                Committed to sustainable tourism and environmental conservation
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Ship className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Safe & Comfortable
              </h3>
              <p className="text-gray-600">
                Modern boats with safety equipment and comfortable
                accommodations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <>
        <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-800 via-green-600 to-emerald-600 bg-clip-text text-transparent mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Capture the Magic
              </motion.h2>
              <motion.p
                className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Witness the breathtaking beauty of Sundarbans through our lens -
                where every frame tells a story of wild magnificence
              </motion.p>
            </motion.div>

            {/* Masonry Gallery Grid */}
            <motion.div
              className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  className="break-inside-avoid mb-6 group cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => handleImageClick(image)}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-gray-100 to-gray-200">
                    {/* Loading Placeholder */}
                    {!imageLoaded[image.id] && (
                      <div
                        className={`${getHeightClass(
                          image.height
                        )} w-full bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 animate-pulse flex items-center justify-center`}
                      >
                        <div className="w-8 h-8 border-2 border-green-500 border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}

                    {/* Image */}
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={`w-full ${getHeightClass(
                        image.height
                      )} object-cover transition-all duration-700 group-hover:scale-110 ${
                        !imageLoaded[image.id]
                          ? "opacity-0 absolute inset-0"
                          : "opacity-100"
                      }`}
                      onLoad={() => handleImageLoad(image.id)}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-semibold text-lg mb-1">
                          {image.alt}
                        </h3>
                        <p className="text-white/80 text-sm">
                          Click to view full size
                        </p>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 transform translate-y-[-10px] group-hover:translate-y-0 transition-transform duration-300">
                          <ZoomIn size={20} className="text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* View Full Gallery Button */}
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.button
                onClick={() => handleNavigation("/gallery")}
                className="group relative bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Explore Full Gallery</span>
                <motion.div
                  className="relative z-10"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ChevronRight size={20} />
                </motion.div>
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Image Preview Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              ref={modalRef}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleModalClick}
            >
              {/* Close Button */}
              <motion.button
                className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full z-10 transition-colors duration-200"
                onClick={closeModal}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>

              {/* Image Container */}
              <motion.div
                className="relative max-w-5xl max-h-[90vh] w-full"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-2xl shadow-2xl"
                />

                {/* Image Info */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <h3 className="text-white text-2xl font-bold mb-2">
                    {selectedImage.alt}
                  </h3>
                  <p className="text-white/80 text-lg">
                    Sundarbans National Park
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-tertiary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Our Travelers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Read testimonials from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="text-yellow-400 fill-current"
                    size={16}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "An absolutely incredible experience! The guides were
                knowledgeable and we were lucky enough to spot a Royal Bengal
                Tiger. Highly recommended!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Sarah Johnson
                  </div>
                  <div className="text-sm text-gray-600">
                    Adventure Photographer
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="text-yellow-400 fill-current"
                    size={16}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "The 3-day tour was perfectly organized. Boat was comfortable,
                food was authentic, and the wildlife sightings were amazing.
                Will definitely return!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div>
                  <div className="font-semibold text-gray-900">David Chen</div>
                  <div className="text-sm text-gray-600">Nature Enthusiast</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="text-yellow-400 fill-current"
                    size={16}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Professional service from start to finish. The team made sure
                we had the best possible experience while respecting the
                environment. Thank you!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Priya Sharma
                  </div>
                  <div className="text-sm text-gray-600">
                    Wildlife Biologist
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready for Your Sundarbans Adventure?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today to plan your perfect journey to the mystical
            mangrove forests of Bangladesh
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={() => handleNavigation("/booking")}
              className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              Book Your Tour <ChevronRight size={20} />
            </button>
            <button
              onClick={() => handleNavigation("/contact")}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Get Free Consultation
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white">
            <div className="flex items-center gap-2">
              <Phone size={20} />
              <span>+880 1234-567890</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={20} />
              <span>info@beautifulbangladesh.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span>Khulna, Bangladesh</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
