import Vector from "@/public/images/Vector.png";
import Vector1 from "@/public/images/Vector1.png";
import Vector2 from "@/public/images/Vector2.png";
import Vector3 from "@/public/images/Vector3.png";
import Image from "next/image";

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
    <section className="bg-pink-50 py-16 px-6 md:px-32 lg:px-52">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-left text-left h-full space-y-6"
          >
            <div
              className={`w-14 h-14 flex items-center justify-center rounded-full mb-4 ${feature.bgColor}`}
            >
              <Image
                src={feature.icon}
                alt="FeatureIcons"
                width={24}
                height={24}
              />
            </div>

            <h2 className="font-bold text-[#1b1b1b] text-2xl mt-4">
              {feature.title}
            </h2>
            <p className="text-gray-400 font-semibold mt-2 text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
