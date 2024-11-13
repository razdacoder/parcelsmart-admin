import { client } from "@/lib/client";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

type ResponseType = {
  status: boolean;
  message: string;
  data: User;
};

export default function useGetUser({ user_id }: { user_id?: string }) {
  return useQuery<ResponseType, AxiosError<ErrorResponseType>>({
    enabled: !!user_id,
    queryKey: ["users", user_id],
    queryFn: async () => {
      const response = await client.get(`/admin/users/${user_id}`);
      return response.data;
    },
  });
}
