import { motion } from "framer-motion";
import { Trophy, Award, BookOpen } from "lucide-react";

const achievements = [
  { icon: Trophy, text: "LeetCode 50 Days Coding Badge" },
  { icon: Award, text: "HackerRank Gold Badge in Python" },
];

const certifications = [
  "AI-Powered NLP – Algo Tutor Academy",
  "Advanced Data Science & Generative AI – Algo Tutor Academy",
  "SQL (Basic) – HackerRank",
  "Mastering in C: Basic to Beyond – CSE Pathsha",
  "Introduction to Python",
  "Responsive Web Design – freeCodeCamp",
];

const AchievementsSection = () => (
  <section id="achievements" className="section-padding">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-2">
        <span className="gradient-text">Achievements & Certifications</span>
      </h2>
      <div className="w-16 h-1 bg-primary rounded mb-8" />

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-mono text-sm font-semibold text-foreground mb-4">Achievements</h3>
          <div className="space-y-3">
            {achievements.map(({ icon: Icon, text }, i) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-lg p-4 flex items-center gap-4"
              >
                <div className="p-2 rounded-lg bg-primary/10">
                  <Icon size={20} className="text-primary" />
                </div>
                <span className="text-sm text-foreground">{text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-mono text-sm font-semibold text-foreground mb-4">Certifications</h3>
          <div className="space-y-2">
            {certifications.map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 text-sm text-muted-foreground"
              >
                <BookOpen size={14} className="text-primary flex-shrink-0" />
                {c}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default AchievementsSection;
