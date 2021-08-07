const styles = {
  BookList: {
    width: "66%",
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
