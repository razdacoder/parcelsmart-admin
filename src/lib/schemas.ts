import { array, z } from "zod";
export const registerSchema = z
  .object({
    first_name: z.string().trim().min(2, { message: "This field is required" }),
    last_name: z.string().trim().min(2, { message: "This field is required" }),
    username: z.string().trim().min(2, { message: "This field is required" }),
    phone_number: z
      .string()
      .trim()
      .min(10, { message: "This field is required" }),
    email: z
      .string()
      .trim()
      .email({ message: "Invalid email address" })
      .min(5, { message: "This field is required" }),
    password: z.string().trim().min(8, { message: "Minimum of 8 characters" }),
    confirm_password: z
      .string()
      .trim()
      .min(8, { message: "Minimum of 8 characters" }),
    acceptTerms: z.coerce.boolean(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords does not match",
    path: ["confirm_password"],
  });

export type RegisterValues = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z.string().trim().email({ message: "Invalid email address" }),
  password: z.string().trim().min(8),
  // rememberMe: z.coerce.boolean(),
});

export type LoginValues = z.infer<typeof loginSchema>;

export const updateProfileSchema = z.object({
  first_name: z.string().trim().min(2, { message: "This field is required" }),
  last_name: z.string().trim().min(2, { message: "This field is required" }),
  email: z
    .string()
    .trim()
    .email({ message: "Invalid email address" })
    .min(5, { message: "This field is required" }),
});

export type UpdateProfileValues = z.infer<typeof updateProfileSchema>;

export const updatePasswordSchema = z.object({
  current_password: z
    .string()
    .trim()
    .min(8, { message: "Minimum of 8 characters" }),
  password: z.string().trim().min(8, { message: "Minimum of 8 characters" }),
  password_confirm: z
    .string()
    .trim()
    .min(8, { message: "Minimum of 8 characters" }),
});

export type UpdatePasswordValues = z.infer<typeof updatePasswordSchema>;

export const resetPasswordSchema = z.object({
  email: z.string().trim().email({ message: "Invalid email address" }),
});

export type ResetPasswordValues = z.infer<typeof resetPasswordSchema>;

export const newPasswordSchema = z.object({
  password: z.string().trim().min(8, { message: "Minimum of 8 characters" }),
  confirm_password: z
    .string()
    .trim()
    .min(8, { message: "Minimum of 8 characters" }),
  otp: z.string().min(4, {
    message: "Your one-time password must be 4 characters.",
  }),
});

export type NewPasswordValues = z.infer<typeof newPasswordSchema>;

export const otpSchema = z.object({
  pin: z.string().min(4, {
    message: "Your one-time password must be 4 characters.",
  }),
});

export type OTPValues = z.infer<typeof otpSchema>;

export const itemTypeSchema = z.object({
  itemType: z.literal("items"),
  name: z
    .string({ message: "This field is required" })
    .trim()
    .min(1, { message: "This field is required" }),
  description: z.string({ message: "This field is required" }).trim(),
  category: z.string().trim(),
  subCategory: z.string().trim(),
  hsCode: z.string().trim(),
  weight: z.coerce.number({ message: "This field is required" }),
  quantity: z.coerce.number({ message: "This field is required" }),
  value: z.coerce.number({ message: "This field is required" }),
});

export const documentSchema = z.object({
  itemType: z.literal("documents"),
  name: z
    .string({ message: "This field is required" })
    .trim()
    .min(1, { message: "This field is required" }),
  description: z.string({ message: "This field is required" }).trim(),
  weight: z.coerce.number({ message: "This field is required" }),
  quantity: z.coerce.number({ message: "This field is required" }),
});

export const itemSchema = z.discriminatedUnion("itemType", [
  itemTypeSchema,
  documentSchema,
]);

export type ItemValues = z.infer<typeof itemSchema>;

export const parcelSchema = z.object({
  packaging: z.string({ message: "This field is required" }).trim(),
  packaging_value: z.string().optional(),
  currency: z.enum(["NGN", "USD", "GBP"]),
  proofOfPayment: z.array(z.string().url()),
  proofOfWeight: z.array(z.string().url()),
  items: z.array(itemSchema),
});

export const parcelListSchema = z.object({
  parcels: array(parcelSchema),
});

export type ParcelListValues = z.infer<typeof parcelListSchema>;

export type ParcelValues = z.infer<typeof parcelSchema>;

export const createStaffSchema = z.object({
  first_name: z.string().trim().min(2, { message: "This field is required" }),
  last_name: z.string().trim().min(2, { message: "This field is required" }),
  email: z.string().trim().email({ message: "Invalid email address" }),
  password: z
    .string()
    .trim()
    .min(8, { message: "Password should be at least 8 characters" }),
  role_id: z.coerce.number({ message: "This field is required" }),
});

export type CreateStaffValues = z.infer<typeof createStaffSchema>;
