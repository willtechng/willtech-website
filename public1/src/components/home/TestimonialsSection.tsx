import { Star, Quote } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    id: 1,
    name: "Adebayo Ogunlesi",
    role: "Software Developer at Microsoft",
    image: testimonial1,
    content: "Willtech_NG transformed my career. The hands-on training and mentorship I received helped me land my dream job at a top tech company.",
    rating: 5,
  },
  {
    id: 2,
    name: "Chioma Nwosu",
    role: "Full-Stack Developer",
    image: testimonial2,
    content: "The curriculum is industry-relevant and the instructors are incredibly supportive. I went from zero coding knowledge to building production apps.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emmanuel Obi",
    role: "Data Scientist at Flutterwave",
    image: testimonial3,
    content: "The data science program exceeded my expectations. Real-world projects and expert guidance made all the difference in my learning journey.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            What Our Students Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from our graduates who have transformed their careers through our programs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl gradient-accent flex items-center justify-center">
                <Quote className="w-6 h-6 text-accent-foreground" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-display font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
