import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Star, GitFork, ExternalLink } from "lucide-react";
import TiltCard from "./TiltCard";
import AnimatedGradientBorder from "./AnimatedGradientBorder";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
}

const langColors: Record<string, string> = {
  Python: "#3572A5",
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Java: "#b07219",
  "C++": "#f34b7d",
  HTML: "#e34c26",
  CSS: "#563d7c",
  C: "#555555",
};

const GithubRepos = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/Potluri-Naga-Venkata-Sai/repos?sort=updated&per_page=30")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setRepos(data);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <div className="mb-16 flex items-center gap-3">
          <Github className="text-primary" size={20} />
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">GitHub Repositories</span>
          </h2>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="glass-card rounded-xl p-6 animate-pulse">
                <div className="h-4 bg-foreground/10 rounded w-3/4 mb-3" />
                <div className="h-3 bg-foreground/5 rounded w-full mb-2" />
                <div className="h-3 bg-foreground/5 rounded w-2/3" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {repos.map((repo, i) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5, type: "spring" }}
              >
                <AnimatedGradientBorder>
                  <TiltCard className="glass-card rounded-xl p-5 group cursor-default h-full">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-display text-sm font-bold text-foreground group-hover:text-primary transition-colors truncate flex-1">
                        {repo.name.replace(/-/g, " ")}
                      </h3>
                      <motion.a
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors ml-2"
                        whileHover={{ scale: 1.2, rotate: 15 }}
                      >
                        <ExternalLink size={14} />
                      </motion.a>
                    </div>

                    <p className="text-xs text-foreground/50 mb-4 line-clamp-2 leading-relaxed">
                      {repo.description || "No description available"}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      {repo.language && (
                        <span className="flex items-center gap-1.5">
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: langColors[repo.language] || "#888", boxShadow: `0 0 6px ${langColors[repo.language] || "#888"}` }}
                          />
                          {repo.language}
                        </span>
                      )}
                      {repo.stargazers_count > 0 && (
                        <span className="flex items-center gap-1">
                          <Star size={12} /> {repo.stargazers_count}
                        </span>
                      )}
                      {repo.forks_count > 0 && (
                        <span className="flex items-center gap-1">
                          <GitFork size={12} /> {repo.forks_count}
                        </span>
                      )}
                    </div>
                  </TiltCard>
                </AnimatedGradientBorder>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default GithubRepos;
