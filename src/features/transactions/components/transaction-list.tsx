import ExportButton from "@/components/export-button";
import Paginator from "@/components/paginator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "react-use";
import useTransactions from "../api/use-transactions";
import { columns } from "../columns";
import { DataTable } from "./data-table";

export default function TransactionList() {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search");

  const [searchInput, setSearchInput] = useState(search || "");
  const [debouncedValue, setDebouncedValue] = useState(search || "");

  // const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const currentFilter = searchParams.get("status") as
    | "in-flow"
    | "out-flow"
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

  const handleFilterClick = (filter: "in-flow" | "out-flow" | null) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    // Update the 'filter' parameter or remove it if filter is null
    if (filter) {
      newSearchParams.set("status", filter);
    } else {
      newSearchParams.delete("status");
    }

    // Update the URL with the new search parameters
    setSearchParams(newSearchParams);
  };

  // const handleDateChange = (range: DateRange | undefined) => {
  //   setDateRange(range);

  //   const newSearchParams = new URLSearchParams(searchParams.toString());

  //   if (range?.from) {
  //     newSearchParams.set("start_date", format(range.from, "yyyy-MM-dd"));
  //   } else {
  //     newSearchParams.delete("start_date");
  //   }

  //   if (range?.to) {
  //     newSearchParams.set("end_date", format(range.to, "yyyy-MM-dd"));
  //   } else {
  //     newSearchParams.delete("end_date");
  //   }

  //   setSearchParams(newSearchParams);
  // };
  const { data: transactions, isLoading, error } = useTransactions();
  return (
    <Card className="shadow-none border-none">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">All Transactions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
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
              onClick={() => handleFilterClick("in-flow")}
              size="sm"
              className={cn(
                "px-6 h-9 bg-transparent text-text shadow-none hover:bg-transparent hover:text-primary  font-semibold",
                currentFilter === "in-flow" &&
                  "bg-[#DCFFEB] text-primary hover:bg-[#DCFFEB] hover:text-primary"
              )}
            >
              In Flow
            </Button>
            <Button
              onClick={() => handleFilterClick("out-flow")}
              size="sm"
              className={cn(
                "px-6 h-9 bg-transparent text-text shadow-none hover:bg-transparent hover:text-primary  font-semibold",
                currentFilter === "out-flow" &&
                  "bg-[#DCFFEB] text-primary hover:bg-[#DCFFEB] hover:text-primary"
              )}
            >
              Out Flow
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

            <ExportButton />
          </div>
        </div>
        {transactions && (
          <>
            <DataTable columns={columns} data={[]} />

            <Paginator pagination={transactions.data.pagination} />
          </>
        )}
      </CardContent>
    </Card>
  );
}
