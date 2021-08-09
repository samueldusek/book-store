import React from "react";

import { withStyles } from "@material-ui/styles";
import styles from "./styles/AppContainerStyles";

function AppContainer({ classes, children }) {
  return <div className={classes.AppContainer}>{children}</div>;
}

export default withStyles(styles)(AppContainer);
