requirejs.config({
    baseUrl: '',
    paths: {
        // jquery: [
        //     'https://code.jquery.com/jquery-2.1.4.min',
        //     'jsVendor/jquery'
        // ],
        underscore: 'jsVendor/underscore',
        epoch: 'jsVendor/epoch.min',
        backbone: 'jsVendor/backbone',
        socket: '/socket.io/socket.io',
        d3: 'http://d3js.org/d3.v3.min',

        //***jsApp***
        SpeedoMeter: 'jsApp/speedoMeter',
        SignalBar: 'jsApp/signalBar',
        SpeedAnalyser: 'jsApp/speedAnalyser',
        bootStarper: 'jsApp/bootStraper',
        chart: 'jsApp/chart',
        tbCore: "jsApp/TbCore"
    },
    shim: {
        epoch: {
            deps: ['d3']
        },
        tbCore: {
            exports: "TbCore",
            init: function() {
                return TbCoreModule;
            }
        }
    }
});
