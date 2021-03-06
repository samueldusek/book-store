const styles = {
  Pagination: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    listStyleType: "none",
    padding: "0",
    marginTop: "2rem",
    "& button:hover": {
      cursor: "pointer",
      color: "black",
    },
  },
  PaginationSmall: {
    marginTop: "1rem",
    "& button": {
      width: "30px",
      height: "20px",
      margin: "0px 0.1rem",
    },
  },
  btn: {
    width: "40px",
    height: "25px",
    margin: "0px 0.3rem",
    border: "none",
    borderRadius: "15px",
    background: "#f5f5f5",
    color: "grey",
    boxShadow: "-4px -4px 20px #d5d5d5, 4px 4px 20px #ffffff",
    transition: "all 0.4s 0s ease-in-out",
  },
  active: {
    color: "black",
    fontWeight: "bold",
  },
};

export default styles;
