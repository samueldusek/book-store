import React from "react";
import AuthorBookList from "./AuthorBookList";
import getRandom1to5 from "./utils";
import { useQuery } from "@apollo/client";
import { GET_AUTHOR } from "./queries";
import { useParams } from "react-router-dom";
import authorsImgs from "./authors";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/AuthorPageStyles";
import AuthorList from "./AuthorList";

function AuthorPage({ classes }) {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_AUTHOR, { variables: { id } });
  if (loading) return <div>Loading...</div>;
  console.log(data);
  const { author } = data;
  const { books } = author;
  return (
    <div className={classes.AuthorPage}>
      <h1 className={classes.heading}>{author.name}</h1>
      <div className={classes.main}>
        <div className={classes.authorInfo}>
          <img
            className={classes.image}
            src={authorsImgs[(id - 1) % 10]}
            alt={`${author.name}'s picture`}
          />
          <div className={classes.authorInfoText}>
            <div className={classes.author}>
              <h4 className={classes.infoHeading}>Birthplace</h4>
              <h2 className={classes.authorBirthplace}>{author.birthplace}</h2>
            </div>
            <div className={classes.data}>
              <h4 className={classes.infoHeading}>Born</h4>
              <h3 className={classes.authorData}>{author.date_of_birth}</h3>
              <h4 className={classes.infoHeading}>Passed</h4>
              <h3 className={classes.authorData}>{author.date_of_death}</h3>
            </div>
          </div>
        </div>
        <div className={classes.bookList}>
          <AuthorBookList oneCol authorBooks={books} author={author.name} />
        </div>
      </div>
      <AuthorList isRow maxAuthors={5} page={getRandom1to5()} />
    </div>
  );
}

export default withStyles(styles)(AuthorPage);
