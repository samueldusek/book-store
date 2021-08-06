import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_AUTHORS } from "./queries";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/AuthorListStyles";
import authorsImgs from "./authors";

function AuthorList({ classes }) {
  const { loading, error, data } = useQuery(GET_ALL_AUTHORS);

  if (loading) return <div>Loading</div>;

  const { authors } = data;

  return (
    <div className={classes.AuthorList}>
      <h2 className={classes.heading}>Author List</h2>
      {authors.map((author, idx) => {
        return (
          <>
            <img
              src={authorsImgs[idx]}
              alt="author"
              className={classes.image}
            />
            <p>{author.name}</p>
          </>
        );
      })}
    </div>
  );
}

export default withStyles(styles)(AuthorList);
