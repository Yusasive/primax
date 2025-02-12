import HeroSection from "@/components/Hero/HeroSection";
import Section from "@/components/Hero/Section";
import BusinessCard from "@/components/cards/BusinessCard";
import FeatureCards from "@/components/cards/FeatureCard";
import World from "@/components/Hero/World";
import BusinessAnalyze from "@/components/Hero/BusinessAnalyze";
import BusinessPotential from "@/components/Hero/BusinessPotential";
import BusinessCashPin from "@/components/Hero/BusinessCashPin";
import GlobalAccessibility from "@/components/Hero/GlobalAccessibility";
import DrivenDecision from "@/components/Hero/DrivenDecision";
import AmazingBusiness from "@/components/Hero/AmazingBusiness";
import PaymentSolutions from "@/components/Hero/PaymentSolutions";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Section />
      <BusinessCard />
      <FeatureCards />
      <World />
      <BusinessAnalyze />
      <BusinessPotential />
      <BusinessCashPin />
      <GlobalAccessibility />
      <DrivenDecision />
      <AmazingBusiness />
      <PaymentSolutions />
      <Footer />
    </>
  );
}
