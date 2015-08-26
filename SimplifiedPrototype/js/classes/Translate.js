define([], function () {

  var move = function (nodes, translate) {
    getArrayOf(nodes).map(function (node) {
      if (translate) {
        node.translateX(translate.x || 0);
        node.translateY(translate.y || 0);
        node.translateZ(translate.z || 0);
      }
    });
  }

  var getArrayOf = function (obj) {
    if (Object.prototype.toString.call(obj) === '[object Array]') {
      return obj;
    } else {
      return [obj];
    }
  }


  return {
    move: move
  }
});
