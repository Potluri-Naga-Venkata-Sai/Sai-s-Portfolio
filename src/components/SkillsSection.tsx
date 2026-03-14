import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import TiltCard from "./TiltCard";

const skillCategories = [
  { title: "Core Stack", skills: ["C", "C++", "Java", "Python", "SQL"], color: "from-cyan-500 to-blue-500" },
  { title: "Frameworks & Web", skills: ["HTML", "CSS", "Bootstrap", "Node.js", "React"], color: "from-purple-500 to-pink-500" },
  { title: "Databases", skills: ["MySQL", "MongoDB"], color: "from-green-500 to-emerald-500" },
  { title: "Soft Skills", skills: ["Problem Solving", "Team Player", "Adaptability"], color: "from-orange-500 to-red-500" },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
    >
      <div className="mb-16 flex items-center gap-3">
        <Zap className="text-primary" size={20} />
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">Tech Stack</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 40, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.6, type: "spring" }}
          >
            <TiltCard className="glass-card glass-card-hover rounded-xl p-6 group cursor-default h-full">
              <div className="flex items-center gap-2 mb-5">
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${cat.color}`} />
                <h3 className="font-display text-xs font-bold uppercase tracking-widest neon-text-subtle">
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s, j) => (
                  <motion.span
                    key={s}
                    className="skill-tag font-mono"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 + j * 0.05, type: "spring", stiffness: 200 }}
                    whileHover={{
                      scale: 1.15,
                      boxShadow: "0 0 20px hsl(190 100% 50% / 0.3)",
                    }}
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default SkillsSection;
