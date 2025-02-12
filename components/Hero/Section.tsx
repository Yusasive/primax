"use client"; 

import { motion } from "framer-motion";

export default function Section() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 mt-12 md:mt-20 text-center space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="text-[#1b1b1b] text-3xl md:text-5xl font-bold leading-tight">
          Removing Payment Barriers for Everyone
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <p className="text-gray-600 font-medium text-lg md:text-xl mt-2 md:mt-4 text-center md:text-justify">
          We recognize that there is no one-size-fits-all solution for payment
          needs. Therefore, we have developed our platform to be flexible and
          adaptable to a wide variety of payment scenarios.
        </p>
      </motion.div>
    </section>
  );
}
