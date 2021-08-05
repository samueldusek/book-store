import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_BOOKS } from "./queries";
import BookCard from "./BookCard";

function BookList() {
  const { loading, error, data } = useQuery(GET_ALL_BOOKS);

  if (loading) return <span>Loading</span>;

  const books = data.author;
  console.log(books);

  return (
    <div>
      <h1>BookList</h1>
      {books.map((book) => (
        <BookCard book={book} key={book.id} />
      ))}
    </div>
  );
}

export default BookList;
