define(['Node', 'Three', 'orbitControls', 'MidiModulator'], function (Node, Three, orbitControls, MidiModulator) {
  function render() {
    renderer.render( scene, camera );
  }

  var globalRandFactor = .01;

  var modulate = function (midiMessage) {
    // this gives us our [command/channel, note, velocity] data.
    globalRandFactor = midiMessage[2]/1000;

  }
  MidiModulator.init(modulate)


  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 100 );
  camera.position.z = 20;

  //Ambient light
  var light = new THREE.AmbientLight(0x0200ff);
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
        x: random(globalRandFactor),
        y: random(globalRandFactor),
        z: random(globalRandFactor)
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
      randomParam.size = {width: .03, height: .03, depth: .03};
      randomParam.translate = {x: random(10), y:random(10), z: random(10)};
      nodes[i] = shape.init(randomParam)
    }

    return nodes;
  }

  var nodes = createRandomShape(Node, 2000);

  addNodes(scene, nodes);

  var index = 0
  var interval = setInterval(function () {
    index++;
    moveNodes(nodes, .02);
    //globalRandFactor = Math.sin(index/100)/5;
    render();
  }, 1000/60);
});
