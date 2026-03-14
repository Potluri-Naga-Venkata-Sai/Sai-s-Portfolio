import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import MagneticButton from "./MagneticButton";
import AnimatedGradientBorder from "./AnimatedGradientBorder";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    setSending(true);
    setTimeout(() => {
      toast.success("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
      setSending(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <div className="mb-16 flex items-center gap-3">
          <MessageSquare className="text-primary" size={20} />
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">Get In Touch</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-foreground/60 text-sm leading-relaxed">
              I'm currently looking for opportunities. Whether you have a question or just want to
              say hi, I'll do my best to get back to you!
            </p>

            <div className="space-y-3">
              {[
                { icon: Mail, label: "nagavenkatasaipotluri@gmail.com", href: "mailto:nagavenkatasaipotluri@gmail.com" },
                { icon: Linkedin, label: "LinkedIn Profile", href: "https://www.linkedin.com/in/naga-venkata-sai-potluri" },
                { icon: Github, label: "GitHub Profile", href: "https://github.com/Potluri-Naga-Venkata-Sai" },
              ].map(({ icon: Icon, label, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-foreground/50 hover:text-primary transition-colors duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 6 }}
                >
                  <Icon size={16} className="text-primary" /> {label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatedGradientBorder>
              <form onSubmit={handleSubmit} className="glass-card rounded-xl p-6 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background/50 text-foreground text-sm border border-border focus:border-primary focus:outline-none transition-all duration-300 placeholder:text-muted-foreground focus:shadow-[0_0_15px_hsl(190_100%_50%_/_0.15)]"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background/50 text-foreground text-sm border border-border focus:border-primary focus:outline-none transition-all duration-300 placeholder:text-muted-foreground focus:shadow-[0_0_15px_hsl(190_100%_50%_/_0.15)]"
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  maxLength={1000}
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background/50 text-foreground text-sm border border-border focus:border-primary focus:outline-none transition-all duration-300 resize-none placeholder:text-muted-foreground focus:shadow-[0_0_15px_hsl(190_100%_50%_/_0.15)]"
                />
                <MagneticButton
                  onClick={() => {}}
                  className="glow-button-solid inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm"
                >
                  <button type="submit" disabled={sending} className="flex items-center gap-2 disabled:opacity-50">
                    <Send size={16} /> {sending ? "Sending..." : "Send Message"}
                  </button>
                </MagneticButton>
              </form>
            </AnimatedGradientBorder>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
