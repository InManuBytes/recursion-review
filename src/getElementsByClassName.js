// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, element) {
  //console.log("current element: ", element, typeof element);
  //sets the first node to be the document's body
  //can you assign the value of the second argument that is undefined within
  //the function?
  let elementArray = [];
  if (element === undefined) {
    element = document.body;
  }

  if (element.classList) {
    if (element.classList.contains(className)) {
      elementArray.push(element);
    }
  }

  if (element.childNodes.length) {
    for (let i = 0; i < element.childNodes.length; i++) {
      elementArray = elementArray.concat(
        getElementsByClassName(className, element.childNodes[i])
      );
    }
  }
  // recurse(document.body);
  return elementArray;
};
