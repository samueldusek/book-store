import React from "react";
import { Redirect } from "react-router-dom";
import AuthorBookList from "./AuthorBookList";
import AuthorList from "./AuthorList";
import Loading from "./Loading";

import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { GET_AUTHOR } from "./queries";
import { getRandomFromTo, getHumanReadableDate } from "./utils";
import authorsImgs from "./authors";

import { withStyles } from "@material-ui/styles";
import styles from "./styles/AuthorPageStyles";

function AuthorPage({ classes }) {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_AUTHOR, { variables: { id } });
  let author = {};
  let books = {};
  if (!loading) {
    if (error) return <Redirect to="/book-store/somethingwentwrong" />;
    author = data.author;
    books = author.books;
  }
  return (
    <main className={classes.AuthorPage}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1 className={classes.heading}>{author.name}</h1>
          <section className={classes.authorSection}>
            <div className={classes.authorInfo}>
              <img
                className={classes.image}
                src={authorsImgs[(id - 1) % 10]}
                alt={`${author.name}'s avatar.`}
              />
              <div className={classes.authorInfoText}>
                <div className={classes.author}>
                  <h4 className={classes.infoHeading}>Birthplace</h4>
                  <h2 className={classes.authorBirthplace}>
                    {author.birthplace}
                  </h2>
                </div>
                <div className={classes.data}>
                  <h4 className={classes.infoHeading}>Born</h4>
                  <h3 className={classes.authorData}>
                    {getHumanReadableDate(author.date_of_birth)}
                  </h3>
                  <h4 className={classes.infoHeading}>Passed</h4>
                  <h3 className={classes.authorData}>
                    {getHumanReadableDate(author.date_of_death)}
                  </h3>
                </div>
              </div>
            </div>
            <div className={classes.bookList}>
              <AuthorBookList oneCol authorBooks={books} author={author.name} />
            </div>
          </section>
          <AuthorList isRow maxAuthors={5} page={getRandomFromTo(1, 5)} />
        </>
      )}
    </main>
  );
}

export default withStyles(styles)(AuthorPage);
