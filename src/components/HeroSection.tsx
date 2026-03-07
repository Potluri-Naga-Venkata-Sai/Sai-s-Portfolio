import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";

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
    <section className="relative min-h-screen flex items-center justify-center section-padding pt-24">
      <div className="text-center z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-mono text-sm text-primary mb-4"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
        >
          <span className="gradient-text">Naga Venkata Sai</span>
          <br />
          <span className="text-foreground">Potluri</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="font-mono text-lg md:text-xl text-muted-foreground mb-8 h-8"
        >
          <span>{text}</span>
          <span className="cursor-blink text-primary">|</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed text-sm md:text-base"
        >
          A passionate Software Engineering student building efficient, scalable solutions.
          Currently pursuing B.Tech in CS (AI & ML) at Lovely Professional University.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
          >
            <Mail size={16} /> Get In Touch
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary font-medium text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            View Projects
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex items-center justify-center gap-5 mt-10"
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
              className="p-3 rounded-full bg-secondary text-muted-foreground hover:text-primary hover:glow-border transition-all"
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
