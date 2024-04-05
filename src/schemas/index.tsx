"use client";

import * as z from "zod";

export const SubscriberSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  company: z.string(),
  title: z.string(),
  message: z.string(),
});
