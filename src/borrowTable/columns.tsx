import { type ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export type TBorrow = {
  quantity: number;
  dueDate: Date;
};

export const columns: ColumnDef<TBorrow>[] = [
  {
    accessorKey: "book.title",
    header: "title",
  },
  {
    accessorKey: "totalQuantity",
    header: "Quantity",
  },
  {
    accessorKey: "book.isbn",
    header: "ISBN",
  },
];
