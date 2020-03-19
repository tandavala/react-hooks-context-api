import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);

  return (
    <div className="navbar">
      <h1>Tanda's Books Reading List</h1>
      <p>Currenly you have {books.length} books to length through...</p>
    </div>
  );
};

export default Navbar;
