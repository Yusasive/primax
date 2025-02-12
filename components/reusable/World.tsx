import Image, { StaticImageData } from "next/image";
import Button from "@/components/button/Button";

interface WorldProps {
  title?: string;
  description?: string;
  buttonText?: string;
  image: StaticImageData;
  bgColor?: string;
}

export default function World({
  title = "Connect By Tribapay.",
  description,
  buttonText,
  image,
  bgColor = "white",
}: WorldProps) {
  return (
    <section
      className="mt-28 mx-6 md:mx-32 lg:mx-52 p-16 flex flex-col-reverse lg:flex-row items-center justify-between rounded-3xl"
      style={{ backgroundColor: bgColor }}
    >
      <div className="text-center lg:text-left max-w-2xl space-y-12">
        {title && (
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#623eca] leading-tight">
            {title}
          </h1>
        )}
        {description && (
          <p className="text-base md:text-lg font-bold text-gray-600 mt-4">
            {description}
          </p>
        )}
        {buttonText && (
          <div className="mt-6">
            <Button variant="primary">{buttonText} ↗️</Button>
          </div>
        )}
      </div>

      <div className="w-full max-w-[350px] lg:max-w-[400px]">
        <Image
          src={image}
          alt="Feature Image"
          width={324}
          height={361}
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  );
}
