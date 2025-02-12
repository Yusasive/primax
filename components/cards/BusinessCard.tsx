"use client";

import { useRef, useState } from "react";
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
      "Start your small business quickly and easily by accepting local and international payments with just a few taps using Tribapay. Our user-friendly app makes it simple for you to set up and running in no time, allowing you to start collecting payments swiftly.",
    image: Consumer,
  },
  {
    id: 4,
    title: "For Enterprise Companies",
    description:
      "You can tailor Tribapay's payment solutions to suit your unique requirements and simplify your financial processes with advanced features and API integrations.",
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
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDrag = () => {
    setIsDragging(false);
  };

  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 mt-20 rounded-lg text-left">
      <div
        ref={scrollRef}
        className={`mt-10 overflow-hidden lg:overflow-visible flex gap-6 cursor-grab active:cursor-grabbing`}
        onMouseDown={startDrag}
        onMouseMove={onDrag}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
      >
        <div className="flex gap-6 flex-nowrap lg:grid lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white hover:text-white hover:bg-[#623eca] p-10 space-y-16 rounded-2xl shadow-md flex flex-col justify-between h-full min-w-[90%] sm:min-w-[48%] lg:min-w-0"
            >
              <div className="space-y-8">
                <h2 className="text-4xl hover:text-white text-[#1b1b1b] font-bold">
                  {card.title}
                </h2>
                <p className="text-gray-500 hover:text-white text-lg font-semibold mt-2">
                  {card.description}
                </p>
              </div>
              <div className="mt-4">
                <Image
                  src={card.image}
                  alt={card.title}
                  className="w-full h-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
