import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Phone, Clock, IndianRupee, Send } from "lucide-react";

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contacts", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message! I will contact you within 24 hours to schedule your consultation. For immediate consultation, please call 8881157770.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or call directly.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    }
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-soft-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-midnight heading-font mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to discover what the universe has in store for you?
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Card className="shadow-2xl border-0">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2">
                {/* Contact Form */}
                <div className="p-8 lg:p-12">
                  <h3 className="text-2xl font-semibold heading-font mb-6">Send a Message</h3>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 font-semibold">Full Name</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                className="border-2 border-gray-200 focus:border-primary-purple rounded-lg p-3"
                                placeholder="Enter your full name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 font-semibold">Phone Number</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                type="tel"
                                className="border-2 border-gray-200 focus:border-primary-purple rounded-lg p-3"
                                placeholder="Enter your phone number"
                              />
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
                            <FormLabel className="text-gray-700 font-semibold">Email Address</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                type="email"
                                className="border-2 border-gray-200 focus:border-primary-purple rounded-lg p-3"
                                placeholder="Enter your email address"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 font-semibold">Service Interested In</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="border-2 border-gray-200 focus:border-primary-purple rounded-lg p-3">
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="astrology">Astrology</SelectItem>
                                <SelectItem value="numerology">Numerology</SelectItem>
                                <SelectItem value="palmistry">Palmistry</SelectItem>
                                <SelectItem value="tarot">Tarot Reading</SelectItem>
                                <SelectItem value="multiple">Multiple Services</SelectItem>
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
                            <FormLabel className="text-gray-700 font-semibold">Message (Optional)</FormLabel>
                            <FormControl>
                              <Textarea 
                                {...field} 
                                className="border-2 border-gray-200 focus:border-primary-purple rounded-lg p-3 min-h-[120px]"
                                placeholder="Tell me about your concerns or questions..."
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        disabled={contactMutation.isPending}
                        className="w-full bg-gradient-to-r from-primary-purple to-secondary-purple hover:from-secondary-purple hover:to-primary-purple text-white py-6 text-lg font-semibold rounded-full transition-all duration-300"
                      >
                        <Send className="mr-2 h-5 w-5" />
                        {contactMutation.isPending ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </Form>
                </div>
                
                {/* Contact Information */}
                <div className="bg-gradient-to-br from-midnight to-deep-blue text-white p-8 lg:p-12 rounded-r-lg">
                  <h3 className="text-2xl font-semibold heading-font mb-8">Direct Contact</h3>
                  
                  <div className="space-y-8">
                    <div className="flex items-start space-x-4">
                      <Phone className="h-8 w-8 text-gold mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="text-xl font-semibold mb-2">Phone Consultation</h5>
                        <a 
                          href="tel:8881157770" 
                          className="text-2xl font-bold text-gold hover:text-yellow-300 transition-colors heading-font"
                        >
                          8881157770
                        </a>
                        <p className="text-white/70 mt-1">Available 9 AM - 9 PM, 7 days a week</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Clock className="h-8 w-8 text-gold mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="text-xl font-semibold mb-2">Consultation Hours</h5>
                        <p className="text-white/90">Monday - Sunday: 9:00 AM - 9:00 PM</p>
                        <p className="text-white/70">Flexible timing available for urgent consultations</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <IndianRupee className="h-8 w-8 text-gold mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="text-xl font-semibold mb-2">Pricing</h5>
                        <p className="text-white/90 text-lg">₹5 per minute</p>
                        <p className="text-white/70">Pay only for the time you need</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <img 
                      src="https://images.unsplash.com/photo-1551554781-c46200ea959d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300" 
                      alt="Tarot cards spread with mystical background" 
                      className="rounded-lg w-full opacity-80"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
