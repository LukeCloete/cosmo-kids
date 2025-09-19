"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Zod schema for form validation
const formSchema = z.object({
  childName: z.string().min(2, {
    message: "Child's name must be at least 2 characters.",
  }),
  childAge: z.string().min(1, {
    message: "Please enter your child's age.",
  }),
  parentName: z.string().min(2, {
    message: "Parent's name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  address: z.string().min(5, {
    message: "Please enter a valid address.",
  }),
  inquiry: z.string().min(10, {
    message: "Please provide a detailed inquiry.",
  }),
  preferredStart: z.string().optional(),
});

type AdmissionsFormValues = z.infer<typeof formSchema>;

export default function page() {
  const form = useForm<AdmissionsFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      childName: "",
      childAge: "",
      parentName: "",
      email: "",
      phone: "",
      address: "",
      inquiry: "",
      preferredStart: "",
    },
  });

  const onSubmit = (values: AdmissionsFormValues) => {
    console.log("Form submitted with values:", values);
    alert("Thank you for your inquiry! We will get back to you soon.");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-sky-200 to-sky-100 pt-24 pb-16 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-60"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-pink-300 rounded-full opacity-60"></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-green-300 rounded-full opacity-60"></div>
          <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-purple-300 rounded-full opacity-60"></div>
        </div>

        {/* Clouds */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 283.5 21.2"
            className="w-full text-white fill-current"
          >
            <path d="M265.8 3.5c-10.9 0-15.9 6.2-15.9 6.2s-3.6-3.5-9.2-.9c-9.1 4.1-4.4 13.4-4.4 13.4s-1.2.2-1.9.9c-.6.7-.5 1.9-.5 1.9s-1-.5-2.3-.2c-1.3.3-1.6 1.4-1.6 1.4s.4-3.4-1.5-5c-3.9-3.4-8.3-.2-8.3-.2s-.6-.7-.9-.9c-.4-.2-1.2-.2-1.2-.2s-4.4-3.6-11.5-2.6-10.4 7.9-10.4 7.9-.5-3.3-3.9-4.9c-4.8-2.4-7.4 0-7.4 0s2.4-4.1-1.9-6.4-6.2 1.2-6.2 1.2-.9-.5-2.1-.5-2.3 1.1-2.3 1.1.1-.7-1.1-1.1c-1.2-.4-2 0-2 0s3.6-6.8-3.5-8.9c-6-1.8-7.9 2.6-8.4 4-.1-.3-.4-.7-.9-1.1-1-.7-1.3-.5-1.3-.5s1-4-1.7-5.2c-2.7-1.2-4.2 1.1-4.2 1.1s-3.1-1-5.7 1.4-2.1 5.5-2.1 5.5-.9 0-2.1.7-1.4 1.7-1.4 1.7-1.7-1.2-4.3-1.2c-2.6 0-4.5 1.2-4.5 1.2s-.7-1.5-2.8-2.4c-2.1-.9-4 0-4 0s2.6-5.9-4.7-9c-7.3-3.1-12.6 3.3-12.6 3.3s-.9 0-1.9.2c-.9.2-1.5.9-1.5.9S99.4 3 94.9 3.9c-4.5.9-5.7 5.7-5.7 5.7s-2.8-5-12.3-3.9-11.1 6-11.1 6-1.2-1.4-4-.7c-.8.2-1.3.5-1.8.9-.9-2.1-2.7-4.9-6.2-4.4-3.2.4-4 2.2-4 2.2s-.5-.7-1.2-.7h-1.4s-.5-.9-1.7-1.4-2.4 0-2.4 0-2.4-1.2-4.7 0-3.1 4.1-3.1 4.1-1.7-1.4-3.6-.7c-1.9.7-1.9 2.8-1.9 2.8s-.5-.5-1.7-.2c-1.2.2-1.4.7-1.4.7s-.7-2.3-2.8-2.8c-2.1-.5-4.3.2-4.3.2s-1.7-5-11.1-6c-3.8-.4-6.6.2-8.5 1v21.2h283.5V11.1c-.9.2-1.6.4-1.6.4s-5.2-8-16.1-8z" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          <div className="text-center space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Admissions for <span className="text-orange-500">Cosmo Kids</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We look forward to welcoming your child into our family. Please
              fill out the form below to inquire about admissions.
            </p>
          </div>
        </div>
      </section>

      {/* Admissions Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white shadow-[0_4px_30px_rgba(0,0,0,0.2)] border-0 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Admissions Inquiry Form
            </h2>

            <Form {...form}>
              <form
                className="p-8 flex flex-col gap-4 bg-white w-[90%] xl:w-[100%]"
                data-netlify="true"
                method="POST"
                name="contact"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <input type="hidden" name="form-name" value="contact" />

                {/* Child's Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="childName"
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormLabel>Child&apos;s Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        {fieldState.error && (
                          <FormMessage>{fieldState.error.message}</FormMessage>
                        )}
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="childAge"
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormLabel>Child&apos;s Age (in months)</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        {fieldState.error && (
                          <FormMessage>{fieldState.error.message}</FormMessage>
                        )}
                      </FormItem>
                    )}
                  />
                </div>
                {/* Parent's Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="parentName"
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormLabel>Parent&apos;s Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        {fieldState.error && (
                          <FormMessage>{fieldState.error.message}</FormMessage>
                        )}
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} />
                        </FormControl>
                        {fieldState.error && (
                          <FormMessage>{fieldState.error.message}</FormMessage>
                        )}
                      </FormItem>
                    )}
                  />
                </div>

                {/* Contact & Address */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input type="tel" {...field} />
                        </FormControl>
                        {fieldState.error && (
                          <FormMessage>{fieldState.error.message}</FormMessage>
                        )}
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        {fieldState.error && (
                          <FormMessage>{fieldState.error.message}</FormMessage>
                        )}
                      </FormItem>
                    )}
                  />
                </div>

                {/* Inquiry & Preferred Start */}
                <FormField
                  control={form.control}
                  name="inquiry"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel>Your Inquiry</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      {fieldState.error && (
                        <FormMessage>{fieldState.error.message}</FormMessage>
                      )}
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="preferredStart"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Starting Date (Optional)</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-orange-500">
                  Submit
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
}
