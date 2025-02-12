import Image from "next/image";
import Button from "@/components/button/Button";
import WorldImage from "@/public/images/World.png";

export default function World() {
  return (
    <section className="bg-white mt-28 mx-6 md:mx-32 lg:mx-52 p-16 flex flex-col-reverse lg:flex-row items-center justify-between rounded-3xl">
      <div className="text-center lg:text-left max-w-2xl space-y-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#623eca] leading-tight">
          Connect By Tribapay.
        </h1>
        <p className="text-base md:text-lg font-bold text-gray-600 mt-4">
          Payment processing gateway that allows businesses to seamlessly
          process and accept online payments locally and across borders through
          integration of our Developer APIs or No-code tools.
        </p>
        <div className="mt-6">
          <Button variant="primary">Get Started ↗️</Button>
        </div>
      </div>

      <div className="w-full max-w-[350px] lg:max-w-[400px]">
        <Image
          src={WorldImage}
          alt="Hero Picture"
          width={324}
          height={361}
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  );
}
