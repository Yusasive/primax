"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface Feature {
  title: string;
  description: string;
}

interface BusinessAnalyzeProps {
  image: StaticImageData;
  features: Feature[];
  bgColor?: string;
}

export default function BusinessAnalyze({
  image,
  features,
  bgColor = "",
}: BusinessAnalyzeProps) {
  return (
    <section
      className="mt-28 px-6 md:px-16 lg:px-32 flex flex-col-reverse lg:flex-row items-center justify-between gap-10"
      style={{ backgroundColor: bgColor }}
    >
 
      <motion.div
        className="w-full max-w-[450px] lg:max-w-[550px]"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          src={image}
          alt="Feature Image"
          width={566}
          height={609}
          className="w-full h-auto"
          priority
        />
      </motion.div>

      <motion.div
        className="text-center lg:text-left max-w-2xl space-y-8"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        {features.map((feature, index) => (
          <div key={index}>
            <h1 className="text-3xl md:text-4xl font-bold text-[#1b1b1b] leading-tight">
              {feature.title}
            </h1>
            <p className="text-base font-medium text-gray-600 mt-4">
              {feature.description}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
