import { motion } from "framer-motion";

const GitHubStats = () => (
  <section className="section-padding">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-2">
        <span className="gradient-text">GitHub Stats</span>
      </h2>
      <div className="w-16 h-1 bg-primary rounded mb-8" />

      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <img
          src="https://github-readme-stats.vercel.app/api?username=Potluri-Naga-Venkata-Sai&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d1117"
          alt="GitHub Stats for Naga Venkata Sai Potluri"
          className="rounded-xl max-w-full"
          loading="lazy"
        />
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=Potluri-Naga-Venkata-Sai&layout=compact&theme=tokyonight&hide_border=true&bg_color=0d1117"
          alt="Top Languages for Naga Venkata Sai Potluri"
          className="rounded-xl max-w-full"
          loading="lazy"
        />
      </div>
    </motion.div>
  </section>
);

export default GitHubStats;
