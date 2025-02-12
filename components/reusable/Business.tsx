import Image, { StaticImageData } from "next/image";

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
  bgColor = "#fef5f5",
}: BusinessAnalyzeProps) {
  return (
    <section
      className={`mt-28 px-6 md:px-32 lg:px-52 flex flex-col-reverse lg:flex-row items-center justify-between`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="w-full max-w-[500px] lg:max-w-[600px]">
        <Image
          src={image}
          alt="Feature Image"
          width={566}
          height={609}
          className="w-full h-auto"
          priority
        />
      </div>

      <div className="text-center lg:text-left max-w-2xl space-y-8">
        {features.map((feature, index) => (
          <div key={index}>
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-[#1b1b1b] leading-tight">
              {feature.title}
            </h1>
            <p className="text-base font-bold text-gray-500 mt-4">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
