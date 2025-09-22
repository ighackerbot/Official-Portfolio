"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Code,
  Rocket,
  Play,
  Pause,
  Eye,
  ChevronRight,
  Trophy,
  Lightbulb,
  Users,
  ImageIcon,
  Upload,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

const techStack = [
  { name: "JavaScript", icon: "🟨", category: "Frontend" },
  { name: "TypeScript", icon: "🔷", category: "Frontend" },
  { name: "Python", icon: "🐍", category: "Backend" },
  { name: "React", icon: "⚛️", category: "Frontend" },
  { name: "Redux", icon: "🔄", category: "State" },
  { name: "Tailwind", icon: "🎨", category: "Styling" },
  { name: "Supabase", icon: "⚡", category: "Backend" },
  { name: "Vite", icon: "⚡", category: "Build" },
  { name: "WebSocket", icon: "🔌", category: "Real-time" },
  { name: "Figma", icon: "🎨", category: "Design" },
  { name: "Pandas", icon: "🐼", category: "Data" },
  { name: "HTML", icon: "🐼", category: "Frontend" },
  { name: "Linux", icon: "🐼", category: "OS" },
  { name: "Cyber Security", icon: "🐼", category: "Data" },
  { name: "Express JS", icon: "🐼", category: "Backend"},
  { name: "MySQL", icon: "🐼", category: "Database"},
  { name: "NodeJS", icon: "🐼", category: "Backend" },
  { name: "Generative AI", icon: "🐼", category: "AI" },
]

const projects = [
  {
    title: "CryptoDash",
    description:
      "CryptoDash is a real-time cryptocurrency dashboard. It offers live price tracking, historical analysis, and interactive charts in a responsive UI. The project demonstrates strong frontend development skills and modern design.",
    tech: ["React", "WebSocket", "Chart.js", "Tailwind"],
    demo: "https://crypto-dash-alpha.vercel.app/",
    github: "https://github.com/ighackerbot/CryptoDash",
    status: "Live",
    image: "/Users/anujjain/resume portfolio/Official-Portfolio/public/cryptodash.png",
  },
  {
    title: "MindFulPath",
    description:
      "MindfulPath – Mental Health Wellness Website: Developed a responsive and accessible platform to promote mental health awareness and provide wellness resources. Designed with a clean UI/UX to enhance user engagement and ensure ease of access, built using HTML & CSS, and deployed on Vercel for fast and reliable performance.",
    tech: ["HTML", "CSS", "Vercel", "Tailwind"],
    demo: "https://mentalhealthwellnessmindfullpath.vercel.app/",
    github: "https://github.com/ighackerbot/mental-health-S-W",
    status: "Live",
    image: "/Users/anujjain/resume portfolio/Official-Portfolio/public/mindfullpath.png",
  },
  {
    title: "ChefLinq",
    description:
      "I built an end-to-end e-commerce platform for restaurant owners, serving as an all-in-one supply hub that provides kitchen equipment, accessories, and raw food materials. The platform enables direct sourcing and bulk ordering, eliminating middlemen to ensure better pricing and efficiency. With a streamlined procurement system, it saves time through a hassle-free ordering process while maintaining a seamless supply chain for reliable and timely delivery of essentials. It also offers secure payment processing to ensure safe and smooth transactions. Overall, the solution is cost-effective and time-saving, helping restaurants optimize expenses and focus on their core business. Tech stack: React, Redux, Tailwind CSS, MongoDB, TypeScript, and Vercel.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    demo: "https://chef-linq.vercel.app/",
    github: "#",
    status: "Work In Progress",
    image: "/Users/anujjain/resume portfolio/Official-Portfolio/public/cheflinq.png",
  },
  {
    title: "Space Shooter",
    description:
      "Interactive web browser game built with vanilla JavaScript featuring smooth animations and engaging gameplay mechanics.",
    tech: ["JavaScript", "Canvas API", "Web Audio"],
    demo: "https://space-shooter-coral.vercel.app/",
    github: "https://github.com/ighackerbot/Space-Shooter",
    status: "Live",
    image: "/Users/anujjain/resume portfolio/Official-Portfolio/public/spaceshooter.png",
  },
  {
    title: "e-Raktkosh",
    description:
      "Blood bank matching system connecting donors with recipients efficiently using location-based services and real-time notifications.",
    tech: ["React", "Firebase", "Google Maps API"],
    demo: "https://e-rakt.vercel.app/",
    github: "https://github.com/ighackerbot/e-Rakt",
    status: "Live",
    image: "/Users/anujjain/resume portfolio/Official-Portfolio/public/e-raktkosh.png",
  },
]

const achievements = [
  "Build Linux From Scratch - The Linux Foundation",
  "Hacktoberfest 2024 Contributor",
  "Python Beginner Certificate – Newton School",
  "Unstop Coding Challenge (8032 / 3Lakh)",
  "Unstop Treasure Hunt (4023 / 4Lakh)",
  "Scratchathon Finalist",
  "SCMS Chess Tournament Semi-Finalist",
]

