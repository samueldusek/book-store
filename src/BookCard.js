import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/BookCardStyles";

function BookCard({ classes, book }) {
  return (
    <div className={classes.BookCard}>
      <div className={classes.box}>
        <img className={classes.image} src={book.cover} alt="Book cover" />
        <div className={classes.text}>
          <h3 className={classes.heading}>{book.title}</h3>
          <Link to={`/authors/${book.author.id}`} className={classes.author}>
            {book.author.name}
          </Link>
          <div className={classes.footer}>
            <div>
              <p className={classes.date}>{book.date_published}</p>
              <p className={classes.isbn}>{book.isbn}</p>
            </div>
            <Link className={classes.link} to={`/books/${book.id}`}>
              MORE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(BookCard);
