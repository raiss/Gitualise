define(['ramda'], function (ramda) {
  var random = function (maxNum) {

    var buf = new Uint8Array(1);
    window.crypto.getRandomValues(buf);
    var randNum = buf[0]+1/512;

    //var randNum = (Math.random() * 6.2);
    var sin = Math.sin(randNum);
    // console.log(sin * maxNum);
    return randNum * sin * maxNum/10;
  }

  var add = function (obj, dist) {
    var newVal = {};
    newVal.x =  dist.x;
    newVal.x =  dist.y;
    newVal.x =  dist.z;

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
