import TableLoader from "@/components/table-loader";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import useShipments from "../api/useShipments";
import { columns } from "../columns";
import { DataTable } from "./data-table";

export default function RecentShipment() {
  const {
    data: shipments,
    isLoading: shipmentLoading,
    error: shipmentError,
  } = useShipments({
    page: 1,
    limit: 5,
    status: null,
    start_date: undefined,
    end_date: undefined,
    search: "",
  });
  return (
    <Card className="space-y-2 shadow-none border-none">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-2xl font-bold text-text">
          Recent Shipments
        </CardTitle>
        {/* <div className="flex items-center gap-4 px-6 w-1/2">
          <div className="relative flex-1">
            <Search className="size-4 absolute left-3 top-1/2 -translate-y-1/2 transform text-muted-foreground" />
            <Input
              className="ps-10 h-9 w-full"
              type="search"
              placeholder="Search"
            />
          </div>
          <Select defaultValue="week">
            <SelectTrigger className="w-36">
              <Filter className="size-4" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="Month">This Month</SelectItem>
              <SelectItem value="Year">This Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="ghost" className="items-center gap-2">
            <UploadIcon className="size-4 " />
            Export
          </Button>
        </div> */}
      </CardHeader>
      <div className="w-full p-8 space-y-2">
        <div>
          {shipmentLoading && <TableLoader />}
          {shipments && (
            <>
              <div>
                <DataTable columns={columns} data={shipments.data.shipments} />
              </div>
            </>
          )}
          {shipmentError && (
            <div className="flex justify-center items-center py-4">
              <p className="text-sm font-medium text-destructive">
                {shipmentError.response?.data.message}
              </p>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
