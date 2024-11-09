import { Circle } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

import DateFilter from "@/components/date-filter";
import ExportButton from "@/components/export-button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Skeleton } from "@/components/ui/skeleton";
import { client } from "@/lib/client";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

const chartConfig = {
  delivered_shipments: {
    label: "Delivered",
    color: "#FBAFAF",
  },
  in_transit_shipments: {
    label: "In Transit",
    color: "#096DF9",
  },
} satisfies ChartConfig;

type ResponseType = {
  status: boolean;
  message: string;
  data: {
    shipments: Shipment[];
    pagination: Pagination;
  };
};

export function ShipmentOverview() {
  const { data, isLoading, error } = useQuery<
    {
      month: string;
      delivered_shipments: number;
      in_transit_shipments: number;
    }[],
    AxiosError<ErrorResponseType>
  >({
    queryKey: ["shipment-overview"],
    queryFn: async () => {
      const response = (
        await client.get("/admin/shipments", { params: { page: 1 } })
      ).data as ResponseType;
      const countsByMonth: {
        [key: string]: { delivered: number; inTransit: number };
      } = {};
      response.data.shipments.forEach((shipment) => {
        const month = new Date(shipment.created_at).toLocaleString("default", {
          month: "long",
        });

        if (!countsByMonth[month]) {
          countsByMonth[month] = { delivered: 0, inTransit: 0 };
        }

        if (shipment.status === "delivered") {
          countsByMonth[month].delivered += 1;
        } else if (shipment.status === "in_transit") {
          countsByMonth[month].inTransit += 1;
        }
      });

      // Convert the counts into the required chart data format
      return Object.keys(countsByMonth).map((month) => ({
        month,
        delivered_shipments: countsByMonth[month].delivered,
        in_transit_shipments: countsByMonth[month].inTransit,
      }));
    },
  });
  return (
    <Card className=" shadow-none border-none">
      <CardHeader className="flex items-center flex-row justify-between px-12 py-8">
        <CardTitle className="text-2xl font-bold">Shipment Overview</CardTitle>
        <div className="flex items-center gap-4 px-6">
          <ExportButton />
          <DateFilter />
        </div>
      </CardHeader>
      {isLoading && (
        <div className="p-4">
          <Skeleton className="w-full h-96" />
        </div>
      )}

      <CardContent className="max-h-96">
        {data && (
          <ResponsiveContainer width="100%" height={350}>
            <ChartContainer config={chartConfig}>
              <AreaChart accessibilityLayer data={data}>
                <CartesianGrid vertical={false} />
                <YAxis tickLine={false} axisLine={false} tickMargin={8} />

                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dot" />}
                />

                <Area
                  dataKey="delivered_shipments"
                  type="natural"
                  fill="#096DF9"
                  fillOpacity={0.4}
                  stroke="#096DF9"
                  stackId="a"
                />
                <Area
                  dataKey="in_transit_shipments"
                  type="natural"
                  fill="#FBAFAF"
                  fillOpacity={0.4}
                  stroke="#FBAFAF"
                  stackId="a"
                />
              </AreaChart>
            </ChartContainer>
          </ResponsiveContainer>
        )}
      </CardContent>
      {data && (
        <CardFooter>
          <div className="flex w-full items-start justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 font-medium leading-none">
              <Circle className="h-4 w-4 text-[#096DF9] fill-[#096DF9]" />{" "}
              Delivered
            </div>
            <div className="flex items-center gap-2 font-medium leading-none">
              <Circle className="h-4 w-4 text-[#FBAFAF] fill-[#FBAFAF]" /> In
              Transit
            </div>
          </div>
        </CardFooter>
      )}

      {error && (
        <div className="flex justify-center items-center">
          <p className="text-destructive text-sm">
            {error.response?.data.message}
          </p>
        </div>
      )}
    </Card>
  );
}
