import * as THREE from 'three'
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
var OrbitControls = require('three-orbit-controls')(THREE)
import { AmbientLight, Camera, WebGLRenderer } from 'three'

export const Canvas = {
    name: 'Canvas',
    data() {
        return {
            pos: {
                x: 0,
                y: 0,
                z: 0
            }
        }
    },
    methods: {},
    mounted() {
        // Definitions
        const canvas = this.$refs.canvas
        const wasabiLink = this.$refs.wasabi
        const scene = new THREE.Scene()

        let vec = new THREE.Vector3()
        let pos = new THREE.Vector3()

        const textureLoader = new THREE.TextureLoader()

        // Images
        // const wasabi = new THREE.MeshBasicMaterial({
        //     map: THREE.ImageUtils.loadTexture('/wasabi.jpg')
        // })
        const wasabi = textureLoader.load('/wasabi.jpg')

        // Materials
        const w = new THREE.MeshBasicMaterial({ map: wasabi })
        w.visible = false
        //w.map.needsUpdate()

        // Shapes
        const plane = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), w)
        plane.overdraw = true
        plane.position.x = 1
        plane.position.y = 1
        //plane.visible = false
        scene.add(plane)

        // // Lighting
        // const ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
        // scene.add(ambientLight)

        // const pointLight = new THREE.PointLight(0xffffff, 0.4)
        // pointLight.position.x = 2
        // pointLight.position.y = 5
        // pointLight.position.z = 4
        // scene.add(pointLight)

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

        wasabiLink.addEventListener('mouseenter', () => {
            w.visible = true
        })
        wasabiLink.addEventListener('mouseleave', () => {
            w.visible = false
        })
        wasabiLink.addEventListener('mousemove', event => {
            vec.set((event.clientX / window.innerWidth) * 2 - 1, (event.clientY / window.innerHeight) * 2 - 1, 0.5)

            console.log(event.clientX / window.innerWidth, event.clientY / window.innerHeight)

            vec.sub(camera.position).normalize()

            plane.position.x = vec.x
            plane.position.y = vec.y + 2
            plane.position.z = vec.z
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
            // sphere.rotation.y = 0.1 * elapsedTime
            // torus.rotation.y = 0.1 * elapsedTime
            // sphere.rotation.x = 0.15 * elapsedTime
            // torus.rotation.x = 0.15 * elapsedTime

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
