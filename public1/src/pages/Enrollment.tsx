import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, CreditCard, Shield, ArrowLeft } from "lucide-react";

const courses = [
  { id: 1, title: "Full-Stack Web Development Bootcamp", price: 150000 },
  { id: 2, title: "Mobile App Development with React Native", price: 120000 },
  { id: 3, title: "Data Science & Machine Learning", price: 180000 },
  { id: 4, title: "Ethical Hacking & Cybersecurity", price: 100000 },
  { id: 5, title: "AWS Cloud Practitioner", price: 80000 },
  { id: 6, title: "Frontend Development with React", price: 100000 },
];

const Enrollment = () => {
  const [searchParams] = useSearchParams();
  const selectedCourseId = searchParams.get("course");
  const { toast } = useToast();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    courseId: selectedCourseId || "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedCourse = courses.find((c) => c.id === Number(formData.courseId));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 1) {
      setStep(2);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    toast({
      title: "Enrollment Successful!",
      description: "Check your email for confirmation and next steps.",
    });
    
    setStep(3);
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-12 lg:py-20 gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Courses
          </Link>
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-4">
              Course Enrollment
            </h1>
            <p className="text-lg text-primary-foreground/70">
              Complete your enrollment in just a few steps and start your tech journey.
            </p>
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Progress Steps */}
            <div className="flex items-center justify-between mb-12">
              {["Course Selection", "Payment", "Confirmation"].map((label, index) => (
                <div key={label} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-bold ${
                      step > index + 1
                        ? "bg-secondary text-secondary-foreground"
                        : step === index + 1
                        ? "bg-accent text-accent-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step > index + 1 ? <CheckCircle className="w-5 h-5" /> : index + 1}
                  </div>
                  <span
                    className={`ml-3 hidden sm:block text-sm font-medium ${
                      step >= index + 1 ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {label}
                  </span>
                  {index < 2 && (
                    <div
                      className={`w-12 sm:w-24 h-0.5 mx-4 ${
                        step > index + 1 ? "bg-secondary" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {step === 3 ? (
              /* Confirmation */
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-secondary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                  Enrollment Complete!
                </h2>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Thank you for enrolling in {selectedCourse?.title}. Check your email for confirmation 
                  and details about your upcoming classes.
                </p>
                <Link to="/courses">
                  <Button variant="accent" size="lg">
                    Explore More Courses
                  </Button>
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="bg-card rounded-2xl border border-border shadow-card p-8">
                  {step === 1 && (
                    /* Step 1: Course Selection & Personal Info */
                    <div className="space-y-6">
                      <h2 className="text-xl font-display font-bold text-foreground mb-6">
                        Select Course & Enter Details
                      </h2>

                      {/* Course Selection */}
                      <div>
                        <label htmlFor="courseId" className="block text-sm font-medium text-foreground mb-2">
                          Select Course *
                        </label>
                        <select
                          id="courseId"
                          name="courseId"
                          value={formData.courseId}
                          onChange={handleChange}
                          required
                          className="w-full h-10 rounded-lg border border-input bg-background px-3 text-foreground"
                        >
                          <option value="">Choose a course</option>
                          {courses.map((course) => (
                            <option key={course.id} value={course.id}>
                              {course.title} - ₦{course.price.toLocaleString()}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                            First Name *
                          </label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            placeholder=""
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                            Last Name *
                          </label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            placeholder=""
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder=""
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder=""
                        />
                      </div>
                    </div>
                  )}

                  {step === 2 && selectedCourse && (
                    /* Step 2: Payment */
                    <div className="space-y-6">
                      <h2 className="text-xl font-display font-bold text-foreground mb-6">
                        Payment Details
                      </h2>

                      {/* Order Summary */}
                      <div className="p-4 rounded-xl bg-muted/50 border border-border">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-muted-foreground">Course</span>
                          <span className="font-medium text-foreground">{selectedCourse.title}</span>
                        </div>
                        <div className="flex justify-between items-center pt-2 border-t border-border">
                          <span className="font-semibold text-foreground">Total</span>
                          <span className="text-2xl font-display font-bold text-accent">
                            ₦{selectedCourse.price.toLocaleString()}
                          </span>
                        </div>
                      </div>

                      {/* Payment Info */}
                      <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/10 border border-secondary/20">
                        <Shield className="w-5 h-5 text-secondary" />
                        <span className="text-sm text-foreground">
                          Your payment is secured with bank-level encryption
                        </span>
                      </div>

                      <div className="p-6 rounded-xl border border-border bg-muted/30 text-center">
                        <CreditCard className="w-12 h-12 text-accent mx-auto mb-4" />
                        <p className="text-muted-foreground mb-4">
                          Payment gateway integration coming soon. For now, click below to simulate payment.
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-4 mt-8">
                    {step === 2 && (
                      <Button
                        type="button"
                        variant="outline"
                        size="lg"
                        onClick={() => setStep(1)}
                      >
                        Back
                      </Button>
                    )}
                    <Button
                      type="submit"
                      variant="accent"
                      size="lg"
                      className="flex-1"
                      disabled={isSubmitting}
                    >
                      {isSubmitting
                        ? "Processing..."
                        : step === 1
                        ? "Continue to Payment"
                        : `Pay ₦${selectedCourse?.price.toLocaleString()}`}
                    </Button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Enrollment;
