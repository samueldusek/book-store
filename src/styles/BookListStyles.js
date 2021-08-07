import { getSize, getSizeMedia } from "./sizes";

const styles = {
  BookList: {
    width: "75%",
    [getSizeMedia.down("md")]: {
      width: "100%",
    },
    [getSizeMedia.down("xs")]: {
      width: "80%",
      margin: "auto",
    },
  },
  BookListFull: {
    width: "100%",
  },
  heading: {
    marginBottom: "3rem",
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
  },
  warning: {
    textAlign: "center",
    margin: "0",
    lineHeight: "2rem",
  },
};

export default styles;
