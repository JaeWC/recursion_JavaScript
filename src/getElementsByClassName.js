// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){
  var bodyElement = document.body;
  var classNameList = [];

  var findClassElement = function(element) {
    if (element.classList && element.classList.contains(className)) {
      classNameList.push(element);
    }
   
    if (element.hasChildNodes()) {
      var children = element.childNodes;
      for (var i = 0; i < children.length; i++) {
        findClassElement(children[i]);
      }
    }
  }

  findClassElement(bodyElement)
  
  return classNameList;
  // your code here
};
