import { motion } from "framer-motion";
import { GraduationCap, Code2, Target } from "lucide-react";

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-12">
    <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
      <span className="neon-text">{children}</span>
    </h2>
    <div className="w-20 h-0.5 bg-primary/50 mt-4 rounded-full" style={{ boxShadow: "0 0 10px hsl(190 100% 50% / 0.4)" }} />
  </div>
);

const AboutSection = () => (
  <section id="about" className="section-padding">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
    >
      <SectionTitle>About Me</SectionTitle>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-5">
          <p className="text-foreground/70 leading-relaxed text-sm md:text-base">
            👋 Hey, I'm <span className="neon-text-subtle font-semibold">Naga Venkata Sai Potluri</span>, a Software Engineering student.
          </p>
          <p className="text-foreground/60 leading-relaxed text-sm md:text-base">
            I've been working with <span className="text-foreground font-medium">Python</span>, <span className="text-foreground font-medium">React</span>, and <span className="text-foreground font-medium">Machine Learning</span>, building applications that are fast, scalable and user-friendly.
          </p>
          <p className="text-foreground/60 leading-relaxed text-sm md:text-base">
            I like solving problems, learning new things, and experimenting with different technologies. My goal is to become a professional software engineer and contribute to innovative projects that solve real-world problems.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              icon: GraduationCap,
              title: "Education",
              desc: "B.Tech – CSE (AI & ML)",
              sub: "Lovely Professional University | 2027",
            },
            {
              icon: Code2,
              title: "Focus Areas",
              desc: "Full Stack Development, Machine Learning, NLP",
              sub: "Building scalable applications",
            },
            {
              icon: Target,
              title: "Goal",
              desc: "Build impactful software",
              sub: "Solving real-world problems with code",
            },
          ].map(({ icon: Icon, title, desc, sub }) => (
            <div key={title} className="glass-card glass-card-hover rounded-xl p-5 flex items-start gap-4">
              <div className="p-2.5 rounded-lg neon-border">
                <Icon size={18} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-foreground">{title}</h3>
                <p className="text-xs text-foreground/70 mt-1">{desc}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  </section>
);

export default AboutSection;
