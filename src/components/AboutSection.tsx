import { motion } from "framer-motion";
import { GraduationCap, Code2, Target, Sparkles } from "lucide-react";
import TiltCard from "./TiltCard";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { value: 100, suffix: "+", label: "Problems Solved" },
  { value: 10, suffix: "+", label: "Projects Built" },
  { value: 5, suffix: "+", label: "Technologies" },
];

const cards = [
  { icon: GraduationCap, title: "Education", desc: "B.Tech – CSE (AI & ML)", sub: "Lovely Professional University | 2027" },
  { icon: Code2, title: "Focus Areas", desc: "Full Stack Development, ML, NLP", sub: "Building scalable applications" },
  { icon: Target, title: "Goal", desc: "Build impactful software", sub: "Solving real-world problems with code" },
];

const AboutSection = () => (
  <section id="about" className="section-padding">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
    >
      <div className="mb-16 flex items-center gap-3">
        <Sparkles className="text-primary" size={20} />
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">About Me</span>
        </h2>
      </div>

      {/* Animated Stats */}
      <div className="grid grid-cols-3 gap-6 mb-16">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center"
          >
            <AnimatedCounter value={s.value} suffix={s.suffix} className="text-4xl md:text-5xl neon-text" />
            <p className="text-xs text-muted-foreground mt-2 font-mono uppercase tracking-wider">{s.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <motion.div
          className="space-y-5"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-foreground/70 leading-relaxed text-sm md:text-base">
            👋 Hey, I'm <span className="neon-text-subtle font-semibold">Naga Venkata Sai Potluri</span>, a Software Engineering student.
          </p>
          <p className="text-foreground/60 leading-relaxed text-sm md:text-base">
            I've been working with <span className="text-foreground font-medium">Python</span>, <span className="text-foreground font-medium">React</span>, and <span className="text-foreground font-medium">Machine Learning</span>, building applications that are fast, scalable and user-friendly.
          </p>
          <p className="text-foreground/60 leading-relaxed text-sm md:text-base">
            I like solving problems, learning new things, and experimenting with different technologies. My goal is to become a professional software engineer and contribute to innovative projects.
          </p>
        </motion.div>

        <div className="space-y-4">
          {cards.map(({ icon: Icon, title, desc, sub }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <TiltCard className="glass-card glass-card-hover rounded-xl p-5 flex items-start gap-4 group cursor-default">
                <motion.div
                  className="p-2.5 rounded-lg neon-border"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon size={18} className="text-primary" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-sm text-foreground">{title}</h3>
                  <p className="text-xs text-foreground/70 mt-1">{desc}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  </section>
);

export default AboutSection;
