const Footer = () => (
  <footer className="border-t border-border py-8 text-center">
    <p className="text-xs text-muted-foreground font-mono">
      © {new Date().getFullYear()} <span className="neon-text-subtle">Naga Venkata Sai Potluri</span>. Built with React & Tailwind CSS.
    </p>
  </footer>
);

export default Footer;
