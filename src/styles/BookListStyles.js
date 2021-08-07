import { getSizeMedia } from "./sizes";

const styles = {
  BookList: {
    width: "75%",
    [getSizeMedia.down("md")]: {
      width: "100%",
    },
  },

  heading: {
    marginBottom: "3rem",
    [getSizeMedia.down("md")]: {
      marginBottom: "2rem",
    },
  },
  headingOneCol: {
    [getSizeMedia.down("md")]: {
      margin: "3rem 0 1rem 0",
    },
  },
  list: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridAutoRows: "200px",
    columnGap: "30px",
    rowGap: "40px",
    [getSizeMedia.down("sm")]: {
      columnGap: "10px",
    },
    [getSizeMedia.down("xs")]: {
      gridTemplateColumns: "repeat(1, 1fr)",
      rowGap: "20px",
    },
  },
  oneColList: {
    gridTemplateColumns: "repeat(1, 1fr)",
    [getSizeMedia.down("md")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
      rowGap: "20px",
    },
    [getSizeMedia.down("sm")]: {
      gridTemplateColumns: "repeat(1, 1fr)",
      rowGap: "20px",
    },
  },
  warning: {
    textAlign: "center",
    margin: "0",
    lineHeight: "2rem",
  },
  BookListFull: {
    width: "100%",
  },
};

export default styles;
