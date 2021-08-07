import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_AUTHORS } from "./queries";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/AuthorListStyles";
import authorsImgs from "./authors";
import AuthorCard from "./AuthorCard";
import Pagination from "./Pagination";

function AuthorList({ classes, setPage, page }) {
  const { loading, error, data } = useQuery(GET_ALL_AUTHORS, {
    variables: { page },
  });

  if (loading) return <div>Loading</div>;

  const { authors } = data;

  return (
    <div className={classes.AuthorList}>
      <h2 className={classes.heading}>Top Authors</h2>
      <div className={classes.authors}>
        {authors.map((author, idx) => (
          <AuthorCard
            key={idx}
            author={{ ...author, image: authorsImgs[idx] }}
          />
        ))}
      </div>
      <Pagination setPage={setPage} isSmall />
    </div>
  );
}

export default withStyles(styles)(AuthorList);
