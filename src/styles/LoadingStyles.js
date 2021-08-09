import { getSizeMedia } from "./sizes";

const styles = {
  "@keyframes rotation": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
  Loading: {
    flexGrow: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    borderTop: "4px solid black",
    borderRight: "4px solid transparent",
    boxSizing: "border-box",
    animation: "$rotation 1.5s linear infinite",
    "&::after": {
      content: '""',
      boxSizing: "borderBox",
      position: "absolute",
      left: "0",
      top: "0",
      width: "48px",
      height: "48px",
      borderRadius: "50%",
      borderBottom: "4px solid grey",
      borderLeft: "4px solid transparent",
    },
  },
};

export default styles;
