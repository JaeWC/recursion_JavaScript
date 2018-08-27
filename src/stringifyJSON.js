// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'string') {
    return '"' + String(obj) + '"';
  } else if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    return String(obj); 
  }

  if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    } else {
      var resultArray = '[' + stringifyJSON(obj[0]);
      for (var i = 1; i < obj.length; i++) {
        if (obj[i] === undefined || typeof obj[i] === 'function' || typeof obj[i] === 'symbol') {
          resultArray += ',' + stringifyJSON(null);
        } else {
          resultArray += ',' + stringifyJSON(obj[i]);
        }
      }
      resultArray += ']';
      return resultArray;
    }
  } else {
      if (Object.keys(obj).length === 0) {
        return '{}';
      } else {
        var resultObject = '{';
        for (var prop in obj) {
          if (obj[prop] === undefined || typeof obj[prop] === 'function' || typeof obj[prop] === 'symbol') {
            delete obj[prop];
            return stringifyJSON(obj);
          } else {
            resultObject += stringifyJSON(prop) + ":" + stringifyJSON(obj[prop]) + ',';
          }
        }
        return resultObject.slice(0, resultObject.length - 1) + '}';
      }
    }

};
