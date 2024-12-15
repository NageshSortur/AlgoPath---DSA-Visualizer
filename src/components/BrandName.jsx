import { motion } from "framer-motion";

export default function BrandName() {
  return (
    <h1 className="relative text-white font-ubuntu font-semibold text-4xl cursor-pointer">
      <motion.span
        className="relative z-10"
        initial={{ backgroundPosition: "0% 0%" }}
        whileHover={{ backgroundPosition: "100% 0%" }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        style={{
          background: "linear-gradient(90deg, #fff, #9333ea)", // White to Purple gradient
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          display: "inline-block",
          backgroundSize: "200%",
        }}
      >
        AlgoPath
      </motion.span>
    </h1>
  );
}
