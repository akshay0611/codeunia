"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  Mail,
  Users,
  MessageSquare,
  Globe,
  ArrowRight,
  Linkedin,
  Instagram,
  Send,
  Code,
  BookOpen,
  Trophy,
  Heart,
} from "lucide-react"
import { motion } from "framer-motion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { SparklesCore } from "@/components/ui/sparkles"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const supportCategories = [
    { value: "technical", label: "Technical Support", icon: Code },
    { value: "learning", label: "Learning Resources", icon: BookOpen },
    { value: "events", label: "Events & Hackathons", icon: Trophy },
    { value: "collaboration", label: "Collaboration", icon: Heart },
    { value: "other", label: "Other", icon: MessageSquare },
  ]

  return (
    <div className="flex flex-col overflow-hidden">
      {/* hero */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:linear-gradient(to_right,rgba(99,102,241,0.8)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.8)_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,rgba(139,92,246,0.8)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.8)_1px,transparent_1px)]",
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-purple-500/5 animate-gradient"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container px-4 mx-auto relative z-10"
        >
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col items-center justify-center gap-4">
                <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
                  <span className="absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </span>
                  <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
                    <span>Let&apos;s Connect</span>
                    <svg
                      fill="none"
                      height="16"
                      viewBox="0 0 24 24"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.75 8.75L14.25 12L10.75 15.25"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                </button>
              </div>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold tracking-tight leading-tight"
            >
              Get in <span className="gradient-text">Touch</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Have questions about Codeunia? We&apos;re here to help! Reach out to us through any of our channels.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* main content */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <Card className="border-0 shadow-lg card-hover">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                        <Send className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">Send us a Message</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="shadow-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="shadow-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <Select
                          value={formData.category}
                          onValueChange={(value) => handleInputChange("category", value)}
                        >
                          <SelectTrigger className="shadow-sm">
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                          <SelectContent>
                            {supportCategories.map((category) => (
                              <SelectItem key={category.value} value={category.value}>
                                <div className="flex items-center space-x-2">
                                  <category.icon className="h-4 w-4" />
                                  <span>{category.label}</span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          placeholder="Brief description of your inquiry"
                          value={formData.subject}
                          onChange={(e) => handleInputChange("subject", e.target.value)}
                          className="shadow-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Your message..."
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          rows={4}
                          className="shadow-sm resize-none"
                        />
                      </div>
                      <Button className="w-full glow-effect hover:scale-105 transition-all duration-300">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <Card className="border-0 shadow-lg card-hover">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">Email Us</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Have a question or want to collaborate? Drop us an email at:
                    </p>
                    <Button variant="outline" className="w-full hover:scale-105 transition-all duration-300">
                      codeunia@gmail.com
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg card-hover">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">Connect With Us</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Follow us on social media to stay updated with our latest news and events:
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="outline" className="w-full hover:scale-105 transition-all duration-300" asChild>
                        <a href="https://www.linkedin.com/company/codeunia/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                          <Linkedin className="h-4 w-4" />
                          LinkedIn
                        </a>
                      </Button>
                      <Button variant="outline" className="w-full hover:scale-105 transition-all duration-300" asChild>
                        <a href="https://www.instagram.com/codeunia" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                          <Instagram className="h-4 w-4" />
                          Instagram
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* about section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-xl bg-gradient-to-br from-primary/10 via-background to-purple-500/10 dark:from-primary/20 dark:via-background dark:to-purple-500/20 hover:shadow-2xl transition-all duration-300 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl">About Codeunia</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      Codeunia is a student-led tech community where passion meets practice. We&apos;re a vibrant community of tech enthusiasts 
                      driven by the spirit of innovation and practical application.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Our mission is to bridge the gap between theory and real-world implementation through engaging projects in 
                      hardware, software, embedded systems, and IoT. We believe in learning by doing and building together.
                    </p>
                    <div className="pt-4">
                      <Button variant="outline" className="hover:scale-105 transition-all duration-300" asChild>
                        <a href="/about" className="flex items-center gap-2">
                          Learn More About Us
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* faq section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6 mb-12">
              <Badge variant="outline" className="px-4 py-2">
                ❓ Frequently Asked Questions
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                Common <span className="gradient-text">Questions</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Find quick answers to frequently asked questions about our community.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg card-hover">
                  <CardHeader>
                    <CardTitle className="text-xl">How can I join Codeunia?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Joining Codeunia is easy! Simply create an account on our platform and start exploring our community. 
                      You can participate in projects, join discussions, and connect with other tech enthusiasts.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg card-hover">
                  <CardHeader>
                    <CardTitle className="text-xl">What kind of projects can I work on?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We focus on real-world projects in various domains including software development, IoT, 
                      embedded systems, and AI. Our projects are designed to help you apply theoretical knowledge 
                      to practical scenarios.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg card-hover">
                  <CardHeader>
                    <CardTitle className="text-xl">How can I contribute to the community?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      There are many ways to contribute! You can participate in projects, share your knowledge, 
                      mentor others, or help organize events. We welcome all forms of positive contribution to 
                      our growing community.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* cta */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-primary/10 via-purple-500/10 to-background dark:from-primary/20 dark:via-purple-500/20 dark:to-background">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 dark:bg-primary/30 rounded-full blur-xl animate-float"></div>
          <div
            className="absolute bottom-10 right-10 w-48 h-48 bg-purple-500/20 dark:bg-purple-500/30 rounded-full blur-xl animate-float"
            style={{ animationDelay: "3s" }}
          ></div>
        </div>

        {/* Sparkles effect */}
        <div className="absolute inset-0 h-full w-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#6366f1"
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="container px-4 mx-auto text-center relative z-10"
        >
          <div className="max-w-3xl mx-auto space-y-8 p-8 rounded-3xl bg-background/50 dark:bg-background/80 backdrop-blur-md border border-primary/10 dark:border-primary/20 shadow-xl">
            <Badge variant="secondary" className="bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary/90 border-primary/20 dark:border-primary/30 px-4 py-2">
              🚀 Join Our Community
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-foreground/90">
              Be Part of Something Amazing
            </h2>
            <p className="text-xl text-muted-foreground dark:text-muted-foreground/90 leading-relaxed">
              Join our community of tech enthusiasts and start building real-world projects today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="default"
                className="px-8 py-6 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Join Codeunia
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg font-semibold hover:scale-105 transition-transform duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
