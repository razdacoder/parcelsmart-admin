import { client } from "@/lib/client";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

type ResponseType = {
  status: boolean;
  message: string;
  data: {
    total_transactions: number;
    total_revenue: number;
    total_users: number;
    total_staffs: number;
    total_shipments: number;
    shipment_in_transit: number;
    delivered_shipment: number;
    canceled_shipment: number;
  };
};

export default function useOverview() {
  return useQuery<ResponseType, AxiosError<ErrorResponseType>>({
    queryKey: ["overview"],
    queryFn: async () => {
      const response = await client.get("/admin/dashboard-overview");
      return response.data;
    },
  });
}
