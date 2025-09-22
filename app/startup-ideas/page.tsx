"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  Lightbulb,
  Send,
  Rocket,
  Target,
  TrendingUp,
  DollarSign,
  Globe,
  Briefcase,
  BarChart3,
  Handshake,
  ExternalLink,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function StartupIdeas() {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    problem: "",
    description: "",
    email: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Startup idea submitted:", formData)
    // In a real app, you'd send this to your backend/Google Sheets
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", title: "", problem: "", description: "", email: "" })
    }, 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-['Inter'] transition-colors duration-300">
      {/* Header */}
      <header className="py-6 border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/">
            <Button variant="ghost" className="text-[#00C896] hover:bg-[#00C896]/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* Business-Focused Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#00C896]/5 via-background to-blue-500/5">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="p-6 rounded-full bg-gradient-to-br from-[#00C896] to-blue-500 shadow-2xl">
                  <Briefcase className="w-16 h-16 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 p-2 rounded-full bg-yellow-400">
                  <Lightbulb className="w-6 h-6 text-yellow-900" />
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#00C896] to-blue-600 bg-clip-text text-transparent">
              Let's Work Together
            </h1>

            <p className="text-xl theme-text-muted max-w-4xl mx-auto mb-12 leading-relaxed">
              Have an idea? Let's bring it to life! I'm here to help turn your concepts into reality through simple, 
              effective solutions. Together, we can build something amazing that solves real problems.
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="theme-card hover:border-[#00C896]/50 transition-all duration-300 h-full group hover:shadow-xl">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 relative">
                      <div className="p-4 rounded-full bg-gradient-to-br from-[#00C896]/20 to-blue-500/20 mx-auto w-fit group-hover:scale-110 transition-transform duration-300">
                        <Target className="w-10 h-10 text-[#00C896]" />
                      </div>
                    </div>
                    <h3 className="font-bold text-xl mb-4">Idea Exploration</h3>
                    <p className="text-sm theme-text-muted leading-relaxed">
                      We'll start by exploring your idea together, looking at what's already out there, and talking to
                      potential users to make sure we're building something people actually want.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="theme-card hover:border-[#00C896]/50 transition-all duration-300 h-full group hover:shadow-xl">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 relative">
                      <div className="p-4 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 mx-auto w-fit group-hover:scale-110 transition-transform duration-300">
                        <BarChart3 className="w-10 h-10 text-blue-600" />
                      </div>
                    </div>
                    <h3 className="font-bold text-xl mb-4">Planning Together</h3>
                    <p className="text-sm theme-text-muted leading-relaxed">
                      We'll work together to create a simple plan for your idea, focusing on what's important and
                      mapping out the steps needed to make it successful.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Card className="theme-card hover:border-[#00C896]/50 transition-all duration-300 h-full group hover:shadow-xl">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 relative">
                      <div className="p-4 rounded-full bg-gradient-to-br from-purple-500/20 to-[#00C896]/20 mx-auto w-fit group-hover:scale-110 transition-transform duration-300">
                        <TrendingUp className="w-10 h-10 text-purple-600" />
                      </div>
                    </div>
                    <h3 className="font-bold text-xl mb-4">Building It Fast</h3>
                    <p className="text-sm theme-text-muted leading-relaxed">
                      I'll help you build your idea quickly using the right tools and technologies, so you can
                      get it out there and start getting feedback as soon as possible.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Project Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#00C896] mb-2">50+</div>
                <div className="text-sm theme-text-muted">Ideas Discussed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-sm theme-text-muted">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">8</div>
                <div className="text-sm theme-text-muted">Completed Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#00C896] mb-2">95%</div>
                <div className="text-sm theme-text-muted">Happy Collaborators</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Idea Submission Form */}
      <section className="py-20 bg-gradient-to-r from-[#00C896]/5 to-blue-500/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <Card className="theme-card border-[#00C896]/20 shadow-2xl">
              <CardHeader className="text-center pb-8">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-br from-[#00C896] to-blue-500">
                    <Handshake className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-[#00C896] to-blue-600 bg-clip-text text-transparent">
                  Let's Work Together
                </CardTitle>
                <CardDescription className="theme-text-muted text-lg max-w-2xl mx-auto">
                  Got an idea you want to bring to life? Share your thoughts and let's talk about how we can
                  build something great together.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <div className="space-y-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00C896] to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                      <Send className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#00C896] mb-2">Share Your Idea</h3>
                    <p className="theme-text-muted">
                      Fill out the Google Form to tell me about your idea and I'll get back to you within 24 hours.
                    </p>
                  </div>
                  
                  <Button
                    className="w-full bg-gradient-to-r from-[#00C896] to-blue-500 hover:from-[#00C896]/80 hover:to-blue-500/80 text-white font-bold py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                    size="lg"
                    asChild
                  >
                    <a href="https://forms.gle/PADWRz9wkpmsqbHG9" target="_blank" rel="noopener noreferrer">
                      Open Google Form
                      <ExternalLink className="ml-3 w-6 h-6" />
                    </a>
                  </Button>
                  
                  <div className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Lightbulb className="w-5 h-5 mr-2 text-yellow-500" />
                      What to Include in Your Form
                    </h4>
                    <ul className="space-y-2 text-sm theme-text-muted">
                      <li>• Your name and how to reach you</li>
                      <li>• A simple description of your idea</li>
                      <li>• Who would use it and what problem it solves</li>
                      <li>• When you'd like to get started</li>
                      <li>• Any special features you have in mind</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* How We'll Work Together */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How We'll Work Together</h2>
            <p className="theme-text-muted text-xl max-w-3xl mx-auto">
              From our first chat to launching your idea - here's the simple process we'll follow to bring
              your idea to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-[#00C896] to-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                  1
                </div>
                <div className="absolute -top-2 -right-2 p-2 rounded-full bg-yellow-400">
                  <Globe className="w-5 h-5 text-yellow-900" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Planning Together</h3>
              <p className="theme-text-muted leading-relaxed">
                We'll talk about your idea, who might use it, and what similar things already exist. This helps us
                understand if people will want it and how to make it stand out.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                  2
                </div>
                <div className="absolute -top-2 -right-2 p-2 rounded-full bg-green-400">
                  <DollarSign className="w-5 h-5 text-green-900" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Building a Simple Version</h3>
              <p className="theme-text-muted leading-relaxed">
                We'll create a basic working version of your idea using the right tools. Then we'll let people try it out
                and use their feedback to make it better.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-[#00C896] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                  3
                </div>
                <div className="absolute -top-2 -right-2 p-2 rounded-full bg-blue-400">
                  <Rocket className="w-5 h-5 text-blue-900" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Going Live</h3>
              <p className="theme-text-muted leading-relaxed">
                We'll help you release your idea to the world, watch how people use it, and make improvements
                based on what we learn to help it grow.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-border bg-gradient-to-r from-[#00C896]/5 to-blue-500/5">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Building?</h3>
            <p className="theme-text-muted text-lg max-w-2xl mx-auto">
              Let's work together to bring your ideas to life. Together, we can create something amazing.
            </p>
          </div>
          <p className="text-sm text-gray-500">© 2024 Anuj Jain. Helping turn ideas into reality.</p>
        </div>
      </footer>
    </div>
  )
}
