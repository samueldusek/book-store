const styles = {
  Navbar: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& a:hover": {
      color: "black",
    },
    "& h2 a": {
      textDecoration: "none",
      color: "grey",
      transition: "all 0.4s 0s ease-in-out",
    },
  },
  heading: { textTransform: "uppercase", letterSpacing: "0.1rem" },
  link: {
    color: "grey",
    letterSpacing: "0.1rem",
    textDecoration: "none",
    transition: "all 0.4s 0s ease-in-out",
  },
};

export default styles;
