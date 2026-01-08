"use client";


import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "On-Time EWR Airport Service",
    description: "We provide reliable, on-time airport transportation to and from Newark Liberty International Airport by tracking flights in real time and adjusting pickup times for delays or early arrivals."
  },
  {
    title: "Professional Chauffeurs",
    description: "Our licensed chauffeurs are highly trained, courteous, and experienced in delivering safe and professional EWR car and limo service throughout Newark, NJ, and nearby areas."
  },
  {
    title: "Luxury Vehicle Fleet",
    description: "Choose from a premium fleet of luxury sedans, SUVs, and limousines, all maintained to high standards for comfort, cleanliness, and smooth airport travel."
  },
  {
    title: "24/7 Airport Availability",
    description: "Our EWR airport car service is available 24/7, making it easy to book dependable transportation for early morning, late night, or last-minute flights."
  },
  {
    title: "Flat-Rate & Transparent Pricing",
    description: "We offer competitive flat-rate pricing for EWR airport limo service with no surge fees, hidden costs, or surprises—just honest, upfront rates."
  },
  {
    title: "Local Newark & NYC Expertise",
    description: "With deep knowledge of Newark, New Jersey, and New York City routes, our drivers ensure efficient, stress-free airport transfers every time."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function ImageCompareComponent() {
  return (
    <div className="w-full max-w-full md:pt-12 pt-[30px] pb-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="lg:text-[42px] md:text-[38px] text-[32px] text-white leading-[114%] font-semibold mb-[15px] text-center md:px[0px] px-[15px]">
          Why Choose EWR Car and Limo Service?
        </h2>
        <p className="md:font-[18px] font-[16px] leading-[120%] text-white w-full max-w-[800px] font-regular mb-10 mx-auto text-center md:px[0px] px-[15px]">
          We are committed to providing reliable, comfortable, and on-time airport transportation to and from Newark Liberty International Airport. Our focus on professionalism, punctuality, and customer satisfaction makes us a trusted choice for travelers across New Jersey and New York.
        </p>
      </motion.div>

      <div className="w-full max-w-[1240px] mx-auto xl:px-0 px-5 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[20px] p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl text-white font-semibold mb-3 group-hover:text-blue-200 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

