import Business from "@/components/reusable/Business";
import AiFeat from "@/public/images/AiFeat.png";

const featuresData = [
  {
    title: "Global Accessibility:",
    description:
      "Grow your business and accept payments from users in various African countries across different e-channels by enabling them to pay with Cashpin.",
  },
  {
    title: "Customizable Solutions",
    description:
      "Cashpin for Business offers flexibility in designing payment solutions, so you can create a seamless user experience aligned with your brand.",
  },
  {
    title: "Speed and Efficiency",
    description:
      "Experience the fast and highly reliable payment system with our Cashpin for business infrastructure. Users generate a pin and simply scan it using a QR code at payment terminals to successfully complete transactions.",
  },
];

export default function GlobalAccessibility() {
  return (
    <div>
      <Business image={AiFeat} features={featuresData} bgColor="#fff5e6" />
    </div>
  );
}
