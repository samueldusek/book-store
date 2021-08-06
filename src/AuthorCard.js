import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/AuthorCardStyles";

function AuthorCard({ classes, author }) {
  return (
    <div className={classes.AuthorCard}>
      <img src={author.image} alt="Author's image" className={classes.image} />
      <p className={classes.name}>{author.name}</p>
    </div>
  );
}

export default withStyles(styles)(AuthorCard);
