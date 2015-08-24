define(['Scene', 'Node', 'Three', 'orbitControls', 'MidiModulator'], function (Scene, Node, Three, orbitControls, MidiModulator) {


  var globalRandFactor = .01;

  var modulate = function (midiMessage) {
    // this gives us our [command/channel, note, velocity] data.
    globalRandFactor = midiMessage[2]/1000;

  }
  MidiModulator.init(modulate);

  //set scene up
  Scene.init();

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
      Node.move(node, translate);
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

  addNodes(Scene, nodes);

  var index = 0
  var interval = setInterval(function () {
    index++;
    moveNodes(nodes, .02);
    //globalRandFactor = Math.sin(index/100)/5;
    Scene.render();
  }, 1000/60);
});
