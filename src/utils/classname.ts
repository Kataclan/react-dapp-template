export default (...classes: (string | false | undefined)[]) =>
  classes.filter(Boolean).join(" ");
