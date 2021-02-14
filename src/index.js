
exports.min = function min (array) {
  if (array !== undefined && array.length !== 0) {
    return Math.min(...array)
  }    
    
  return 0;
}

exports.max = function max (array) {
    if (array !== undefined && array.length !== 0) {
        return Math.max(...array)
    }
     
    return 0; 
}

exports.avg = function avg (array) {
    if (array !== undefined && array.length !== 0) {
        let num = array.reduce((prev, cur) => prev + cur);
        let avgNum = num / array.length;
        return avgNum
    } 
    
    return 0;
}
