import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import teamSola from "@/assets/team-sola.jpeg";
import teamTobi from "@/assets/team-tobi.jpeg";
import teamAbiola from "@/assets/team-abiola.jpeg";
import teamPelumi from "@/assets/team-pelumi.jpeg";
import teamKolade from "@/assets/team-kolade.jpeg";
import careerSupportVideo from "@/assets/career-project-support.mp4";
import experiencedMentorsVideo from "@/assets/experienced-mentors.mp4";
import handsOnLearningVideo from "@/assets/hands-on-learning.mp4";
import studentCentricVideo from "@/assets/student-centric.mp4";

const values = [
  {
    video: handsOnLearningVideo,
    title: "Hands-On Learning Environment",
    description: "Learn by doing with real-world projects and practical exercises.",
  },
  {
    video: experiencedMentorsVideo,
    title: "Experienced Mentors & Industry Experts",
    description: "Learn from professionals with years of industry experience.",
  },
  {
    video: studentCentricVideo,
    title: "Student & Client-Centric",
    description: "Your success is our priority with personalized support.",
  },
  {
    video: careerSupportVideo,
    title: "Career & Project Support",
    description: "Get guidance on career paths and real project experience.",
  },
];

const teamMembers = [
  {
    name: "Sola Williams",
    role: "Director & Founder",
    image: teamSola,
    description: "A visionary leader with 15+ years in tech, Sola founded Willtech_NG to bridge the digital skills gap in Africa.",
  },
  {
    name: "Tobi",
    role: "Co-Director & Head of Admin",
    image: teamTobi,
    description: "Tobi oversees all administrative operations, ensuring smooth running of programs and student services.",
  },
  {
    name: "Abiola",
    role: "Head of Projects",
    image: teamAbiola,
    description: "Abiola leads project-based learning initiatives, helping students build real-world applications.",
  },
  {
    name: "Pelumi",
    role: "Patron",
    image: teamPelumi,
    description: "Pelumi provides strategic guidance and mentorship to the Willtech_NG community.",
  },
  {
    name: "Kolade",
    role: "Principal Supporter & Head of Product",
    image: teamKolade,
    description: "Kolade leads product strategy and provides principal support to drive innovation and excellence at Willtech_NG.",
  },
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
                <div className="w-full aspect-video rounded-xl overflow-hidden mb-5">
                  <video
                    src={value.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
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

      {/* Meet The Team */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
              Our People
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Meet The Team
            </h2>
            <p className="text-muted-foreground mt-4">
              The passionate individuals behind Willtech_NG's success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-shadow duration-300"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-5 ring-4 ring-accent/20">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <div className="text-accent font-medium text-sm mb-3">
                    {member.role}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
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
