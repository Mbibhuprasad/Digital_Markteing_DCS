// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const FlowChart = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//     return () => setIsVisible(false);
//   }, []);

//   const nodes = [
//     {
//       id: "langgraph",
//       label: "Seo",
//       x: 250,
//       y: 50,
//       description: "Graph-based Agents",
//     },
//     { id: "state", label: "Seo", x: 250, y: 130 },
//     { id: "agent1", label: "Swe", x: 150, y: 210 },
//     { id: "agent2", label: "webContent", x: 350, y: 210 },
//     { id: "tool", label: "Tool Node", x: 250, y: 290 },
//     { id: "cond", label: "Conditional", x: 250, y: 370 },
//     { id: "relay", label: "Relay", x: 150, y: 450 },
//     { id: "done", label: "Done", x: 350, y: 450 },
//   ];

//   const edges = [
//     { from: "langgraph", to: "state", id: "edge1" },
//     { from: "state", to: "agent1", id: "edge2" },
//     { from: "state", to: "agent2", id: "edge3" },
//     { from: "agent1", to: "tool", id: "edge4" },
//     { from: "agent2", to: "tool", id: "edge5" },
//     { from: "tool", to: "cond", id: "edge6" },
//     { from: "cond", to: "relay", id: "edge7" },
//     { from: "cond", to: "done", id: "edge8" },
//   ];

//   // Function to calculate curved path between two points
//   const getCurvedPath = (fromNode, toNode) => {
//     const midX = (fromNode.x + toNode.x) / 2;
//     const midY = (fromNode.y + toNode.y) / 2;

//     // Calculate control points for the curve
//     const dx = toNode.x - fromNode.x;
//     const dy = toNode.y - fromNode.y;

//     // Adjust curve intensity based on distance
//     const curveIntensity = Math.sqrt(dx * dx + dy * dy) * 0.2;

//     // Determine curve direction (horizontal or vertical)
//     const isHorizontal = Math.abs(dx) > Math.abs(dy);

//     let cp1x, cp1y, cp2x, cp2y;

//     if (isHorizontal) {
//       // Horizontal curve
//       cp1x = fromNode.x + dx * 0.5;
//       cp1y = fromNode.y - curveIntensity;
//       cp2x = fromNode.x + dx * 0.5;
//       cp2y = toNode.y + curveIntensity;
//     } else {
//       // Vertical curve
//       cp1x = fromNode.x - curveIntensity;
//       cp1y = fromNode.y + dy * 0.5;
//       cp2x = toNode.x + curveIntensity;
//       cp2y = fromNode.y + dy * 0.5;
//     }

//     return `M ${fromNode.x},${fromNode.y} C ${cp1x},${cp1y} ${cp2x},${cp2y} ${toNode.x},${toNode.y}`;
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const nodeVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 10,
//       },
//     },
//   };

//   const lineVariants = {
//     hidden: { pathLength: 0, opacity: 0 },
//     visible: {
//       pathLength: 1,
//       opacity: 1,
//       transition: {
//         pathLength: { duration: 1.5, ease: "easeInOut" },
//         opacity: { duration: 0.5 },
//       },
//     },
//   };

//   const ballVariants = {
//     hidden: { offsetDistance: "0%", opacity: 0 },
//     visible: {
//       offsetDistance: "100%",
//       opacity: 1,
//       transition: {
//         offsetDistance: { duration: 3, ease: "linear", repeat: Infinity },
//         opacity: { duration: 0.5 },
//       },
//     },
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center p-4">
//       <h1 className="text-3xl font-bold text-cyan-400 mb-2">
//         IngGraph Implementation
//       </h1>
//       <p className="text-cyan-200 mb-8">Visualizing the agent workflow</p>

//       <div className="relative w-full max-w-3xl h-[600px] bg-gray-800/30 rounded-xl border border-cyan-800/50 shadow-2xl shadow-cyan-500/10 p-6">
//         <svg
//           width="100%"
//           height="100%"
//           viewBox="0 0 500 600"
//           className="overflow-visible"
//         >
//           <defs>
//             <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//               <stop offset="0%" stopColor="#00ffff" />
//               <stop offset="100%" stopColor="#00b7eb" />
//             </linearGradient>

