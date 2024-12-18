import ExportButton from "@/components/export-button";
import AllFilter from "@/components/filter";
import Paginator from "@/components/paginator";
import TableLoader from "@/components/table-loader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { columns } from "@/features/shipment/columns";
import { DataTable } from "@/features/shipment/components/data-table";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "react-use";
import useShipments from "../api/useShipments";

export default function ShipmentList({ user_id }: { user_id?: string }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search");

  const [searchInput, setSearchInput] = useState(search || "");
  const [debouncedValue, setDebouncedValue] = useState(search || "");

  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const currentFilter = searchParams.get("status") as
    | "draft"
    | "confirmed"
    | "in_transit"
    | "delivered"
    | "cancelled"
    | null;
  useDebounce(
    () => {
      setDebouncedValue(searchInput);
      if (searchInput) {
        const newSearchParams = new URLSearchParams(searchParams.toString());
        newSearchParams.set("search", debouncedValue); // Add/update 'search' param
        setSearchParams(newSearchParams);
      } else {
        const newSearchParams = new URLSearchParams(searchParams.toString());
        newSearchParams.delete("search"); // Remove 'search' param if empty
        setSearchParams(newSearchParams);
      }
    },
    1500,
    [searchInput]
  );

  const handleFilterClick = (
    filter:
      | "draft"
      | "confirmed"
      | "in_transit"
      | "delivered"
      | "cancelled"
      | null
  ) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    if (filter) {
      newSearchParams.set("status", filter);
    } else {
      newSearchParams.delete("status");
    }
    setSearchParams(newSearchParams);
  };

  const {
    data: shipments,
    isLoading: shipmentLoading,
    isError: shipmentError,
  } = useShipments({
    page: currentPage,
    limit: 15,
    status: currentFilter,
    search: debouncedValue,
    user_id,
  });
  return (
    <Card className="shadow-none border-none py-2">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-text">
          All Shipments
        </CardTitle>
      </CardHeader>

      <CardContent className="w-full space-y-6 rounded-xl">
        <div className="flex flex-col lg:flex-row md:justify-between gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <Button
              onClick={() => handleFilterClick(null)}
              size="sm"
              className={cn(
                "px-6 h-9 bg-transparent text-text shadow-none hover:bg-transparent hover:text-primary  font-semibold",
                !currentFilter &&
                  "bg-[#DCFFEB] text-primary hover:bg-[#DCFFEB] hover:text-primary"
              )}
            >
              All
            </Button>
            <Button
              onClick={() => handleFilterClick("confirmed")}
              size="sm"
              className={cn(
                "px-6 h-9 bg-transparent text-text shadow-none hover:bg-transparent hover:text-primary  font-semibold",
                currentFilter === "confirmed" &&
                  "bg-[#DCFFEB] text-primary hover:bg-[#DCFFEB] hover:text-primary"
              )}
            >
              Confirmed
            </Button>
            <Button
              onClick={() => handleFilterClick("draft")}
              size="sm"
              className={cn(
                "px-6 h-9 bg-transparent text-text shadow-none hover:bg-transparent hover:text-primary  font-semibold",
                currentFilter === "draft" &&
                  "bg-[#DCFFEB] text-primary hover:bg-[#DCFFEB] hover:text-primary"
              )}
            >
              Draft
            </Button>
            <Button
              onClick={() => handleFilterClick("in_transit")}
              size="sm"
              className={cn(
                "px-6 h-9 bg-transparent text-text shadow-none hover:bg-transparent hover:text-primary  font-semibold",
                currentFilter === "in_transit" &&
                  "bg-[#DCFFEB] text-primary hover:bg-[#DCFFEB] hover:text-primary"
              )}
            >
              In Transit
            </Button>
            <Button
              onClick={() => handleFilterClick("cancelled")}
              size="sm"
              className={cn(
                "px-6 h-9 bg-transparent text-text shadow-none hover:bg-transparent hover:text-primary  font-semibold",
                currentFilter === "cancelled" &&
                  "bg-[#DCFFEB] text-primary hover:bg-[#DCFFEB] hover:text-primary"
              )}
            >
              Cancelled
            </Button>
            <Button
              onClick={() => handleFilterClick("delivered")}
              size="sm"
              className={cn(
                "px-6 h-9 bg-transparent text-text shadow-none hover:bg-transparent hover:text-primary  font-semibold",
                currentFilter === "delivered" &&
                  "bg-[#DCFFEB] text-primary hover:bg-[#DCFFEB] hover:text-primary"
              )}
            >
              Delivered
            </Button>
          </div>
          <div className="flex items-center gap-4 px-6 w-3/6">
            <div className="relative flex-1">
              <Search className="size-4 absolute left-3 top-1/2 -translate-y-1/2 transform text-muted-foreground" />
              <Input
                value={searchInput || ""}
                onChange={({ currentTarget }) => {
                  setSearchInput(currentTarget.value);
                }}
                className="ps-10 h-9 w-full"
                type="search"
                placeholder="Search"
              />
            </div>
            <AllFilter />
            <ExportButton />
          </div>
        </div>

        {shipmentLoading && <TableLoader />}

        {shipments && (
          <>
            <DataTable columns={columns} data={shipments.data.shipments} />
            <Paginator pagination={shipments.data.pagination} />
          </>
        )}

        {shipmentError && (
          <div className="flex justify-center items-center py-24">
            <p className="text-sm font-medium text-destructive">
              Failed to load shipments
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
