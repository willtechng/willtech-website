import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { CoursesPreview } from "@/components/home/CoursesPreview";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <CoursesPreview />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
