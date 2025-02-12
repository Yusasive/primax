import Business from "@/components/reusable/Business";
import Cashflow from "@/public/images/Cashflow.png";

const featuresData = [
  {
    title: "AI-Driven Decisions",
    description:
      "Harness the speed and accuracy of our AI tools for faster loan approvals. Get the funds you need precisely when you need them, without the wait.",
  },
  {
    title: "Hassle-Free Financing",
    description:
      "Access working capital effortlessly by converting outstanding invoices into immediate cash. Keep your business operations running smoothly.",
  },
  {
    title: "Boosted Cash Flow",
    description:
      "Smooth out cash flow fluctuations and maintain financial stability. QuicKredit empowers you to take control of your business finances.",
  },
];

export default function DrivenDecision() {
  return (
    <div>
      <Business image={Cashflow} features={featuresData} />
    </div>
  );
}
