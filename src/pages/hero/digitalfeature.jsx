"use client";
import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Smart Strategy",
    desc: "We craft tailor-made digital strategies after analyzing your market, competitors & target audience.",
  },
  {
    id: "02",
    title: "Creative Campaigns",
    desc: "From SEO to social media, our innovative campaigns ensure maximum online visibility.",
  },
  {
    id: "03",
    title: "AI-Powered Optimization",
    desc: "Using AI & automation tools, we optimize campaigns in real-time for higher ROI.",
  },
  {
    id: "04",
    title: "Data-Driven Insights",
    desc: "Transparent dashboards & reports help you track growth with clarity & precision.",
  },
  {
    id: "05",
    title: "Sustainable Growth",
    desc: "We scale campaigns consistently to deliver long-term brand success & customer trust.",
  },
];

export default function DigitalMarketingSystem() {
  return (
    <section className="relative bg-gradient-to-r from-green-50 via-green-100 to-green-200 py-20 px-6 lg:px-20 overflow-hidden">
      {/* Curved Background Decoration */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-green-300 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-200 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-snug">
            Our{" "}
            <span className="text-green-700">
              Next-Gen Digital Marketing System
            </span>
          </h2>
          <p className="text-lg text-gray-700 mb-10">
            At <b>DCS – Daya Consultancy</b>, we go beyond traditional
            marketing. Our innovative approach blends **strategy, creativity,
            AI, and data-driven insights** to fuel your brand’s journey to the
            top.
          </p>

          {/* Steps with Animation */}
          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start gap-5 bg-white shadow-md rounded-2xl p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-3xl font-bold text-green-600">
                  {step.id}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="https://www.monash.edu/__data/assets/image/0006/3997950/illustration-digital-marketing.jpg"
            alt="Digital Marketing System"
            className="w-[620px] h-auto rounded-[1rem] drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
