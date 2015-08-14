function render() {
  renderer.render( scene, camera );
}

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );
camera.position.z = 20;

//Ambient light
var light = new THREE.AmbientLight(0x02ff44);
scene.add( light );

//control
controls = new THREE.OrbitControls( camera );
controls.addEventListener( 'change', render );

// directional lighting
var directionalLight = new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(1, 1, 1).normalize();
scene.add(directionalLight);

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor( 0x99999 );
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );


var move = function (obj, translate) {
  if (translate) {
    obj.translateX(translate.x);
    obj.translateY(translate.y);
    obj.translateZ(translate.z);
  }
}

var addNodes = function (_scene, _nodes) {
  _nodes.forEach(function (node) {
    _scene.add(node);
  });
}

var moveNodes = function (_nodes, speed) {

  var node;
  var translate;
  for (var i = 0; i < _nodes.length; i++) {
    node = _nodes[i];
    translate ={
      x: random(speed),
      y: random(speed),
      z: random(speed)
    };
    move(node, translate);
  }

}

var random = function (maxNum) {
  var randNum = (Math.random() * 6.2);
  var sin = Math.sin(randNum);
  //console.log(sin);
  return sin*maxNum;
}

var createRandomShape = function (shape, numberOfShapes) {
  var nodes = []
  for(var i = 0; i < numberOfShapes; i++) {
    var randomParam = {};
    randomParam.size = {width: .1, height: .1, depth: .1};
    randomParam.translate = {x: random(10), y:random(10), z: random(10)};
    nodes[i] = shape(randomParam)
  }

  return nodes;
}

var nodes = createRandomShape(Node, 2000);
//
// var node1 = {};
// node1.size = {width: 2, height: 2, depth: 2};
// node1.translate = {x: 5, y:10, z:15};
// var nodes = [Node(node1)];
//
//
// var node2 = {};
// node2.size = {width: 3, height: 1, depth: 1};
// node2.translate = {x: 2, y:-2, z:15};
// nodes[1] = Node(node2);
//
//
//

addNodes(scene, nodes);

var interval = setInterval(function () {
  moveNodes(nodes, .02);
  render();
}, 1000/60);
