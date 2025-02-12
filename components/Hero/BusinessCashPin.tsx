"use client";

import Image from "next/image";
import Button from "@/components/button/Button";
import CrossImage from "@/public/images/CrossPayment.png";
import { motion } from "framer-motion";

export default function BusinessCashPin() {
  return (
    <section className="bg-white mt-28 mx-6 md:mx-16 lg:mx-32 p-10 md:p-16 flex flex-col-reverse lg:flex-row items-center justify-between rounded-3xl shadow-lg gap-10">
      
      <motion.div
        className="text-center lg:text-left max-w-2xl space-y-8"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-[#623eca] leading-tight">
          Cashpin for Business
        </h1>
        <p className="text-base md:text-lg font-bold text-gray-500 mt-4">
          Easily accept payments at your physical store and terminals using our
          CashPin QR code scanner, powered by lightning-fast peer-to-peer
          instant payments.
        </p>
        <div>
          <Button variant="primary">Get Started ↗</Button>
        </div>
      </motion.div>

   
      <motion.div
        className="w-full max-w-[400px] lg:max-w-[500px]"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Image
          src={CrossImage}
          alt="Cashpin QR Code Scanner"
          width={567}
          height={537}
          className="w-full h-auto"
          priority
        />
      </motion.div>
    </section>
  );
}
