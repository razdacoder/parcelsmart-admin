import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { ListFilter } from "lucide-react";

export const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "first_name",
    header: () => {
      return (
        <span className="flex items-center gap-2 text-black">
          Name <ListFilter className="size-3.5" />{" "}
        </span>
      );
    },
    cell: ({ row }) => {
      return (
        <span className="w-56 inline-block truncate">
          {row.original.first_name} {row.original.last_name}
        </span>
      );
    },
  },
  {
    accessorKey: "created_at",
    header: () => {
      return (
        <span className="flex items-center gap-2 text-black">
          Registration Date <ListFilter className="size-3.5" />{" "}
        </span>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2 w-56">
          <span>{format(row.original.created_at, "d MMM yyyy - hh.mm a")}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "id",
    header: () => {
      return (
        <span className="flex items-center gap-2 text-black">
          User ID <ListFilter className="size-3.5" />{" "}
        </span>
      );
    },
    cell: ({ row }) => {
      return (
        <span className="truncate w-16 inline-block">{row.original.id}</span>
      );
    },
  },

  {
    accessorKey: "email",
    header: () => {
      return (
        <span className="flex items-center gap-2 text-black">
          Email <ListFilter className="size-3.5" />{" "}
        </span>
      );
    },
    cell: ({ row }) => {
      return <span className="w-36 truncate">{row.original.email}</span>;
    },
  },

  {
    accessorKey: "phone_number",
    header: () => {
      return (
        <span className="flex items-center gap-2 text-black">
          Phone No. <ListFilter className="size-3.5" />{" "}
        </span>
      );
    },
    cell: ({ row }) => {
      return <span className="w-36 truncate">{row.original.phone_number}</span>;
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
        <Select defaultValue="verified">
          <SelectTrigger className="bg-[#5E636614] w-36">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="verified">Verified</SelectItem>
            <SelectItem value="unverified">Unverified</SelectItem>
            <SelectItem value="block">Block</SelectItem>
            <SelectItem value="unblock">Unblock</SelectItem>
          </SelectContent>
        </Select>
      );
    },
  },
  {
    accessorKey: "id",
    header: () => {
      return (
        <span className="flex items-center gap-2 text-black">
          KYC <ListFilter className="size-3.5" />{" "}
        </span>
      );
    },
    cell: () => {
      return (
        <Badge className="bg-[#E0FEE9B2] py-2 px-3 text-[#24D164] w-36 flex justify-center hover:bg-[#E0FEE9B2] hover:text-[#24D164]">
          Completed
        </Badge>
      );
    },
    // cell: ({ row }) => {
    //   if (row.original.status === "in_transit") {
    //     return (
    //       <Badge className="bg-[#CB6F1B26] py-2 px-3 text-[#CB6F1B] w-36 flex justify-center hover:bg-[#CB6F1B26] hover:text-[#CB6F1B]">
    //         In Transit
    //       </Badge>
    //     );
    //   }
    //   if (row.original.status === "cancelled") {
    //     return (
    //       <Badge className="bg-[#FDF2F8] py-2 px-3 text-[#ED4F9D] w-36 flex justify-center hover:bg-[#FDF2F8] hover:text-[#ED4F9D]">
    //         Cancelled
    //       </Badge>
    //     );
    //   }

    //   if (row.original.status === "draft") {
    //     return (
    //       <Badge className="bg-[#D6D8D9] py-2 px-3 text-[#4F4F4F] w-36 flex justify-center hover:bg-[#D6D8D9] hover:text-[#4F4F4F]">
    //         Draft
    //       </Badge>
    //     );
    //   }

    //   if (row.original.status === "confirmed") {
    //     return (
    //       <Badge className="bg-[#EFF6FF] py-2 px-3 text-[#2563EB] w-36 flex justify-center hover:bg-[#EFF6FF] hover:text-[#2563EB]">
    //         Completed
    //       </Badge>
    //     );
    //   }
    // },
  },
];
