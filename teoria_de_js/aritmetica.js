
function cacheFunction(cb) {
    const obj = {}
    return function(arg){
        if(obj.hasOwnProperty(arg)){
           return obj[arg] = cb(arg);
        }
      }
  }

