import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaginationStyles";
import classNames from "classnames";

function Pagination({ setPage, classes, isSmall, page }) {
  const buttons = [];

  for (let idx = 1; idx <= 5; idx++) {
    buttons.push(
      <button
        key={idx}
        className={classNames(classes.btn, {
          [classes.active]: page === idx,
        })}
        onClick={() => setPage(idx)}
      >
        {idx}
      </button>
    );
  }

  return (
    <nav
      className={classNames(classes.Pagination, {
        [classes.PaginationSmall]: isSmall,
      })}
    >
      {buttons}
    </nav>
  );
}

export default withStyles(styles)(Pagination);
