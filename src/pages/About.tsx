import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Users, Award, ArrowRight, CheckCircle } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for the highest standards in everything we do.",
  },
  {
    icon: Eye,
    title: "Innovation",
    description: "We embrace cutting-edge technologies and methodologies.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We foster a supportive and collaborative learning environment.",
  },
  {
    icon: Award,
    title: "Impact",
    description: "We measure success by the success of our students.",
  },
];

const milestones = [
  { year: "2018", event: "Willtech_NG founded in Lagos" },
  { year: "2019", event: "First cohort of 50 students graduated" },
  { year: "2020", event: "Launched online learning platform" },
  { year: "2021", event: "Partnered with 20+ tech companies" },
  { year: "2022", event: "Expanded to 3 cities across Nigeria" },
  { year: "2023", event: "5000+ students trained milestone" },
];

const About = () => {
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
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Empowering Africa's Tech Future
            </h1>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              Since 2018, we've been on a mission to bridge the digital skills gap in Nigeria 
              and prepare the next generation of tech leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                From a Small Training Center to Nigeria's Leading Tech Academy
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Willtech_NG was born from a simple observation: Nigeria has immense tech talent, 
                but limited access to quality, practical training. Our founders, experienced 
                software engineers, set out to change that.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Today, we've trained over 5,000 students, partnered with leading tech companies, 
                and built a community of successful professionals working at top organizations 
                worldwide. Our graduates work at companies like Microsoft, Google, Flutterwave, 
                and many more.
              </p>
              <div className="space-y-3">
                {["Industry-relevant curriculum", "Expert instructors", "Hands-on projects", "Career support"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 p-6 rounded-2xl bg-card shadow-card-hover border border-border">
                <div className="text-4xl font-display font-bold text-accent">5+</div>
                <div className="text-muted-foreground">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              What Drives Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-2xl bg-card border border-border shadow-card text-center"
              >
                <div className="w-14 h-14 rounded-xl gradient-secondary flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-7 h-7 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Key Milestones
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center gap-6 mb-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="hidden md:block flex-1" />
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background md:-translate-x-2 z-10" />
                  <div className="flex-1 ml-12 md:ml-0 p-6 rounded-xl bg-card border border-border shadow-card">
                    <div className="text-accent font-display font-bold text-lg mb-1">
                      {milestone.year}
                    </div>
                    <div className="text-foreground">{milestone.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            Start your journey with Willtech_NG and become part of Africa's growing tech ecosystem.
          </p>
          <Link to="/enrollment">
            <Button variant="hero" size="xl" className="group">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
