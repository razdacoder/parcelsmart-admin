import { client } from "@/lib/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

type ResponseType = {
  status: boolean;
  message: string;
};

export default function useDeleteStaff({ staff_id }: { staff_id: string }) {
  const queryClient = useQueryClient();
  return useMutation<ResponseType, AxiosError<ErrorResponseType>>({
    mutationFn: async () => {
      const response = await client.delete(`/admin/staffs/${staff_id}`);
      return response.data;
    },
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["staffs"] });
    },
    onError: (error) => {
      toast.error(error.response?.data.message);
      console.error(error);
    },
  });
}
