export const getRandomFromTo = (from, to) =>
  Math.floor(Math.random() * to) + from;

export const getHumanReadableDate = (date) =>
  new Date(date).toDateString().slice(4, 15);
