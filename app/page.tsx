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
]

const projects = [
  {
    title: "CryptoDash",
    description: "Real-time cryptocurrency dashboard with live price tracking and portfolio management",
    tech: ["React", "WebSocket", "Chart.js", "Tailwind"],
    demo: "#",
    github: "#",
    status: "Live",
  },
  {
    title: "Get Insta Fresh",
    description: "Full-stack e-commerce platform for fresh groceries with real-time inventory",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    demo: "#",
    github: "#",
    status: "WIP",
  },
  {
    title: "Space Shooter",
    description: "Interactive web browser game built with vanilla JavaScript and Canvas API",
    tech: ["JavaScript", "Canvas API", "Web Audio"],
    demo: "#",
    github: "#",
    status: "Live",
  },
  {
    title: "e-Raktkosh",
    description: "Blood bank matching system connecting donors with recipients efficiently",
    tech: ["React", "Firebase", "Google Maps API"],
    demo: "#",
    github: "#",
    status: "Live",
  },
]

const achievements = [
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
    <div className="min-h-screen bg-[#121212] text-white font-['Inter'] overflow-x-hidden">
      {/* Background Music Toggle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="fixed top-4 right-4 z-50"
      >
        <Button
          variant="outline"
          size="sm"
          onClick={toggleMusic}
          className="bg-[#121212]/80 border-[#00C896] text-[#00C896] hover:bg-[#00C896] hover:text-[#121212]"
        >
          {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}🎵 Lofi
        </Button>
      </motion.div>

      {/* Visitor Counter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <Badge variant="outline" className="bg-[#121212]/80 border-[#00C896] text-[#00C896] px-3 py-1">
          <Eye className="w-4 h-4 mr-2" />
          Visitors: {visitorCount.toLocaleString()}
        </Badge>
      </motion.div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 bg-gradient-to-br from-[#00C896]/10 to-transparent" />

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-[#00C896]">Anuj Jain</span>
              <br />I build fast, scalable <span className="text-[#00C896]">web products</span>
              <br />& startup ideas.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 font-light"
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
              className="bg-[#00C896] hover:bg-[#00C896]/80 text-[#121212] font-semibold px-8"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Projects
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#00C896] text-[#00C896] hover:bg-[#00C896] hover:text-[#121212] px-8 bg-transparent"
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
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
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
            <p className="text-gray-400 text-lg">Technologies I work with daily</p>
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
                <Card className="bg-[#1a1a1a] border-gray-800 hover:border-[#00C896] transition-all duration-300 cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl mb-2">{tech.icon}</div>
                    <h3 className="font-semibold text-sm">{tech.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">{tech.category}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="py-20 bg-gradient-to-l from-[#00C896]/5 to-transparent">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-400 text-lg">Building solutions that matter</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="bg-[#1a1a1a] border-gray-800 hover:border-[#00C896] transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl group-hover:text-[#00C896] transition-colors">
                        {project.title}
                      </CardTitle>
                      <Badge
                        variant={project.status === "Live" ? "default" : "secondary"}
                        className={project.status === "Live" ? "bg-[#00C896] text-[#121212]" : ""}
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <CardDescription className="text-gray-300">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-[#00C896] text-[#00C896] hover:bg-[#00C896] hover:text-[#121212] bg-transparent"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                      <Button size="sm" variant="outline">
                        <Github className="w-4 h-4 mr-2" />
                        Code
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
            <p className="text-xl text-gray-300 mb-8">Let's turn it into reality together.</p>

            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-[#00C896] hover:bg-[#00C896]/80 text-[#121212] font-semibold px-8">
                  Let's Collaborate
                  <Users className="ml-2 w-5 h-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-[#1a1a1a] border-gray-800 text-white">
                <DialogHeader>
                  <DialogTitle className="text-[#00C896]">Let's Build Something Amazing</DialogTitle>
                  <DialogDescription className="text-gray-300">
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
                      className="bg-[#121212] border-gray-700 focus:border-[#00C896]"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="projectIdea">Project Idea</Label>
                    <Textarea
                      id="projectIdea"
                      value={collaborationForm.projectIdea}
                      onChange={(e) => setCollaborationForm((prev) => ({ ...prev, projectIdea: e.target.value }))}
                      className="bg-[#121212] border-gray-700 focus:border-[#00C896]"
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
                      className="bg-[#121212] border-gray-700 focus:border-[#00C896]"
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
                      className="bg-[#121212] border-gray-700 focus:border-[#00C896]"
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
                className="flex flex-col items-center p-4 rounded-lg bg-[#1a1a1a] hover:bg-[#00C896]/10 transition-colors"
              >
                <Github className="w-8 h-8 mb-2 text-[#00C896]" />
                <span className="text-sm">GitHub</span>
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/anuj-jain-b61594338"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center p-4 rounded-lg bg-[#1a1a1a] hover:bg-[#00C896]/10 transition-colors"
              >
                <Linkedin className="w-8 h-8 mb-2 text-[#00C896]" />
                <span className="text-sm">LinkedIn</span>
              </motion.a>

              <motion.a
                href="https://leetcode.com/u/berlin30/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center p-4 rounded-lg bg-[#1a1a1a] hover:bg-[#00C896]/10 transition-colors"
              >
                <Code className="w-8 h-8 mb-2 text-[#00C896]" />
                <span className="text-sm">LeetCode</span>
              </motion.a>

              <motion.a
                href="mailto:anuj.jain@adypu.edu.in"
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center p-4 rounded-lg bg-[#1a1a1a] hover:bg-[#00C896]/10 transition-colors"
              >
                <Mail className="w-8 h-8 mb-2 text-[#00C896]" />
                <span className="text-sm">Email</span>
              </motion.a>

              <motion.a
                href="tel:+918717986200"
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center p-4 rounded-lg bg-[#1a1a1a] hover:bg-[#00C896]/10 transition-colors"
              >
                <Phone className="w-8 h-8 mb-2 text-[#00C896]" />
                <span className="text-sm">Call</span>
              </motion.a>
            </div>

            <div className="space-y-2 text-gray-400">
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
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg text-gray-400 italic"
          >
            "Start small, build fast, iterate faster. 🚀"
          </motion.p>
          <p className="text-sm text-gray-500 mt-4">© 2024 Anuj Jain. Built with Next.js & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
