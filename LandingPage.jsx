import HeroSection from "../components/HeroSection";
import FeatureCard from "../components/FeatureCard";
import TestimonialSection from "../components/TestimonialSection";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <>
      <HeroSection />

      <div className="features">
        <FeatureCard
          title="Web Development"
          description="Learn HTML, CSS, JavaScript and React."
        />

        <FeatureCard
          title="Projects"
          description="Build real-world projects."
        />

        <FeatureCard
          title="Career Growth"
          description="Prepare for internships and jobs."
        />
      </div>

      <TestimonialSection />
      <CTABanner />
      <Footer />
    </>
  );
}

export default LandingPage;