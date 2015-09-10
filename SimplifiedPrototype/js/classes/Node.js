define(['Three', 'Translate', 'Tween', 'Utils'], function (Three, Translate, Tween, Utils) {
  "use strict";

  function Node(opts) {
    if (!(this instanceof Node)) {
      throw new TypeError("Node constructor cannot be called as a function.");
    }

    this.opts = opts;
    var cube = createCube(this.opts);
    this.shape = cube.cube;
    this.tween = cube.tween;
    this.moveTo = moveTo;
  }

  Node.create = function (opts) {
    var result = new Node(opts);
    return result;
  };

  Node.prototype = {
    modeTo: moveTo
  };

  function moveTo(tween, shape, destination, duration) {
    //tweenjs: https://github.com/tweenjs/tween.js/blob/master/docs/user_guide.md
    tween
     .to(destination, duration)
     .easing( TWEEN.Easing.Quadratic.InOut )
     .start();
  }
 function createCube(opts) {
   //TODO: error handeling/defaults e.g. opts.size = opts.size || blah;
   var geometry = new THREE.BoxGeometry( opts.size.width, opts.size.height, opts.size.depth );
   var color = opts.color || 'white';
   var material = new THREE.MeshLambertMaterial({ color: color });


   var cube = new THREE.Mesh( geometry, material );
   var tween = new TWEEN.Tween(cube.position);

   return {
    cube: cube,
    tween: tween
   }
 }

 return Node;
});
