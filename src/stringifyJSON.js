// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === "number") {
    return String(obj);
  } else if (obj === null) {
    return "null";
  } else if (typeof obj === "boolean") {
    return String(obj);
  } else if (typeof obj === "string") {
    return '"' + obj + '"';
  } else if (Array.isArray(obj) && obj.length === 0) {
    return "[]";
  } else if (Array.isArray(obj) && obj.length > 0) {
    let storageArray = [];
    for (let i = 0; i < obj.length; i++) {
      storageArray.push(stringifyJSON(obj[i]));
    }
    return "[" + storageArray.join(",") + "]";
  } else if (typeof obj === "object") {
    if (Object.keys(obj).length === 0) {
      return "{}";
    }
    //array of all the keys

    //if it's not undefined and if it's not a function we'll run our stringify
    let objectKeys = Object.keys(obj);
    //grab the key and concat with a colon and grab the key value and concat
    //and add to empty brackets
    //key value pairs are in commas
    // let object = {key1: value1, key2: value2}
    //stringifyArray ['key1':'value1','key2':'value1']
    let stringifyArray = [];
    for (let i = 0; i < objectKeys.length; i++) {
      //refactoring
      if (
        !(
          typeof objectKeys[i] === "function" ||
          objectKeys[i] === undefined ||
          typeof obj[objectKeys[i]] === "function" ||
          obj[objectKeys[i]] === undefined
        )
      ) {
        stringifyArray.push(
          stringifyJSON(objectKeys[i]) + ":" + stringifyJSON(obj[objectKeys[i]])
        );
      }
    }
    return "{" + stringifyArray.join(",") + "}";
  }
};
