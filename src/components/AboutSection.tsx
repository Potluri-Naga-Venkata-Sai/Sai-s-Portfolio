import { motion } from "framer-motion";
import { GraduationCap, Code2, Target } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="section-padding">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-2">
        <span className="gradient-text">About Me</span>
      </h2>
      <div className="w-16 h-1 bg-primary rounded mb-8" />

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
          <p>
            I am Naga Venkata Sai Potluri, a passionate Software Engineering student with a strong
            interest in building efficient and scalable software solutions. I am continuously
            improving my skills in programming, algorithms, and modern technologies.
          </p>
          <p>
            My goal is to become a professional software engineer and contribute to innovative
            projects that solve real-world problems.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              icon: GraduationCap,
              title: "Education",
              desc: "B.Tech – CSE (AI & ML), Lovely Professional University, 2027",
            },
            {
              icon: Code2,
              title: "Focus",
              desc: "Full Stack Development, Machine Learning, NLP",
            },
            {
              icon: Target,
              title: "Goal",
              desc: "Build impactful software that solves real-world problems",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass-card rounded-lg p-4 flex items-start gap-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Icon size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-foreground">{title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  </section>
);

export default AboutSection;
