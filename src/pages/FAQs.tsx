import { useEffect, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string | null;
  display_order: number;
}

const FAQs = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaqs = async () => {
      const { data, error } = await supabase
        .from("faqs")
        .select("*")
        .eq("published", true)
        .order("display_order", { ascending: true });

      if (!error && data) {
        setFaqs(data);
      }
      setLoading(false);
    };
    fetchFaqs();
  }, []);

  // Group FAQs by category
  const groupedFaqs = faqs.reduce((acc, faq) => {
    const category = faq.category || "General";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(faq);
    return acc;
  }, {} as Record<string, FAQ[]>);

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
              FAQs
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              Find answers to common questions about our courses, enrollment process, and more.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-accent" />
            </div>
          ) : faqs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No FAQs available yet. Check back soon!</p>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto space-y-8">
              {Object.entries(groupedFaqs).map(([category, categoryFaqs]) => (
                <div key={category}>
                  <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                    {category}
                  </h2>
                  <Accordion type="single" collapsible className="w-full">
                    {categoryFaqs.map((faq) => (
                      <AccordionItem key={faq.id} value={faq.id} className="border-border">
                        <AccordionTrigger className="text-left text-foreground hover:text-accent">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default FAQs;
