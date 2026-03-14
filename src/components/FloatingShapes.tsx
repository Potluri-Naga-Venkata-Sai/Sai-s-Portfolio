import { motion } from "framer-motion";

const shapes = [
  { type: "circle", size: 300, x: "10%", y: "20%", delay: 0, duration: 25, color: "190 100% 50%" },
  { type: "circle", size: 200, x: "80%", y: "60%", delay: 2, duration: 20, color: "280 80% 60%" },
  { type: "circle", size: 150, x: "50%", y: "80%", delay: 4, duration: 30, color: "320 80% 50%" },
  { type: "circle", size: 250, x: "90%", y: "10%", delay: 1, duration: 22, color: "190 100% 50%" },
  { type: "circle", size: 180, x: "20%", y: "70%", delay: 3, duration: 28, color: "260 80% 55%" },
];

const FloatingShapes = () => (
  <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
    {shapes.map((shape, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: shape.size,
          height: shape.size,
          left: shape.x,
          top: shape.y,
          background: `radial-gradient(circle, hsl(${shape.color} / 0.08) 0%, transparent 70%)`,
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, 50, -30, 20, 0],
          y: [0, -40, 30, -20, 0],
          scale: [1, 1.2, 0.9, 1.1, 1],
        }}
        transition={{
          duration: shape.duration,
          delay: shape.delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

export default FloatingShapes;
