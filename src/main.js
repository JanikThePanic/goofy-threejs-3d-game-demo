import * as THREE from 'three'

// import css
import './style.css'

// 3d styles
var bgColor = new THREE.Color(0xf2ebf7)
var primaryColor = new THREE.Color(0x7b3fe4)
var secondaryColor = new THREE.Color(0xff5186)

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#app'),
  antialias: true
})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// Scene
const scene = new THREE.Scene()
scene.background = bgColor

// Light
const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(2, 2, 5)
scene.add(light)

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
camera.position.z = 3

// Resize handling
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})




// Geometry + Material + Mesh
const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshStandardMaterial({ color: primaryColor })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)


// Animation loop
function animate() {
  requestAnimationFrame(animate)
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  renderer.render(scene, camera)
}

animate()
