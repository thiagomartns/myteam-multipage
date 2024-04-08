"use client";

import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SubscriberSchema } from "@/schemas";
import { Textarea } from "@/components/ui/textarea";
import { StyledButton } from "@/components/styled-button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function FormSection() {
  const router = useRouter();

  const form = useForm<z.infer<typeof SubscriberSchema>>({
    resolver: zodResolver(SubscriberSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      title: "",
      message: "",
    },
  });

  const handleSubmit = () => {
    form.reset();
    toast.success("You've been subscribed with success!");
    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

  const isValid = form.formState.isValid;
  const isDirty = form.formState.isDirty;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-8 px-5 w-full py-8 md:px-32 lg:px-0 lg:w-[514px] lg:my-0 mx-auto"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="max-h-12">
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="max-h-12">
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem className="max-h-12">
              <FormControl>
                <Input placeholder="Company" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="max-h-12">
              <FormControl>
                <Input placeholder="Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea placeholder="Message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-5">
          <StyledButton disabled={!isValid || !isDirty} type="submit">
            Submit
          </StyledButton>
        </div>
      </form>
    </Form>
  );
}
