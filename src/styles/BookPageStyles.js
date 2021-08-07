import { getSize, getSizeMedia } from "./sizes";

const styles = {
  BookPage: {
    flexGrow: 1,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    [getSizeMedia.down("md")]: {
      width: "96%",
      margin: "auto",
    },
    [getSizeMedia.down("sm")]: {
      width: "80%",
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
  main: {
    display: "flex",
    width: "100%",
    [getSizeMedia.down("md")]: {
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  bookInfo: {
    width: "66%",
    height: "min-content",
    display: "flex",
    [getSizeMedia.down("md")]: {
      width: "100%",
      marginBottom: "2rem",
    },
  },
  bookCover: {
    maxWidth: "400px",
    boxShadow: "-8px -8px 28px #d5d5d5, 8px 8px 28px #ffffff",
    borderRadius: "20px",
    [getSizeMedia.down("md")]: {
      width: "50%",
      height: "auto",
    },
    [getSizeMedia.down("sm")]: {
      width: "60%",
      minWidth: "210px",
    },
  },
  bookInfoText: {
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
  authorName: {
    margin: "0.5rem 0px",
  },
  chapterList: {
    margin: "0",
    padding: "0",
    listStyleType: "none",
  },
  chapter: {
    margin: "0.2rem 0",
  },
  bookData: {
    margin: "0.1rem 0",
  },
  bookList: {
    width: "33%",
    [getSizeMedia.down("md")]: {
      width: "100%",
    },
  },
};

export default styles;