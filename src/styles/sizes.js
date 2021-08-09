const sizes = {
  xs: "614.98px",
  sm: "767.98px",
  md: "991.98px",
  lg: "1199.98px",
  xl: "1600px",
};

export const getSizeMedia = {
  up() {},
  down(size) {
    // const sizes = {
    //   xs: "614.98px",
    //   sm: "767.98px",
    //   md: "991.98px",
    //   lg: "1199.98px",
    //   xl: "1600px",
    // };
    return `@media (max-width: ${sizes[size]})`;
  },
};

export const getSize = (size) => {
  return sizes[size];
};
