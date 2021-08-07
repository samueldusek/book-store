import React from "react";
import { useQuery } from "@apollo/client";
import BookCard from "./BookCard";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/BookListStyles";
import classNames from "classnames";
import bookCovers from "./books";

function AuthorBookList({ classes, oneCol, authorBooks, author }) {
  const books = authorBooks.map((book, idx) => ({
    ...book,
    cover: bookCovers[(book.id - 1) % 10],
    author: { name: author },
  }));

  const areBooks = books.length === 0 ? false : true;

  return (
    <div
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
      <div
        className={classNames(classes.list, {
          [classes.oneColList]: oneCol,
        })}
      >
        {areBooks &&
          books.map((book, idx) => <BookCard book={book} key={book.id} />)}
        {!areBooks && (
          <p className={classes.warning}>
            We do not have any books from {author}. <br />
            But our team is working on it!
          </p>
        )}
      </div>
    </div>
  );
}

export default withStyles(styles)(AuthorBookList);
