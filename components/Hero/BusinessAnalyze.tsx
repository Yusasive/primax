import Business from "@/components/reusable/Business";
import AiFeat from "@/public/images/AiFeat.png";

const featuresData = [
  {
    title: "AI-Enhanced Insights",
    description:
      "Connect is more than a payment platform; it's your data-driven ally. AI algorithms analyze your business data, providing valuable insights for informed decisions and competitive advantage.",
  },
  {
    title: "Multi-currency Infrastructure",
    description:
      "Connect enables online payments in local currencies, reducing currency conversion complexities and costs for both customers and businesses.",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Rest easy knowing that CONNECT helps you stay compliant with industry regulations and manages risks effectively, safeguarding your business's reputation.",
  },
];

export default function BusinessAnalyze() {
  return (
    <div>
      <Business
        image={AiFeat}
        features={featuresData}
        bgColor="#fff5e6"
      />
    </div>
  );
}
