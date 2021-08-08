import { getSize, getSizeMedia } from "./sizes";

const styles = {
  AppContainer: {
    display: "flex",
    flexDirection: "column",
    maxWidth: getSize("lg"),
    margin: "auto",
    height: "100vh",
    width: "98%",
    [getSizeMedia.down("lg")]: {
      maxWidth: getSize("md"),
    },
    [getSizeMedia.down("md")]: {
      width: "92%",
      margin: "auto",
    },
  },
};

export default styles;
