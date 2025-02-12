"use client"; 

import Image from "next/image";
import Button from "@/components/button/Button";
import CodeImage from "@/public/images/Code.png";
import { motion } from "framer-motion";

export default function BusinessPotential() {
  return (
    <section className="bg-[#12002b] mt-28 px-6 md:px-16 lg:px-32 py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
   
      <motion.div
        className="text-center lg:text-left max-w-2xl space-y-8"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="text-2xl md:text-3xl font-normal text-white">
          Unlock your business potential with our powerful APIs and easy-to-use
          resources.
        </p>
        <div>
          <Button variant="secondary">Coming Soon</Button>
        </div>
      </motion.div>

      <motion.div
        className="w-full max-w-[500px] lg:max-w-[600px]"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Image
          src={CodeImage}
          alt="Code Illustration"
          width={566}
          height={537}
          className="w-full h-auto"
          priority
        />
      </motion.div>
    </section>
  );
}
