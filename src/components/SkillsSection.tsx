import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-2">
        <span className="gradient-text">Skills</span>
      </h2>
      <div className="w-16 h-1 bg-primary rounded mb-8" />

      <div className="grid sm:grid-cols-2 gap-6">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass-card rounded-xl p-6"
          >
            <h3 className="font-semibold text-foreground mb-4 font-mono text-sm">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
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
