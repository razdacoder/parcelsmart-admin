import { Filter } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
export default function AllFilter() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="items-center gap-2">
          <Filter className="size-4" />
          Filter
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>Filter</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="space-y-2">
            <h6 className="text-sm">Order Type</h6>
            <RadioGroup
              defaultValue="option-one"
              className="grid grid-cols-2 gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="drop-off" id="drop-off" className="" />
                <Label htmlFor="drop-off">Drop Off</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="pick-up" id="pick-up" />
                <Label htmlFor="pick-up">Pick up</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <h6 className="text-sm">Status</h6>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="in_transit">In Transit</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <h6 className="text-sm">Amount</h6>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <Label className="text-xs">From</Label>
                <Input placeholder="0.00" className="h-9" />
              </div>
              <div className="flex flex-col gap-1">
                <Label className="text-xs">To</Label>
                <Input placeholder="0.00" className="h-9" />
              </div>
            </div>
          </div>

          <Button className="w-full">Filter</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
