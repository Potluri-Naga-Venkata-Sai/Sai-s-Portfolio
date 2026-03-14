import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import profile from "../assets/profile.jpg";
import GlitchText from "./GlitchText";
import MagneticButton from "./MagneticButton";

import { FaReact, FaPython, FaNodeJs, FaJsSquare, FaJava, FaGitAlt } from "react-icons/fa";
import { SiCplusplus, SiTensorflow, SiMysql } from "react-icons/si";

const roles = ["Software Engineer", "AI & ML Student", "Full Stack Developer", "Problem Solver"];

const orbitIcons = [
  { Icon: FaReact, color: "text-cyan-400", angle: 0 },
  { Icon: FaPython, color: "text-yellow-400", angle: 40 },
  { Icon: SiCplusplus, color: "text-blue-500", angle: 80 },
  { Icon: SiTensorflow, color: "text-orange-400", angle: 120 },
  { Icon: FaJsSquare, color: "text-yellow-300", angle: 160 },
  { Icon: SiMysql, color: "text-blue-400", angle: 200 },
  { Icon: FaGitAlt, color: "text-red-400", angle: 240 },
  { Icon: FaNodeJs, color: "text-green-500", angle: 280 },
  { Icon: FaJava, color: "text-red-500", angle: 320 },
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [0, window.innerHeight], [5, -5]);
  const rotateY = useTransform(mouseX, [0, window.innerWidth], [-5, 5]);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 radial-gradient-bg" />

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(190 100% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(190 100% 50%) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.span
                className="inline-block px-4 py-1.5 rounded-full text-xs font-mono neon-border neon-text-subtle mb-6"
                animate={{ boxShadow: ["0 0 10px hsl(190 100% 50% / 0.2)", "0 0 25px hsl(190 100% 50% / 0.5)", "0 0 10px hsl(190 100% 50% / 0.2)"] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ⚡ Available for opportunities
              </motion.span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-foreground/70 italic text-lg mb-3"
            >
              Hi, I am
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <GlitchText
                text="Naga Venkata Sai Potluri"
                className="font-display text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="font-mono text-lg text-foreground/80 mt-4 h-7"
            >
              <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">{text}</span>
              <span className="neon-text-subtle cursor-blink">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="text-foreground/60 mt-4 max-w-lg leading-relaxed"
            >
              I build AI tools, scalable software systems, and modern full-stack web applications.
              Passionate about problem solving, machine learning, and clean code.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex gap-4 mt-8"
            >
              <MagneticButton href="#projects" className="glow-button px-6 py-3 rounded-lg text-sm font-semibold">
                View Projects
              </MagneticButton>
              <MagneticButton href="/resume.pdf" download className="glow-button-solid px-6 py-3 rounded-lg text-sm font-semibold">
                Download Resume
              </MagneticButton>
            </motion.div>

            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="flex gap-5 mt-8"
            >
              {[
                { href: "https://github.com/Potluri-Naga-Venkata-Sai", Icon: Github },
                { href: "https://www.linkedin.com/in/naga-venkata-sai-potluri", Icon: Linkedin },
                { href: "mailto:nagavenkatasaipotluri@gmail.com", Icon: Mail },
              ].map(({ href, Icon }) => (
                <MagneticButton key={href} href={href} className="social-icon">
                  <Icon size={20} />
                </MagneticButton>
              ))}
            </motion.div>
          </div>

          {/* RIGHT SIDE - Orbiting icons around profile */}
          <motion.div
            className="relative flex items-center justify-center w-[420px] h-[420px] mx-auto"
            style={{ rotateX, rotateY, perspective: 1000 }}
          >
            {/* Outer glow pulse */}
            <motion.div
              className="absolute w-80 h-80 rounded-full"
              style={{ background: "radial-gradient(circle, hsl(190 100% 50% / 0.15) 0%, transparent 70%)" }}
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.2, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Rotating rings */}
            <motion.div
              className="absolute w-[340px] h-[340px] rounded-full"
              style={{ border: "1px solid hsl(190 100% 50% / 0.3)" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute w-[380px] h-[380px] rounded-full"
              style={{ border: "1px dashed hsl(280 80% 60% / 0.2)" }}
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />

            {/* Orbiting tech icons */}
            {orbitIcons.map(({ Icon, color, angle }, i) => (
              <motion.div
                key={i}
                className={`absolute ${color} text-2xl`}
                animate={{
                  x: [Math.cos((angle * Math.PI) / 180) * 185, Math.cos(((angle + 360) * Math.PI) / 180) * 185],
                  y: [Math.sin((angle * Math.PI) / 180) * 185, Math.sin(((angle + 360) * Math.PI) / 180) * 185],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                whileHover={{ scale: 1.8, filter: "drop-shadow(0 0 12px currentColor)" }}
              >
                <Icon />
              </motion.div>
            ))}

            {/* Profile image */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
              className="relative"
            >
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 animate-spin-slow opacity-60 blur-sm" />
              <img
                src={profile}
                alt="Naga Venkata Sai Potluri"
                className="relative w-64 h-64 rounded-full object-cover border-2 border-background shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-primary/60" size={28} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
