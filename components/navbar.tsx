"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import type React from "react" // Added import for React

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 flex justify-center`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`${
        scrollPosition > 50 ? "bg-black/80 backdrop-blur-md rounded-3xl" : ""
      } max-w-6xl mx-auto transition-all duration-300 ${
        scrollPosition > 50 ? "mt-2 px-8" : "px-6"
      }`}>
        <div className="flex justify-between items-center py-5">
          <Link href="/" className="text-xl font-bold text-[#FF6B00] hover:scale-105 transition-transform">
            ArcOne
          </Link>
          <div className="hidden md:flex space-x-7 px-7 py-2.5 rounded-r-full rounded-l-lg">
            {navItems.map((item) => (
              <motion.div key={item.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link href={item.href} className="text-base text-white hover:text-[#FF6B00] transition-colors duration-300">
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </motion.button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-18 right-4 left-4 max-w-lg mx-auto bg-black/95 backdrop-blur-md rounded-r-3xl rounded-l-lg p-5 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full text-center"
                >
                  <Link
                    href={item.href}
                    className="block w-full py-2.5 text-base text-white hover:text-[#FF6B00] transition-all duration-300 hover:bg-white/10 rounded-xl"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
