import AppNavBar from "@/components/app-navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import useMe from "@/features/auth/api/useMe";
import { updateProfileSchema, UpdateProfileValues } from "@/lib/schemas";
import { getInitials } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Mail, User } from "lucide-react";
import { Form, useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function Profile() {
  const { data } = useMe();
  const form = useForm<UpdateProfileValues>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {},
  });
  return (
    <div className="flex flex-col gap-4 w-full overflow-hidden">
      <AppNavBar title="Profile" />
      <main className="px-4 md:px-8 space-y-6">
        <Card className="shadow-none border-none">
          <CardHeader className="flex items-center flex-row justify-between">
            <CardTitle className="text-2xl font-bold">
              Account Settings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col  items-center justify-center max-w-2xl mx-auto w-full space-y-8">
              <div className="size-32 relative">
                <Avatar className="w-full h-full absolute top-0 left-0 z-10  overflow-visible">
                  <AvatarImage src="" className="relative"></AvatarImage>
                  <AvatarFallback className="text-4xl -z-10 font relative bg-primary text-white">
                    <span className="text-4xl font-bold bg-primary text-white">
                      {getInitials(data?.data.first_name, data?.data.last_name)}
                    </span>
                  </AvatarFallback>
                </Avatar>
                {/* <button className="absolute top-0 right-0 z-[9999] border-2 border-primary rounded-md size-6 flex items-center justify-center">
                  <Edit className="size-4 text-primary " />
                </button> */}
              </div>
              <Form {...form}>
                <form>
                  <div className="space-y-4 w-full">
                    <div className="grid grid-cols-2 gap-12">
                      <div className="relative">
                        <User className="size-4 absolute left-3 top-1/2 -translate-y-1/2 transform text-muted-foreground" />
                        <Input
                          className="ps-10"
                          type="text"
                          value={data?.data.first_name}
                        />
                      </div>
                      <div className="relative">
                        <User className="size-4 absolute left-3 top-1/2 -translate-y-1/2 transform text-muted-foreground" />
                        <Input
                          className="ps-10"
                          type="text"
                          value={data?.data.last_name}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                      <div className="relative">
                        <Mail className="size-4 absolute left-3 top-1/2 -translate-y-1/2 transform text-muted-foreground" />
                        <Input
                          className="ps-10"
                          type="email"
                          disabled
                          value={data?.data.email}
                        />
                      </div>
                      <div className="relative">
                        <PhoneInput
                          defaultCountry="NG"
                          international
                          placeholder="Enter phone number"
                          className="flex h-11 w-full rounded-md border border-primary bg-transparent px-4 py-2 text-sm shadow-sm transition-colors  placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 outline-none"
                          value="+2348024283327"
                          onChange={() => {}}
                        />
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <Button size="lg">
                        Update <ArrowRight className="size-4" />
                      </Button>
                    </div>
                  </div>
                </form>
              </Form>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
