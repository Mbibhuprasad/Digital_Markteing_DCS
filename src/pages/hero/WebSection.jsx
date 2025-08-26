import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const WebSection = () => {
  return (
    <>
      {/* Section 1: Video + Features */}
      <section className="w-full bg-gray-100 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side YouTube Thumbnail */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
            onClick={() =>
              window.open(
                "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "_blank"
              )
            }
          >
            <img
              src="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
              alt="Digital Marketing Video"
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="bg-white/80 backdrop-blur-md p-4 rounded-full shadow-lg group-hover:scale-110 transition">
                <Play className="w-10 h-10 text-red-600" />
              </div>
            </div>
          </motion.div>

          {/* Right Side Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                title: "Create a website →",
                desc: "Design a website using our industry-leading templates, designer fonts, and color palettes.",
              },
              {
                title: "Sell your products and offerings →",
                desc: "Create an online store, book appointments, or sell your services or content—all in one platform.",
              },
              {
                title: "Market your business →",
                desc: "Promote your business with email marketing, social media, and SEO tools.",
              },
              {
                title: "Analyze your performance →",
                desc: "Get detailed insights into customer behavior, ROI, and campaign effectiveness with analytics.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-gray-900">
                  {item.title}
                </h2>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 2: Why Choose Us */}
      <section className="relative py-20 px-6 md:px-20 bg-gradient-to-r from-green-50 via-white to-green-100">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
              Why <span className="text-green-600">DCS</span> for Digital
              Marketing?
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              We don’t just do marketing, we create{" "}
              <strong>measurable growth</strong>. With years of expertise,
              innovative tools, and proven strategies, we make sure your
              business stands out in the digital world.
            </p>

            <ul className="space-y-4">
              {[
                "Proven ROI-driven strategies",
                "Expertise in SEO, Social Media & Paid Ads",
                "Customized marketing solutions",
                "Trusted by 500+ global clients",
                "Advanced data-driven analytics",
              ].map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  className="flex items-center text-gray-700 font-medium text-lg"
                >
                  ✅ {point}
                </motion.li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-lg"
            >
              Start Growing with Us →
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center w-full h-90"
          >
            <img
              src="https://digitalcatalyst.in/blog/wp-content/uploads/2022/03/major-components-of-digital-marketing.png"
              alt="Digital Marketing"
              className="rounded-2xl shadow-2xl w-full md:w-4/5"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default WebSection;
