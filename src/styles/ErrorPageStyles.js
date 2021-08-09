import { getSizeMedia } from "./sizes";

const styles = {
  ErrorPage: {
    flexGrow: 1,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: "4.2rem",
    margin: "1rem 0px 3rem 0px",
    textAlign: "center",
    lineHeight: "3.6rem",
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
      textAlign: "center",
      lineHeight: "3rem",
      "& strong": {
        padding: "0.4rem 1rem",
        borderRadius: "12px",
        background: "#f5f5f5",
        boxShadow: "-4px -4px 14px #d5d5d5, 4px 4px 14px #ffffff",
        "& a": {
          color: "inherit",
          textDecoration: "none",
        },
      },
    },
  },
};

export default styles;
