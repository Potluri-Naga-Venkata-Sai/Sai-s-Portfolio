import { motion } from "framer-motion";

const Footer = () => (
  <footer className="border-t border-border py-8 text-center relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
    <motion.p
      className="text-xs text-muted-foreground font-mono relative z-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      © {new Date().getFullYear()}{" "}
      <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent font-semibold">
        Naga Venkata Sai Potluri
      </span>
      . Built with React & Tailwind CSS.
    </motion.p>
  </footer>
);

export default Footer;
