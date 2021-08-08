import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/Page404Styles";
import img from "./images/logo.svg";

function Page404({ classes }) {
  return (
    <main className={classes.Page404}>
      <h1 className={classes.heading}>It looks like you got lost!</h1>
      <div className={classes.main}>
        <p>
          But, do not worry. <br />
          Just click on books bellow.
        </p>
        <Link to="/book-store">
          <img src={img} alt="Books" />
        </Link>
      </div>
    </main>
  );
}

export default withStyles(styles)(Page404);
