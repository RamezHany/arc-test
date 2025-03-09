"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CustomCursor } from "@/components/custom-cursor"
import { ParallaxText } from "@/components/parallax-text"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { InteractiveBackground } from "@/components/interactive-background"
import { CountUp } from "@/components/count-up"
import { ScrollProgress } from "@/components/scroll-progress"
import { Navbar } from "@/components/navbar"
import { WhatWeOffer } from "@/components/what-we-offer"

import { ClientTestimonials } from "@/components/client-testimonials"
import { GlimpseOfWork } from "@/components/glimpse-of-work"
import { WhyWorkWithUs } from "@/components/why-work-with-us"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <CustomCursor />
      <InteractiveBackground />
      <ScrollProgress />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a1a1a] to-[#2a0e00] z-0">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-96 h-96 bg-[#FF6B00]/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF6B00]/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#FF6B00]/15 rounded-full filter blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
        
        {/* Floating particles */}
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 2 }}
        >
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{ 
                x: Math.random() * 100 - 50 + "%", 
                y: Math.random() * 100 + "%",
                opacity: Math.random() * 0.5 + 0.3
              }}
              animate={{ 
                y: [null, Math.random() * -50 - 10 + "%"],
                opacity: [null, 0]
              }}
              transition={{ 
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ 
                width: Math.random() * 3 + 1 + "px",
                height: Math.random() * 3 + 1 + "px"
              }}
            />
          ))}
        </motion.div>

        <div className="container mx-auto px-4 z-10 relative pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left side - Text content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-left mt-10"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-4"
              >
                <span className="inline-block px-4 py-1 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] text-sm font-medium mb-4">
                  DIGITAL MARKETING AGENCY
                </span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                We Create <br />
                <span className="text-[#FF6B00] relative">
                  Digital Experiences
                  <motion.span 
                    className="absolute -bottom-2 left-0 h-1 bg-[#FF6B00]" 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-300 mb-8 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Transform your brand with cutting-edge digital solutions that drive growth and engagement in today's competitive landscape.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Button className="group bg-[#FF6B00] px-6 py-3 text-lg hover:bg-[#FF6B00]/90 transition-all duration-300">
                  Get Started
                  <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Button>
                <Button variant="outline" className="group bg-white/5 border-[#FF6B00]/50 text-white hover:bg-[#FF6B00]/10 hover:border-[#FF6B00] px-6 py-3 text-lg transition-all duration-300">
                  <span className="flex items-center">
                    <span>Our Work</span>
                    <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Button>
              </motion.div>
              
              <motion.div 
                className="mt-12 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <h3 className="text-lg font-medium mb-4 text-gray-300">Trusted by leading brands</h3>
                <div className="flex items-center gap-8 overflow-hidden">
                  <motion.div 
                    className="flex items-center gap-8"
                    animate={{ x: [0, -1000] }}
                    transition={{ 
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                      repeatType: "loop"
                    }}
                  >
                    {/* Partner logos - repeating set 1 */}
                    <div className="flex items-center gap-8">
                      <div className="w-16 h-16 rounded-full bg-white/10 p-2 flex items-center justify-center">
                        <img 
                          src="https://cdn.worldvectorlogo.com/logos/google-1-1.svg" 
                          alt="Google" 
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                      <div className="w-16 h-16 rounded-full bg-white/10 p-2 flex items-center justify-center">
                        <img 
                          src="https://cdn.worldvectorlogo.com/logos/amazon-icon-1.svg" 
                          alt="Amazon" 
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                      <div className="w-16 h-16 rounded-full bg-white/10 p-2 flex items-center justify-center">
                        <img 
                          src="https://cdn.worldvectorlogo.com/logos/microsoft-5.svg" 
                          alt="Microsoft" 
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                      <div className="w-16 h-16 rounded-full bg-white/10 p-2 flex items-center justify-center">
                        <img 
                          src="https://cdn.worldvectorlogo.com/logos/spotify-2.svg" 
                          alt="Spotify" 
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                      <div className="w-16 h-16 rounded-full bg-white/10 p-2 flex items-center justify-center">
                        <img 
                          src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" 
                          alt="Slack" 
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                      <div className="w-16 h-16 rounded-full bg-white/10 p-2 flex items-center justify-center">
                        <img 
                          src="https://cdn.worldvectorlogo.com/logos/adobe-2.svg" 
                          alt="Adobe" 
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                      <div className="w-16 h-16 rounded-full bg-white/10 p-2 flex items-center justify-center">
                        <img 
                          src="https://cdn.worldvectorlogo.com/logos/salesforce-2.svg" 
                          alt="Salesforce" 
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                      <div className="w-16 h-16 rounded-full bg-white/10 p-2 flex items-center justify-center">
                        <img 
                          src="https://cdn.worldvectorlogo.com/logos/ibm-1.svg" 
                          alt="IBM" 
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                    </div>
                    
                    {/* Partner logos - repeating set 2 (duplicate to ensure smooth infinite scroll) */}
                    <div className="flex items-center gap-8">
                      <div className="w-16 h-16 rounded-full bg-white/10 p-2 flex items-center justify-center">
                        <img 
                          src="https://cdn.worldvectorlogo.com/logos/google-1-1.svg" 
                          alt="Google" 
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                      <div className="w-16 h-16 rounded-full bg-white/10 p-2 flex items-center justify-center">
                        <img 
                          src="https://cdn.worldvectorlogo.com/logos/amazon-icon-1.svg" 
                          alt="Amazon" 
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                      <div className="w-16 h-16 rounded-full bg-white/10 p-2 flex items-center justify-center">
                        <img 
                          src="https://cdn.worldvectorlogo.com/logos/microsoft-5.svg" 
                          alt="Microsoft" 
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                      <div className="w-16 h-16 rounded-full bg-white/10 p-2 flex items-center justify-center">
                        <img 
                          src="https://cdn.worldvectorlogo.com/logos/spotify-2.svg" 
                          alt="Spotify" 
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                      <div className="w-16 h-16 rounded-full bg-white/10 p-2 flex items-center justify-center">
                        <img 
                          src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" 
                          alt="Slack" 
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                      <div className="w-16 h-16 rounded-full bg-white/10 p-2 flex items-center justify-center">
                        <img 
                          src="https://cdn.worldvectorlogo.com/logos/adobe-2.svg" 
                          alt="Adobe" 
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                      <div className="w-16 h-16 rounded-full bg-white/10 p-2 flex items-center justify-center">
                        <img 
                          src="https://cdn.worldvectorlogo.com/logos/salesforce-2.svg" 
                          alt="Salesforce" 
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                      <div className="w-16 h-16 rounded-full bg-white/10 p-2 flex items-center justify-center">
                        <img 
                          src="https://cdn.worldvectorlogo.com/logos/ibm-1.svg" 
                          alt="IBM" 
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                <div className="flex justify-between mt-6">
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-[#FF6B00]">150+</span>
                    <span className="text-sm text-gray-400">Projects Completed</span>
                  </div>
                <div className="flex flex-col">
                    <span className="text-3xl font-bold text-[#FF6B00]">98%</span>
                  <span className="text-sm text-gray-400">Client Satisfaction</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Right side - Visual element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative hidden md:block"
            >
              <div className="relative w-full h-[600px]">
                {/* Main showcase elements - 3D grid of images */}
                <div className="absolute inset-0 perspective-1000">
                  {/* Image 1 - Main showcase */}
                  <motion.div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden shadow-xl"
                    initial={{ opacity: 0, scale: 0.8, rotateY: -10 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/20 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4 right-4 h-48 rounded-lg bg-gradient-to-br from-[#FF6B00]/30 to-[#FF9D5C]/30 backdrop-blur-sm overflow-hidden">
                      {/* Marketing campaign image */}
                      <img 
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                        alt="Digital Marketing Campaign" 
                        className="w-full h-full object-cover opacity-80"
                      />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 h-20 rounded-lg bg-white/5 flex flex-col justify-center px-3">
                      <div className="h-2 w-16 bg-white/30 rounded-full mb-2"></div>
                      <div className="h-2 w-24 bg-white/20 rounded-full"></div>
                    </div>
                  </motion.div>
                  
                  {/* Image 2 - Secondary showcase */}
                  <motion.div 
                    className="absolute top-[10%] right-[5%] w-64 h-64 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-lg"
                    initial={{ opacity: 0, x: 50, rotateY: 15 }}
                    animate={{ opacity: 1, x: 0, rotateY: 5 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-tl from-[#FF6B00]/15 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4 right-4 h-36 rounded-lg bg-gradient-to-tr from-[#FF6B00]/20 to-[#FF9D5C]/20 backdrop-blur-sm overflow-hidden">
                      {/* Social media campaign image */}
                      <img 
                        src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                        alt="Social Media Campaign" 
                        className="w-full h-full object-cover opacity-80"
                      />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 h-16 rounded-lg bg-white/5 flex flex-col justify-center px-3">
                      <div className="h-2 w-12 bg-white/30 rounded-full mb-2"></div>
                      <div className="h-2 w-20 bg-white/20 rounded-full"></div>
                    </div>
                  </motion.div>
                  
                  {/* Image 3 - Tertiary showcase */}
                  <motion.div 
                    className="absolute bottom-[10%] left-[15%] w-56 h-56 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-lg"
                    initial={{ opacity: 0, x: -50, rotateY: -15 }}
                    animate={{ opacity: 1, x: 0, rotateY: -5 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/15 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4 right-4 h-32 rounded-lg bg-gradient-to-br from-[#FF6B00]/20 to-[#FF9D5C]/20 backdrop-blur-sm overflow-hidden">
                      {/* Brand identity image */}
                      <img 
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                        alt="Brand Identity" 
                        className="w-full h-full object-cover opacity-80"
                      />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 h-12 rounded-lg bg-white/5 flex flex-col justify-center px-3">
                      <div className="h-2 w-10 bg-white/30 rounded-full mb-2"></div>
                      <div className="h-2 w-16 bg-white/20 rounded-full"></div>
                    </div>
                  </motion.div>
                  
                  {/* Image 4 - Fourth showcase */}
                  <motion.div 
                    className="absolute top-[70%] right-[15%] w-48 h-48 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-lg"
                    initial={{ opacity: 0, y: 50, rotateY: 10 }}
                    animate={{ opacity: 1, y: 0, rotateY: 3 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/15 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4 right-4 h-28 rounded-lg bg-gradient-to-br from-[#FF6B00]/20 to-[#FF9D5C]/20 backdrop-blur-sm overflow-hidden">
                      {/* Web design image */}
                      <img 
                        src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                        alt="Web Design" 
                        className="w-full h-full object-cover opacity-80"
                      />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 h-8 rounded-lg bg-white/5 flex flex-col justify-center px-3">
                      <div className="h-2 w-8 bg-white/30 rounded-full"></div>
                    </div>
                  </motion.div>
                  
                  {/* Image 5 - Fifth showcase (new) */}
                  <motion.div 
                    className="absolute top-[15%] left-[15%] w-52 h-52 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-lg"
                    initial={{ opacity: 0, y: -50, rotateY: -8 }}
                    animate={{ opacity: 1, y: 0, rotateY: -2 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-tl from-[#FF6B00]/15 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4 right-4 h-30 rounded-lg bg-gradient-to-tl from-[#FF6B00]/20 to-[#FF9D5C]/20 backdrop-blur-sm overflow-hidden">
                      {/* SEO/Analytics image */}
                      <img 
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80" 
                        alt="Analytics Dashboard" 
                        className="w-full h-full object-cover opacity-80"
                      />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 h-10 rounded-lg bg-white/5 flex flex-col justify-center px-3">
                      <div className="h-2 w-14 bg-white/30 rounded-full"></div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Abstract shape elements */}
                <motion.div 
                  className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF9D5C] filter blur-md opacity-30"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div 
                  className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-gradient-to-r from-[#FF6B00]/70 to-[#FF9D5C]/70 filter blur-md opacity-30"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
                
                {/* Floating elements */}
                <motion.div 
                  className="absolute top-1/4 left-1/4 w-16 h-16 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 flex items-center justify-center"
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-8 h-8 rounded-full bg-[#FF6B00]"></div>
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 flex items-center justify-center"
                  animate={{ 
                    y: [0, 20, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  <div className="w-10 h-10 rounded-md bg-[#FF6B00]/80"></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
          <motion.div 
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div 
              className="w-1 h-2 bg-white rounded-full"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* What We Offer Section */}
      <WhatWeOffer />

      {/* Glimpse of Work Section */}
      <GlimpseOfWork />

      {/* Why Work With Us Section */}
      <WhyWorkWithUs />

      {/* Services Section */}
      <section className="py-16 sm:py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-12 sm:mb-16 text-left">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: "Digital Strategy", desc: "Data-driven approaches for online dominance" },
              { title: "Brand Evolution", desc: "Crafting identities that resonate and endure" },
              { title: "Social Amplification", desc: "Boosting engagement across all platforms" },
              { title: "Performance Analytics", desc: "Turning data into actionable insights" },
              { title: "Content Mastery", desc: "Compelling narratives that captivate audiences" },
              { title: "SEO Domination", desc: "Climbing to the top of search results" },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassmorphicCard className="p-6 sm:p-8 rounded-2xl bg-white/5 hover:bg-[#FF6B00]/10 transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-[#FF6B00]">{service.title}</h3>
                  <p className="text-base sm:text-lg">{service.desc}</p>
                </GlassmorphicCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Client Testimonials Section */}
      <ClientTestimonials />

      {/* About Section */}
      <section className="py-16 sm:py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6">Our Impact</h2>
              <p className="text-lg sm:text-xl">
                At ArcOne, we don't just market - we transform. Our strategies have revolutionized industries and
                propelled brands to unprecedented heights.
              </p>
           
            </div>
            <div className="grid grid-cols-2 gap-4">
              <CountUp className="bg-[#FF6B00] p-4 sm:p-6 rounded-2xl" end={250} suffix="+" title="Brands Elevated" />
              <CountUp className="bg-white/10 p-4 sm:p-6 rounded-2xl" end={15} suffix="+" title="Years of Innovation" />
              <CountUp className="bg-white/10 p-4 sm:p-6 rounded-2xl" end={98} suffix="%" title="Client Satisfaction" />
              <CountUp
                className="bg-[#FF6B00] p-4 sm:p-6 rounded-2xl"
                end={500}
                suffix="M+"
                title="Impressions Delivered"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6">Let's Ignite</h2>
              <p className="text-lg sm:text-xl">
                Ready to set your brand ablaze? Our team of marketing virtuosos is poised to launch your success into
                the stratosphere.
              </p>
              <Button className="group bg-[#FF6B00] px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl hover:bg-[#FF6B00]/80 transition-all duration-300">
                Fuel Your Success
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Button>
            </div>
            <GlassmorphicCard className="p-6 sm:p-8 rounded-2xl bg-white/5">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-[#FF6B00]">Connect With Us</h3>
              <p className="mb-2">
                <strong>Email:</strong> ignite@arcone.com
              </p>
              <p className="mb-2">
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
              <p className="mb-4">
                <strong>Location:</strong> 123 Innovation Ave, Digital City, DC 90210
              </p>
              <p className="text-sm sm:text-base">Follow our signal for the latest in marketing brilliance.</p>
            </GlassmorphicCard>
          </div>
        </div>
      </section>
    </main>
  )
}
