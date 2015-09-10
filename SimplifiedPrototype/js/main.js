define(['Scene', 'Node', 'Three', 'orbitControls', 'MidiModulator', 'Translate', 'Utils', 'Tween'], function (Scene, Node, Three, orbitControls, MidiModulator, Translate, Utils, Tween) {


  var globalRandFactor = 0.1;
  var random = Utils.random;

  var modulate = function (midiMessage) {
    // this gives us our [command/channel, note, velocity] data.
    globalRandFactor = midiMessage[2]/1000;

  }
  MidiModulator.init(modulate);

  //set scene up
  Scene.init();

  var addNodes = function (_scene, _nodes) {
    _nodes.forEach(function (node) {
      _scene.add(node.shape);
    });
  }

  var moveNodes = function (_nodes, speed) {
    var translate;

    for (var i = 0; i < _nodes.length; i++) {
      var node = _nodes[i];
      // node.updatePosition();

      translate ={
        x: random(globalRandFactor),
        y: random(globalRandFactor),
        z: random(globalRandFactor)
      };

      var rand = Math.random() * 100;
      if (rand > 95) {
        node.moveTo(node.tween, node.shape, translate, 2000);
      }
    }
  }

  var createRandomShape = function (shape, numberOfShapes) {
    var nodes = [];
    for(var i = 0; i < numberOfShapes; i++) {
      var randomParam = {};
      randomParam.size = {width: .03, height: .03, depth: .03};
      randomParam.translate = {x: random(1), y:random(1), z: random(1)};
      nodes[i] = shape.create(randomParam);
    }

    return nodes;
  }

  var nodes = createRandomShape(Node, 1000);

  addNodes(Scene, nodes);

  setInterval(function () {
    moveNodes(nodes, .03);
  }, 100)

  var index = 0
  var interval = setInterval(function () {
    index++;
    TWEEN.update();
    //globalRandFactor = Math.sin(index/100)/5;
    Scene.render();
  }, 1000/60);
});
