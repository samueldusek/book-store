import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaginationStyles";

function Pagination({ setPage, classes }) {
  return (
    <ul className={classes.Pagination}>
      <li>
        <button onClick={() => setPage(1)}>1</button>
      </li>
      <li>
        <button onClick={() => setPage(2)}>2</button>
      </li>
      <li>
        <button onClick={() => setPage(3)}>3</button>
      </li>
      <li>
        <button onClick={() => setPage(4)}>4</button>
      </li>
      <li>
        <button onClick={() => setPage(5)}>5</button>
      </li>
    </ul>
  );
}

export default withStyles(styles)(Pagination);
