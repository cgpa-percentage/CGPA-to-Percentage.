import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(222,47%,5%)] via-[hsl(222,60%,4%)] to-[hsl(222,84%,2%)]" />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      {/* Animated blobs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(circle, hsl(263,70%,66%), transparent 70%)" }}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 60, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        initial={{ top: "10%", left: "20%" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-15 blur-[100px]"
        style={{ background: "radial-gradient(circle, hsl(187,94%,43%), transparent 70%)" }}
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 100, -40, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        initial={{ top: "50%", right: "10%" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-10 blur-[80px]"
        style={{ background: "radial-gradient(circle, hsl(220,90%,56%), transparent 70%)" }}
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
