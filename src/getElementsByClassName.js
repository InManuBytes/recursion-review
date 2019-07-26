// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  let elementArray = [];
  //console.log("DOC BODY CLASSLIST", document.body.classList);
  function recurse(element) {
    console.log("current element: ", element, typeof element);
    //if (element.classList === undefined) {
    console.log("I'm inside the undefined");
    //return; //will a break statement work?
    //} else
    if (element.classList.contains(className)) {
      elementArray.push(element);
    }
    if (element.childNodes.length) {
      for (let i = 0; i < element.childNodes.length; i++) {
        recurse(element.childNodes[i]);
      }
    }
  }
  // console.log("DOC BODY", document.body.childNodes);
  recurse(document.body);
  return elementArray;
};
