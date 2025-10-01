import React from "react";
import PortfolioHeader from "./Component/PortfolioHeader/page";
import PortfolioHero from "./Component/PortfolioHero/page";
import PortfolioAbout from "./Component/PortfolioAbout/page";
import PortfolioSkills from "./Component/PortfolioSkills/page";
import PortfolioProjects from "./Component/PortfolioProjects/page";
import PortfolioExperience from "./Component/PortfolioExperience/page";
import PortfolioContact from "./Component/PortfolioContact/page";
import PortfolioFooter from "./Component/PortfolioFooter/page";

export default function page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <PortfolioHeader />
      <main>
        <PortfolioHero />
        <PortfolioAbout />
        <PortfolioSkills />
        <PortfolioProjects />
        <PortfolioExperience />
        <PortfolioContact />
      </main>
      <PortfolioFooter />
    </div>
  );
}
