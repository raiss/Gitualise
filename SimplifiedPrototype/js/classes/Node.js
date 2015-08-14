var Node = function (opts) {

  var geometry = new THREE.BoxGeometry( opts.size.width, opts.size.height, opts.size.depth );
  var material = new THREE.MeshLambertMaterial({ color: 'red' });
  var cube = new THREE.Mesh( geometry, material );

  var move = function (obj, translate) {
    if (translate) {
      obj.translateX(translate.x);
      obj.translateY(translate.y);
      obj.translateZ(translate.z);
    }
  }

  if (opts) {
    move(cube, opts.translate);
  }

 return cube
};
