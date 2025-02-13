"use client";

import Image, { StaticImageData } from "next/image";
import Button from "@/components/button/Button";
import { motion } from "framer-motion";

interface WorldProps {
  title?: string;
  description?: string;
  buttonText?: string;
  image: StaticImageData;
  bgColor?: string;
}

export default function World({
  title = "Connect By Primax.",
  description,
  buttonText,
  image,
  bgColor = "white",
}: WorldProps) {
  return (
    <section
      className="mt-28 mx-6 md:mx-16 lg:mx-32 p-10 md:p-16 flex flex-col-reverse lg:flex-row items-center justify-between rounded-3xl shadow-lg gap-10"
      style={{ backgroundColor: bgColor }}
    >
      <motion.div
        className="text-center lg:text-left max-w-2xl space-y-8"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {title && (
          <h1 className="text-3xl md:text-4xl font-bold text-[#623eca] leading-tight">
            {title}
          </h1>
        )}
        {description && (
          <p className="text-base md:text-lg font-semibold text-gray-600 mt-4">
            {description}
          </p>
        )}
        {buttonText && (
          <div className="mt-6">
            <Button variant="primary">{buttonText} ↗</Button>
          </div>
        )}
      </motion.div>

      <motion.div
        className="w-full max-w-[350px] lg:max-w-[400px]"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Image
          src={image}
          alt="Feature Image"
          width={324}
          height={361}
          className="w-full h-auto"
          priority
        />
      </motion.div>
    </section>
  );
}
