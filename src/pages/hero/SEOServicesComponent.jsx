import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SEOServicesComponent = () => {
  const [activeService, setActiveService] = useState("SEO");
  const [showAll, setShowAll] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  // Services data with images
  const services = {
    SEO: {
      title: "Search Engine Optimization (SEO)",
      description:
        "Boost your website's visibility on search engines with keyword optimization, link building, and technical SEO.",
      performance: "+65%",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    SMM: {
      title: "Social Media Marketing (SMM)",
      description:
        "Engage and grow your audience on Facebook, Instagram, LinkedIn, TikTok, and more.",
      performance: "+45%",
      image:
        "https://images.unsplash.com/photo-1432888622747-4eb9a8f5a07a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    Content: {
      title: "Content Marketing",
      description:
        "Craft valuable blogs, videos, and infographics to attract and retain customers.",
      performance: "+55%",
      image:
        "https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    PPC: {
      title: "Pay-Per-Click Advertising (PPC)",
      description:
        "Run high-RDI paid campaigns on Google, Bing, and social media platforms.",
      performance: "+75%",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    Email: {
      title: "Email Marketing",
      description:
        "Personalized email campaigns and automation to nurture leads and boost sales.",
      performance: "+60%",
      image:
        "https://images.unsplash.com/photo-1516893842880-5d8aec507c45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    Affiliate: {
      title: "Affiliate & Influencer Marketing",
      description:
        "Partner with affiliates and influencers to expand your brand reach effectively.",
      performance: "+50%",
      image:
        "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  };

  const serviceList = [
    {
      id: "SEO",
      name: "Search Engine Optimization (SEO)",
      description:
        "Boost your website's visibility on search engines with keyword optimization, link building, and technical SEO.",
    },
    {
      id: "SMM",
      name: "Social Media Marketing (SMM)",
      description:
        "Engage and grow your audience on Facebook, Instagram, LinkedIn, TikTok, and more.",
    },
    {
      id: "Content",
      name: "Content Marketing",
      description:
        "Craft valuable blogs, videos, and infographics to attract and retain customers.",
    },
    {
      id: "PPC",
      name: "Pay-Per-Click Advertising (PPC)",
      description:
        "Run high-RDI paid campaigns on Google, Bing, and social media platforms.",
    },
    {
      id: "Email",
      name: "Email Marketing",
      description:
        "Personalized email campaigns and automation to nurture leads and boost sales.",
    },
    {
      id: "Affiliate",
      name: "Affiliate & Influencer Marketing",
      description:
        "Partner with affiliates and influencers to expand your brand reach effectively.",
    },
  ];

  const visibleServices = showAll ? serviceList : serviceList.slice(0, 5);

  // Detect when component is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={componentRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}} // animate only when visible
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Actionable Analytics
          </h1>
          <h2 className="text-2xl font-semibold text-gray-600">
            Data Empowerment
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Services List */}
          <div className="w-full lg:w-2/5">
            <div className="space-y-4">
              {visibleServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ scale: 1.02 }}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                    activeService === service.id
                      ? "bg-blue-100 border-l-4 border-blue-500 shadow-md"
                      : "bg-white border-l-4 border-gray-200 hover:bg-gray-50"
                  }`}
                  onMouseEnter={() => setActiveService(service.id)}
                >
                  <h3 className="font-medium text-gray-800">{service.name}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}

              {/* Show More / Show Less */}
              {!showAll ? (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center"
                  onClick={() => setShowAll(true)}
                >
                  Show More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.button>
              ) : (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors duration-300 flex items-center justify-center"
                  onClick={() => setShowAll(false)}
                >
                  Show Less
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.button>
              )}
            </div>
          </div>

          {/* Service Details with Image */}
          <div className="w-full lg:w-3/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, x: 20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-lg h-full"
              >
                <div className="mb-6 overflow-hidden rounded-lg">
                  <motion.img
                    src={services[activeService].image}
                    alt={services[activeService].title}
                    className="w-full h-64 object-cover"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {services[activeService].title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {services[activeService].description}
                </p>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isVisible ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 px-4 rounded-lg"
                >
                  <span className="font-medium">Performance Boost</span>
                  <span className="ml-3 text-xl font-bold">
                    {services[activeService].performance}
                  </span>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SEOServicesComponent;
