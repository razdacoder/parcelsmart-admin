import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function UserInfoCard() {
  return (
    <Card className="shadow-none border-none">
      <CardContent className="py-6">
        <div className="grid grid-cols-3 divide-x-[1px] divide-[#DBDADE]">
          <div className="flex items-start gap-4">
            <Avatar className="size-20">
              <AvatarImage src="" />
              <AvatarFallback className="bg-primary font-semibold text-white text-2xl">
                RR
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-0.5">
              <h3 className="text-xl font-semibold text-text">Ramon Rasheed</h3>
              <span className="text-sm font-medium text-gray-500">
                ramonrash2@gmail.com
              </span>
              <Select defaultValue="verified">
                <SelectTrigger className="bg-[#5E636614] border-none focus:ring-0 mt-6">
                  <SelectValue className="text-gray-600" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="verified">Verified</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-3 px-12">
            <h6 className="text-sm text-[#4F4F4F] font-medium uppercase">
              Personal Information
            </h6>
            <div className="flex justify-between items-center text-sm text-[#4F4F4F] capitalize">
              <span>Contact Number</span>
              <span className="font-semibold text-text">+2347098765432</span>
            </div>
            <div className="flex justify-between items-center text-sm text-[#4F4F4F] capitalize">
              <span>Gender</span>
              <span className="font-semibold text-text">Male</span>
            </div>
            <div className="flex justify-between items-center text-sm text-[#4F4F4F] capitalize">
              <span>Date of Birth</span>
              <span className="font-semibold text-text">1 Jan, 1985</span>
            </div>
            <div className="flex justify-between items-center text-sm text-[#4F4F4F] capitalize">
              <span>Member Since</span>
              <span className="font-semibold text-text">2 March, 2023</span>
            </div>
          </div>
          <div className="flex flex-col gap-3 px-12">
            <h6 className="text-sm text-[#4F4F4F] font-medium uppercase">
              Default Shipping Address
            </h6>
            <p className="text-xs text-[#4f4f4f] font-medium">
              37, Allen Avenue, Ikeja, Lagos State
            </p>
            <div className="flex items-center gap-12 mt-4">
              <div className="flex flex-col text-sm text-[#4F4F4F] capitalize">
                <span className="font-bold text-text text-2xl">150</span>
                <span>Total Bookings</span>
              </div>
              <div className="flex flex-col text-sm text-[#4F4F4F] capitalize">
                <span className="font-bold text-text text-2xl">140</span>
                <span>Completed</span>
              </div>
              <div className="flex flex-col  text-sm text-[#4F4F4F] capitalize">
                <span className="font-bold text-2xl text-text">10</span>
                <span>Cancelled</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
