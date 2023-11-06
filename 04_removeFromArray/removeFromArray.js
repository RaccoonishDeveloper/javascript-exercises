const removeFromArray = function(array, ...value) {
    for(i = 0; i < value.length; i++){
      const index = array.indexOf(value[i]);
      if (index !== -1) {
          array.splice(index, 1);
      }
    }
      return array;
    };
    // Do not edit below this line
    module.exports = removeFromArray;
