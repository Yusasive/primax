import Business from "@/components/reusable/Business";
import AiFeat from "@/public/images/AiFeat.png";

const featuresData = [
  {
    title: "Customer Account Management.",
    description:
      "Manage new and existing customers with seamless registration and onboarding process, data verification, KYC, BVN and other relevant data to enhance retention and cross-sell opportunity within the customer base.",
  },
  {
    title: "Saving and Withdrawal Management.",
    description:
      "There is adequate provision to set up and manage customers' accounts . This is to allow for an easy deposit and withdrawal process.",
  },
  {
    title: "Customer Information Management.",
    description:
      "Gather necessary information of the clients such as next of kin, phone number, email address, age, payroll  patterns, and others required information to create a smooth avenue for transactions.",
  },
];

export default function BusinessAnalyze() {
  return (
    <div>
      <Business image={AiFeat} features={featuresData} />
    </div>
  );
}
