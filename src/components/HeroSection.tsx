import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const roles = ["Software Engineer", "AI & ML Student", "Full Stack Developer", "Problem Solver"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Radial glow behind name */}
      <div className="absolute inset-0 radial-gradient-bg" />

      <div className="relative z-10 text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-foreground/70 italic text-lg md:text-xl mb-4 font-light"
        >
          Hi, I am
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-black italic tracking-tight mb-6 neon-text"
        >
          NAGA VENKATA SAI
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="font-mono text-base md:text-lg text-foreground/80 mb-12 h-7 italic"
        >
          <span>{text}</span>
          <span className="neon-text-subtle cursor-blink">|</span>
        </motion.div>

        {/* Nav buttons like reference */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <a href="#about" className="glow-button px-6 py-2.5 rounded-lg text-xs font-medium uppercase tracking-wider">
            About Me
          </a>
          <a href="#skills" className="glow-button px-6 py-2.5 rounded-lg text-xs font-medium uppercase tracking-wider">
            Tech Stack
          </a>
          <a href="#projects" className="glow-button px-6 py-2.5 rounded-lg text-xs font-medium uppercase tracking-wider">
            Projects
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: Github, href: "https://github.com/Potluri-Naga-Venkata-Sai", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/naga-venkata-sai-potluri", label: "LinkedIn" },
            { icon: Mail, href: "mailto:nagavenkatasaipotluri@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
