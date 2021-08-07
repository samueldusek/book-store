import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/AuthorCardStyles";

function AuthorCard({ classes, author }) {
  return (
    <div className={classes.AuthorCard}>
      <Link to={`/authors/${author.id}`}>
        <img
          src={author.image}
          alt="Author's image"
          className={classes.image}
        />
        <p className={classes.name}>{author.name}</p>
      </Link>
    </div>
  );
}

export default withStyles(styles)(AuthorCard);
