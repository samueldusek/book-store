import { getSizeMedia } from "./sizes";

const styles = {
  AuthorPage: {
    flexGrow: 1,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    [getSizeMedia.down("md")]: {
      width: "96%",
      margin: "auto",
    },
    [getSizeMedia.down("sm")]: {
      width: "90%",
    },
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
  authorSection: {
    display: "flex",
    marginBottom: "4rem",
    [getSizeMedia.down("md")]: {
      flexDirection: "column",
      justifyContent: "center",
      marginBottom: "1rem",
    },
  },
  authorInfo: {
    width: "54%",
    marginRight: "2%",
    display: "flex",
    height: "min-content",
    [getSizeMedia.down("md")]: {
      width: "100%",
      marginRight: "0%",
    },
  },
  image: {
    width: "50%",
    maxWidth: "400px",
    filter: "drop-shadow(10px 10px 10px grey)",
  },
  authorInfoText: {
    marginLeft: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  infoHeading: {
    color: "grey",
    margin: "0px",
    marginTop: "1.5rem",
  },
  authorBirthplace: {
    margin: "0.5rem 0px",
  },
  authorData: {
    margin: "0.1rem 0",
  },
  bookList: {
    width: "43%",
    [getSizeMedia.down("md")]: {
      width: "100%",
    },
  },
};

export default styles;
