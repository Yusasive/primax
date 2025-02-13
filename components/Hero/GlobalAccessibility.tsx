import Business from "@/components/reusable/Business";
import BusinessImage from "@/public/images/BusinessImage.png";

const featuresData = [
  {
    title: "Fixed Deposit Account Management.",
    description:
      "Account that allows investments of  a specific amount of funds for a particular period of time would be monitored to effectively generate the return on investment.",
  },
  {
    title: "Loan Application Management.",
    description:
      "Create trackable steps for customers loan lifecycle from loan application, loan disbursement, repayment and closing.",
  },
  {
    title: "Loan Repayment Management.",
    description:
      "Set a satisfying approach that would allow customers to have a convenient repayment method ,thereby easing the burden on the customers.",
  },
];

export default function GlobalAccessibility() {
  return (
    <div>
      <Business image={BusinessImage} features={featuresData} />
    </div>
  );
}
