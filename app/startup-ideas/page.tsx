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
              Business Innovation Hub
            </h1>

            <p className="text-xl theme-text-muted max-w-4xl mx-auto mb-12 leading-relaxed">
              Transform your business ideas into market-ready solutions. I partner with entrepreneurs and businesses to
              validate concepts, build MVPs, and scale successful ventures through strategic technology implementation.
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
                    <h3 className="font-bold text-xl mb-4">Market Validation</h3>
                    <p className="text-sm theme-text-muted leading-relaxed">
                      We start by validating your business idea through market research, competitor analysis, and
                      customer feedback to ensure product-market fit.
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
                    <h3 className="font-bold text-xl mb-4">Strategic Development</h3>
                    <p className="text-sm theme-text-muted leading-relaxed">
                      Collaborative approach to refine your business model, define key metrics, and create a roadmap for
                      sustainable growth and scalability.
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
                    <h3 className="font-bold text-xl mb-4">Rapid Execution</h3>
                    <p className="text-sm theme-text-muted leading-relaxed">
                      From concept to market launch using agile methodologies, modern tech stack, and proven business
                      frameworks to minimize time-to-market.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Business Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#00C896] mb-2">50+</div>
                <div className="text-sm theme-text-muted">Ideas Evaluated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-sm theme-text-muted">MVPs Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">8</div>
                <div className="text-sm theme-text-muted">Successful Launches</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#00C896] mb-2">95%</div>
                <div className="text-sm theme-text-muted">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business-Focused Idea Submission Form */}
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
                  Partner With Me
                </CardTitle>
                <CardDescription className="theme-text-muted text-lg max-w-2xl mx-auto">
                  Ready to transform your business idea into reality? Share your vision and let's discuss how we can
                  build a successful venture together.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-[#00C896] to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                      <Send className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#00C896] mb-4">Business Proposal Submitted!</h3>
                    <p className="theme-text-muted text-lg">
                      Thank you for sharing your business vision. I'll review your proposal and get back to you within
                      24 hours with initial feedback and next steps.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-base font-semibold mb-2 block">
                          Your Name *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="bg-background border-border focus:border-[#00C896] h-12 text-base"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-base font-semibold mb-2 block">
                          Business Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="bg-background border-border focus:border-[#00C896] h-12 text-base"
                          placeholder="john@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="title" className="text-base font-semibold mb-2 block">
                        Business Idea / Project Title *
                      </Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => handleInputChange("title", e.target.value)}
                        className="bg-background border-border focus:border-[#00C896] h-12 text-base"
                        placeholder="e.g., AI-Powered Supply Chain Management Platform"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="problem" className="text-base font-semibold mb-2 block">
                        Market Problem & Opportunity *
                      </Label>
                      <Textarea
                        id="problem"
                        value={formData.problem}
                        onChange={(e) => handleInputChange("problem", e.target.value)}
                        className="bg-background border-border focus:border-[#00C896] text-base min-h-[120px]"
                        placeholder="What specific market problem does your business solve? Who is your target audience? What's the market size and opportunity?"
                        rows={4}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="description" className="text-base font-semibold mb-2 block">
                        Business Solution & Value Proposition *
                      </Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        className="bg-background border-border focus:border-[#00C896] text-base min-h-[140px]"
                        placeholder="Describe your solution, unique value proposition, business model, revenue streams, and competitive advantages..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#00C896] to-blue-500 hover:from-[#00C896]/80 hover:to-blue-500/80 text-white font-bold py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                      size="lg"
                    >
                      Submit Business Proposal
                      <Send className="ml-3 w-6 h-6" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Business Partnership Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Partnership Process</h2>
            <p className="theme-text-muted text-xl max-w-3xl mx-auto">
              From initial consultation to market launch - here's how we'll transform your business idea into a
              successful venture
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
              <h3 className="text-2xl font-bold mb-4">Market Analysis & Strategy</h3>
              <p className="theme-text-muted leading-relaxed">
                Comprehensive market research, competitive analysis, and business model validation. We'll assess market
                opportunity, define target audience, and create a go-to-market strategy.
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
              <h3 className="text-2xl font-bold mb-4">MVP Development & Testing</h3>
              <p className="theme-text-muted leading-relaxed">
                Build a minimum viable product using modern technologies and agile methodologies. Conduct user testing,
                gather feedback, and iterate based on real market data.
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
              <h3 className="text-2xl font-bold mb-4">Launch & Scale</h3>
              <p className="theme-text-muted leading-relaxed">
                Execute the launch strategy, monitor key performance indicators, and implement growth strategies.
                Continuous optimization and scaling based on market response.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-border bg-gradient-to-r from-[#00C896]/5 to-blue-500/5">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Build Your Business?</h3>
            <p className="theme-text-muted text-lg max-w-2xl mx-auto">
              Let's turn your innovative ideas into profitable ventures. Together, we'll build something extraordinary.
            </p>
          </div>
          <p className="text-sm text-gray-500">© 2024 Anuj Jain. Empowering entrepreneurs through technology.</p>
        </div>
      </footer>
    </div>
  )
}
