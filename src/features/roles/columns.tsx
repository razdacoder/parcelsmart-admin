import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { ArrowUpRight, ListFilter } from "lucide-react";

export const columns: ColumnDef<Staff>[] = [
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
        <span>
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
          <ArrowUpRight className="size-5 text-primary" />
          <span>{format(row.original.created_at, "d MMM, hh.mm a")}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "id ",
    header: () => {
      return (
        <span className="flex items-center gap-2 text-black">
          Staff ID <ListFilter className="size-3.5" />{" "}
        </span>
      );
    },
    cell: ({ row }) => {
      return <span>{row.original.id}</span>;
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
      return <span>{row.original.email}</span>;
    },
  },

  // {
  //   accessorKey: "phone_number",
  //   header: () => {
  //     return (
  //       <span className="flex items-center gap-2 text-black">
  //         Phone No. <ListFilter className="size-3.5" />{" "}
  //       </span>
  //     );
  //   },
  // },
  {
    accessorKey: "role",
    header: () => {
      return (
        <span className="flex items-center gap-2 text-black">
          Role <ListFilter className="size-3.5" />{" "}
        </span>
      );
    },
    cell: ({ row }) => {
      return (
        <Select defaultValue={row.original.roles[0].id.toString()}>
          <SelectTrigger className="bg-[#5E636614]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Super Admin</SelectItem>
            <SelectItem value="2">Admin</SelectItem>
            <SelectItem value="3">manager</SelectItem>
          </SelectContent>
        </Select>
      );
    },
  },
];
