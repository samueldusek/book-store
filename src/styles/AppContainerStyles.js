import { getSize, getSizeMedia } from "./sizes";

const styles = {
  AppContainer: {
    display: "flex",
    flexDirection: "column",
    maxWidth: getSize("lg"),
    margin: "auto",
    height: "100vh",
    padding: "0 2rem",
    [getSizeMedia.down("lg")]: {
      maxWidth: getSize("md"),
    },
    [getSizeMedia.down("sm")]: {
      padding: "0 0.3rem",
    },
  },
};

export default styles;
