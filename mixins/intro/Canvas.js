import * as THREE from 'three'
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
var OrbitControls = require('three-orbit-controls')(THREE)
import { AmbientLight, Camera, WebGLRenderer } from 'three'
import threeOrbitControls from 'three-orbit-controls'

export const Canvas = {
    name: 'Canvas',
    data() {
        return {
            mouse: {
                x: 0,
                y: 0
            },
            scene: {
                width: 0,
                height: 0,
                halfWidth: 0,
                halfHeight: 0
            }
        }
    },
    methods: {},
    mounted() {
        // Screen
        this.screen = {
            width: window.innerWidth,
            height: window.innerHeight,
            halfWidth: window.innerWidth / 2,
            halfHeight: window.innerHeight / 2
        }

        // Mouse
        window.addEventListener('mousemove', event => {
            this.mouse = {
                x: event.clientX - this.scene.halfWidth,
                y: event.clientY - this.scene.halfHeight
            }
        })

        // Definitions
        const canvas = this.$refs.canvas
        const scene = new THREE.Scene()

        // Materials
        const material = new THREE.MeshStandardMaterial({
            color: 0xdddddd,
            metalness: 0,
            roughness: 1,
            wireframe: false
        })

        material.side = THREE.DoubleSide
        material.color = new THREE.Color(0xf7768e)
        const mat1 = material

        // material.color = new THREE.Color(0xffdb69)
        // const mat2 = material

        // material.color = new THREE.Color(0xb267e6)
        // const mat3 = material

        // material.color = new THREE.Color(0x11c9c3)
        // const mat4 = material

        // material.color = new THREE.Color(0x89ddff)
        // const mat5 = material

        // material.color = new THREE.Color(0x444b6a)
        // const mat6 = material

        // Shapes
        const geo = new THREE.Mesh(new THREE.IcosahedronGeometry(500, 1), mat1)
        const geo1 = geo.clone()
        geo1.position.x = 1000
        const geo2 = geo.clone()
        geo2.position.x = -1000

        // const hemisphere = new THREE.Mesh(
        //     new THREE.SphereBufferGeometry(200, 8, 6, 0, 2 * Math.PI, 0, 0.5 * Math.PI),
        //     mat1
        // )

        // const knot = new THREE.Mesh(new THREE.TorusKnotGeometry(0.25, 0.25, 128, 12, 2, 3), mat1)

        // const cylinder = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 1, 5), cylinderMaterial)
        // cylinder.position.x = 0
        // cylinder.position.y = -0.5

        // const box = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.75, 0.75), boxMaterial)
        // box.position.x = 1
        // box.position.y = -0.5

        // const cone = new THREE.Mesh(new THREE.ConeGeometry(0.5, 1, 32), coneMaterial)
        // cone.position.x = -1
        // cone.position.y = 0.5

        // const semiSphere = new THREE.Mesh(
        //     new THREE.SphereBufferGeometry(0.5, 128, 128, Math.PI / 2, Math.PI * 2, 0, Math.PI),
        //     semisphereMaterial
        // )
        // semiSphere.position.x = 1
        // semiSphere.position.y = 0.5

        // scene.add(sphere, semiSphere, cylinder, cone, box, knot)
        scene.add(geo, geo1, geo2)

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.15)
        scene.add(ambientLight)

        const pointLight = new THREE.PointLight(0xffffff, 0.7)
        pointLight.position.x = 3000
        pointLight.position.y = 6000
        pointLight.position.z = 5000
        scene.add(pointLight)

        window.addEventListener('resize', () => {
            // Update sizes
            this.screen.width = window.innerWidth
            this.screen.height = window.innerHeight

            // Update camera
            camera.aspect = this.screen.width / this.screen.height
            camera.updateProjectionMatrix()

            // update renderer
            renderer.setSize(this.screen.width, this.screen.height)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        })

        // Camera
        const camera = new THREE.PerspectiveCamera(20, this.screen.width / this.screen.height, 1, 10000)
        camera.position.z = 1800
        scene.add(camera)
        console.log(camera.position)

        // Controls
        const controls = new OrbitControls(camera, canvas)
        controls.enableDamping = true

        // Renderer
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true
        })

        renderer.setSize(this.screen.width, this.screen.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        renderer.setClearColor(0x000000, 0)

        // Animation
        const clock = new THREE.Clock()

        const tick = () => {
            const elapsedTime = clock.getElapsedTime()

            // Update Objects
            // sphere.rotation.y = 0.1 * elapsedTime
            // cylinder.rotation.y = 0.1 * elapsedTime
            // semiSphere.rotation.y = 0.1 * elapsedTime
            // cone.rotation.y = 0.1 * elapsedTime
            // box.rotation.y = 0.1 * elapsedTime
            // knot.rotation.y = 0.1 * elapsedTime

            // sphere.rotation.x = 0.15 * elapsedTime
            // cylinder.rotation.x = 0.15 * elapsedTime
            // semiSphere.rotation.x = 0.15 * elapsedTime
            // cone.rotation.x = 0.15 * elapsedTime
            // box.rotation.x = 0.15 * elapsedTime
            // knot.rotation.x = 0.15 * elapsedTime

            // camera.position.x += (this.mouse.x - camera.position.x) * 0.05
            // camera.position.y += (-this.mouse.y - camera.position.y) * 0.05
            // camera.lookAt(scene.position)

            // console.log(camera.position)

            // Update controls
            controls.update()

            // Update Renderer
            renderer.render(scene, camera)

            // Loop on tick
            window.requestAnimationFrame(tick)
        }

        tick()
    }
}
