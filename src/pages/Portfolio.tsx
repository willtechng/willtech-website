import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";

const categories = ["All", "Web Apps", "Mobile Apps", "E-commerce", "Enterprise"];

const projects = [
  {
    id: 1,
    title: "Paystack Integration Dashboard",
    category: "Web Apps",
    client: "FinTech Startup",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    description: "A comprehensive payment analytics dashboard for monitoring transactions.",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: 2,
    title: "FoodDelivery Mobile App",
    category: "Mobile Apps",
    client: "Restaurant Chain",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop",
    description: "Cross-platform food ordering app with real-time tracking.",
    tags: ["React Native", "Firebase", "Google Maps"],
  },
  {
    id: 3,
    title: "AgroMarket E-commerce Platform",
    category: "E-commerce",
    client: "Agriculture Cooperative",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&h=400&fit=crop",
    description: "B2B marketplace connecting farmers with buyers across Nigeria.",
    tags: ["Next.js", "Stripe", "AWS"],
  },
  {
    id: 4,
    title: "Healthcare Management System",
    category: "Enterprise",
    client: "Hospital Network",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    description: "Complete hospital management solution with patient records.",
    tags: ["Angular", "Python", "MongoDB"],
  },
  {
    id: 5,
    title: "EdTech Learning Platform",
    category: "Web Apps",
    client: "Education Startup",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
    description: "Interactive learning platform with video courses and assessments.",
    tags: ["React", "Django", "PostgreSQL"],
  },
  {
    id: 6,
    title: "Logistics Tracking App",
    category: "Mobile Apps",
    client: "Logistics Company",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    description: "Real-time package tracking with driver management system.",
    tags: ["Flutter", "Node.js", "Redis"],
  },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-28 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-accent blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Projects That Make an Impact
            </h1>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              Explore our portfolio of successful projects across various industries and technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-accent text-accent-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <Button variant="accent" size="sm" className="gap-2">
                      View Project <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-sm text-accent font-medium mb-2">{project.category}</div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-md bg-muted text-muted-foreground text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            Let's work together to bring your ideas to life with cutting-edge technology.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl" className="group">
              Start a Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
