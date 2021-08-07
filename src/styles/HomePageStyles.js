import { getSizeMedia } from "./sizes";

const styles = {
  HomePage: {
    flexGrow: 1,
    width: "100%",
    display: "flex",
    [getSizeMedia.down("md")]: {
      flexDirection: "column",
      width: "96%",
      margin: "auto",
    },
    [getSizeMedia.down("sm")]: {
      width: "90%",
    },
  },
};

export default styles;
