import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
}

const GithubRepos = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

useEffect(() => {
  fetch("https://api.github.com/users/Potluri-Naga-Venkata-Sai/repos")
    .then((res) => res.json())
    .then((data) => {
      if (Array.isArray(data)) {
        console.log(data);
        setRepos(data.slice(0, 6));
      }
    })
    .catch((error) => console.error("GitHub fetch error:", error));
}, []);

  return (
    <section className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
            <span className="neon-text">GitHub Repositories</span>
          </h2>
          <div
            className="w-20 h-0.5 bg-primary/50 mt-4 rounded-full mx-auto"
            style={{ boxShadow: "0 0 10px hsl(190 100% 50% / 0.4)" }}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="glass-card p-6 rounded-xl neon-border hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold mb-2">{repo.name}</h3>

              <p className="text-sm opacity-80 mb-3">
                {repo.description || "No description available"}
              </p>

              <p className="text-xs mb-3">
                {repo.language && `Language: ${repo.language}`}
              </p>

              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline"
              >
                View Repository →
              </a>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default GithubRepos;