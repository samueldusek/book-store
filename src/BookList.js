import React from "react";
import { Redirect } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ALL_BOOKS } from "./queries";
import BookCard from "./BookCard";
import Pagination from "./Pagination";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/BookListStyles";
import classNames from "classnames";
import bookCovers from "./books";
import Loading from "./Loading";

function BookList({ classes, oneCol, maxBooks, page, setPage }) {
  const { loading, error, data } = useQuery(GET_ALL_BOOKS, {
    variables: { page },
  });

  let books = {};

  if (!loading) {
    if (error) return <Redirect to="/error" />;
    books = data.books;
  }

  const title = oneCol ? "Have you read these?" : "Find your new favorite book";

  return (
    <section
      className={classNames(classes.BookList, {
        [classes.BookListFull]: oneCol,
      })}
    >
      <h2 className={classes.heading}>{title}</h2>

      {loading ? (
        <Loading />
      ) : (
        <div
          className={classNames(classes.list, {
            [classes.oneColList]: oneCol,
          })}
        >
          {books.slice(0, maxBooks).map((book) => (
            <BookCard
              book={{ ...book, cover: bookCovers[(book.id - 1) % 10] }}
              key={book.id}
            />
          ))}
        </div>
      )}

      {!oneCol && <Pagination setPage={setPage} page={page} purpose="books" />}
    </section>
  );
}

export default withStyles(styles)(BookList);
