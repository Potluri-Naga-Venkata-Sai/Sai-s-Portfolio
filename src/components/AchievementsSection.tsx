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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
    >
      <div className="mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
          <span className="neon-text">Achievements</span>
        </h2>
        <div className="w-20 h-0.5 bg-primary/50 mt-4 rounded-full" style={{ boxShadow: "0 0 10px hsl(190 100% 50% / 0.4)" }} />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-display text-xs font-bold uppercase tracking-widest neon-text-subtle mb-5">
            Awards
          </h3>
          <div className="space-y-3">
            {achievements.map(({ icon: Icon, text }, i) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card glass-card-hover rounded-xl p-4 flex items-center gap-4"
              >
                <div className="p-2 rounded-lg neon-border">
                  <Icon size={18} className="text-primary" />
                </div>
                <span className="text-sm text-foreground/80">{text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-xs font-bold uppercase tracking-widest neon-text-subtle mb-5">
            Certifications
          </h3>
          <div className="space-y-3">
            {certifications.map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="flex items-center gap-3 text-sm text-foreground/60 py-1"
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
