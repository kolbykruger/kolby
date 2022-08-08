import * as THREE from 'three'
import { gsap } from 'gsap'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import vertex from 'raw-loader!glslify-loader!./shaders/vertex.glsl'
import fragment from 'raw-loader!glslify-loader!./shaders/fragment.glsl'
import vertexParticles from 'raw-loader!glslify-loader!./shaders/vertexParticles.glsl'
import fragmentParticles from 'raw-loader!glslify-loader!./shaders/fragmentParticles.glsl'

export const Canvas = {
    name: 'Canvas',
    // mixins: [vertexShader, fragmentShader],
    data() {
        return {
            sizes: {
                width: 0,
                height: 0,
            },
            scrollPosition: {
                y: 0,
            },
            scene: undefined,
            camera: undefined,
            renderer: undefined,
            controls: undefined,
            geometry: undefined,
            material: undefined,
            texture: undefined,
            uniforms: undefined,
            materials: undefined,
            counter: 0.0,
            particleGeometry: undefined,
            particleMaterial: undefined,
        }
    },
    methods: {
        setSizes() {
            this.sizes.width = window.innerWidth
            this.sizes.height = window.innerHeight
        },
        resize() {
            // Resize: Sizes
            this.setSizes()

            // Resize: Renderer
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
            this.renderer.setSize(this.sizes.width, this.sizes.height)

            // Resize: Camera
            this.camera.fov = (2 * Math.atan(this.sizes.height / 2 / 600) * 180) / Math.PI
            this.camera.aspect = this.sizes.width / this.sizes.height
            this.camera.updateProjectionMatrix()
        },
        createScene() {
            // Scene
            this.scene = new THREE.Scene()
        },
        createCamera() {
            // Camera
            this.camera = new THREE.PerspectiveCamera(30, this.sizes.width / this.sizes.height, 10, 1000)
            this.camera.position.z = 600
            // Camera: set fov relative to the viewport // settings match pixel values
            this.camera.fov = (2 * Math.atan(this.sizes.height / 2 / 600) * 180) / Math.PI
            // Camera: add it to the scene
            this.scene.add(this.camera)
        },
        createRenderer() {
            // Renderer
            this.renderer = new THREE.WebGLRenderer({
                canvas: this.$refs.webgl,
                antialias: true,
                alpha: true,
            })
            // this.renderer.setClearColor(0x111111, 1)
        },
        createControls() {
            // Controls
            this.controls = new OrbitControls(this.camera, this.renderer.domElement)
            this.controls.autoRotate = true
            this.controls.autoRotateSpeed = 1.0
            this.controls.enableDamping = true
        },
        createFog() {
            this.scene.fog = new THREE.FogExp2(0x000000, 0.001)
        },
        createGeometry() {
            const textureLoader = new THREE.TextureLoader()
            // Uniforms
            const color = new THREE.Color('skyblue')

            // HDR
            // const hdrEquirect = new THREE.RGBELoader().load('./src/empty_warehouse_01_2k.hdr', () => {
            //     hdrEquirect.mapping = THREE.EquirectangularReflectionMapping
            // })

            // Normals
            const normalMap = textureLoader.load('/normals/normal.jpg')
            normalMap.wrapS = THREE.RepeatWrapping
            normalMap.wrapT = THREE.RepeatWrapping
            normalMap.repeat.set(1, 1)
            // Objects
            this.geometry = new THREE.IcosahedronGeometry(100, 0)
            this.material = new THREE.MeshPhysicalMaterial({
                transmission: 0.7,
                thickness: 1,
                roughness: 0.2,
                ior: 2,
                sheenColor: 0xff0000,
                // envMap: hdrEquirect,
                // envMapIntensity: 1.5,
                clearcoat: 0.4,
                clearcoatRoughness: 0.4,
                normalScale: new THREE.Vector2(5),
                normalMap: normalMap,
                clearcoatNormalMap: normalMap,
                clearcoatNormalScale: new THREE.Vector2(0.3),
            })
            const mesh = new THREE.Mesh(this.geometry, this.material)
            this.scene.add(mesh)

            // Background
            // const plane = new THREE.PlaneBufferGeometry(1000, 1000)
            // const mat = new THREE.MeshBasicMaterial({
            //     color: 0xffff00,
            // })
            // const mes = new THREE.Mesh(plane, mat)
            // mes.position.z = -100
            // this.scene.add(mes)
        },
        createParticles() {
            const vertices = []

            for (let i = 0; i < 10000; i++) {
                const x = THREE.MathUtils.randFloatSpread(2000)
                const y = THREE.MathUtils.randFloatSpread(2000)
                const z = THREE.MathUtils.randFloatSpread(2000)

                vertices.push(x, y, z)
            }

            this.particleGeometry = new THREE.BufferGeometry()
            this.particleGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))

            const sprite = new THREE.TextureLoader().load('/textures/circle.png')

            this.particleMaterial = new THREE.PointsMaterial({
                size: 8,
                sizeAttenuation: true,
                map: sprite,
                alphaTest: 0.5,
                transparent: true,
                color: 0x181e24,
            })

            const particles = new THREE.Points(this.particleGeometry, this.particleMaterial)

            this.scene.add(particles)
        },

        createLighting() {
            const light = new THREE.DirectionalLight(0xfff0dd, 25)
            const helper = new THREE.DirectionalLightHelper(light, 5)
            light.position.set(0, 200, 0)
            this.scene.add(light)
            this.scene.add(helper)
        },
        animate() {
            // Clock
            const clock = new THREE.Clock()
            let previousTime = 0

            // Animate
            const tick = () => {
                const elapsedTime = clock.getElapsedTime()
                const delta = elapsedTime - previousTime
                previousTime = elapsedTime

                // this.setPosition()

                // Renderer
                this.renderer.render(this.scene, this.camera)

                // Camera
                // this.camera.position.x = -50 * elapsedTime
                // this.camera.lookAt(new THREE.Vector3(0, 0, 0))

                // Controls
                if (this.controls) {
                    this.controls.update()
                }

                // Callback
                window.requestAnimationFrame(tick)
            }

            tick()
        },
    },
    mounted() {
        this.setSizes()
        this.createScene()
        this.createFog()
        // this.createGeometry()
        this.createParticles()
        // this.createLighting()
        this.createCamera()
        this.createRenderer()
        this.resize()
        if (process.env.NODE_ENV == 'development') {
            this.createControls()
        }
        this.animate()

        // Events
        this.renderer.domElement.addEventListener('mousemove', evt => {
            // do something on mousemove
        })

        // })
        window.addEventListener('scroll', () => {
            this.scrollPosition.y = window.pageYOffset
        })

        // Resize
        window.addEventListener('resize', () => {
            this.resize()
        })
    },
}
