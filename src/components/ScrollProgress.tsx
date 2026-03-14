import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[100] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, hsl(190 100% 50%), hsl(280 100% 60%), hsl(190 100% 50%))",
        boxShadow: "0 0 20px hsl(190 100% 50% / 0.8), 0 0 60px hsl(190 100% 50% / 0.4)",
      }}
    />
  );
};

export default ScrollProgress;
