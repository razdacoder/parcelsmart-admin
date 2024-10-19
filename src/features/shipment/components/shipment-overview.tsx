import { Circle, UploadIcon } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

import { Button } from "@/components/ui/button";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
  { month: "July", desktop: 332, mobile: 122 },
  { month: "August", desktop: 234, mobile: 140 },
  { month: "September", desktop: 214, mobile: 334 },
  { month: "October", desktop: 442, mobile: 342 },
  { month: "November", desktop: 255, mobile: 321 },
  { month: "December", desktop: 566, mobile: 67 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#096DF9",
  },
  mobile: {
    label: "Mobile",
    color: "#FBAFAF",
  },
} satisfies ChartConfig;

export function ShipmentOverview() {
  return (
    <Card className=" shadow-none border-none">
      <CardHeader className="flex items-center flex-row justify-between px-12 py-8">
        <CardTitle className="text-2xl font-bold">Shipment Overview</CardTitle>
        <div className="flex items-center gap-4 px-6">
          <Button variant="ghost" className="items-center gap-2">
            <UploadIcon className="size-4 " />
            Export
          </Button>
          <Select defaultValue="week">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="Month">This Month</SelectItem>
              <SelectItem value="Year">This Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="max-h-96">
        <ResponsiveContainer width="100%" height={350}>
          <ChartContainer config={chartConfig}>
            <AreaChart accessibilityLayer data={chartData}>
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
                dataKey="mobile"
                type="natural"
                fill="var(--color-mobile)"
                fillOpacity={0.4}
                stroke="var(--color-mobile)"
                stackId="a"
              />
              <Area
                dataKey="desktop"
                type="natural"
                fill="var(--color-desktop)"
                fillOpacity={0.4}
                stroke="var(--color-desktop)"
                stackId="a"
              />
            </AreaChart>
          </ChartContainer>
        </ResponsiveContainer>
      </CardContent>
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
    </Card>
  );
}
