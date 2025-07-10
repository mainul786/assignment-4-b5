import { useDeleteBookMutation, useGetBooksQuery } from "@/redux/api/bookApi";
import { DataTable } from "./data-table";
import { getUserColumns } from "./columns";
import { useNavigate } from "react-router";
import type { TBook } from "@/types/book.types";

const BookPage = () => {
  const { data, isLoading } = useGetBooksQuery("");
  const [deleteBook] = useDeleteBookMutation();
  const navigate = useNavigate();

  const handleEdit = (book: TBook) => {
    navigate(`/edit-book/${book._id}`);
  };

  const handleDelete = async (id: string) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this book."
    );
    if (confirm) {
      try {
        await deleteBook(id);
      } catch (error) {
        console.log("deleted failed", error);
      }
    }
  };

  const handleBorrow = async (id: string) => {
    navigate(`/borrow/${id}`);
  };
  const handleBookDetails = async (id: string) => {
    navigate(`/books/${id}`);
  };

  const columns = getUserColumns(
    handleEdit,
    handleDelete,
    handleBorrow,
    handleBookDetails
  );

  if (isLoading) {
    return <p>Loading....</p>;
  }
  // console.log(data);

  return (
    <div>
      <h2>Book Page</h2>
      <DataTable columns={columns} data={data?.data}></DataTable>
    </div>
  );
};

export default BookPage;
