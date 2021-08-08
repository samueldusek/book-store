import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/ErrorPageStyles";

function ErrorPage({ classes }) {
  return (
    <main className={classes.ErrorPage}>
      <h2 className={classes.heading}>Something went horribly wrong. 😞</h2>
      <div className={classes.main}>
        <p>
          Please, try to refresh the page and if it does not help..
          <br />
          Contact our support team at <br />
          <strong>hisupport@bookstore.com</strong> 📧
          <br />
          Our team is here to help!
        </p>
      </div>
    </main>
  );
}

export default withStyles(styles)(ErrorPage);
