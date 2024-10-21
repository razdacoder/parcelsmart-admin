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
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, MapPin, User } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function TeamCard() {
  return (
    <Card className="shadow-none border-none">
      <CardContent className="flex items-center justify-between py-6">
        <div className="flex flex-col gap-0.5">
          <h2 className="text-xl font-bold text-text">Team Members</h2>
          <p className="font-medium text-gray-500">
            Invite or add new team members.
          </p>
        </div>
        <Dialog>
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
            <div className="space-y-4 w-full">
              <div className="grid grid-cols-2 gap-6">
                <div className="relative">
                  <User className="size-4 absolute left-3 top-1/2 -translate-y-1/2 transform text-muted-foreground" />
                  <Input className="ps-10" type="text" value="John" />
                </div>
                <div className="relative">
                  <User className="size-4 absolute left-3 top-1/2 -translate-y-1/2 transform text-muted-foreground" />
                  <Input className="ps-10" type="text" value="Doe" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="relative">
                  <Mail className="size-4 absolute left-3 top-1/2 -translate-y-1/2 transform text-muted-foreground" />
                  <Input
                    className="ps-10"
                    type="email"
                    value="johndoe@email.com"
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
              <div className="grid grid-cols-2 gap-8">
                <div className="relative">
                  <MapPin className="size-4 absolute left-3 top-1/2 -translate-y-1/2 transform text-muted-foreground" />
                  <Input
                    className="ps-10"
                    type="address"
                    value="No. 93 Skyfield Apartments"
                  />
                </div>
              </div>
            </div>
            <DialogFooter className="flex items-center sm:justify-center w-full sm:flex-row">
              <Button size="lg" type="submit">
                Continue
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
