"use client"; 

import { motion } from "framer-motion";

export default function AmazingBusiness() {
  return (
    <section className="bg-[#9672ff] mt-28 px-6 md:px-16 lg:px-32 py-24 flex items-center justify-center text-center lg:text-left">
      <motion.div
        className="max-w-2xl space-y-8"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Partnering with amazing businesses
        </h1>

        <motion.p
          className="text-lg md:text-xl font-bold text-white mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          We&apos;re proud to be a catalyst for business success, helping
          businesses and individuals in Africa and beyond unlock their full
          potential.
        </motion.p>
      </motion.div>
    </section>
  );
}
