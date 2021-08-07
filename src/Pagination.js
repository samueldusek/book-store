import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaginationStyles";
import classNames from "classnames";

function Pagination({ setPage, classes, isSmall, page }) {
  return (
    <ul
      className={classNames(classes.Pagination, {
        [classes.PaginationSmall]: isSmall,
      })}
    >
      <li>
        <button
          className={classNames(classes.btn, {
            [classes.active]: page === 1,
          })}
          onClick={() => setPage(1)}
        >
          1
        </button>
      </li>
      <li>
        <button
          className={classNames(classes.btn, {
            [classes.active]: page === 2,
          })}
          onClick={() => setPage(2)}
        >
          2
        </button>
      </li>
      <li>
        <button
          className={classNames(classes.btn, {
            [classes.active]: page === 3,
          })}
          onClick={() => setPage(3)}
        >
          3
        </button>
      </li>
      <li>
        <button
          className={classNames(classes.btn, {
            [classes.active]: page === 4,
          })}
          onClick={() => setPage(4)}
        >
          4
        </button>
      </li>
      <li>
        <button
          className={classNames(classes.btn, {
            [classes.active]: page === 5,
          })}
          onClick={() => setPage(5)}
        >
          5
        </button>
      </li>
    </ul>
  );
}

export default withStyles(styles)(Pagination);
