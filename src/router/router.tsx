import App from "@/App";
import { AddBook } from "@/pages/Book/AddBook";

import AllBooks from "@/pages/Book/AllBooks";
import { BookDetails } from "@/pages/Book/BookDetails";

import { UpdateBook } from "@/pages/Book/UpdateBook";
import Borrow from "@/pages/Borrow";
import { AddBorrow } from "@/pages/Borrow/AddBorrow";
import Home from "@/pages/Home";

import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/books",
        Component: AllBooks,
      },
      {
        path: "/create-book",
        Component: AddBook,
      },
      {
        path: "/borrow-summary",
        Component: Borrow,
      },
      {
        path: "/edit-book/:id",
        Component: UpdateBook,
      },
      {
        path: "/borrow/:bookId",
        Component: AddBorrow,
      },
      {
        path: "books/:id",
        Component: BookDetails,
      },
    ],
  },
]);
