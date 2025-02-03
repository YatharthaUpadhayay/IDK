import * as THREE from "https://cdn.jsdelivr.net/npm/three@latest/build/three.module.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement)

camera.position.z = 30;

// Adding a mesh
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({color:0xffff00});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
scene.background = new THREE(0x00ff00);

// Adding a lights
const light = new THREE.AmbientLight(0x404040, 2);
scene.add(light)

const light2 = new THREE.PointLight( 0xffff00, 250, 100 );
light2.position.set(25,25,25);
scene.add(light2);

function animate() {
    mesh.rotation.x += 0.001;
    mesh.rotation.y += 0.01;
    mesh.rotation.z += 0.02;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
animate();