import { client } from "@/lib/client";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

type ResponseType = {
  status: boolean;
  message: string;
  data: {
    shipments: Shipment[];
    pagination: Pagination;
  };
};

export default function useShipments({
  page,
  limit,
  status,
  start_date,
  end_date,
  search,
  user_id,
}: {
  page?: number;
  limit?: number;
  status:
    | "draft"
    | "confirmed"
    | "in_transit"
    | "delivered"
    | "cancelled"
    | null;
  start_date?: string;
  end_date?: string;
  search: string;
  user_id?: string;
}) {
  const url = `/admin/shipments${user_id ? `/user/${user_id}` : ""}`;
  return useQuery<ResponseType, AxiosError<ErrorResponseType>>({
    queryKey: [
      "shipments",
      page,
      limit,
      status,
      start_date,
      end_date,
      search,
      user_id,
    ],
    queryFn: async () => {
      const response = await client.get(url, {
        params: {
          page,
          limit,
          status,
          start_date,
          end_date,
          search: search === "" ? undefined : search,
          sortBy: "created_at",
          sortOrder: "desc",
        },
      });
      return response.data;
    },
  });
}
