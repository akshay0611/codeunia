import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Code2, Github, MessageCircle, Twitter, Linkedin, ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-gradient-to-b from-muted/50 to-background">
      <div className="container px-4 pl-8 md:pl-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
       {/* codeunia branding */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2 hover:scale-105 transition-transform">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-lg font-bold gradient-text">Codeunia</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Empowering the next generation of coders through real-world projects, vibrant community, and continuous
              learning.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="#"
                className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg"
              >
                <MessageCircle className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gradient-to-br from-sky-400 to-sky-600 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

               {/* quick links of codeunia */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Quick Links</h4>
            <div className="space-y-3">
              <Link
                href="/about"
                className="block text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200"
              >
                About Us
              </Link>
              <Link
                href="/events"
                className="block text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200"
              >
                Events & Hackathons
              </Link>
              <Link
                href="/blog"
                className="block text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200"
              >
                Developer Blog
              </Link>
              <Link
                href="/contact"
                className="block text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200"
              >
                Contact Support
              </Link>
            </div>
          </div>

       {/* community section of codeunia */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Community</h4>
            <div className="space-y-3">
              <Link
                href="#"
                className="block text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200"
              >
                GitHub Projects
              </Link>
              <Link
                href="#"
                className="block text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200"
              >
                Discord Server
              </Link>
              <Link
                href="#"
                className="block text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200"
              >
                Twitter Community
              </Link>
              <Link
                href="#"
                className="block text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200"
              >
                LinkedIn Network
              </Link>
            </div>
          </div>

          {/* codeunia newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Stay Updated</h4>
            <p className="text-muted-foreground">
              Get the latest updates on events, new features, and community highlights.
            </p>
            <div className="space-y-3">
              <div className="flex space-x-2">
                <Input placeholder="Enter your email" className="flex-1" />
                <Button size="sm" className="glow-effect hover:scale-105 transition-all">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">Join 10,000+ developers in our newsletter</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Codeunia. All rights reserved. Built with ❤️ for developers.
          </p>
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}