"use client";

import { motion } from "framer-motion";
import World from "@/components/reusable/World";
import WorldImage from "@/public/images/World.png";

export default function WorldPage() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <World
        title="Connect By Primax"
        description="Payment processing gateway that allows businesses to seamlessly process and accept online payments locally and across borders through integration of our Developer APIs or No-code tools."
        image={WorldImage}
        buttonText="Get Started"
        bgColor="#f9f9f9"
      />
    </motion.section>
  );
}
