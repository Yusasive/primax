"use client";

import { motion } from "framer-motion";
import Button from "@/components/button/Button";

export default function PaymentSolutions() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 md:px-12 lg:px-24 text-center space-y-8">
      <motion.div
        className="max-w-4xl"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-[#1b1b1b] text-4xl md:text-5xl font-bold leading-tight">
          Payments Solutions Tailored For You
        </h1>
      </motion.div>

      <motion.div
        className="max-w-6xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-600 font-bold text-base md:text-lg leading-relaxed">
          Primax provides a range of simple yet sophisticated payment products,
          tools, and infrastructure designed to cater to the diverse needs of
          individuals and businesses. Our aim is to break down payment barriers
          for consumers and contribute to the success of businesses, whether
          they operate locally or across Africa.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Button variant="primary">Create Account ↗</Button>
        <Button variant="secondary">Speak to Support ↗</Button>
      </motion.div>
    </section>
  );
}
