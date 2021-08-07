import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_BOOKS } from "./queries";
import BookCard from "./BookCard";
import Pagination from "./Pagination";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/BookListStyles";
import classNames from "classnames";
import bookCovers from "./books";

function BookList({ classes, oneCol, maxBooks, page, setPage }) {
  const { loading, error, data } = useQuery(GET_ALL_BOOKS, {
    variables: { page },
  });

  if (loading) return <span>Loading</span>;

  const { books } = data;
  console.log(books);
  console.log(maxBooks);

  return (
    <div
      className={classNames(classes.BookList, {
        [classes.BookListFull]: oneCol,
      })}
    >
      {!oneCol && (
        <h2 className={classes.heading}>Find your new favourite book</h2>
      )}
      <div
        className={classNames(classes.list, {
          [classes.oneColList]: oneCol,
        })}
      >
        {books.slice(0, maxBooks).map((book, idx) => (
          <BookCard book={{ ...book, cover: bookCovers[idx] }} key={book.id} />
        ))}
      </div>
      {!oneCol && <Pagination setPage={setPage} />}
    </div>
  );
}

export default withStyles(styles)(BookList);
