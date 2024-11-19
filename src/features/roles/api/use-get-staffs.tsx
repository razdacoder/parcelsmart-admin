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

export default function useGetStaffs() {
  return useQuery<ResponseType, AxiosError<ErrorResponseType>>({
    queryKey: ["staffs"],
    queryFn: async () => {
      const response = await client.get("/admin/staffs");
      return response.data;
    },
  });
}
