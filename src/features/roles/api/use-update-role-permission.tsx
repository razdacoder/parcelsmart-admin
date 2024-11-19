import { client } from "@/lib/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

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
  const queryClient = useQueryClient();
  return useMutation<ResponseType, AxiosError<ErrorResponseType>, RequestType>({
    mutationFn: async (data) => {
      const response = await client.post(
        "/admin/permissions/update-role-permissions",
        data
      );
      return response.data;
    },
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["permissions"] });
    },
    onError: (error) => {
      toast.error(error.response?.data.message);
      console.error(error);
    },
  });
}
