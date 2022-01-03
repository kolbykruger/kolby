import * as THREE from 'three'
import { gsap } from 'gsap'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// import { vertexShader } from '@/mixins/webgl/shaders/vertexShader.js'
// import { fragmentShader } from '@/mixins/webgl/shaders/fragmentShader.js'
import vertex from 'raw-loader!glslify-loader!./shaders/vertex.glsl'
import fragment from 'raw-loader!glslify-loader!./shaders/fragment.glsl'

export const CaseStudies = {
    name: 'CaseStudies',
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
            images: undefined,
            imageStore: undefined,
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

            // Resize: Images + Position
            this.materials.forEach(material => {
                material.uniforms.uResolution.value.x = this.sizes.width
                material.uniforms.uResolution.value.y = this.sizes.height
            })

            this.imageStore.forEach(img => {
                const bounds = img.img.getBoundingClientRect()

                // Scale the mesh with the updated dimensions
                img.mesh.scale.set(bounds.width, bounds.height, 1)

                img.top = bounds.top + this.scrollPosition.y
                img.left = bounds.left
                img.width = bounds.width
                img.height = bounds.height

                img.mesh.material.uniforms.uQuadSize.value.x = bounds.width
                img.mesh.material.uniforms.uQuadSize.value.y = bounds.height

                img.mesh.material.uniforms.uTextureSize.value.x = bounds.width
                img.mesh.material.uniforms.uTextureSize.value.y = bounds.height
            })
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
                canvas: this.$refs.canvas,
                antialias: true,
                alpha: true,
            })
        },
        createControls() {
            // Controls
            this.controls = new OrbitControls(this.camera, this.renderer.domElement)
        },
        createGeometry() {
            // Objects
            // const geometry = new THREE.BoxGeometry(300, 300, 300)
            this.geometry = new THREE.PlaneBufferGeometry(1, 1, 100, 100)
            // const material = new THREE.MeshNormalMaterial()
            this.uniforms = {
                uTime: {
                    value: 0.0,
                },
                uResolution: {
                    value: new THREE.Vector2(this.sizes.width, this.sizes.height),
                },
                uMouse: {
                    value: new THREE.Vector2(0.5 * window.innerWidth, window.innerHeight).multiplyScalar(
                        window.devicePixelRatio
                    ),
                },
                uTexture: {
                    value: null,
                },
                uTextureSize: {
                    value: new THREE.Vector2(100, 100),
                },
                uQuadSize: {
                    value: new THREE.Vector2(300, 300),
                },
            }
            this.material = new THREE.ShaderMaterial({
                uniforms: this.uniforms,
                vertexShader: vertex,
                fragmentShader: fragment,
            })
        },
        createImages() {
            // Creates and mounts the images to the planes
            const textureLoader = new THREE.TextureLoader()
            this.images = [...document.querySelectorAll('.case-study-card img')]

            this.materials = []
            this.imageStore = this.images.map(img => {
                const bounds = img.getBoundingClientRect()

                const material = this.material.clone()
                this.materials.push(material)

                let texture = textureLoader.load(img.src)
                texture.needsUpdate = true

                material.uniforms.uTexture.value = texture

                // Mouse events
                img.addEventListener('mouseenter', () => {})

                img.addEventListener('mouseleave', () => {})

                img.addEventListener('mousemove', evt => {})

                let mesh = new THREE.Mesh(this.geometry, material)
                this.scene.add(mesh)

                // Scale mesh to size of image
                mesh.scale.set(bounds.width, bounds.height, 1)

                return {
                    img: img,
                    mesh: mesh,
                    width: bounds.width,
                    height: bounds.height,
                    top: bounds.top,
                    left: bounds.left,
                }
            })
        },
        setPosition() {
            // Sets the position for each image within the animation loop
            this.imageStore.forEach(obj => {
                obj.mesh.position.x = obj.left - this.sizes.width / 2 + obj.width / 2
                obj.mesh.position.y = this.scrollPosition.y + -obj.top + this.sizes.height / 2 - obj.height / 2
            })
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

                this.setPosition()

                // Renderer
                this.renderer.render(this.scene, this.camera)

                // Controls
                // this.controls.update()

                // Callback
                window.requestAnimationFrame(tick)
            }

            tick()
        },
    },
    mounted() {
        this.setSizes()
        this.createScene()
        this.createGeometry()
        this.createImages()
        this.createCamera()
        this.createRenderer()
        this.resize()
        // this.createControls()
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
