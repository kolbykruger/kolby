import * as THREE from 'three'
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
var OrbitControls = require('three-orbit-controls')(THREE)
import { AmbientLight, Camera, WebGLRenderer } from 'three'

export const Canvas = {
    name: 'Canvas',
    data() {
        return {}
    },
    methods: {},
    mounted() {
        // Definitions
        const canvas = this.$refs.canvas
        const scene = new THREE.Scene()

        // Materials
        const sphereMaterial = new THREE.MeshStandardMaterial({
            color: 0xff401e,
            metalness: 0.2,
            roughness: 0.4
        })
        const torusMaterial = new THREE.MeshStandardMaterial({
            color: 0xffdb69,
            metalness: 0.2,
            roughness: 0.4
        })
        // material.metalness = 0.7
        // material.roughness = 0.2

        // Shapes
        const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.5, 128, 128), sphereMaterial)
        sphere.position.x = -1.5

        //const plane = new THREE.Mesh(new THREE.mesh.PlaneGeometry(1, 1, 100, 100), material)
        //plane.geometry.setAttribute('uv2', new THREE.BufferAttribute(plane.geometry.attributes.uv.array, 2))

        const torus = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.2, 128, 256), torusMaterial)
        torus.position.x = 1.5

        scene.add(sphere, torus)

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
        scene.add(ambientLight)

        const pointLight = new THREE.PointLight(0xffffff, 0.4)
        pointLight.position.x = 2
        pointLight.position.y = 5
        pointLight.position.z = 4
        scene.add(pointLight)

        //Sizing
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        }

        window.addEventListener('resize', () => {
            // Update sizes
            sizes.width = window.innerWidth
            sizes.height = window.innerHeight

            // Update camera
            camera.aspect = sizes.width / sizes.height
            camera.updateProjectionMatrix()

            // update renderer
            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        })

        // Camera
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
        camera.position.x = 1
        camera.position.y = 1
        camera.position.z = 3
        scene.add(camera)

        // Controls
        // const controls = new OrbitControls(camera, canvas)
        // controls.enableDamping = true

        // Renderer
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true
        })

        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        renderer.setClearColor(0x000000, 0)

        // Animation
        const clock = new THREE.Clock()

        const tick = () => {
            const elapsedTime = clock.getElapsedTime()

            // Update Objects
            sphere.rotation.y = 0.1 * elapsedTime
            torus.rotation.y = 0.1 * elapsedTime
            sphere.rotation.x = 0.15 * elapsedTime
            torus.rotation.x = 0.15 * elapsedTime

            // Update controls
            //controls.update()

            // Update Renderer
            renderer.render(scene, camera)

            // Loop on tick
            window.requestAnimationFrame(tick)
        }

        tick()
    }
}
