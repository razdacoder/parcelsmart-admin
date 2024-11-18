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
import { ArrowUpRight, Copy, ListFilter } from "lucide-react";

export const columns: ColumnDef<AdminTransaction>[] = [
  {
    accessorKey: "user",
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
          {row.original.user.first_name} {row.original.user.last_name}
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
    accessorKey: "type",
    header: () => {
      return (
        <span className="flex items-center gap-2 text-black">
          Type <ListFilter className="size-3.5" />{" "}
        </span>
      );
    },
    cell: ({ row }) => {
      if (row.original.type === "credit") {
        return <span>In Flow</span>;
      }
      return <span>Out Flow</span>;
    },
  },

  {
    accessorKey: "shipmentId",
    header: () => {
      return (
        <span className="flex items-center gap-2 text-black">
          Transaction ID <ListFilter className="size-3.5" />{" "}
        </span>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2 w-36">
          <span className="truncate flex-1">{row.original.id}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              copyText(row.original.id);
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
          Amount <ListFilter className="size-3.5" />{" "}
        </span>
      );
    },
    cell: ({ row }) => {
      return (
        <span className="text-primary w-36 inline-block">
          {formatNaira(parseFloat(row.original.amount))}
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
            <SelectItem value="refund">Refund</SelectItem>
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
      if (row.original.status === "success") {
        return (
          <Badge className="bg-primary py-2 px-3 text-white w-36 flex justify-center hover:bg-primary hover:text-white">
            Successful
          </Badge>
        );
      }
      if (row.original.status === "failed") {
        return (
          <Badge className="bg-destructive py-2 px-3 text-white w-36 flex justify-center hover:bg-destructive hover:text-white">
            Failed
          </Badge>
        );
      }

      if (row.original.status === "pending") {
        return (
          <Badge className="bg-yellow-600 py-2 px-3 text-white w-36 flex justify-center hover:bg-yellow-600 hover:text-white">
            Pending
          </Badge>
        );
      }
    },
  },
];
