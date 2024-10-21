import { columns } from "../columns";
import { DataTable } from "./data-table";

export default function StaffList() {
  return <DataTable columns={columns} data={[]} />;
}
