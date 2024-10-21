import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

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
        <Button size="lg">
          Add Member <ArrowRight className="size-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
