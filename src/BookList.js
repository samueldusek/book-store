import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_BOOKS } from "./queries";
import BookCard from "./BookCard";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/BookListStyles";
import bookCovers from "./books";

function BookList({ classes }) {
  const { loading, error, data } = useQuery(GET_ALL_BOOKS);

  if (loading) return <span>Loading</span>;

  const books = data.author;
  console.log(books);

  return (
    <div className={classes.BookList}>
      <h2 className={classes.heading}>Book List</h2>
      <div className={classes.list}>
        {books.map((book, idx) => (
          <BookCard book={{ ...book, cover: bookCovers[idx] }} key={book.id} />
        ))}
      </div>
    </div>
  );
}

export default withStyles(styles)(BookList);
