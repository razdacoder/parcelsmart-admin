import { client } from "@/lib/client";
import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";

type Response = {
  status: boolean;
  message: string;
  data: AdminUser;
};

export default function useMe() {
  return useQuery<Response, AxiosError>({
    queryKey: ["me"],
    queryFn: async () => {
      const response = await client.get(`/admin/profile`, {
        headers: {
          Authorization: `Bearer Token`,
        },
      });
      return response.data;
    },
  });
}
