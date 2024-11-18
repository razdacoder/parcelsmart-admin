import SubmitButton from "@/components/submit-button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { updateProfileSchema, UpdateProfileValues } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Mail, User } from "lucide-react";
import { useForm } from "react-hook-form";
import "react-phone-number-input/style.css";
import useUpdateProfile from "../api/use-update-profile";

type Props = {
  user: AdminUser;
};

export default function UpdateProfileForm({ user }: Props) {
  const form = useForm<UpdateProfileValues>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
    },
  });

  const { mutate, isPending } = useUpdateProfile();

  function onSubmit(values: UpdateProfileValues) {
    mutate(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-4 w-full">
          <div className="grid grid-cols-2 gap-12">
            <FormField
              name="first_name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <div className="relative">
                    <User className="size-4 absolute left-3 top-1/2 -translate-y-1/2 transform text-muted-foreground" />
                    <FormControl>
                      <Input
                        disabled={isPending}
                        className="ps-10"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              name="last_name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <div className="relative">
                    <User className="size-4 absolute left-3 top-1/2 -translate-y-1/2 transform text-muted-foreground" />
                    <FormControl>
                      <Input
                        disabled={isPending}
                        className="ps-10"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                  </div>
                </FormItem>
              )}
            />
          </div>

          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <div className="relative">
                  <Mail className="size-4 absolute left-3 top-1/2 -translate-y-1/2 transform text-muted-foreground" />
                  <FormControl>
                    <Input className="ps-10" type="email" disabled {...field} />
                  </FormControl>
                </div>
              </FormItem>
            )}
          />

          <div className="flex justify-center">
            <SubmitButton isPending={isPending} className="w-fit">
              Update <ArrowRight className="size-4" />
            </SubmitButton>
          </div>
        </div>
      </form>
    </Form>
  );
}
