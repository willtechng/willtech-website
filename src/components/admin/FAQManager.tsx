import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Plus, Pencil, Trash2, Loader2, GripVertical } from "lucide-react";
import { toast } from "sonner";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string | null;
  display_order: number;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export function FAQManager() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingFaq, setEditingFaq] = useState<FAQ | null>(null);
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
    category: "",
    display_order: 0,
    published: true,
  });

  useEffect(() => {
    fetchFaqs();
  }, []);

  const fetchFaqs = async () => {
    try {
      const { data, error } = await supabase
        .from("faqs")
        .select("*")
        .order("display_order", { ascending: true });

      if (error) throw error;
      setFaqs(data || []);
    } catch (error: any) {
      toast.error("Failed to load FAQs");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const faqData = {
        question: formData.question,
        answer: formData.answer,
        category: formData.category || null,
        display_order: formData.display_order,
        published: formData.published,
      };

      if (editingFaq) {
        const { error } = await supabase
          .from("faqs")
          .update(faqData)
          .eq("id", editingFaq.id);
        if (error) throw error;
        toast.success("FAQ updated");
      } else {
        const { error } = await supabase
          .from("faqs")
          .insert(faqData);
        if (error) throw error;
        toast.success("FAQ created");
      }

      setIsDialogOpen(false);
      setEditingFaq(null);
      setFormData({ question: "", answer: "", category: "", display_order: 0, published: true });
      fetchFaqs();
    } catch (error: any) {
      toast.error(error.message || "Failed to save FAQ");
    }
  };

  const handleEdit = (faq: FAQ) => {
    setEditingFaq(faq);
    setFormData({
      question: faq.question,
      answer: faq.answer,
      category: faq.category || "",
      display_order: faq.display_order,
      published: faq.published,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this FAQ?")) return;
    
    try {
      const { error } = await supabase.from("faqs").delete().eq("id", id);
      if (error) throw error;
      toast.success("FAQ deleted");
      fetchFaqs();
    } catch (error: any) {
      toast.error("Failed to delete FAQ");
    }
  };

  const togglePublished = async (faq: FAQ) => {
    try {
      const { error } = await supabase
        .from("faqs")
        .update({ published: !faq.published })
        .eq("id", faq.id);
      if (error) throw error;
      fetchFaqs();
      toast.success(faq.published ? "FAQ hidden" : "FAQ published");
    } catch (error: any) {
      toast.error("Failed to update FAQ");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-6 h-6 animate-spin text-accent" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-display font-bold text-foreground">FAQs</h2>
          <p className="text-muted-foreground">Manage frequently asked questions</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) {
            setEditingFaq(null);
            setFormData({ question: "", answer: "", category: "", display_order: 0, published: true });
          }
        }}>
          <DialogTrigger asChild>
            <Button variant="accent">
              <Plus className="w-4 h-4 mr-2" />
              New FAQ
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-xl">
            <DialogHeader>
              <DialogTitle>{editingFaq ? "Edit FAQ" : "Create New FAQ"}</DialogTitle>
              <DialogDescription>
                {editingFaq ? "Update the FAQ" : "Add a new frequently asked question"}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="question">Question</Label>
                <Input
                  id="question"
                  value={formData.question}
                  onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                  placeholder="What is the question?"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="answer">Answer</Label>
                <Textarea
                  id="answer"
                  value={formData.answer}
                  onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
                  placeholder="Write the answer..."
                  rows={4}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category (optional)</Label>
                  <Input
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    placeholder="e.g., General, Courses"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="display_order">Display Order</Label>
                  <Input
                    id="display_order"
                    type="number"
                    value={formData.display_order}
                    onChange={(e) => setFormData({ ...formData, display_order: parseInt(e.target.value) || 0 })}
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Switch
                  id="published"
                  checked={formData.published}
                  onCheckedChange={(checked) => setFormData({ ...formData, published: checked })}
                />
                <Label htmlFor="published">Published</Label>
              </div>
              <div className="flex gap-2 justify-end">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" variant="accent">
                  {editingFaq ? "Update" : "Create"} FAQ
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {faqs.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">No FAQs yet. Create your first FAQ!</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          {faqs.map((faq) => (
            <Card key={faq.id}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    <div className="text-muted-foreground mt-1">
                      <GripVertical className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-muted-foreground">#{faq.display_order}</span>
                        <h3 className="font-semibold text-foreground">{faq.question}</h3>
                        <span className={`px-2 py-0.5 rounded text-xs ${faq.published ? 'bg-green-500/20 text-green-600' : 'bg-muted text-muted-foreground'}`}>
                          {faq.published ? "Published" : "Hidden"}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">{faq.answer}</p>
                      {faq.category && (
                        <span className="text-xs text-accent mt-1 inline-block">{faq.category}</span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={faq.published}
                      onCheckedChange={() => togglePublished(faq)}
                    />
                    <Button variant="ghost" size="icon" onClick={() => handleEdit(faq)}>
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(faq.id)}>
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
