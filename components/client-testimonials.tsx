"use client"

import type React from "react"
import { useRef, useEffect } from "react"
import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechGiant",
    quote: "ArcOne transformed our brand. Their strategies catapulted us to industry leadership.",
  },
  {
    name: "Michael Chen",
    role: "CMO, EcoFriendly",
    quote: "The results speak for themselves. ArcOne delivered beyond our wildest expectations.",
  },
  {
    name: "Emma Rodriguez",
    role: "Founder, StartUp",
    quote: "Partnering with ArcOne was the best decision for our growth. Simply outstanding.",
  },
]

export const ClientTestimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  const inView = useInView(containerRef, { once: true, amount: 0.2 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <section ref={containerRef} className="py-20 md:py-32 bg-black text-white overflow-hidden">
      <motion.div className="container mx-auto px-4" style={{ opacity, scale }}>
        <h2 className="text-6xl md:text-8xl font-bold mb-16 text-center">Client Voices</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-xl"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.2 } },
              }}
            >
              <p className="text-xl mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#FF6B00] rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-white/70">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

