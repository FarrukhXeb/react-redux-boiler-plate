export default (obj) => {
  let valid = true;

  Object.values(obj).forEach(
    // if we have an error string set valid to false
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
};
