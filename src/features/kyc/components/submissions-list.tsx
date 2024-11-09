import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Download, Filter, Search } from "lucide-react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "react-use";

import { columns } from "../columns";
import { DataTable } from "./data-table";

export default function SubmissionList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");
  const [searchInput, setSearchInput] = useState(search || "");
  const [debouncedValue, setDebouncedValue] = useState(search || "");
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

  return (
    <Card className="shadow-none border-none">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-2xl font-bold">All Submissions</CardTitle>
        <div className="flex items-center gap-4 px-6 w-3/6">
          <div className="relative flex-1">
            <Search className="size-4 absolute left-3 top-1/2 -translate-y-1/2 transform text-muted-foreground" />
            <Input
              onChange={(e) => setSearchInput(e.target.value)}
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
            <Download className="size-4 " />
            Export
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {/* {isLoading && <TableLoader />}
        {error && (
          <div className="py-4 flex justify-center items-center">
            <p className="text-destructive text-sm ">
              {error.response?.data.message}
            </p>
          </div>
        )} */}
        {/* {data && ( */}
        <>
          <DataTable columns={columns} data={[]} />
          {/* <Paginator pagination={data.data.pagination} /> */}
        </>
        {/* )} */}
      </CardContent>
    </Card>
  );
}
