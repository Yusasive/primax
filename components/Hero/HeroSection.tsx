import Image from "next/image";
import Button from "@/components/button/Button";
import hero1 from "@/public/images/hero1.png";

export default function HeroSection() {
  return (
    <section className="bg-[#fef5f5] mt-28 px-6 md:px-32 lg:px-52 flex flex-col-reverse lg:flex-row items-center justify-between">
      <div className="text-center lg:text-left max-w-2xl space-y-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1b1b1b] leading-tight">
          Connecting Africa, one payment at a time.
        </h1>
        <p className="text-base md:text-lg font-bold text-gray-600 mt-4">
          We are on a mission to create boundless possibilities through
          financial innovation for the 1 billion+ people across Africa.
        </p>
        <div className="mt-6">
          <Button variant="primary">Get Started ↗️</Button>
        </div>
      </div>

      <div className="w-full max-w-[500px] lg:max-w-[600px]">
        <Image
          src={hero1}
          alt="Hero Picture"
          width={591}
          height={664}
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  );
}
