import { motion } from "framer-motion";

const GitHubStats = () => (
  <section className="section-padding">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
    >
      <div className="mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
          <span className="neon-text">GitHub Stats</span>
        </h2>
        <div className="w-20 h-0.5 bg-primary/50 mt-4 rounded-full" style={{ boxShadow: "0 0 10px hsl(190 100% 50% / 0.4)" }} />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="glass-card rounded-xl p-2 neon-border">
          <img
            src="https://github-readme-stats.vercel.app/api?username=Potluri-Naga-Venkata-Sai&show_icons=true&theme=radical&hide_border=true&bg_color=0a0f1a&title_color=00d4ff&icon_color=00d4ff&text_color=8892b0"
            alt="GitHub Stats for Naga Venkata Sai Potluri"
            className="rounded-lg max-w-full"
            loading="lazy"
          />
        </div>
        <div className="glass-card rounded-xl p-2 neon-border">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Potluri-Naga-Venkata-Sai&layout=compact&theme=radical&hide_border=true&bg_color=0a0f1a&title_color=00d4ff&text_color=8892b0"
            alt="Top Languages for Naga Venkata Sai Potluri"
            className="rounded-lg max-w-full"
            loading="lazy"
          />
        </div>
      </div>
    </motion.div>
  </section>
);

export default GitHubStats;
