import Business from "@/components/reusable/Business";
import Cashflow from "@/public/images/Cashflow.png";

const featuresData = [
  {
    title: "Multi Branch Management.",
    description:
      "Other branches of the institution is being catered for to allow easy tracking of transactions that takes place in them.",
  },
  {
    title: "Inter-branch Transaction  Management.",
    description:
      "All transaction posted by account officer or cashier in various branches within the institutions are to be approved by the manager.",
  },
  {
    title: "Inter-Bank Transfer Management.",
    description:
      "Ability to track customers account transactions and loan repayment transactions with other banks.",
  },
];

export default function DrivenDecision() {
  return (
    <div>
      <Business image={Cashflow} features={featuresData} />
    </div>
  );
}
