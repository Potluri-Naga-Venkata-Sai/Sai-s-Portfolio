import ParticleBackground from "@/components/ParticleBackground";
import FloatingShapes from "@/components/FloatingShapes";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import GitHubRepos from "@/components/GitHubRepos";
import LeetCodeStats from "@/components/LeetCodeStats";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <ScrollProgress />
      <ParticleBackground />
      <FloatingShapes />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <GitHubRepos />
        <LeetCodeStats />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
