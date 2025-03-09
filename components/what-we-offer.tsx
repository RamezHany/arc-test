"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const offerings = [
  {
    number: "01",
    title: "Digital Marketing",
    description: "Strategic online campaigns that drive engagement, conversions, and brand awareness across multiple digital channels.",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f5a70d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  },
  {
    number: "02",
    title: "Public Relations - PR",
    description: "Building and maintaining a positive brand image through strategic communication with media and target audiences.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  },
  {
    number: "03",
    title: "Media Production",
    description: "High-quality video, photo, and audio content creation that tells your brand story in compelling ways.",
    image: "https://images.unsplash.com/photo-1574717024453-354056afd6fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  }, 
  {
    number: "04",
    title: "Offline Marketing",
    description: "Traditional marketing strategies including print, events, and direct mail that complement your digital presence.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  },
]

export function WhatWeOffer() {
  return (
    <section className="py-16 md:py-28 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 sm:mb-20 text-left"
        >
          WHAT WE <span className="text-[#FF6B00]">OFFER</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {offerings.map((offering, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col h-full"
            >
              {/* Number and title */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-bold text-[#FF6B00]">{offering.number}</span>
                <div className="w-12 h-[1px] bg-[#FF6B00]/50"></div>
                <h3 className="text-2xl font-bold">{offering.title}</h3>
              </div>
              
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="relative h-[220px] rounded-lg overflow-hidden mb-5"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10 z-10"></div>
                <Image
                  src={offering.image}
                  alt={offering.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
              
              {/* Description */}
              <p className="text-base text-gray-300 mb-4">{offering.description}</p>
              
              {/* Learn more button */}
              <motion.button 
                whileHover={{ x: 5 }}
                className="flex items-center text-[#FF6B00] font-medium mt-auto"
              >
                Learn more
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

