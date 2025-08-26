// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// export default function Hero() {
//   const [showFirst, setShowFirst] = useState(true);

//   // Auto toggle content every 8 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setShowFirst((prev) => !prev);
//     }, 8000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       className="relative h-[100vh] flex items-center px-6 md:px-20 py-18 md:py-24 overflow-hidden bg-cover bg-center"
//       style={{
//         backgroundImage:
//           "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
//       }}
//     >


//       {/* Dark Overlay for Readability */}
//       <div className="absolute inset-0 bg-black/60"></div>

//       {/* Sparkling Stars */}
//       {[...Array(40)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-2 h-2 bg-white rounded-full shadow-md"
//           initial={{
//             x: Math.random() * window.innerWidth,
//             y: Math.random() * window.innerHeight,
//             opacity: 0,
//             scale: 0,
//           }}
//           animate={{
//             x: Math.random() * window.innerWidth,
//             y: Math.random() * window.innerHeight,
//             opacity: [0, 1, 0],
//             scale: [0, 1, 0],
//           }}
//           transition={{
//             duration: 4 + Math.random() * 3,
//             repeat: Infinity,
//             delay: Math.random() * 2,
//           }}
//         />
//       ))}

//       {/* Content */}
//       <div className="relative z-10 grid md:grid-cols-2 mt-8 gap-12 items-center text-white w-full">
//         {/* Left Content with Auto Switch */}
//         <motion.div
//           key={showFirst ? "content1" : "content2"}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           transition={{ duration: 0.8 }}
//         >
//           {showFirst ? (
//             <>
//               <p className="text-teal-300 font-semibold uppercase tracking-wide">
//                 Digital Marketing that drives revenue®
//               </p>

//               <h1 className="text-4xl md:text-4xl font-extrabold leading-tight mt-4">
//                 Grow Your Business with Digital Marketing That Works <br />
//                 <span className="text-green-600 md:text-6xl">
//                   SEO & Branding
//                 </span>
//               </h1>

//               <p className="mt-6 text-lg text-gray-200 leading-relaxed">
//                 We help you create stunning websites, boost your online
//                 presence, and drive real results with SEO, branding, and
//                 marketing strategies.
//               </p>

//               <div className="mt-8 flex w-full max-w-lg rounded-xl overflow-hidden bg-white/10 backdrop-blur-md">
//                 <input
//                   type="text"
//                   placeholder="Enter your website"
//                   className="flex-1 px-4 py-3 outline-none bg-transparent text-white placeholder-gray-300"
//                 />
//                 <button className="bg-green-500 hover:bg-green-600 px-6 py-3 font-semibold">
//                   Get SEO Report
//                 </button>
//               </div>
//             </>
//           ) : (
//             <>
//               <p className="text-blue-200 font-semibold uppercase tracking-wide">
//                 Social Media Marketing Experts
//               </p>

//               <h1 className="text-4xl md:text-4xl font-extrabold leading-tight mt-4">
//                 Engage Customers with <br />
//                 <span className="text-green-600 md:text-6xl">
//                   Social Media Growth
//                 </span>
//               </h1>

//               <p className="mt-6 text-lg text-gray-200 leading-relaxed">
//                 From Instagram to LinkedIn, we craft strategies that connect,
//                 engage, and convert your target audience into loyal customers.
//               </p>

//               <div className="mt-8 flex w-full max-w-lg rounded-xl overflow-hidden bg-white/10 backdrop-blur-md">
//                 <input
//                   type="text"
//                   placeholder="Enter your social handle"
//                   className="flex-1 px-4 py-3 outline-none bg-transparent text-white placeholder-gray-300"
//                 />
//                 <button className="bg-green-500 hover:bg-green-600 px-6 py-3 font-semibold">
//                   Boost My Followers
//                 </button>
//               </div>
//             </>
//           )}
//         </motion.div>

