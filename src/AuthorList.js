import React from "react";
import AuthorCard from "./AuthorCard";
import Pagination from "./Pagination";
import Loading from "./Loading";
import { Redirect } from "react-router-dom";

import { useQuery } from "@apollo/client";

import { GET_ALL_AUTHORS } from "./queries";
import authorsImgs from "./authors";

import { withStyles } from "@material-ui/styles";
import styles from "./styles/AuthorListStyles";
import classNames from "classnames";

function AuthorList({ classes, setPage, page, isRow, maxAuthors }) {
  const { loading, error, data } = useQuery(GET_ALL_AUTHORS, {
    variables: { page },
  });

  let authors = {};

  if (!loading) {
    if (error) return <Redirect to="/book-store/error" />;
    authors = data.authors;
  }

  return (
    <section
      className={classNames(classes.AuthorList, {
        [classes.AuthorListRow]: isRow,
      })}
    >
      <h2 className={classes.heading}>
        {isRow ? "Other top autors" : "See our authors"}
      </h2>

      {loading ? (
        <Loading />
      ) : (
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
      )}

      {!isRow && (
        <Pagination setPage={setPage} page={page} isSmall purpose="authors" />
      )}
    </section>
  );
}

export default withStyles(styles)(AuthorList);
