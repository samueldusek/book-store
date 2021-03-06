import React from "react";
import BookCard from "./BookCard";

import bookCovers from "./books";

import { withStyles } from "@material-ui/styles";
import styles from "./styles/BookListStyles";
import classNames from "classnames";

function AuthorBookList({ classes, oneCol, authorBooks, author }) {
  const books = authorBooks.map((book, idx) => ({
    ...book,
    cover: bookCovers[(book.id - 1) % 10],
    author: { name: author },
  }));

  const areBooks = books.length === 0 ? false : true;

  return (
    <section
      className={classNames(classes.BookList, {
        [classes.BookListFull]: oneCol,
      })}
    >
      <h2
        className={classNames(classes.heading, {
          [classes.headingOneCol]: oneCol,
        })}
      >
        Author's books
      </h2>
      {areBooks ? (
        <div
          className={classNames(classes.list, { [classes.oneColList]: oneCol })}
        >
          {books.map((book, idx) => (
            <BookCard book={book} key={book.id} />
          ))}
        </div>
      ) : (
        <p className={classes.warning}>
          We do not have any books from <strong>{author}</strong>. <br />
          But our team is working on it!
        </p>
      )}
    </section>
  );
}

export default withStyles(styles)(AuthorBookList);
