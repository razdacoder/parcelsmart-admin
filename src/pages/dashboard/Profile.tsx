import AppNavBar from "@/components/app-navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useMe from "@/features/auth/api/useMe";
import UpdateProfileForm from "@/features/auth/forms/update-profile-form";
import { getInitials } from "@/lib/utils";
import { Loader } from "lucide-react";
import "react-phone-number-input/style.css";

export default function Profile() {
  const { data, isLoading } = useMe();

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
              </div>
              {data && <UpdateProfileForm user={data.data} />}
              {isLoading && (
                <Loader className="animate-spin size-6 text-primary" />
              )}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
