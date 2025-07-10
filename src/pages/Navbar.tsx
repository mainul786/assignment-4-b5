import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center p-3 g-4">
      <Link to={"/books"} className="p-3">
        All Books
      </Link>
      <Link to={"/create-book"} className="p-3">
        Add Book
      </Link>
      <Link to={"/borrow-summary"} className="p-3">
        Borrow Summary
      </Link>
    </div>
  );
};

export default Navbar;
