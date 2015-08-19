define([], function() {
  var context;
  var init = function() {
    try {
      //Fix prefixing
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      context = new AudioContext();
    } catch (e) {
      alert('Web Audio API is not supported in this browser');
    }
  }

  var getContext = function () {
    return context;
  }

  return {
    init: init,
    getContext: getContext
  }
});
