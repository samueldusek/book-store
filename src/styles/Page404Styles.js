import { getSize, getSizeMedia } from "./sizes";

const styles = {
  Page404: {
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
    flexDirection: "column",
    "& p": {
      lineHeight: "4rem",
      [getSizeMedia.down("sm")]: {
        lineHeight: "2rem",
      },
    },
    "& a": {
      marginTop: "5rem",
      width: "30%",
      minWidth: "200px",
      margin: "auto",
      [getSizeMedia.down("md")]: {
        marginTop: "1rem",
      },
    },
    "& img": {
      width: "100%",
    },
  },
};

export default styles;
