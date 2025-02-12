"use client"; 

import { motion } from "framer-motion";
import Image from "next/image";
import Vector from "@/public/images/Vector.png";
import Vector1 from "@/public/images/Vector1.png";
import Vector2 from "@/public/images/Vector2.png";
import Vector3 from "@/public/images/Vector3.png";

export default function FeatureCards() {
  const features = [
    {
      id: 1,
      icon: Vector,
      title: "Payment Processing",
      description:
        "We simplify payment integration for businesses, allowing them to accept various payment methods for both local and cross-border transactions via payment links, checkouts, and cashpin.",
      bgColor: "bg-purple-100",
    },
    {
      id: 2,
      icon: Vector1,
      title: "Developer-Friendly",
      description:
        "We offer developer resources, documentation, and support to make integration simple for development teams, reducing the time and effort required to implement payment solutions.",
      bgColor: "bg-green-100",
    },
    {
      id: 3,
      icon: Vector2,
      title: "Predictive Analytics",
      description:
        "Our AI-driven APIs analyze historical data to make predictions about future trends and demands. This helps businesses optimize inventory, pricing, and resource allocation.",
      bgColor: "bg-yellow-100",
    },
    {
      id: 4,
      icon: Vector3,
      title: "Streamlined Checkout",
      description:
        "With our APIs, businesses can create a seamless and user-friendly checkout experience, reducing cart abandonment rates and improving conversion rates for online transactions.",
      bgColor: "bg-red-100",
    },
  ];

  return (
    <section className="bg-pink-50 py-16 px-6 md:px-16 lg:px-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-left text-left h-full space-y-6 transition-transform transform hover:scale-105"
          >
            <div
              className={`w-14 h-14 flex items-center justify-center rounded-full mb-4 ${feature.bgColor}`}
            >
              <Image
                src={feature.icon}
                alt="Feature Icon"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>

            <h2 className="font-bold text-[#1b1b1b] text-xl mt-4">
              {feature.title}
            </h2>
            <p className="text-gray-500 font-medium mt-2 text-sm leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
