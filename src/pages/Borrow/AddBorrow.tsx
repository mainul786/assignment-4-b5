import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { DialogFooter } from "@/components/ui/dialog";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import type { TBorrow } from "@/types/borrow.types";
import {
  useAddBorrowMutation,
  useGetAllBorrowQuery,
} from "@/redux/api/borrowApi";
import { toast } from "react-toastify";

export const AddBorrow = () => {
  const notify = () => toast.success("Borrow Added succefully!");
  const { data, isLoading } = useGetAllBorrowQuery(undefined);
  const [addBorrow] = useAddBorrowMutation();
  const { bookId } = useParams();
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      book: bookId,
      quantity: 1,
      dueDate: new Date(),
    },
  });
  useEffect(() => {
    if (!isLoading && data?.data) {
      const books = data.data.find((borrow: TBorrow) => borrow.book === bookId);
      if (books) {
        form.reset({
          book: books.book,
          quantity: 1,
          dueDate: new Date(),
        });
      }
    }
  }, [data, bookId, isLoading, form]);

  const onSubmit = async (data: TBorrow) => {
    if (data.quantity === 0) {
      alert("the book is unavailable");
    }
    await addBorrow(data);
    navigate("/borrow-summary");
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-screen grid place-items-center">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-xl">
        <h1 className="text-center text-3xl">Borrow Book</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="book"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>book</FormLabel>
                  <FormControl>
                    <Input placeholder="book" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter Number of Quantity."
                      value={field.value}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dueDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>DueDate</FormLabel>
                  <FormControl>
                    <Input type="date" placeholder="dueDate" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <DialogFooter className="pt-4">
              <Button type="submit" className="w-full" onClick={notify}>
                Add Borrow
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </div>
    </div>
  );
};
