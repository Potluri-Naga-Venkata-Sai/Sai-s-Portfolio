import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import profile from '../assets/profile.jpg';

import { FaReact, FaPython, FaNodeJs, FaJsSquare, FaJava, FaGitAlt } from "react-icons/fa";
import { SiCplusplus, SiTensorflow, SiMysql } from "react-icons/si";

const roles = ["Software Engineer", "AI & ML Student", "Full Stack Developer", "Problem Solver"];

const HeroSection = () => {

const [roleIndex, setRoleIndex] = useState(0);
const [text, setText] = useState("");
const [deleting, setDeleting] = useState(false);

useEffect(() => {

const current = roles[roleIndex];
let timeout: ReturnType<typeof setTimeout>;

if (!deleting && text.length < current.length) {
timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
}
else if (!deleting && text.length === current.length) {
timeout = setTimeout(() => setDeleting(true), 2000);
}
else if (deleting && text.length > 0) {
timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
}
else if (deleting && text.length === 0) {
setDeleting(false);
setRoleIndex((prev) => (prev + 1) % roles.length);
}

return () => clearTimeout(timeout);

}, [text, deleting, roleIndex]);

return (

<section className="relative min-h-screen flex items-center overflow-hidden">

{/* Background */}
<div className="absolute inset-0 radial-gradient-bg" />

<div className="relative z-10 container mx-auto px-6">

<div className="grid md:grid-cols-2 gap-12 items-center">

{/* LEFT SIDE */}

<div>

<motion.p
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.3, duration: 0.6 }}
className="text-foreground/70 italic text-lg mb-3"
>
Hi, I am
</motion.p>

<motion.h1
className="font-display text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 neon-text"
>
Naga Venkata Sai Potluri
</motion.h1>

<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ delay: 0.8 }}
className="font-mono text-lg text-foreground/80 mt-4 h-7"
>
<span>{text}</span>
<span className="neon-text-subtle cursor-blink">|</span>
</motion.div>

<p className="text-foreground/60 mt-4 max-w-lg">
I build AI tools, scalable software systems, and modern full-stack web applications.
Passionate about problem solving, machine learning, and clean code.
</p>

{/* Buttons */}

<div className="flex gap-4 mt-8">

<a
href="#projects"
className="glow-button px-6 py-3 rounded-lg text-sm"
>
View Projects
</a>

<a
href="/resume.pdf"
download
className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition"
>
Download Resume
</a>

</div>

{/* Social icons */}

<div className="flex gap-5 mt-8">

<a
href="https://github.com/Potluri-Naga-Venkata-Sai"
target="_blank"
className="social-icon"
>
<Github size={20}/>
</a>

<a
href="https://www.linkedin.com/in/naga-venkata-sai-potluri"
target="_blank"
className="social-icon"
>
<Linkedin size={20}/>
</a>

<a
href="mailto:nagavenkatasaipotluri@gmail.com"
className="social-icon"
>
<Mail size={20}/>
</a>

</div>

</div>

{/* RIGHT SIDE */}

<div className="relative flex items-center justify-center w-[420px] h-[420px] mx-auto">

{/* OUTER ROTATING RING */}

<div className="glow-ring glow-ring-outer rotate-slow"></div>

{/* INNER ROTATING RING */}

<div className="glow-ring glow-ring-inner rotate-slow"></div>

{/* React */}

<div className="absolute top-0 text-cyan-400 text-3xl">
<FaReact/>
</div>

{/* Python */}

<div className="absolute top-12 right-4 text-yellow-400 text-3xl">
<FaPython/>
</div>

{/* C++ */}

<div className="absolute right-0 top-1/2 -translate-y-1/2 text-blue-500 text-3xl">
<SiCplusplus/>
</div>

{/* TensorFlow */}

<div className="absolute bottom-12 right-4 text-orange-400 text-3xl">
<SiTensorflow/>
</div>

{/* JavaScript */}

<div className="absolute bottom-0 text-yellow-300 text-3xl">
<FaJsSquare/>
</div>

{/* SQL */}

<div className="absolute bottom-12 left-4 text-blue-400 text-3xl">
<SiMysql/>
</div>

{/* Git */}

<div className="absolute left-0 top-1/2 -translate-y-1/2 text-red-400 text-3xl">
<FaGitAlt/>
</div>

{/* Node */}

<div className="absolute top-12 left-4 text-green-500 text-3xl">
<FaNodeJs/>
</div>

{/* Java */}

<div className="absolute top-24 right-20 text-red-500 text-3xl">
<FaJava/>
</div>

{/* PROFILE IMAGE */}

<motion.img
initial={{ opacity: 0, scale: 0.8 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ delay: 0.6 }}
src={profile}
alt="Sai"
className="relative w-72 h-72 rounded-full object-cover border-4 border-cyan-400 shadow-xl"
/>

</div>

</div>

</div>

</section>

);

};

export default HeroSection;