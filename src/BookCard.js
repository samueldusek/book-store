import React from "react";

function BookCard({ book }) {
  return (
    <div>
      <h2>{book.title}</h2>
      <p>{book.date_published}</p>
      <p>{book.isbn}</p>
    </div>
  );
}

export default BookCard;
