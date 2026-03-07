import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail } from "lucide-react";
import { toast } from "sonner";

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
        <div className="mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
            <span className="neon-text">Get In Touch</span>
          </h2>
          <div className="w-20 h-0.5 bg-primary/50 mt-4 rounded-full" style={{ boxShadow: "0 0 10px hsl(190 100% 50% / 0.4)" }} />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <p className="text-foreground/60 text-sm leading-relaxed">
              I'm currently looking for opportunities. Whether you have a question or just want to
              say hi, I'll do my best to get back to you!
            </p>

            <div className="space-y-3">
              {[
                { icon: Mail, label: "nagavenkatasaipotluri@gmail.com", href: "mailto:nagavenkatasaipotluri@gmail.com" },
                { icon: Linkedin, label: "LinkedIn Profile", href: "https://www.linkedin.com/in/naga-venkata-sai-potluri" },
                { icon: Github, label: "GitHub Profile", href: "https://github.com/Potluri-Naga-Venkata-Sai" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-foreground/50 hover:text-primary transition-colors duration-300"
                >
                  <Icon size={16} className="text-primary" /> {label}
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              maxLength={100}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg glass-card text-foreground text-sm border border-border focus:border-primary focus:outline-none transition-colors duration-300 placeholder:text-muted-foreground"
            />
            <input
              type="email"
              placeholder="Your Email"
              maxLength={255}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg glass-card text-foreground text-sm border border-border focus:border-primary focus:outline-none transition-colors duration-300 placeholder:text-muted-foreground"
            />
            <textarea
              placeholder="Your Message"
              maxLength={1000}
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg glass-card text-foreground text-sm border border-border focus:border-primary focus:outline-none transition-colors duration-300 resize-none placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              disabled={sending}
              className="glow-button-solid inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm disabled:opacity-50"
            >
              <Send size={16} /> {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
