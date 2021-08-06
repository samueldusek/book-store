import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_BOOKS } from "./queries";
import BookCard from "./BookCard";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/BookListStyles";
import classNames from "classnames";
import bookCovers from "./books";
import getRandom1to5 from "./utils";

function BookList({ classes, oneRow, maxBooks }) {
  let page = 1;
  if (oneRow) page = getRandom1to5();
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
        [classes.BookListFull]: oneRow,
      })}
    >
      {!oneRow && <h2 className={classes.heading}>Book List</h2>}
      <div
        className={classNames(classes.list, {
          [classes.oneRowList]: oneRow,
        })}
      >
        {books.slice(0, maxBooks).map((book, idx) => (
          <BookCard book={{ ...book, cover: bookCovers[idx] }} key={book.id} />
        ))}
      </div>
    </div>
  );
}

export default withStyles(styles)(BookList);
