import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const MarketingImpactDashboard = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 }); // triggers at 20% visible

  // Animate when in view, hide when out of view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const slideInFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Stats data
  const stats = [
    {
      id: 1,
      value: "100%",
      label: "SET UP BY WEBFX",
      icon: "🚀",
      color: "bg-blue-500",
      animation: slideInFromLeft,
    },
    {
      id: 2,
      value: "$500K",
      label: "BUILT-IN VALUE",
      icon: "💰",
      color: "bg-green-500",
      animation: slideInFromBottom,
    },
    {
      id: 3,
      value: "20%",
      label: "AVO INCREASE IN ROI",
      icon: "📈",
      color: "bg-purple-500",
      animation: slideInFromBottom,
    },
    {
      id: 4,
      value: "1B",
      label: "DATA POINTS THAT DRIVE DECISION MAKING",
      icon: "🔍",
      color: "bg-orange-500",
      animation: slideInFromRight,
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechNova Inc.",
      quote:
        "Their marketing insights helped us double our online conversions in just 3 months!",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "David Lee",
      company: "BrightPath Agency",
      quote:
        "A truly data-driven team. We trust them with every product launch now.",
      img: "https://randomuser.me/api/portraits/men/33.jpg",
    },
    {
      id: 3,
      name: "Emma Davis",
      company: "StartUpFuel",
      quote: "From strategy to execution — they simply get digital growth.",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 4,
      name: "Michael Chen",
      company: "GrowthLab",
      quote:
        "ROI skyrocketed. This team knows how to blend creativity and analytics.",
      img: "https://randomuser.me/api/portraits/men/18.jpg",
    },
  ];

  return (
    <div
      ref={ref}
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12 pt-8"
          initial="hidden"
          animate={controls}
          variants={fadeIn}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
            variants={slideInFromBottom}
          >
            Uncover The Impact of Marketing on Revenue
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={fadeIn}
          >
            Our expert-led strategies are backed by our award-winning
            technology. Together, our clients are empowered to make informed and
            strategic marketing decisions, ensuring they stay ahead in the
            ever-evolving digital landscape.
          </motion.p>
        </motion.div>

        {/* Dashboard Section */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12"
          initial="hidden"
          animate={controls}
          variants={scaleUp}
        >
          {/* Dashboard Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 md:p-8">
            <motion.h2
              className="text-2xl md:text-3xl font-bold mb-2"
              variants={fadeIn}
            >
              Discover RevenueCloudFX
            </motion.h2>
            <motion.p className="opacity-90" variants={fadeIn}>
              Advanced marketing analytics for revenue growth
            </motion.p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 md:p-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                initial="hidden"
                animate={controls}
                variants={stat.animation}
                custom={index}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex justify-center mb-4">
                  <div
                    className={`w-16 h-16 rounded-full ${stat.color} flex items-center justify-center text-white text-2xl`}
                  >
                    {stat.icon}
                  </div>
                </div>
                <motion.h3
                  className="text-3xl font-bold text-gray-800 mb-2"
                  variants={fadeIn}
                >
                  {stat.value}
                </motion.h3>
                <motion.p
                  className="text-gray-600 font-medium text-sm"
                  variants={fadeIn}
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Client Testimonials Section */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
          initial="hidden"
          animate={controls}
          variants={fadeIn}
        >
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
            What Our Clients Say
          </h3>

          {/* Infinite Auto-Scroll Carousel */}
          <div className="relative overflow-hidden">
            <div
              className="flex space-x-6 animate-scroll"
              onMouseEnter={(e) => {
                e.currentTarget.style.animationPlayState = "paused";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.animationPlayState = "running";
              }}
              style={{
                animation: "scroll 30s linear infinite",
              }}
            >
              {[...testimonials, ...testimonials].map((client, i) => (
                <div
                  key={i}
                  className="min-w-[300px] max-w-[300px] bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={client.img}
                      alt={client.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-gray-800">{client.name}</p>
                      <p className="text-sm text-gray-500">{client.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    “{client.quote}”
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tailwind keyframes */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
        }
      `}</style>
    </div>
  );
};

export default MarketingImpactDashboard;