//             <filter id="glow">
//               <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
//               <feMerge>
//                 <feMergeNode in="coloredBlur" />
//                 <feMergeNode in="SourceGraphic" />
//               </feMerge>
//             </filter>
//           </defs>

//           {/* Edges */}
//           {edges.map((edge, i) => {
//             const fromNode = nodes.find((n) => n.id === edge.from);
//             const toNode = nodes.find((n) => n.id === edge.to);

//             if (!fromNode || !toNode) return null;

//             const pathData = getCurvedPath(fromNode, toNode);

//             return (
//               <React.Fragment key={i}>
//                 {/* Curved path */}
//                 <motion.path
//                   d={pathData}
//                   fill="none"
//                   stroke="url(#gradient)"
//                   strokeWidth="3"
//                   strokeLinecap="round"
//                   variants={lineVariants}
//                   initial="hidden"
//                   animate={isVisible ? "visible" : "hidden"}
//                   style={{
//                     filter: "drop-shadow(0 0 2px rgba(0, 255, 255, 0.5))",
//                   }}
//                 />

//                 {/* Moving ball along the path */}
//                 <motion.circle
//                   r="5"
//                   fill="#00ffff"
//                   initial="hidden"
//                   animate={isVisible ? "visible" : "hidden"}
//                   variants={ballVariants}
//                   style={{
//                     offsetPath: `path("${pathData}")`,
//                     filter: "drop-shadow(0 0 4px rgba(0, 255, 255, 0.8))",
//                   }}
//                 />
//               </React.Fragment>
//             );
//           })}

//           {/* Nodes */}
//           {nodes.map((node, i) => (
//             <motion.g
//               key={node.id}
//               variants={nodeVariants}
//               initial="hidden"
//               animate={isVisible ? "visible" : "hidden"}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               transition={{ type: "spring", stiffness: 400, damping: 17 }}
//             >
//               <motion.circle
//                 cx={node.x}
//                 cy={node.y}
//                 r="30"
//                 fill="url(#gradient)"
//                 stroke="rgba(255, 255, 255, 0.5)"
//                 strokeWidth="2"
//                 filter="url(#glow)"
//                 className="cursor-pointer"
//               />
//               <text
//                 x={node.x}
//                 y={node.y + 5}
//                 textAnchor="middle"
//                 fill="white"
//                 fontSize="12"
//                 fontWeight="bold"
//                 className="select-none"
//               >
//                 {node.label}
//               </text>
//             </motion.g>
//           ))}
//         </svg>

//         {/* Legend */}
//         <div className="absolute bottom-4 left-4 bg-gray-900/80 backdrop-blur-sm p-3 rounded-lg border border-cyan-800/50">
//           <h3 className="text-cyan-400 font-semibold mb-2">Node Legend</h3>
//           <div className="flex flex-col gap-1 text-xs text-cyan-100">
//             <div className="flex items-center gap-2">
//               <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
//               <span>Agents: Process data</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
//               <span>Tools: Execute actions</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
//               <span>Conditionals: Make decisions</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="mt-8 text-cyan-200 text-sm text-center max-w-2xl">
//         <p>
//           This flowchart visualizes the IngGraph implementation with multiple
//           agents working together through a defined workflow, making decisions,
//           and completing tasks.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default FlowChart;


import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-900 via-green-800 to-green-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4">DCS – Daya Consultancy</h2>
          <p className="text-gray-300">
            Your trusted partner in innovative Digital Marketing solutions. We
            combine creativity, strategy, and technology to drive business
            growth.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-yellow-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Contact
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li>SEO Optimization</li>
            <li>Social Media Marketing</li>
            <li>Pay-Per-Click Ads</li>
            <li>Content Marketing</li>
            <li>Email Campaigns</li>
            <li>Brand Strategy</li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-yellow-400" /> info@dcs.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-yellow-400" /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-yellow-400" /> Bhubaneswar, India
            </li>
          </ul>

          {/* Social Media */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-yellow-400">
              <Facebook />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <Twitter />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <Linkedin />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <Instagram />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-700 mt-8 py-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} DCS – Daya Consultancy. All rights
        reserved.
      </div>
    </footer>
  );
}
