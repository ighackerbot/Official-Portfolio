"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Lightbulb, Send, Rocket, Users, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"

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
    <div className="min-h-screen bg-[#121212] text-white font-['Inter']">
      {/* Header */}
      <header className="py-6 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <Link href="/">
            <Button variant="ghost" className="text-[#00C896] hover:bg-[#00C896]/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-[#00C896]/10 border border-[#00C896]/20">
                <Lightbulb className="w-12 h-12 text-[#00C896]" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">Startup Idea Hub</h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              I believe in ideas that solve real problems. Let's validate, prototype, and build them together. Share
              your vision and let's turn it into the next big thing.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="bg-[#1a1a1a] border-gray-800 hover:border-[#00C896]/50 transition-colors">
                  <CardContent className="p-6 text-center">
                    <Target className="w-8 h-8 text-[#00C896] mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Problem-First</h3>
                    <p className="text-sm text-gray-400">We start by identifying real problems that need solving</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="bg-[#1a1a1a] border-gray-800 hover:border-[#00C896]/50 transition-colors">
                  <CardContent className="p-6 text-center">
                    <Users className="w-8 h-8 text-[#00C896] mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Collaborative</h3>
                    <p className="text-sm text-gray-400">We work together to refine and validate your ideas</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Card className="bg-[#1a1a1a] border-gray-800 hover:border-[#00C896]/50 transition-colors">
                  <CardContent className="p-6 text-center">
                    <Rocket className="w-8 h-8 text-[#00C896] mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Fast Execution</h3>
                    <p className="text-sm text-gray-400">From idea to MVP in record time with modern tech</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Idea Submission Form */}
      <section className="py-20 bg-gradient-to-r from-[#00C896]/5 to-transparent">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="bg-[#1a1a1a] border-gray-800">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-[#00C896]">Submit Your Startup Idea</CardTitle>
                <CardDescription className="text-gray-300">
                  Fill out the form below and I'll get back to you within 24 hours to discuss your idea.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-[#00C896] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-[#121212]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#00C896] mb-2">Idea Submitted!</h3>
                    <p className="text-gray-300">Thanks for sharing your vision. I'll be in touch soon!</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-gray-300">
                          Your Name *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="bg-[#121212] border-gray-700 focus:border-[#00C896] text-white"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-gray-300">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="bg-[#121212] border-gray-700 focus:border-[#00C896] text-white"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="title" className="text-gray-300">
                        Startup Idea Title *
                      </Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => handleInputChange("title", e.target.value)}
                        className="bg-[#121212] border-gray-700 focus:border-[#00C896] text-white"
                        placeholder="e.g., AI-Powered Meal Planning App"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="problem" className="text-gray-300">
                        Problem You're Solving *
                      </Label>
                      <Textarea
                        id="problem"
                        value={formData.problem}
                        onChange={(e) => handleInputChange("problem", e.target.value)}
                        className="bg-[#121212] border-gray-700 focus:border-[#00C896] text-white"
                        placeholder="What specific problem does your idea address? Who faces this problem?"
                        rows={3}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="description" className="text-gray-300">
                        Short Description *
                      </Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        className="bg-[#121212] border-gray-700 focus:border-[#00C896] text-white"
                        placeholder="Describe your solution, target audience, and what makes it unique..."
                        rows={4}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#00C896] hover:bg-[#00C896]/80 text-[#121212] font-semibold py-3"
                      size="lg"
                    >
                      Submit Idea
                      <Send className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Happens Next?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Here's my process for evaluating and developing startup ideas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-[#00C896] text-[#121212] rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Initial Review</h3>
              <p className="text-gray-400">
                I'll review your idea within 24 hours and provide initial feedback on feasibility and market potential.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-[#00C896] text-[#121212] rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Strategy Call</h3>
              <p className="text-gray-400">
                If there's mutual interest, we'll schedule a call to dive deeper into the idea and discuss next steps.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-[#00C896] text-[#121212] rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Build Together</h3>
              <p className="text-gray-400">
                We'll create a roadmap and start building an MVP, iterating based on user feedback and market
                validation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">Ready to turn your idea into reality? Let's build something amazing together.</p>
          <p className="text-sm text-gray-500 mt-4">© 2024 Anuj Jain. Built with Next.js & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
