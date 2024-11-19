import { client } from "@/lib/client";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

type Permission = {
  id: number;
  name: string;
  guard_name: string;
  created_at: Date;
  updated_at: Date;
};

type PermissionRole = {
  id: number;
  name: string;
  guard_name: string;
  created_at: Date;
  updated_at: Date;
  permissions: Permission[];
};

type ResponseType = {
  status: boolean;
  message: string;
  data: {
    roles: PermissionRole[];
    permissions: Permission[];
    rolePermissions: {
      1: string[];
      2: string[];
      3: string[];
    };
  };
};

export default function useGetRolesPermissions() {
  return useQuery<ResponseType, AxiosError<ErrorResponseType>>({
    queryKey: ["permissions"],
    queryFn: async () => {
      const response = await client.get("/admin/permissions/roles-permissions");
      return response.data;
    },
  });
}
