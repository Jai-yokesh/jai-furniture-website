import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Invalid email address"),
  interest: z.string().min(1, "Please select an interest"),
  message: z.string().optional(),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      interest: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Quote Request Sent!",
      description: "We'll get back to you shortly.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-serif font-bold text-foreground">Get a Custom Quote</h2>
              <p className="text-muted-foreground text-lg">
                Visit our showroom or send us a message to start designing your dream furniture.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: MapPin, title: "Visit Us", text: "123 Furniture Market, Jaipur, Rajasthan 302001" },
                { icon: Phone, title: "Call Us", text: "+91 98765 43210\n+91 12345 67890" },
                { icon: Mail, title: "Email Us", text: "hello@jaifurniture.com\nsales@jaifurniture.com" },
                { icon: Clock, title: "Working Hours", text: "Mon - Sat: 10AM - 8PM\nSunday: 11AM - 5PM" },
              ].map((item, i) => (
                <div key={i} className="bg-secondary/20 p-6 rounded-xl border border-border">
                  <item.icon className="w-6 h-6 text-primary mb-4" />
                  <h4 className="font-serif font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-muted-foreground whitespace-pre-line text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-border/50">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="bg-muted/30 border-border/60 focus-visible:ring-primary" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+91 98765 43210" {...field} className="bg-muted/30 border-border/60 focus-visible:ring-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} className="bg-muted/30 border-border/60 focus-visible:ring-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="interest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Interested In</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-muted/30 border-border/60 focus:ring-primary">
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="living">Living Room</SelectItem>
                          <SelectItem value="dining">Dining Room</SelectItem>
                          <SelectItem value="storage">Storage Units</SelectItem>
                          <SelectItem value="bedroom">Bedroom & Dressing</SelectItem>
                          <SelectItem value="custom">Custom Design</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your requirements..." 
                          className="min-h-[120px] bg-muted/30 border-border/60 focus-visible:ring-primary" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 rounded-md text-lg font-medium">
                  SEND MESSAGE
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
