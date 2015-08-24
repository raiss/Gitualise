define(['Three'], function () {
  var cube;
  var init = function (_opts) {
    var opts = _opts || {};
    cube = createCube(opts);
    if (opts) {
      move(opts.translate);
    }

   return cube
 }

 var createCube = function (opts) {
   //TODO: error handeling/defaults e.g. opts.size = opts.size || blah;
   var geometry = new THREE.BoxGeometry( opts.size.width, opts.size.height, opts.size.depth );
   var color = opts.color || 'white';
   var material = new THREE.MeshLambertMaterial({ color: color });
   material.wireframe = true;

   var cube = new THREE.Mesh( geometry, material );
   return cube;
 }

 var move = function (node, translate) {
   if (translate) {
     node.translateX(translate.x);
     node.translateY(translate.y);
     node.translateZ(translate.z);
   }
 }

 return {
   init: init,
   move: move
 }
});
