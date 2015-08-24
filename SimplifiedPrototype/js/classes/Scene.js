define(['Three'], function (Three) {
  var scene, camera, ambientLight, directionalLight, renderer;
  var init = function () {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 100 );
    camera.position.z = 20;

    //Ambient light
    ambientLight = new THREE.AmbientLight(0x0200ff);
    scene.add(ambientLight);

    //control
    controls = new THREE.OrbitControls( camera );
    controls.addEventListener( 'change', render );

    // directional lighting
    directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor( 0x99999 );
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild( renderer.domElement );
  }

  var add = function (object) {
    scene.add(object);
  }

  var render = function () {
    renderer.render( scene, camera );
  }

  return {
    init: init,
    add: add,
    render: render
  }

});
