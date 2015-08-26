define(['ramda'], function (ramda) {
  var random = function (maxNum) {
    var randNum = (Math.random() * 6.2);
    var sin = Math.sin(randNum);
    // console.log(sin * maxNum);
    return sin * maxNum;
  }

  var add = function (obj, dist) {
    var newVal = {};
    newVal.x = (obj.x || 0) + dist.x;
    newVal.x = (obj.y || 0) + dist.y;
    newVal.x = (obj.z || 0) + dist.z;

    return newVal;
  }

  var filterYXZ = function() {
    return R.pipe(
      R.filter(function(key) {
        return key == 'x' || key == 'y' || key == 'z' ? true : false;
      }),
      R.map(function(key) {
        return {
          [key]: val[key]
        }
      }),
      R.mergeAll()
    );
  }

  return {
    random: random,
    add: add,
    filterYXZ: filterYXZ
  }

})
