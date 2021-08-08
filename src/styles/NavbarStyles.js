import { getSizeMedia } from "./sizes";

const styles = {
  Navbar: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& a:hover": {
      color: "black",
    },
    "& h2 a": {
      textDecoration: "none",
      color: "black",
    },
    [getSizeMedia.down("sm")]: {
      width: "80%",
      margin: "auto",
    },
  },
  link: {
    color: "grey",
    letterSpacing: "0.1rem",
    textDecoration: "none",
    transition: "all 0.4s 0s ease-in-out",
  },
};

export default styles;
