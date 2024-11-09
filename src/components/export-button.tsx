import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Download } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export default function ExportButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="items-center gap-2">
          <Download className="size-4 " />
          Export
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-xs">
        <DialogHeader>
          <DialogTitle>Export as</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <RadioGroup
            defaultValue="option-one"
            className="grid grid-cols-2 gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="pdf" id="pdf" className="" />
              <Label htmlFor="pdf">PDF</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="jpg" id="jpg" />
              <Label htmlFor="jpg">JPG</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="csv" id="csv" />
              <Label htmlFor="csv">CSV</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="xlxs" id="xlxs" />
              <Label htmlFor="xlxs">XLXS</Label>
            </div>
          </RadioGroup>
          <Button className="w-full">Export</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
