import { client } from "@/lib/client";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

type ResponseType = {
  status: boolean;
  message: string;
  data: {
    data: Staff[];
    pagination: Pagination;
  };
};

export default function useGetStaff({ staff_id }: { staff_id?: string }) {
  return useQuery<ResponseType, AxiosError<ErrorResponseType>>({
    enabled: !!staff_id,
    queryKey: ["staff", staff_id],
    queryFn: async () => {
      const response = await client.get(`/admin/staffs/${staff_id}`);
      return response.data;
    },
  });
}
