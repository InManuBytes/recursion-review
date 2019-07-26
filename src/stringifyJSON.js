// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // if number use String()
  if (typeof obj === "number") {
    return String(obj);
  } else if (obj === null) {
    return "null";
  } else if (typeof obj === "boolean") {
    return String(obj);
  } else if (typeof obj === "string") {
    return '"' + obj + '"';
  }
};
