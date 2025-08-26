import React from "react";
import Hero from "./hero/hero";
import WebSection from "./hero/WebSection";
import MarketingImpactDashboard from "./hero/marketing";
import ActionableAnalytics from "./hero/SEOServicesComponent";
import DigitalMarketingSystem from "./hero/digitalfeature";
import SEOServicesComponent from "./hero/SEOServicesComponent";

export default function Home() {
  return (
    <>
      <Hero />
      <SEOServicesComponent></SEOServicesComponent>
      <WebSection />
      <MarketingImpactDashboard />
      <DigitalMarketingSystem />
    </>
  );
}
