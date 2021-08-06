import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/HomePageStyles";
import BookList from "./BookList";
import AuthorList from "./AuthorList";

function HomePage({ classes }) {
  return (
    <div className={classes.HomePage}>
      <BookList />
      <AuthorList />
    </div>
  );
}

export default withStyles(styles)(HomePage);
