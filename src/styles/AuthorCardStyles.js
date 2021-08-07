const styles = {
  AuthorCard: {
    marginTop: "1rem",
    "& a": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      transition: "all 0.4s 0s ease-in-out",
      color: "black",
      textDecoration: "none",
    },
    "& a:hover": {
      transform: "scale(1.05)",
      cursor: "pointer",
    },
  },
  image: {
    width: "70px",
    borderRadius: "50%",
    boxShadow: "-8px -8px 28px #d5d5d5, 8px 8px 28px #ffffff",
  },
  name: {
    marginTop: "0.3rem",
    fontSize: "0.9rem",
    textAlign: "center",
  },
};

export default styles;
