import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ColumnDef } from "@tanstack/react-table";
import { ListFilter } from "lucide-react";

type Staff = {
  name: string;
  created_at: Date;
  id: string;
  email: string;
  phone_number: string;
  role: "admin" | "super-admin" | "manager";
};

export const columns: ColumnDef<Staff>[] = [
  {
    accessorKey: "name",
    header: () => {
      return (
        <span className="flex items-center gap-2 text-black">
          Name <ListFilter className="size-3.5" />{" "}
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
  },
  {
    accessorKey: "id ",
    header: () => {
      return (
        <span className="flex items-center gap-2 text-black">
          Satff ID <ListFilter className="size-3.5" />{" "}
        </span>
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
  },
  {
    accessorKey: "role",
    header: () => {
      return (
        <span className="flex items-center gap-2 text-black">
          Role <ListFilter className="size-3.5" />{" "}
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
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="super-admin">Super Admin</SelectItem>
            <SelectItem value="manager">manager</SelectItem>
          </SelectContent>
        </Select>
      );
    },
  },
];
