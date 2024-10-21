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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Filter, Search } from "lucide-react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "react-use";
import Permissions from "./permissions";
import StaffList from "./staff-list";

export function TeamPermissionsTab() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<"roles" | "permissions">("roles");

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
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-text">
          {activeTab === "roles" ? "All Staffs" : "Permissions"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="roles" className="w-full space-y-6">
          <TabsList className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <TabsTrigger onClick={() => setActiveTab("roles")} value="roles">
                Satff Roles
              </TabsTrigger>
              <TabsTrigger
                onClick={() => setActiveTab("permissions")}
                value="permissions"
              >
                Permissions
              </TabsTrigger>
            </div>
            {activeTab === "roles" && (
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
            )}
          </TabsList>
          <TabsContent value="roles">
            <StaffList />
          </TabsContent>
          <TabsContent value="permissions">
            <Permissions />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
