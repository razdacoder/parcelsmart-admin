import { client } from "@/lib/client";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

type ResponseType = {
  status: boolean;
  message: string;
  data: {
    users: User[];
    pagination: Pagination;
  };
};

export default function useUsers({
  page,
  search,
}: {
  page?: number;
  search: string;
}) {
  return useQuery<ResponseType, AxiosError<ErrorResponseType>>({
    queryKey: ["all-users", page, search],
    queryFn: async () => {
      const response = await client.get("/admin/users", {
        params: {
          page,
          search: search === "" ? undefined : search,
          sortBy: "created_at",
          sortOrder: "desc",
        },
      });
      return response.data;
    },
  });
}
