import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BookOpen, Briefcase, GraduationCap } from "lucide-react";

const whyWillTech = [
  {
    icon: Users,
    title: "Students & Client-Centric",
    description: "We focus on empowering learners with practical digital skills while delivering innovative software solutions for business.",
  },
  {
    icon: BookOpen,
    title: "Hands-On Learning Environment",
    description: "Interactive online classes, real-life projects, and mentorship ensure students gain skills they can immediately apply.",
  },
  {
    icon: GraduationCap,
    title: "Experienced Mentors & Industry Experts",
    description: "Instructors are seasoned professionals in software development, AI, cybersecurity and UI/UX design.",
  },
  {
    icon: Briefcase,
    title: "Career & Project Support",
    description: "Career guidance, internships, and real-world projects make students job-ready while helping businesses implement software solutions.",
  },
];

export function CoursesPreview() {
  return (
    <>
      {/* Why WillTech Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
              Why WillTech
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
              Why Choose Us?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyWillTech.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-xl gradient-secondary flex items-center justify-center mb-5">
                  <item.icon className="w-7 h-7 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              A Structured Path to Tech Skills
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Build in-demand skills with our certified tech courses. Specifically designed for beginners, our curriculum provides a clear and structured path to mastery.
            </p>
            <Link to="/courses">
              <Button size="lg" className="group">
                Explore Our Courses
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}