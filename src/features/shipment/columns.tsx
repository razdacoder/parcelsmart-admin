import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { copyText, formatNaira } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { ArrowUpRight, Copy, ListFilter, Minus } from "lucide-react";

export const columns: ColumnDef<Shipment>[] = [
  {
    accessorKey: "origin_address",
    header: () => {
      return (
        <span className="flex items-center gap-2 text-black">
          Customer <ListFilter className="size-3.5" />{" "}
        </span>
      );
    },
    cell: ({ row }) => {
      return (
        <span>
          {row.original.origin_address.first_name}{" "}
          {row.original.origin_address.last_name}
        </span>
      );
    },
  },
  {
    accessorKey: "date",
    header: () => {
      return (
        <span className="flex items-center gap-2 text-black">
          Date <ListFilter className="size-3.5" />{" "}
        </span>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2 w-56">
          <ArrowUpRight className="size-5 text-primary" />
          <span>{format(row.original.created_at, "d MMM, hh.mm a")}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "rate",
    header: () => {
      return (
        <span className="flex items-center gap-2 text-black">
          Order Type <ListFilter className="size-3.5" />{" "}
        </span>
      );
    },
    cell: () => {
      return <span>Pick Up</span>;
    },
  },

  {
    accessorKey: "shipmentId",
    header: () => {
      return (
        <span className="flex items-center gap-2 text-black">
          Shipment ID <ListFilter className="size-3.5" />{" "}
        </span>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2 w-36">
          <span className="truncate flex-1">
            {row.original.tracking_number || row.original.id}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              copyText(row.original.tracking_number || row.original.id);
            }}
          >
            <Copy className="size-4 text-primary" />
          </button>
        </div>
      );
    },
  },

  {
    accessorKey: "price",
    header: () => {
      return (
        <span className="flex items-center gap-2 text-black">
          Price <ListFilter className="size-3.5" />{" "}
        </span>
      );
    },
    cell: ({ row }) => {
      return (
        <span className="text-primary w-36 inline-block">
          {row.original.rate ? (
            formatNaira(row.original.rate.amount)
          ) : (
            <Minus className="size-6 text-primary" />
          )}
        </span>
      );
    },
  },
  {
    accessorKey: "id",
    header: () => {
      return (
        <span className="flex items-center gap-2 text-black">
          Action <ListFilter className="size-3.5" />{" "}
        </span>
      );
    },
    cell: () => {
      return (
        <Select>
          <SelectTrigger className="bg-[#5E636614]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
      );
    },
  },
  {
    accessorKey: "status",
    header: () => {
      return (
        <span className="flex items-center gap-2 text-black">
          Status <ListFilter className="size-3.5" />{" "}
        </span>
      );
    },
    cell: ({ row }) => {
      if (row.original.status === "in_transit") {
        return (
          <Badge className="bg-[#CB6F1B26] py-2 px-3 text-[#CB6F1B] w-36 flex justify-center hover:bg-[#CB6F1B26] hover:text-[#CB6F1B]">
            In Transit
          </Badge>
        );
      }
      if (row.original.status === "cancelled") {
        return (
          <Badge className="bg-[#FDF2F8] py-2 px-3 text-[#ED4F9D] w-36 flex justify-center hover:bg-[#FDF2F8] hover:text-[#ED4F9D]">
            Cancelled
          </Badge>
        );
      }

      if (row.original.status === "draft") {
        return (
          <Badge className="bg-[#D6D8D9] py-2 px-3 text-[#4F4F4F] w-36 flex justify-center hover:bg-[#D6D8D9] hover:text-[#4F4F4F]">
            Draft
          </Badge>
        );
      }

      if (row.original.status === "confirmed") {
        return (
          <Badge className="bg-[#EFF6FF] py-2 px-3 text-[#2563EB] w-36 flex justify-center hover:bg-[#EFF6FF] hover:text-[#2563EB]">
            Completed
          </Badge>
        );
      }
    },
  },
];
