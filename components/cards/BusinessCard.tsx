"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Consumer from "@/public/images/consumer.png";

const cards = [
  {
    id: 1,
    title: "For General Consumers",
    description:
      "Use our payment app for all your everyday financial needs, such as sending money, receiving payments, paying bills, buying airtime, making cashpin transactions, and managing international transactions with a dollar card.",
    image: Consumer,
  },
  {
    id: 2,
    title: "For Growing Businesses",
    description:
      "Effortlessly manage large transaction volumes and streamline your financial processes as your business grows with our scalable payment infrastructure. No need to worry – we've got you covered.",
    image: Consumer,
  },
  {
    id: 3,
    title: "For Small Businesses",
    description:
      "Start your small business quickly and easily by accepting local and international payments with just a few taps using Primax. Our user-friendly app makes it simple for you to set up and running in no time, allowing you to start collecting payments swiftly.",
    image: Consumer,
  },
  {
    id: 4,
    title: "For Enterprise Companies",
    description:
      "You can tailor Primax's payment solutions to suit your unique requirements and simplify your financial processes with advanced features and API integrations.",
    image: Consumer,
  },
];

export default function BusinessCard() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDrag = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const onDrag = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.8; // Slightly increased drag sensitivity
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDrag = () => {
    setIsDragging(false);
  };

  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 mt-20 text-left">
      {/* Scrollable container for mobile */}
      <div
        ref={scrollRef}
        className="mt-10 flex gap-6 overflow-x-auto lg:overflow-visible cursor-grab active:cursor-grabbing snap-x snap-mandatory scroll-smooth"
        onMouseDown={startDrag}
        onMouseMove={onDrag}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
      >
        <div className="flex gap-6 lg:grid lg:grid-cols-3 w-full">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              className="bg-white hover:text-white hover:bg-[#623eca] p-10 space-y-10 rounded-2xl shadow-md flex flex-col justify-between h-full min-w-[90%] sm:min-w-[48%] lg:min-w-0 transition-all duration-300 hover:scale-105 snap-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl text-[#1b1b1b] font-bold transition-all duration-300 hover:text-white">
                  {card.title}
                </h2>
                <p className="text-gray-500 text-lg font-semibold transition-all duration-300 hover:text-white">
                  {card.description}
                </p>
              </div>
              <div className="mt-4">
                <Image
                  src={card.image}
                  alt={card.title}
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
