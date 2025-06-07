"use client";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-background text-foreground">
      <div className="flex-1 w-full flex flex-col items-center">
        <div className="w-full">
          <HeroHighlight
            showGradient={true}
            containerClassName="pt-40 pb-32 md:pt-52 md:pb-40 lg:pt-64 lg:pb-52 min-h-screen"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto px-4 text-center py-32 md:py-40 lg:py-52"
            >
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 border border-blue-200 dark:border-blue-700 mb-6"
                >
                  <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                    🚀 Coming Soon • Under Development
                  </span>
                </motion.div>

                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                >
                  Welcome to{" "}
                  <Highlight className="text-primary-foreground dark:text-primary-foreground">
                    Codeunia
                  </Highlight>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-lg md:text-xl text-foreground max-w-2xl mx-auto"
                >
                  We&apos;re crafting something extraordinary for the coding community. 
                  Get ready for an innovative platform that will revolutionize how you learn, 
                  code, and connect with fellow developers.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="flex flex-wrap justify-center gap-4 mt-8"
                >
                  <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border border-green-200 dark:border-green-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-sm text-foreground">Interactive Learning</span>
                  </div>
                  <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                    <span className="text-sm text-blue-700 dark:text-blue-300">Community Driven</span>
                  </div>
                  <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg border border-purple-200 dark:border-purple-700">
                    <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                    <span className="text-sm text-purple-700 dark:text-purple-300">Modern Tools</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="text-sm text-muted-foreground mt-8"
                >
                  Want to be notified when we launch? 
                  <span className="text-primary font-medium cursor-pointer hover:underline ml-1">
                    Join our waitlist
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </HeroHighlight>
        </div>
      </div>
    </main>
  );
}