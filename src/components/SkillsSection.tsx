import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Core Stack",
    skills: ["C", "C++", "Java", "Python", "SQL"],
  },
  {
    title: "Frameworks & Web",
    skills: ["HTML", "CSS", "Bootstrap", "Node.js", "React"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Soft Skills",
    skills: ["Problem Solving", "Team Player", "Adaptability"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
    >
      <div className="mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
          <span className="neon-text">Tech Stack</span>
        </h2>
        <div className="w-20 h-0.5 bg-primary/50 mt-4 rounded-full" style={{ boxShadow: "0 0 10px hsl(190 100% 50% / 0.4)" }} />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass-card glass-card-hover rounded-xl p-6"
          >
            <h3 className="font-display text-xs font-bold uppercase tracking-widest neon-text-subtle mb-5">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span key={s} className="skill-tag font-mono">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default SkillsSection;
