import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_AUTHORS } from "./queries";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/AuthorListStyles";
import classNames from "classnames";
import authorsImgs from "./authors";
import AuthorCard from "./AuthorCard";
import Pagination from "./Pagination";

function AuthorList({ classes, setPage, page, isRow, maxAuthors }) {
  const { loading, error, data } = useQuery(GET_ALL_AUTHORS, {
    variables: { page },
  });

  if (loading) return <div>Loading</div>;

  const { authors } = data;

  return (
    <div
      className={classNames(classes.AuthorList, {
        [classes.AuthorListRow]: isRow,
      })}
    >
      <h2 className={classes.heading}>
        {isRow ? "Other top autors" : "Top Authors"}
      </h2>
      <div
        className={classNames(classes.authors, {
          [classes.authorsRow]: isRow,
        })}
      >
        {authors.slice(0, maxAuthors).map((author, idx) => (
          <AuthorCard
            key={idx}
            author={{ ...author, image: authorsImgs[(author.id - 1) % 10] }}
          />
        ))}
      </div>
      {!isRow && <Pagination setPage={setPage} isSmall />}
    </div>
  );
}

export default withStyles(styles)(AuthorList);
