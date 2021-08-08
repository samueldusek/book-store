import { getSizeMedia } from "./sizes";

const styles = {
  ErrorPage: {
    flexGrow: 1,
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  heading: {
    fontSize: "4.2rem",
    margin: "1rem 0px 3rem 0px",
    [getSizeMedia.down("md")]: {
      fontSize: "3.2rem",
      marginBottom: "1.5rem",
    },
    [getSizeMedia.down("sm")]: {
      fontSize: "2.6rem",
      marginBottom: "1.2rem",
    },
  },
  main: {
    display: "flex",
    flexDirection: "column",
    "& p": {
      lineHeight: "4rem",
      [getSizeMedia.down("sm")]: {
        lineHeight: "2rem",
      },
    },
  },
};

export default styles;