import { getSizeMedia } from "./sizes";

const styles = {
  HomePage: {
    flexGrow: 1,
    width: "100%",
    display: "flex",
    [getSizeMedia.down("md")]: {
      flexDirection: "column",
    },
  },
};

export default styles;
