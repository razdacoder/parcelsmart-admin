import dhlImage from "@/assets/dhl.png";
import { useMarkupEdit } from "@/features/markups/hooks/use-markup-edit-modal";
import { Edit } from "lucide-react";

export default function CarrierMarkup() {
  const { onOpen } = useMarkupEdit();
  return (
    <div className="flex items-center justify-between">
      <div className="text-sm font-medium flex items-center gap-4 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        <img src={dhlImage} className="size-10" />
        <span>DHL Express</span>
      </div>
      <button
        onClick={() => onOpen("ggg")}
        className="inline-flex items-center gap-2 text-primary px-6 py-1 rounded-xl text-sm border border-primary"
      >
        <Edit className="text-primary size-4" />
        Edit
      </button>
    </div>
  );
}
