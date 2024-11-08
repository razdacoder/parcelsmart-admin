import { client } from "@/lib/client";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

type ResponseType = {
  status: boolean;
  message: string;
  data: {
    transactions: AdminTransaction[];
    pagination: Pagination;
  };
};

export default function useTransactions() {
  return useQuery<ResponseType, AxiosError<ErrorResponseType>>({
    queryKey: ["transactions"],
    queryFn: async () => {
      const response = await client.get("/admin/transactions");
      return response.data;
    },
  });
}