export default function Portfolio() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [visitorCount, setVisitorCount] = useState(1532)
  const [collaborationForm, setCollaborationForm] = useState({
    name: "",
    projectIdea: "",
    techStack: "",
    email: "",
  })

  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    // Simulate visitor count increment
    const timer = setTimeout(() => {
      setVisitorCount((prev) => prev + Math.floor(Math.random() * 3) + 1)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const toggleMusic = () => {
    setIsPlaying(!isPlaying)
    // In a real implementation, you'd control an audio element here
  }

  const handleCollaborationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Collaboration form submitted:", collaborationForm)
    // Handle form submission
    setCollaborationForm({ name: "", projectIdea: "", techStack: "", email: "" })
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-['Inter'] overflow-x-hidden transition-colors duration-300">
      {/* Theme and Music Toggles */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <ThemeToggle />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
          <Button
            variant="outline"
            size="sm"
            onClick={toggleMusic}
            className="bg-background/80 border-[#00C896] text-[#00C896] hover:bg-[#00C896] hover:text-background transition-colors"
          >
            {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}🎵 Lofi
          </Button>
        </motion.div>
      </div>

      {/* Visitor Counter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <Badge variant="outline" className="bg-background/80 border-[#00C896] text-[#00C896] px-3 py-1">
          <Eye className="w-4 h-4 mr-2" />
          Visitors: {visitorCount.toLocaleString()}
        </Badge>
      </motion.div>

      {/* Hero Section with Background Image */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden hero-bg">
        <div className="absolute inset-0 hero-overlay" />
        <motion.div style={{ y }} className="absolute inset-0 bg-gradient-to-br from-[#00C896]/10 to-transparent" />

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
              Hi, I'm <span className="text-[#00C896]">Anuj Jain</span>
              <br />I build fast, scalable <span className="text-[#00C896]">web products</span>
              <br />& startup ideas.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-8 font-light drop-shadow-lg"
          >
            Developer. Founder. Problem Solver.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-[#00C896] hover:bg-[#00C896]/80 text-[#121212] font-semibold px-8 shadow-xl"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Projects
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#00C896] text-[#00C896] hover:bg-[#00C896] hover:text-[#121212] px-8 bg-white/10 backdrop-blur-sm shadow-xl"
              asChild
            >
              <Link href="/startup-ideas">
                Submit Your Startup Idea
                <Lightbulb className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Vision & Summary */}
      <section className="py-20 bg-gradient-to-r from-[#00C896]/5 to-transparent">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <Rocket className="inline-block w-8 h-8 mr-3 text-[#00C896]" />
              Vision & Mission
            </h2>
            <p className="text-lg md:text-xl theme-text-muted leading-relaxed">
              Currently building a <span className="text-[#00C896] font-semibold">supply-chain eCommerce platform</span>{" "}
              for restaurant kitchens. Passionate about combining{" "}
              <span className="text-[#00C896] font-semibold">code + creativity</span> to build real-world startups that
              solve meaningful problems and create lasting impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <Code className="inline-block w-8 h-8 mr-3 text-[#00C896]" />
              Frontend Specialist with Backend Fluency
            </h2>
            <p className="theme-text-muted text-lg">Technologies I work with daily</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <Card className="theme-card hover:border-[#00C896] transition-all duration-300 cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl mb-2">{tech.icon}</div>
                    <h3 className="font-semibold text-sm">{tech.name}</h3>
                    <p className="text-xs theme-text-muted mt-1">{tech.category}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Showcase */}
      <section id="projects" className="py-20 bg-gradient-to-l from-[#00C896]/5 to-transparent">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
            <p className="theme-text-muted text-xl max-w-2xl mx-auto">
              Building solutions that matter - from concept to deployment
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="theme-card hover:border-[#00C896] transition-all duration-300 h-full project-card overflow-hidden">
                  {/* Project Screenshot Area */}
                  <div className="relative h-48 bg-gradient-to-br from-[#00C896]/10 to-[#00C896]/5 flex items-center justify-center border-b border-border">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00C896]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="text-center z-10">
                      <ImageIcon className="w-12 h-12 text-[#00C896] mx-auto mb-2 opacity-50" />
                      <p className="text-sm theme-text-muted">Project Screenshot</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-2 border-[#00C896]/50 text-[#00C896] hover:bg-[#00C896] hover:text-white bg-transparent"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        Upload Image
                      </Button>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-3">
                      <CardTitle className="text-2xl group-hover:text-[#00C896] transition-colors">
                        {project.title}
                      </CardTitle>
                      <Badge
                        variant={project.status === "Live" ? "default" : "secondary"}
                        className={`${
                          project.status === "Live"
                            ? "bg-[#00C896] text-[#121212] shadow-lg"
                            : "bg-yellow-500 text-[#121212]"
                        } px-3 py-1 font-semibold`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <CardDescription className="theme-text-muted text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs border-[#00C896]/30 text-[#00C896] hover:bg-[#00C896]/10 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button
                        size="default"
                        className="flex-1 bg-[#00C896] hover:bg-[#00C896]/80 text-[#121212] font-semibold shadow-lg"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button
                        size="default"
                        variant="outline"
                        className="flex-1 border-[#00C896] text-[#00C896] hover:bg-[#00C896] hover:text-[#121212] bg-transparent"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <Trophy className="inline-block w-8 h-8 mr-3 text-[#00C896]" />
              Achievements & Recognition
            </h2>
          </motion.div>

          <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0"
              >
                <Badge
                  variant="outline"
                  className="border-[#00C896] text-[#00C896] px-4 py-2 text-sm whitespace-nowrap hover:bg-[#00C896] hover:text-[#121212] transition-colors cursor-default"
                >
                  {achievement}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Have a Project in Mind CTA */}
      <section className="py-20 bg-gradient-to-r from-[#00C896]/10 to-transparent">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Got an idea or product you want to build?</h2>
            <p className="text-xl theme-text-muted mb-8">Let's turn it into reality together.</p>

            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-[#00C896] hover:bg-[#00C896]/80 text-[#121212] font-semibold px-8">
                  Let's Collaborate
                  <Users className="ml-2 w-5 h-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="theme-card border-border">
                <DialogHeader>
                  <DialogTitle className="text-[#00C896]">Let's Build Something Amazing</DialogTitle>
                  <DialogDescription className="theme-text-muted">
                    Tell me about your project idea and let's discuss how we can bring it to life.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleCollaborationSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={collaborationForm.name}
                      onChange={(e) => setCollaborationForm((prev) => ({ ...prev, name: e.target.value }))}
                      className="bg-background border-border focus:border-[#00C896]"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="projectIdea">Project Idea</Label>
                    <Textarea
                      id="projectIdea"
                      value={collaborationForm.projectIdea}
                      onChange={(e) => setCollaborationForm((prev) => ({ ...prev, projectIdea: e.target.value }))}
                      className="bg-background border-border focus:border-[#00C896]"
                      rows={3}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="techStack">Tech Stack (Optional)</Label>
                    <Input
                      id="techStack"
                      value={collaborationForm.techStack}
                      onChange={(e) => setCollaborationForm((prev) => ({ ...prev, techStack: e.target.value }))}
                      className="bg-background border-border focus:border-[#00C896]"
                      placeholder="React, Node.js, etc."
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={collaborationForm.email}
                      onChange={(e) => setCollaborationForm((prev) => ({ ...prev, email: e.target.value }))}
                      className="bg-background border-border focus:border-[#00C896]"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-[#00C896] hover:bg-[#00C896]/80 text-[#121212]">
                    Submit Project Idea
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Connect with Me</h2>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-2xl mx-auto mb-12">
              <motion.a
                href="https://github.com/ighackerbot"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center p-4 rounded-lg theme-card hover:bg-[#00C896]/10 transition-colors"
              >
                <Github className="w-8 h-8 mb-2 text-[#00C896]" />
                <span className="text-sm">GitHub</span>
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/anuj-jain-b61594338"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center p-4 rounded-lg theme-card hover:bg-[#00C896]/10 transition-colors"
              >
                <Linkedin className="w-8 h-8 mb-2 text-[#00C896]" />
                <span className="text-sm">LinkedIn</span>
              </motion.a>

              <motion.a
                href="https://leetcode.com/u/berlin30/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center p-4 rounded-lg theme-card hover:bg-[#00C896]/10 transition-colors"
              >
                <Code className="w-8 h-8 mb-2 text-[#00C896]" />
                <span className="text-sm">LeetCode</span>
              </motion.a>

              <motion.a
                href="mailto:anuj.jain@adypu.edu.in"
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center p-4 rounded-lg theme-card hover:bg-[#00C896]/10 transition-colors"
              >
                <Mail className="w-8 h-8 mb-2 text-[#00C896]" />
                <span className="text-sm">Email</span>
              </motion.a>

              <motion.a
                href="tel:+918717986200"
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center p-4 rounded-lg theme-card hover:bg-[#00C896]/10 transition-colors"
              >
                <Phone className="w-8 h-8 mb-2 text-[#00C896]" />
                <span className="text-sm">Call</span>
              </motion.a>
            </div>

            <div className="space-y-2 theme-text-muted">
              <p className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                anuj.jain@adypu.edu.in
              </p>
              <p className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                +91 87179862000
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg theme-text-muted italic"
          >
            "Start small, build fast, iterate faster. 🚀"
          </motion.p>
          <p className="text-sm text-gray-500 mt-4">© 2024 Anuj Jain. Built with Next.js & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
