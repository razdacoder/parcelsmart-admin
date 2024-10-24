import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Percent, XCircle } from "lucide-react";
import { useMarkupEdit } from "../hooks/use-markup-edit-modal";

export default function MarkUpEditModal() {
  const { isOpen, onClose } = useMarkupEdit();
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader className="flex flex-row justify-between items-center">
          <DialogTitle>DHL Express Markup</DialogTitle>
          <DialogClose>
            <XCircle className="size-8 fill-black stroke-white" />
          </DialogClose>
        </DialogHeader>
        <div>
          <div className="relative">
            <Percent className="size-4 absolute left-3 top-1/2 -translate-y-1/2 transform text-muted-foreground" />

            <Input type="text" className={cn("pe-10 ps-10")} />
          </div>
        </div>

        <DialogFooter>
          <Button size="lg">Update</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
