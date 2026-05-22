import { FeaturesSection } from "@/components/FeatureSection";
import Hero from "@/components/Hero";
import { HowItWorksSection } from "@/components/HowItWorks";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <FeaturesSection></FeaturesSection>
      <HowItWorksSection></HowItWorksSection>
    </div>
    
  );
}