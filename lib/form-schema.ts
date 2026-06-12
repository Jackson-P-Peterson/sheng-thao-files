import { z } from "zod";

export const signupSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name is too long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || val.replace(/\D/g, "").length >= 10,
      "Please enter a valid phone number"
    ),
});

export type SignupFormData = z.infer<typeof signupSchema>;
