import { getSize, getSizeMedia } from "./sizes";

const styles = {
  BookCard: {
    borderRadius: "52px",
    background: "#f5f5f5",
    boxShadow: "-8px -8px 28px #d5d5d5, 8px 8px 28px #ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 1rem 0 1.5rem",
    [getSizeMedia.down("md")]: {
      borderRadius: "32px",
      padding: "0 0.1rem 0 0.3rem",
      boxShadow: "-4px -4px 14px #d5d5d5, 4px 4px 14px #ffffff",
    },
  },
  box: {
    width: "90%",
    height: "140px",
    display: "flex",
    justifyContent: "start",
  },
  image: {
    height: "100%",
    borderRadius: "14px",
    boxShadow: "-4px -4px 28px #d5d5d5, 4px 4px 28px #ffffff",
  },
  text: {
    flexGrow: "1",
    marginLeft: "1rem",
    display: "flex",
    flexDirection: "column",
  },
  heading: {
    margin: "0px",
    marginBottom: "0.3rem",
  },
  author: {
    fontWeight: "bold",
    flexGrow: "1",
    color: "lightgrey",
    margin: "0",
    textDecoration: "none",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "end",
    "& a:hover": {
      color: "black",
    },
  },
  date: {
    margin: "0.4rem 0",
  },
  isbn: {
    margin: "0px",
    color: "lightgrey",
  },
  link: {
    textDecoration: "none",
    letterSpacing: "0.1rem",
    color: "grey",
    borderRadius: "5px",
    transition: "all 0.4s 0s ease-in-out",
  },
};

export default styles;
