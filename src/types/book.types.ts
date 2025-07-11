export type TBook = {
  _id: string;
  title: string;
  author: string;
  genre:
    | "FICTION"
    | "NON_FICTION"
    | "SCIENCE"
    | "HISTORY"
    | "BIOGRAPHY"
    | "FANTASY";
  isbn: string;
  description?: string;
  copies: number;
  available: boolean;
};

export type TBookFormInput = Omit<TBook, "_id" | "createdAt" | "updatedAt">;
export type TBookForm = Omit<TBook, "_id" | "createdAt" | "updatedAt">;
