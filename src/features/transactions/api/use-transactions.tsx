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

type Props = {
  type: "credit" | "debit" | null;
  search: string;
  user_id?: string;
};

export default function useTransactions({ type, search, user_id }: Props) {
  return useQuery<ResponseType, AxiosError<ErrorResponseType>>({
    queryKey: ["transactions", type, search, user_id],
    queryFn: async () => {
      const url = `/admin/transactions${user_id ? `/user/${user_id}` : ""}`;
      const response = await client.get(url, {
        params: {
          type,
          search: search === "" ? undefined : search,
        },
      });
      return response.data;
    },
  });
}
