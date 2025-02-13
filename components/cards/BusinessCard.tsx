"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const plans = [
  {
    id: 1,
    name: "STARTER PLAN",
    price: "₦12,000",
    billingCycle: "monthly / billed annually",
    features: [
      "Limited Customers",
      "Limited Products",
      "Limited Transactions",
      "Unlimited Territories",
      "Branch: 2",
      "Users/Staff/Officers: 2",
      "Customers: Limited",
      "All Other Features",
      "Customization",
      "Dedicated Host",
      "Data Migration",
      "Core Banking Mobile App",
      "Customer iBank App",
      "Human Resources",
      "Payroll",
      "Payment & Transfer API Integration",
    ],
  },
  {
    id: 2,
    name: "BASIC PLAN",
    price: "₦20,000",
    billingCycle: "monthly / billed annually",
    features: [
      "Limited Customers",
      "Limited Products",
      "Limited Transactions",
      "Unlimited Territories",
      "Branch: 2",
      "Users/Staff/Officers: 4",
      "Customers: Limited",
      "All Other Features",
      "Customization",
      "Dedicated Host",
      "Data Migration",
      "Core Banking Mobile App",
      "Customer iBank App",
      "Human Resources",
      "Payroll",
      "Payment & Transfer API Integration",
    ],
  },
  {
    id: 3,
    name: "PREMIUM PLAN",
    price: "₦30,000",
    billingCycle: "monthly / billed annually",
    features: [
      "Limited Customers",
      "Limited Products",
      "Unlimited Transactions",
      "Unlimited Territories",
      "Branch: 4",
      "Users/Staff/Officers: 10",
      "Customers: Limited",
      "All Other Features",
      "Customization",
      "Dedicated Host",
      "Data Migration",
      "Core Banking Mobile App",
      "Customer iBank App",
      "Human Resources",
      "Payroll",
      "Payment & Transfer API Integration",
    ],
  },
  {
    id: 4,
    name: "PROFESSIONAL PLAN",
    price: "₦40,000",
    billingCycle: "monthly / billed annually",
    features: [
      "Unlimited Customers",
      "Unlimited Products",
      "Unlimited Transactions",
      "Unlimited Territories",
      "Branch: 5",
      "Users/Staff/Officers: 15",
      "Customers: Unlimited",
      "All Other Features",
      "Customization",
      "Dedicated Host",
      "Data Migration",
      "Core Banking Mobile App",
      "Customer iBank App",
      "Human Resources",
      "Payroll",
      "Payment & Transfer API Integration",
    ],
  },
  {
    id: 5,
    name: "ULTIMATE PLAN",
    price: "₦50,000",
    billingCycle: "monthly / billed annually",
    features: [
      "Unlimited Customers",
      "Unlimited Products",
      "Unlimited Transactions",
      "Unlimited Territories",
      "Branch: 10",
      "Users/Staff/Officers: 25",
      "Customers: Unlimited",
      "All Other Features",
      "Customization",
      "Dedicated Host",
      "Data Migration",
      "Core Banking Mobile App",
      "Customer iBank App",
      "Human Resources",
      "Payroll",
      "Payment & Transfer API Integration",
    ],
  },
  {
    id: 6,
    name: "ENTERPRISE PLAN",
    price: "₦60,000",
    billingCycle: "monthly / billed annually",
    features: [
      "Unlimited Customers",
      "Unlimited Products",
      "Unlimited Transactions",
      "Unlimited Territories",
      "Branch: 10",
      "Users/Staff/Officers: 40",
      "Customers: Unlimited",
      "All Other Features",
      "Customization",
      "Dedicated Host",
      "Data Migration",
      "Core Banking Mobile App",
      "Customer iBank App",
      "Human Resources",
      "Payroll",
      "Payment & Transfer API Integration",
    ],
  },
];

export default function PricingPlans() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 mt-20 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#1b1b1b] mb-10">
        Choose Your Plan
      </h2>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto lg:grid lg:grid-cols-3 snap-x snap-mandatory scroll-smooth"
      >
        {plans.map((plan) => (
          <motion.div
            key={plan.id}
            className="bg-white text-[#1b1b1b] border border-gray-300 p-8 rounded-xl shadow-md 
                      min-w-[90%] sm:min-w-[48%] lg:min-w-0 transition-all duration-300 hover:shadow-xl hover:scale-105 snap-center flex flex-col justify-between"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-[#623eca]">
                {plan.name}
              </h3>
              <p className="text-xl font-bold my-3">{plan.price}</p>
              <p className="text-sm text-gray-500 mb-6">{plan.billingCycle}</p>

              <ul className="space-y-3 text-left text-gray-600">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    ✅ {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button className="mt-6 bg-[#623eca] text-white py-2 px-5 rounded-lg text-lg font-medium hover:bg-[#4b2a9b] transition-all duration-300">
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
