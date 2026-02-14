import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient - light */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,20%,97%)] via-[hsl(230,25%,95%)] to-[hsl(260,20%,93%)]" />

      {/* Animated blobs - soft pastel */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-30 blur-[120px]"
        style={{ background: "radial-gradient(circle, hsl(263,70%,85%), transparent 70%)" }}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 60, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        initial={{ top: "10%", left: "20%" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-[100px]"
        style={{ background: "radial-gradient(circle, hsl(187,80%,80%), transparent 70%)" }}
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 100, -40, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        initial={{ top: "50%", right: "10%" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-[80px]"
        style={{ background: "radial-gradient(circle, hsl(220,80%,85%), transparent 70%)" }}
        animate={{
          x: [0, 60, -100, 0],
          y: [0, -60, 80, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        initial={{ bottom: "10%", left: "40%" }}
      />
    </div>
  );
};

export default AnimatedBackground;
