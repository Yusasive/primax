import HeroSection from "@/components/Hero/HeroSection";
import Section from "@/components/Hero/Section";
import BusinessCard from "@/components/cards/BusinessCard";
import FeatureCards from "@/components/cards/FeatureCard";
import World from "@/components/Hero/World";
import BusinessAnalyze from "@/components/Hero/BusinessAnalyze";
import GlobalAccessibility from "@/components/Hero/GlobalAccessibility";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Section />
      <BusinessCard />
      <FeatureCards />
      <World />
      <BusinessAnalyze />
      <GlobalAccessibility />
    </>
  );
}
