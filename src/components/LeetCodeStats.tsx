import { motion } from "framer-motion";

const LeetCodeStats = () => {
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
            <span className="neon-text">LeetCode Stats</span>
          </h2>

          <div
            className="w-20 h-0.5 bg-primary/50 mt-4 rounded-full mx-auto"
            style={{ boxShadow: "0 0 10px hsl(190 100% 50% / 0.4)" }}
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl mx-auto">

          {/* Total Stats */}
          <div className="glass-card rounded-xl p-2 neon-border">
            <img
              src="https://leetcard.jacoblin.cool/Naga_Venkata_Sai?theme=dark&font=baloo&ext=heatmap"
              alt="LeetCode Stats"
              className="rounded-lg max-w-full"
              loading="lazy"
            />
          </div>

          {/* Problem Stats */}
        <div className="glass-card rounded-xl p-2 neon-border">
            <img
            src="https://leetcard.jacoblin.cool/Naga_Venkata_Sai?theme=dark&ext=activity"
            alt="LeetCode Activity"
            className="rounded-lg max-w-full"
            />
        </div>

        </div>
      </motion.div>
    </section>
  );
};

export default LeetCodeStats;