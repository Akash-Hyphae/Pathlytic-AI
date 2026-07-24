import DashboardLayout from "../../components/layout/DashboardLayout";
import TopNavbar from "../../components/dashboard/topNavBar";

import HeroSection from "../../components/roadmap/HeroSection";
import AIInsights from "../../components/roadmap/AIInsights";
import RoadmapTimeline from "../../components/roadmap/RoadmapTimeline";
import MilestoneCard from "../../components/roadmap/Milestone";
import ResourceRecommendations from "../../components/roadmap/ResouceRecomendation";

import roadmapData from "./roadmapData";

function AIRoadmap() {
  return (
    <DashboardLayout>
      <TopNavbar />

      <div className="mt-8 space-y-8">

        <HeroSection hero={roadmapData.hero} />

        <AIInsights
          recommendations={roadmapData.aiRecommendations}
        />

        <RoadmapTimeline
          roadmap={roadmapData.roadmap}
        />

        <MilestoneCard />

        <ResourceRecommendations
          resources={roadmapData.resources}
        />

      </div>
    </DashboardLayout>
  );
}

export default AIRoadmap;