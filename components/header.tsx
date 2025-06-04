"use client"

import Link from "next/link"
import {useState} from "react"
import {Button} from "@/components/ui/button" 
// import {ThemeToggle} from "@/components/theme-toggle"
import {Menu, X, Code}  from "lucide-react"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <header className="bg-white dark:bg-gray-900 shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
            My Website
            </Link>
            <nav className={`flex items-center space-x-4 ${isOpen ? "block" : "hidden"} md:block`}>
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Home</Link>
            <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</Link>
            <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Contact</Link>
            </nav>
            <div className="flex items-center space-x-2">
            {/* <ThemeToggle /> */}
            <Button variant="outline" size="icon" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
            <Button variant="outline" size="icon" asChild>
                <Link href="/code"><Code size={20} /></Link>
            </Button>
            </div>
        </div>
    </header>
    )
    }