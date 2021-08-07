export const getRandom1to5 = () => Math.floor(Math.random() * 5) + 1;

export const getHumanReadibleDate = (date) =>
  new Date(date).toDateString().slice(4, 15);
