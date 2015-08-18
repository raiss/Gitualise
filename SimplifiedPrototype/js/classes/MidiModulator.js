define([], function() {
  var midiAccess, data, callback;

  function init (_callback) {
    callback = _callback;
    // request MIDI access
    if (navigator.requestMIDIAccess) {
      navigator.requestMIDIAccess({
        sysex: false
      }).then(onMIDISuccess, onMIDIFailure);
    } else {
      console.log("No MIDI support in your browser.");
    }
  }

  // midi functions
  function onMIDISuccess(_midiAccess) {
    midiAccess = _midiAccess;
    var inputs = midiAccess.inputs.values();
    // loop over all available inputs and listen for any MIDI input
    for (var input = inputs.next(); input && !input.done; input = inputs.next()) {
        // each time there is a midi message call the onMIDIMessage function
        input.value.onmidimessage = onMIDIMessage;
    }
  }

  function onMIDIFailure(e) {
    // when we get a failed response, run this code
    console.log("No access to MIDI devices or your browser doesn't support WebMIDI API. Please use WebMIDIAPIShim " + e);
  }

  function onMIDIMessage(message) {
    callback(message.data);
    data = message.data; // this gives us our [command/channel, note, velocity] data.
    console.log('MIDI data', data); // MIDI data [144, 63, 73]
  }

  return {
    init: init
  }

});
