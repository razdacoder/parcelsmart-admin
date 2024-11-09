import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Filter } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export default function DateFilter() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="items-center gap-2">
          <Filter className="size-4 " />
          This Week
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>Date</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <RadioGroup
            defaultValue="option-one"
            className="grid grid-cols-2 gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="this-week" id="this-week" className="" />
              <Label htmlFor="this-week">This Week</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="last-week" id="last-week" />
              <Label htmlFor="last-week">Last Week</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="this-month" id="this-month" />
              <Label htmlFor="this-month">This Month</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="last-month" id="last-month" />
              <Label htmlFor="last-month">Last Month</Label>
            </div>
          </RadioGroup>
          <Button className="w-full">Filter</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
