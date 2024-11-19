import { client } from "@/lib/client";
import { type CreateStaffValues } from "@/lib/schemas";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

type ResponseType = {
  status: boolean;
  message: string;
  data: {
    first_name: string;
    last_name: string;
    email: string;
    id: string;
    updated_at: Date;
    created_at: Date;
  };
};

export default function useUpdateStaff({ staff_id }: { staff_id: string }) {
  const queryClient = useQueryClient();
  return useMutation<
    ResponseType,
    AxiosError<ErrorResponseType>,
    CreateStaffValues
  >({
    mutationFn: async (data) => {
      const response = await client.put(`/admin/staffs/${staff_id}`, data);
      return response.data;
    },
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["staffs"] });
      queryClient.invalidateQueries({ queryKey: ["staff", staff_id] });
    },
    onError: (error) => {
      toast.error(error.response?.data.message);
      console.error(error);
    },
  });
}
