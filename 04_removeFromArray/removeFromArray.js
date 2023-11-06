const removeFromArray = function(array, ...value) {
    for(i = 0; i < value.length; i++){
      const index = array.indexOf(value[i]);
      if (index !== -1) {
          array.splice(index, 1);
      }
    }
      return array;
    };


    // function removeFromArray(array, ...args) {
    //   return array.filter(val => !args.includes(val));
    // }
    // Do not edit below this line
    module.exports = removeFromArray;
