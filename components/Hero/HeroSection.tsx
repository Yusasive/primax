"use client"; 

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/button/Button";
import hero1 from "@/public/images/hero1.png";

export default function HeroSection() {
  return (
    <section className="bg-[#fef5f5] mt-20 px-6 md:px-12 lg:px-24 xl:px-52 flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center lg:text-left max-w-2xl space-y-6 lg:space-y-8"
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#1b1b1b] leading-tight">
          Connecting Africa, <br className="hidden md:block" /> one payment at a
          time.
        </h1>
        <p className="text-base md:text-lg font-bold text-gray-600 mt-2 md:mt-4">
          We are on a mission to create boundless possibilities through
          financial innovation for the 1 billion+ people across Africa.
        </p>
        <div className="mt-4 md:mt-6">
          <Button variant="primary">Get Started ↗</Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className="w-full max-w-[350px] sm:max-w-[450px] lg:max-w-[500px]"
      >
        <Image
          src={hero1}
          alt="Hero Picture"
          width={591}
          height={664}
          className="w-full h-auto"
          priority
        />
      </motion.div>
    </section>
  );
}
