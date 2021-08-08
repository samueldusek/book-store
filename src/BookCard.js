import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/BookCardStyles";
import { getHumanReadableDate } from "./utils";

function BookCard({ classes, book }) {
  return (
    <div className={classes.BookCard}>
      <div className={classes.box}>
        <img className={classes.image} src={book.cover} alt="Book cover" />
        <div className={classes.text}>
          <h3 className={classes.heading}>
            <Link to={`/book-store/books/${book.id}`}>{book.title}</Link>
          </h3>
          <Link
            to={`/book-store/authors/${book.author.id}`}
            className={classes.author}
          >
            {book.author.name}
          </Link>
          <div className={classes.footer}>
            <div>
              <p className={classes.date}>
                {getHumanReadableDate(book.date_published)}
              </p>
              <p className={classes.isbn}>{book.isbn}</p>
            </div>
            <Link className={classes.link} to={`/book-store/books/${book.id}`}>
              MORE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(BookCard);
