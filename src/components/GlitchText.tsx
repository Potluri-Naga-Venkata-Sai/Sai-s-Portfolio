import { motion } from "framer-motion";

interface Props {
  text: string;
  className?: string;
}

const GlitchText = ({ text, className = "" }: Props) => {
  return (
    <motion.div
      className={`relative inline-block ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <span className="glitch-text" data-text={text}>
        {text}
      </span>
    </motion.div>
  );
};

export default GlitchText;
