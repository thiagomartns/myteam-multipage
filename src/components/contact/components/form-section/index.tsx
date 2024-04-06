"use client";

import React from "react";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SubscriberSchema } from "@/schemas";
import { Textarea } from "@/components/ui/textarea";
import { StyledButton } from "@/components/styled-button";

export default function FormSection() {
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
  return (
    <Form {...form}>
      <form
        /*onSubmit={form.handleSubmit(onSubmit)}*/ className="space-y-8 px-5 w-full py-8 md:px-32 lg:px-0 lg:w-[514px] lg:my-0 mx-auto"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Company" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Title" {...field} />
              </FormControl>
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
            </FormItem>
          )}
        />
        <div className="mt-5">
          <StyledButton label="Submit" />
        </div>
      </form>
    </Form>
  );
}
