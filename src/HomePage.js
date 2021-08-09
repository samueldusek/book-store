import React, { useState } from "react";
import BookList from "./BookList";
import AuthorList from "./AuthorList";

import { withStyles } from "@material-ui/styles";
import styles from "./styles/HomePageStyles";

function HomePage({ classes }) {
  const [bookPage, setBookPage] = useState(1);
  const [authorPage, setAuthorPage] = useState(1);
  return (
    <main className={classes.HomePage}>
      <BookList page={bookPage} setPage={setBookPage} />
      <AuthorList page={authorPage} setPage={setAuthorPage} />
    </main>
  );
}

export default withStyles(styles)(HomePage);
