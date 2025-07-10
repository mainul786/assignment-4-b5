import { type ColumnDef } from "@tanstack/react-table";

export type TBook = {
  _id: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description: string;
  copies: number;
  available: boolean;
  createdAt: string;
  updatedAt: string;
};

export const getUserColumns = (
  handleEdit: (book: TBook) => void,
  handleDelete: (id: string) => void,
  handleBorrow: (id: string) => void,
  handleBookDetails: (id: string) => void
): ColumnDef<TBook>[] => [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "author",
    header: "Author",
  },
  {
    accessorKey: "genre",
    header: "Genre",
  },
  {
    accessorKey: "isbn",
    header: "ISBN",
  },
  {
    accessorKey: "copies",
    header: "Copies",
  },
  {
    accessorKey: "available",
    header: "Available",
    cell: ({ row }) => (
      <span>{row.original.available ? " true" : "false"}</span>
    ),
  },

  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const book = row.original;

      return (
        <div className="flex gap-2">
          <button
            className="px-2 py-1 text-white bg-blue-500 rounded"
            onClick={() => handleEdit(book)}
          >
            Edit
          </button>
          <button
            className="px-2 py-1 text-white bg-red-500 rounded"
            onClick={() => handleDelete(book._id)}
          >
            Delete
          </button>
          <button
            className="px-2 py-1 text-white bg-green-500 rounded"
            onClick={() => handleBorrow(book._id)}
          >
            Borrow
          </button>
          <button
            className="px-2 py-1 text-white bg-purple-500 rounded"
            onClick={() => handleBookDetails(book._id)}
          >
            Book Details
          </button>
        </div>
      );
    },
  },
];
