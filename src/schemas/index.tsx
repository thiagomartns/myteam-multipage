"use client";

import * as z from "zod";

export const SubscriberSchema = z.object({
  name: z.string().min(1, { message: "This field is required" }),
  email: z
    .string()
    .email({
      message: "Insert a valid address.",
    })
    .min(1, { message: "This field is required" }),
  company: z.string().min(1, { message: "This field is required" }),
  title: z.string().min(1, { message: "This field is required" }),
  message: z.string(),
});
