// src/components/Navbar.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  {
    title: "OmniSEO™ & Lead Generation",
    dropdown: [
      "SEO Services",
      "Local SEO",
      "E-commerce SEO",
      "Lead Generation",
    ],
  },
  {
    title: "Revenue Marketing & CRO",
    dropdown: [
      "Conversion Rate Optimization",
      "Marketing Automation",
      "Sales Funnel",
    ],
  },
  {
    title: "UX & AI Services",
    dropdown: ["AI Chatbots", "UX Design", "User Testing"],
  },
  {
    title: "Revenue Platform",
    dropdown: ["Analytics", "Dashboards", "Reports"],
  },
  {
    title: "About",
    dropdown: ["Our Team", "Careers", "Contact Us"],
  },
];

export default function Navbar() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-10xl mx-auto px-8 flex justify-between items-center h-16">
        {/* Left logo */}
        <div className="w-44">
          <img src="https://dayacs.com/images/logoupDCS.png" alt="" className="w-full h-auto" />
        </div>

        {/* Center Menu */}
        <ul className="flex space-x-8">
          {menuItems.map((item, index) => (
            <li key={index} className="relative">
              <button
                onClick={() => toggleDropdown(index)}
                className="hover:text-blue-600 transition"
              >
                {item.title}
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-8 left-0 bg-white shadow-lg rounded-md py-2 w-56"
                  >
                    {item.dropdown.map((drop, i) => (
                      <li
                        key={i}
                        className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                      >
                        {drop}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <button className="text-sm font-medium text-gray-600 hover:text-blue-600">
            Search
          </button>
          <button className="text-sm font-medium text-gray-600 hover:text-blue-600">
            Client Login
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Get a Proposal
          </button>
        </div>
      </div>
    </nav>
  );
}
