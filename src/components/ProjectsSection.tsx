import { motion } from "framer-motion";
import { Github, Rocket } from "lucide-react";
import TiltCard from "./TiltCard";
import AnimatedGradientBorder from "./AnimatedGradientBorder";

const projects = [
  {
    title: "News Article Summarizer",
    desc: "An NLP-based application that extracts news articles from URLs and generates concise summaries.",
    features: [
      "Web scraping using BeautifulSoup and newspaper3k",
      "NLP summarization using Hugging Face BART",
      "Flask-based web interface",
      "~88% summarization accuracy",
    ],
    tech: ["Python", "NLP", "Hugging Face", "Flask", "Web Scraping"],
    github: "https://github.com/Potluri-Naga-Venkata-Sai/News_Article_Analyzer",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Climate Risk Dashboard",
    desc: "An interactive climate analytics dashboard that visualizes temperature anomalies, CO₂ levels, and extreme weather trends.",
    features: [
      "Data preprocessing with Pandas",
      "Forecasting models (ARIMA / Regression)",
      "Interactive dashboard with Plotly & Streamlit",
      "~87% forecasting accuracy",
    ],
    tech: ["Python", "Pandas", "Plotly", "Streamlit", "Flask"],
    github: "https://github.com/Potluri-Naga-Venkata-Sai/Climate_Risk_Dashboard_Project",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
    >
      <div className="mb-16 flex items-center gap-3">
        <Rocket className="text-primary" size={20} />
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">Projects</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6, type: "spring" }}
          >
            <AnimatedGradientBorder>
              <TiltCard className="glass-card rounded-xl p-6 flex flex-col group cursor-default h-full">
                {/* Glow overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-display text-base font-bold uppercase tracking-wider text-foreground group-hover:text-primary transition-colors duration-300">
                      {p.title}
                    </h3>
                    <motion.a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.4 }}
                      aria-label={`${p.title} GitHub`}
                    >
                      <Github size={18} />
                    </motion.a>
                  </div>

                  <p className="text-sm text-foreground/60 mb-5 leading-relaxed">{p.desc}</p>

                  <ul className="space-y-2 mb-6 flex-1">
                    {p.features.map((f, j) => (
                      <motion.li
                        key={f}
                        className="text-xs text-foreground/50 flex items-start gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 + j * 0.08 }}
                      >
                        <span className="neon-text-subtle mt-0.5 text-[10px]">▹</span> {f}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <motion.span
                        key={t}
                        className="skill-tag font-mono text-[10px]"
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </AnimatedGradientBorder>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default ProjectsSection;
