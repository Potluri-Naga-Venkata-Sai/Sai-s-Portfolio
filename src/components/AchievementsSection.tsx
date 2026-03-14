import { motion } from "framer-motion";
import { Trophy, Award, BookOpen, ExternalLink, Medal } from "lucide-react";
import TiltCard from "./TiltCard";

const achievements = [
  { icon: Trophy, text: "LeetCode 50 Days Coding Badge", link: "https://leetcode.com/u/Naga_Venkata_Sai/" },
  { icon: Award, text: "HackerRank Gold Badge in Python", link: "https://www.hackerrank.com/profile/nagavenkatasaip1" },
  { icon: Award, text: "HackerRank Gold Badge in Problem Solving", link: "https://www.hackerrank.com/profile/nagavenkatasaip1" },
  { icon: Award, text: "HackerRank Gold Badge in C++", link: "https://www.hackerrank.com/profile/nagavenkatasaip1" },
];

const certifications = [
  { title: "AI-Powered NLP", issuer: "Algo Tutor Academy", link: "https://drive.google.com/file/d/1V1HVTE3zrIMYQIKZXIZdO76EbUbc242a/view?usp=sharing" },
  { title: "Advanced Data Science & Generative AI", issuer: "Algo Tutor Academy", link: "https://drive.google.com/file/d/1otyST5U66PkFttnxZDMoGQ7wi-T4U4wu/view?usp=sharing" },
  { title: "SQL (Basic)", issuer: "HackerRank", link: "https://www.hackerrank.com/certificates/4621d25512c0" },
  { title: "Mastering in C: Basic to Beyond", issuer: "CSE Pathsha", link: "https://drive.google.com/file/d/17ycX1pjFxjqAMOJ-VjUvlFGSiyQP9h4u/view?usp=sharing" },
  { title: "Introduction to Python", issuer: "Programming Course", link: "https://drive.google.com/file/d/1zaF6bS78tecpmGl7vj-j4YwLOfECXofy/view?usp=sharing" },
  { title: "Responsive Web Design", issuer: "freeCodeCamp", link: "https://www.freecodecamp.org/certification/nagavenkatasaipotluri/responsive-web-design" },
];

const AchievementsSection = () => (
  <section id="achievements" className="section-padding">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
    >
      <div className="mb-16 flex items-center gap-3">
        <Medal className="text-primary" size={20} />
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">Achievements</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Awards */}
        <div>
          <h3 className="font-display text-xs font-bold uppercase tracking-widest neon-text-subtle mb-6 flex items-center gap-2">
            <div className="w-8 h-[1px] bg-primary/50" /> Awards
          </h3>
          <div className="space-y-3">
            {achievements.map(({ icon: Icon, text, link }, i) => (
              <motion.a
                key={text}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, type: "spring" }}
                whileHover={{ x: 8, scale: 1.02 }}
                className="glass-card glass-card-hover rounded-xl p-4 flex items-center gap-4 cursor-pointer block"
              >
                <motion.div
                  className="p-2 rounded-lg neon-border"
                  whileHover={{ rotate: 20 }}
                >
                  <Icon size={18} className="text-primary" />
                </motion.div>
                <span className="text-sm text-foreground/80 flex-1">{text}</span>
                <ExternalLink size={14} className="text-muted-foreground" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="font-display text-xs font-bold uppercase tracking-widest neon-text-subtle mb-6 flex items-center gap-2">
            <div className="w-8 h-[1px] bg-primary/50" /> Certifications
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, type: "spring" }}
              >
                <TiltCard className="glass-card rounded-xl p-4 flex flex-col gap-2 h-full group cursor-default">
                  <div className="flex items-center gap-3">
                    <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                      <BookOpen size={16} className="text-primary" />
                    </motion.div>
                    <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">{cert.title}</h4>
                  </div>
                  <p className="text-xs text-foreground/60">{cert.issuer}</p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-xs flex items-center gap-1 mt-auto hover:underline"
                  >
                    View Certificate <ExternalLink size={12} />
                  </a>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default AchievementsSection;
