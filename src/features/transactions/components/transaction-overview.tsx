import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
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
import { DownloadIcon } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
const chartData = [
  { month: "January", desktop: 1868, mobile: 8021 },
  { month: "February", desktop: 3075, mobile: 2003 },
  { month: "March", desktop: 2357, mobile: 1204 },
  { month: "April", desktop: 7366, mobile: 1905 },
  { month: "May", desktop: 2059, mobile: 1306 },
  { month: "June", desktop: 2145, mobile: 1407 },
  { month: "July", desktop: 3323, mobile: 1228 },
  { month: "August", desktop: 2345, mobile: 1405 },
  { month: "September", desktop: 2147, mobile: 3344 },
  { month: "October", desktop: 4429, mobile: 3423 },
  { month: "November", desktop: 2556, mobile: 3213 },
  { month: "December", desktop: 5664, mobile: 6744 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#FBAFAF",
  },
  mobile: {
    label: "Mobile",
    color: "#24D164",
  },
} satisfies ChartConfig;

export default function TransactionOverview() {
  return (
    <Card className="shadow-none border-none">
      <CardHeader className="flex items-center flex-row justify-between px-12 py-8">
        <CardTitle className="text-2xl font-bold">
          Transaction Overview
        </CardTitle>
        <div className="flex items-center gap-4 px-6">
          <Button variant="ghost" className="items-center gap-2">
            <DownloadIcon className="size-4 " />
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
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <ChartContainer config={chartConfig}>
            <BarChart barSize={15} accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <YAxis tickLine={false} axisLine={false} tickMargin={8} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar
                dataKey="desktop"
                stackId="a"
                fill="var(--color-desktop)"
                radius={[0, 0, 4, 4]}
              />
              <Bar
                dataKey="mobile"
                stackId="a"
                fill="var(--color-mobile)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ChartContainer>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
