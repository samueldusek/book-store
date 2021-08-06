const styles = {
  AuthorList: {
    width: "33%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
  },
  heading: {
    marginBottom: "3rem",
  },
  authors: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridAutoRows: "150px",
    columnGap: "20%",
    rowGap: "30px",
  },
};

export default styles;
