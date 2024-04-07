export default (date: Date) =>
  date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
  });
