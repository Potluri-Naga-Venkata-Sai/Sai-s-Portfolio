import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-2">
        <span className="gradient-text">Projects</span>
      </h2>
      <div className="w-16 h-1 bg-primary rounded mb-8" />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="glass-card rounded-xl p-6 flex flex-col group"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label={`${p.title} GitHub`}
              >
                <Github size={18} />
              </a>
            </div>

            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>

            <ul className="space-y-1.5 mb-5 flex-1">
              {p.features.map((f) => (
                <li key={f} className="text-xs text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-0.5">▹</span> {f}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 text-[10px] font-mono rounded bg-secondary text-muted-foreground"
                >
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
