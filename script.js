// --- Three.js Soft Floating 3D Geometry Background ---
const canvas = document.getElementById('webgl-canvas');
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Light
const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xe8a8b3, 2);
pointLight.position.set(2, 3, 4);
scene.add(pointLight);

// 3D Floating Mesh
const geometry = new THREE.IcosahedronGeometry(1.5, 0);
const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.2,
    metalness: 0.1,
    wireframe: true
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Mouse Movement Effect
let mouseX = 0;
let mouseY = 0;

window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) - 0.5;
    mouseY = (e.clientY / window.innerHeight) - 0.5;
});

// Render Loop
function animate() {
    requestAnimationFrame(animate);

    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.005;

    // Soft mouse inertia
    mesh.position.x += (mouseX * 2 - mesh.position.x) * 0.05;
    mesh.position.y += (-mouseY * 2 - mesh.position.y) * 0.05;

    renderer.render(scene, camera);
}

animate();

// Window Resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});