import React from "react";
import { Link } from "react-router-dom";

import { getRandomFromTo } from "./utils";

import { withStyles } from "@material-ui/styles";
import styles from "./styles/Page404Styles";

function Page404({ classes }) {
  return (
    <main className={classes.Page404}>
      <h1 className={classes.heading}>Oops... Error 404 😞</h1>
      <h3 className={classes.subtitle}>
        The page you are looking for does not exist.
      </h3>
      <div className={classes.help}>
        <p>Can we offer you some useful links?</p>
        <nav className={classes.helpLinks}>
          <Link to="/book-store">HOME</Link>
          <Link to={`/book-store/authors/${getRandomFromTo(1, 50)}`}>
            AUTHOR
          </Link>
          <Link to={`/book-store/books/${getRandomFromTo(1, 50)}`}>BOOK</Link>
        </nav>
      </div>
    </main>
  );
}

export default withStyles(styles)(Page404);
