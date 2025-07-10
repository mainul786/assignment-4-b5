import { useGetBorrowQuery } from "@/redux/api/borrowApi";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default function BorrowData() {
  const { data, isLoading } = useGetBorrowQuery(undefined);

  if (isLoading) {
    return <p>Loading....</p>;
  }
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data?.data} />
    </div>
  );
}
