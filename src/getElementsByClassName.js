// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){
  var bodyElement = document.body;
  var classNameList = [];

  var findClassElement = function(bodyElement) {
    if (bodyElement.classList && bodyElement.classList.contains(className)) {
      classNameList.push(bodyElement);
    }
   
    if (bodyElement.hasChildNodes()) {
      var children = bodyElement.childNodes;
      for (var i = 0; i < children.length; i++) {
        findClassElement(children[i]);
      }
    }
  }
  findClassElement(bodyElement)
  return classNameList;
  // your code here
};
