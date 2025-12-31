import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Code, Smartphone, Cloud, Shield, Database, Lightbulb, 
  ArrowRight, CheckCircle 
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with modern technologies like React, Node.js, and cloud services.",
    features: ["Custom Web Applications", "E-commerce Solutions", "Progressive Web Apps", "API Development"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps for iOS and Android that deliver exceptional user experiences.",
    features: ["iOS Development", "Android Development", "React Native Apps", "Flutter Applications"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and DevOps services to power your digital transformation.",
    features: ["AWS & Azure Setup", "Cloud Migration", "DevOps Automation", "Infrastructure as Code"],
    color: "from-teal-500 to-emerald-500",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and ensure compliance.",
    features: ["Security Audits", "Penetration Testing", "Compliance Consulting", "Incident Response"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Database,
    title: "Data Solutions",
    description: "Data engineering, analytics, and machine learning solutions to drive insights.",
    features: ["Data Engineering", "Business Intelligence", "ML Model Development", "Data Visualization"],
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Lightbulb,
    title: "IT Consulting",
    description: "Strategic technology consulting to help your business make informed decisions.",
    features: ["Technology Strategy", "Digital Transformation", "Process Optimization", "Tech Stack Selection"],
    color: "from-amber-500 to-orange-500",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-32 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-accent blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              End-to-End Technology Solutions
            </h1>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              From development to deployment, we provide comprehensive tech services 
              for businesses of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              How We Work
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We understand your requirements and business goals." },
              { step: "02", title: "Planning", description: "We create a detailed roadmap and project timeline." },
              { step: "03", title: "Development", description: "We build your solution with regular updates." },
              { step: "04", title: "Delivery", description: "We deploy, test, and provide ongoing support." },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="text-7xl font-display font-bold text-muted/50 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            Let's discuss how we can help bring your ideas to life with our expert team.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl" className="group">
              Get in Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
