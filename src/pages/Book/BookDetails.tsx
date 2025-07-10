import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useSingleBookQuery } from "@/redux/api/bookApi";
import { useParams } from "react-router";

export function BookDetails() {
  const { id } = useParams();
  const { data, isLoading } = useSingleBookQuery(id);
  if (!data) {
    return <div>Book not found</div>;
  }
  const { title, author, description, genre, isbn, copies } = data?.data;

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <Card className="w-full max-w-sm mx-auto">
      <h1 className="text-4xl text-center">Book Details</h1>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{author}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="p-2 text-md">{description}</p>
        <p className="p-2 text-md">{genre}</p>
        <p className="p-2 text-md">{isbn}</p>
        <p className="p-2 text-md">{copies}</p>
      </CardContent>
    </Card>
  );
}
