import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/BookCardStyles";

function BookCard({ classes, book }) {
  return (
    <div className={classes.BookCard}>
      <div className={classes.box}>
        <img className={classes.image} src={book.cover} alt="Book cover" />
        <div className={classes.text}>
          <h3 className={classes.heading}>{book.title}</h3>
          <p className={classes.author}>{book.author.name}</p>
          <p className={classes.date}>{book.date_published}</p>
          <p className={classes.isbn}>{book.isbn}</p>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(BookCard);