import { z } from "zod";

export const intakeFormSchema = z.object({
  fullName: z.string().min(1, "Name is required"),
  address: z.string().min(1, "Address is required"),
});

export type IntakeFormSchema = z.infer<typeof intakeFormSchema>;