import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

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
      <div className="mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
          <span className="neon-text">Projects</span>
        </h2>
        <div className="w-20 h-0.5 bg-primary/50 mt-4 rounded-full" style={{ boxShadow: "0 0 10px hsl(190 100% 50% / 0.4)" }} />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="glass-card glass-card-hover rounded-xl p-6 flex flex-col group"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-foreground group-hover:text-primary transition-colors duration-300">
                {p.title}
              </h3>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label={`${p.title} GitHub`}
              >
                <Github size={18} />
              </a>
            </div>

            <p className="text-sm text-foreground/60 mb-5 leading-relaxed">{p.desc}</p>

            <ul className="space-y-2 mb-6 flex-1">
              {p.features.map((f) => (
                <li key={f} className="text-xs text-foreground/50 flex items-start gap-2">
                  <span className="neon-text-subtle mt-0.5 text-[10px]">▹</span> {f}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span key={t} className="skill-tag font-mono text-[10px]">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default ProjectsSection;
