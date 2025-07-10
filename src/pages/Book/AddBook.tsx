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
import type { TBook } from "@/types/book.types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAddBookMutation } from "@/redux/api/bookApi";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export const AddBook = () => {
  const notify = () => toast.success("Book Added succefully!");
  const [addBook, { isLoading }] = useAddBookMutation();
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      title: "",
      author: "",
      genre: undefined,
      isbn: "",
      description: "",
      copies: 1,
      available: true,
    },
  });

  const onSubmit = async (data: TBook) => {
    await addBook(data).unwrap();
    // console.log(res);
    navigate("/books");
  };
  if (isLoading) {
    return <p>Loading.....</p>;
  }

  return (
    <div className="h-screen grid place-items-center">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-xl">
        <h1 className="text-center text-3xl">Create Book</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Title" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Author</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter author" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="genre"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Genre</FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select genre" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="FICTION">Fiction</SelectItem>
                        <SelectItem value="NON_FICTION">Non-Fiction</SelectItem>
                        <SelectItem value="SCIENCE">Science</SelectItem>
                        <SelectItem value="HISTORY">History</SelectItem>
                        <SelectItem value="BIOGRAPHY">Biography</SelectItem>
                        <SelectItem value="FANTASY">Fantasy</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isbn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Isbn</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Isbn" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter descripton" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="copies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Copies</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter Number of Copies"
                      value={field.value}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="available"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>available</FormLabel>
                  <FormControl>
                    <Select
                      value={field.value ? "true" : "false"}
                      onValueChange={(value) =>
                        field.onChange(value === "true")
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Avaliable" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="true">True</SelectItem>
                        <SelectItem value="false">False</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />

            <DialogFooter className="pt-4">
              <Button type="submit" className="w-full" onClick={notify}>
                Submit
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </div>
    </div>
  );
};
