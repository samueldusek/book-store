import { getSizeMedia } from "./sizes";

const styles = {
  Page404: {
    flexGrow: 1,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: "4.2rem",
    margin: "0",
    textAlign: "center",
    [getSizeMedia.down("md")]: {
      fontSize: "3.2rem",
    },
    [getSizeMedia.down("sm")]: {
      fontSize: "2.6rem",
    },
  },
  subtitle: {
    margin: "4rem 0",
    fontSize: "2rem",
    textAlign: "center",
    [getSizeMedia.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  help: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& p": {
      textAlign: "center",
    },
  },
  helpLinks: {
    marginTop: "2rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    "& a": {
      color: "grey",
      letterSpacing: "0.1rem",
      textDecoration: "none",
      transition: "all 0.4s 0s ease-in-out",
      margin: "0.5rem 1.4rem",
    },
    "& a:hover": {
      color: "black",
    },
  },
};

export default styles;
