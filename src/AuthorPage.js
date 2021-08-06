import React from "react";
import { useQuery } from "@apollo/client";
import { GET_AUTHOR } from "./queries";
import { useParams } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/AuthorPageStyles";

function AuthorPage({ classes }) {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_AUTHOR, { variables: { id } });
  if (loading) return <div>Loading...</div>;
  console.log(data);
  const { author } = data;
  return (
    <div className={classes.AuthorPage}>
      <h1>{author.name}</h1>
    </div>
  );
}

export default withStyles(styles)(AuthorPage);
