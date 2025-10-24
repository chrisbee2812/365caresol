
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const supportNeeds = [
  { id: "mental-health", label: "Mental Health Support" },
  { id: "learning-disability", label: "Learning Disability Support" },
  { id: "physical-disability", label: "Physical Disability Support" },
] as const;

const formSchema = z.object({
  referrerName: z.string().min(2, "Name must be at least 2 characters."),
  referrerEmail: z.string().email("Please enter a valid email address."),
  referrerPhone: z.string().optional(),
  referringBody: z.string().optional(),
  clientName: z.string().min(2, "Name must be at least 2 characters."),
  clientDob: z.string().refine((val) => !isNaN(Date.parse(val)), "Please enter a valid date."),
  supportNeeds: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  additionalInfo: z.string().min(10, "Please provide at least 10 characters of information."),
});

export default function ReferralsForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      referrerName: "",
      referrerEmail: "",
      referrerPhone: "",
      referringBody: "",
      clientName: "",
      clientDob: "",
      supportNeeds: [],
      additionalInfo: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);

    console.log(values);

    toast({
      title: "Referral Submitted Successfully!",
      description: "Thank you. Our team will review the information and be in touch shortly.",
      variant: "default",
    });
    form.reset();
  }

  return (
    <Card className="shadow-lg">
      <CardContent className="p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Referrer Details */}
            <div>
                <h3 className="text-xl font-semibold mb-4 border-b pb-2">Your Details (Referrer)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                        control={form.control}
                        name="referrerName"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                                <Input placeholder="e.g. Jane Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="referrerEmail"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                                <Input placeholder="e.g. jane.doe@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                     <FormField
                        control={form.control}
                        name="referrerPhone"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Phone Number (Optional)</FormLabel>
                            <FormControl>
                                <Input placeholder="e.g. 01234 567890" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="referringBody"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Referring Body (CCG/Social Services)</FormLabel>
                            <FormControl>
                                <Input placeholder="e.g. Manchester CCG" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
            </div>

            {/* Client Details */}
             <div>
                <h3 className="text-xl font-semibold mb-4 border-b pb-2">Individual's Details</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                        control={form.control}
                        name="clientName"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                                <Input placeholder="e.g. John Smith" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="clientDob"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Date of Birth</FormLabel>
                            <FormControl>
                                <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
            </div>

            {/* Support Needs */}
             <div>
                <h3 className="text-xl font-semibold mb-4 border-b pb-2">Support Needs</h3>
                <FormField
                    control={form.control}
                    name="supportNeeds"
                    render={() => (
                        <FormItem>
                        <div className="mb-4">
                            <FormLabel className="text-base">What type of support is required?</FormLabel>
                            <FormDescription>Select all that apply.</FormDescription>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4">
                        {supportNeeds.map((item) => (
                            <FormField
                            key={item.id}
                            control={form.control}
                            name="supportNeeds"
                            render={({ field }) => {
                                return (
                                <FormItem key={item.id} className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                    <FormControl>
                                    <Checkbox
                                        checked={field.value?.includes(item.id)}
                                        onCheckedChange={(checked) => {
                                        return checked
                                            ? field.onChange([...field.value, item.id])
                                            : field.onChange(field.value?.filter((value) => value !== item.id));
                                        }}
                                    />
                                    </FormControl>
                                    <FormLabel className="font-normal">{item.label}</FormLabel>
                                </FormItem>
                                );
                            }}
                            />
                        ))}
                        </div>
                        <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            
             {/* Additional Info */}
            <FormField
              control={form.control}
              name="additionalInfo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Please provide a brief summary of the individual's situation and support needs.</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Include current challenges, goals, and any relevant background information..."
                      className="resize-y min-h-[150px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={isSubmitting} size="lg" className="w-full md:w-auto">
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
                </>
              ) : (
                "Submit Referral"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