//         {/* Right Content with Pop-up Image */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative flex flex-col items-center space-y-6 text-center rounded-2xl mt-16 left-1/4 top-1/3"
//         >
//           <motion.img
//             src="https://thesocialmediamonthly.com/wp-content/uploads/2016/04/DigitalMarketingGraphic.png"
//             alt="Digital Marketing"
//             animate={{ scale: [1, 1.05, 1] }}
//             transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [showFirst, setShowFirst] = useState(true);
  const [loopIndex, setLoopIndex] = useState(0);

  // Texts to animate
  const texts = ["SEO & Branding", "Social Media Growth"];

  // Auto toggle content every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Variants for smooth vertical typing animation
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: i * 0.04 },
    }),
  };

  const letter = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  // Current text to animate
  const currentText = texts[loopIndex % texts.length];

  // Switch text every 4s smoothly
  useEffect(() => {
    const interval = setInterval(() => {
      setLoopIndex((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative h-[100vh] flex items-center px-6 md:px-20 py-18 md:py-24 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Sparkling Stars */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full shadow-md"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 grid md:grid-cols-2 mt-8 gap-12 items-center text-white w-full">
        {/* Left Content */}
        <motion.div
          key={showFirst ? "content1" : "content2"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          {showFirst ? (
            <>
              <p className="text-teal-300 font-semibold uppercase tracking-wide">
                Digital Marketing that drives revenue®
              </p>

              <h1 className="text-4xl md:text-4xl font-extrabold leading-snug mt-4">
                Grow Your Business with Digital Marketing That Works <br />
                <motion.span
                  key={currentText}
                  className="text-green-600 md:text-6xl inline-block"
                  variants={container}
                  initial="hidden"
                  animate="visible"
                >
                  {currentText.split("").map((char, i) => (
                    <motion.span
                      key={i}
                      variants={letter}
                      className="inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.span>
              </h1>

              <p className="mt-6 text-lg text-gray-200 leading-relaxed">
                We help you create stunning websites, boost your online
                presence, and drive real results with SEO, branding, and
                marketing strategies.
              </p>

              <div className="mt-8 flex w-full max-w-lg rounded-xl overflow-hidden bg-white/10 backdrop-blur-md">
                <input
                  type="text"
                  placeholder="Enter your website"
                  className="flex-1 px-4 py-3 outline-none bg-transparent text-white placeholder-gray-300"
                />
                <button className="bg-green-500 hover:bg-green-600 px-6 py-3 font-semibold">
                  Get SEO Report
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="text-blue-200 font-semibold uppercase tracking-wide">
                Social Media Marketing Experts
              </p>

              <h1 className="text-4xl md:text-4xl font-extrabold leading-snug mt-4">
                Engage Customers with <br />
                <motion.span
                  key={currentText}
                  className="text-green-600 md:text-6xl inline-block"
                  variants={container}
                  initial="hidden"
                  animate="visible"
                >
                  {currentText.split("").map((char, i) => (
                    <motion.span
                      key={i}
                      variants={letter}
                      className="inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.span>
              </h1>

              <p className="mt-6 text-lg text-gray-200 leading-relaxed">
                From Instagram to LinkedIn, we craft strategies that connect,
                engage, and convert your target audience into loyal customers.
              </p>

              <div className="mt-8 flex w-full max-w-lg rounded-xl overflow-hidden bg-white/10 backdrop-blur-md">
                <input
                  type="text"
                  placeholder="Enter your social handle"
                  className="flex-1 px-4 py-3 outline-none bg-transparent text-white placeholder-gray-300"
                />
                <button className="bg-green-500 hover:bg-green-600 px-6 py-3 font-semibold">
                  Boost My Followers
                </button>
              </div>
            </>
          )}
        </motion.div>

        {/* Right Content with Pop-up Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex flex-col items-center space-y-6 text-center rounded-2xl mt-16 left-1/4  top-1/3"
        >
          <motion.img
            src="https://thesocialmediamonthly.com/wp-content/uploads/2016/04/DigitalMarketingGraphic.png"
            alt="Digital Marketing"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
