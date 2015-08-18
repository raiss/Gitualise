requirejs.config({
    baseUrl: '',
    paths: {
        // jquery: [
        //     'https://code.jquery.com/jquery-2.1.4.min',
        //     'jsVendor/jquery'
        // ],
        ramda: 'bower_components/ramda/dist/ramda',
        Three: 'bower_components/three.js/three',
        orbitControls: 'vendors/OrbitControls',
        Node: 'js/classes/Node',
        MidiModulator: 'js/classes/MidiModulator',
        AudioEngine: 'js/classes/AudioEngine',
        main: 'js/main'
    },
    shim: {
        orbitControls: {
            deps: ['Three']
        }
      }

});

require(['main']);
