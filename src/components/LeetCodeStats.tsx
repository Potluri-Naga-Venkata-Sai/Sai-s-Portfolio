import { motion } from "framer-motion";
import { Code } from "lucide-react";
import AnimatedGradientBorder from "./AnimatedGradientBorder";

const LeetCodeStats = () => {
  return (
    <section className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <div className="mb-16 flex items-center gap-3">
          <Code className="text-primary" size={20} />
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">LeetCode Stats</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto">
          {[
            { src: "https://leetcard.jacoblin.cool/Naga_Venkata_Sai?theme=dark&font=baloo&ext=heatmap", alt: "LeetCode Stats" },
            { src: "https://leetcard.jacoblin.cool/Naga_Venkata_Sai?theme=dark&ext=activity", alt: "LeetCode Activity" },
          ].map((card, i) => (
            <motion.div
              key={card.alt}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6, type: "spring" }}
              whileHover={{ y: -8 }}
            >
              <AnimatedGradientBorder>
                <div className="glass-card rounded-xl p-2">
                  <img
                    src={card.src}
                    alt={card.alt}
                    className="rounded-lg max-w-full"
                    loading="lazy"
                  />
                </div>
              </AnimatedGradientBorder>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default LeetCodeStats;
