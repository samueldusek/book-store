import React, { useState } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/HomePageStyles";
import BookList from "./BookList";
import AuthorList from "./AuthorList";

function HomePage({ classes }) {
  const [bookPage, setBookPage] = useState(1);
  const [authorPage, setAuthorPage] = useState(1);
  return (
    <div className={classes.HomePage}>
      <BookList page={bookPage} setPage={setBookPage} />
      <AuthorList page={authorPage} setPage={setAuthorPage} />
    </div>
  );
}

export default withStyles(styles)(HomePage);
