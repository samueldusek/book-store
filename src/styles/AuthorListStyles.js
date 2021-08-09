import { getSizeMedia } from "./sizes";

const styles = {
  AuthorList: {
    width: "23%",
    marginLeft: "2%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
    [getSizeMedia.down("md")]: {
      width: "100%",
      marginLeft: "0%",
    },
  },
  heading: {
    marginBottom: "3rem",
    [getSizeMedia.down("md")]: {
      marginBottom: "1rem",
    },
    [getSizeMedia.down("xs")]: {
      alignSelf: "start",
    },
  },
  authors: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridAutoRows: "150px",
    columnGap: "5%",
    rowGap: "30px",
    [getSizeMedia.down("md")]: {
      width: "100%",
      gridTemplateColumns: "repeat(5, 1fr)",
      columnGap: "1%",
      gridAutoRows: "130px",
    },
    [getSizeMedia.down("sm")]: {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    [getSizeMedia.down("xs")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
      rowGap: "15px",
    },
  },
  AuthorListRow: {
    width: "100%",
  },
  authorsRow: {
    width: "100%",
    marginLeft: "0%",
    columnGap: "1%",
    gridTemplateColumns: "repeat(5, 1fr)",
    [getSizeMedia.down("xs")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
      rowGap: "15px",
    },
  },
};

export default styles;
