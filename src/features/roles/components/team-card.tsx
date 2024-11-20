import SubmitButton from "@/components/submit-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createStaffSchema, CreateStaffValues } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Key, Mail, User } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "react-phone-number-input/style.css";
import useCreateStaff from "../api/use-create-staff";

export default function TeamCard() {
  const [isOpen, setOpen] = useState(false);
  const form = useForm<CreateStaffValues>({
    resolver: zodResolver(createStaffSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      role_id: 1,
    },
  });
  const { mutate, isPending } = useCreateStaff();

  function onSubmit(values: CreateStaffValues) {
    mutate(values, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  }

  return (
    <Card className="shadow-none border-none">
      <CardContent className="flex flex-col md:flex-row gap-6 md:items-center justify-between py-6">
        <div className="flex flex-col gap-0.5">
          <h2 className="text-xl font-bold text-text">Team Members</h2>
          <p className="font-medium text-gray-500">
            Invite or add new team members.
          </p>
        </div>
        <Dialog open={isOpen} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button size="lg">
              Add Member <ArrowRight className="size-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-lg font-medium">
                Add New Member
              </DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="space-y-4 w-full">
                  <div className="grid grid-cols-2 gap-6">
                    <FormField
                      name="first_name"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
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
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      name="last_name"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
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
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <FormField
                      name="email"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <div className="relative">
                            <Mail className="size-4 absolute left-3 top-1/2 -translate-y-1/2 transform text-muted-foreground" />
                            <FormControl>
                              <Input
                                disabled={isPending}
                                className="ps-10"
                                type="email"
                                {...field}
                              />
                            </FormControl>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="role_id"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Role</FormLabel>
                          <Select
                            disabled={isPending}
                            onValueChange={(value) =>
                              field.onChange(parseInt(value))
                            }
                            defaultValue={field.value.toString()}
                          >
                            <div className="relative">
                              <Key className="size-4 absolute left-3 top-1/2 -translate-y-1/2 transform text-muted-foreground" />
                              <FormControl>
                                <SelectTrigger className="ps-10 h-12">
                                  <SelectValue placeholder="Select a verified email to display" />
                                </SelectTrigger>
                              </FormControl>
                            </div>

                            <SelectContent>
                              <SelectItem value="1">Super Admin</SelectItem>
                              <SelectItem value="2">Admin</SelectItem>
                              <SelectItem value="3">Manager</SelectItem>
                            </SelectContent>
                          </Select>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    name="password"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>

                        <FormControl>
                          <PasswordInput
                            disabled={isPending}
                            className="ps-10"
                            type="password"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <DialogFooter className="flex items-center sm:justify-center w-full sm:flex-row mt-8">
                  <SubmitButton isPending={isPending} className="w-fit">
                    Continue
                  </SubmitButton>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
