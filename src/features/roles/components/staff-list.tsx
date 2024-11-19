import Paginator from "@/components/paginator";
import TableLoader from "@/components/table-loader";
import useGetStaffs from "../api/use-get-staffs";
import { columns } from "../columns";
import { DataTable } from "./data-table";

export default function StaffList() {
  const { data, isLoading, error } = useGetStaffs();

  if (isLoading) {
    return <TableLoader />;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center py-4">
        <p className="text-sm text-destructive">
          {error.response?.data.message}
        </p>
      </div>
    );
  }

  if (data) {
    return (
      <>
        <DataTable columns={columns} data={data.data.data} />
        <Paginator pagination={data.data.pagination} />
      </>
    );
  }
}
