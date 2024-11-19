import { client } from "@/lib/client";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

type ResponseType = {
  status: boolean;
  message: string;
};

type RequestType = {
  role_id: number;
  permission_name: string;
  checked: boolean;
};

export default function useUpdateRolePermission() {
  return useMutation<ResponseType, AxiosError<ErrorResponseType>, RequestType>({
    mutationFn: async (data) => {
      const response = await client.post(
        "/admin/permissions/update-role-permissions",
        data
      );
      return response.data;
    },
  });
}
