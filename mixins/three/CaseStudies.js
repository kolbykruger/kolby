import * as THREE from 'three'

export const CaseStudies = {
    name: 'CaseStudies',
    data() {
        return {}
    },
    methods: {},
    mounted() {
        // Canvas
        const canvas = this.$refs.canvas
        const caseStudies = this.$refs.caseStudies
        const caseStudyItems = caseStudies.querySelectorAll('.case-study-card')
        let offsetTop = caseStudies.getBoundingClientRect().top

        console.log(offsetTop / window.innerHeight)

        // Scene
        const scene = new THREE.Scene()

        // Textures
        const textureLoader = new THREE.TextureLoader()
        const geometry = new THREE.PlaneBufferGeometry(3.4, 3.4, 10, 10)

        // Objects
        const objectsDistance = 4
        // const mesh1 = new THREE.Mesh(new THREE.TorusGeometry(1, 0.4, 16, 60), material)
        // const mesh2 = new THREE.Mesh(new THREE.ConeGeometry(1, 2, 32), material)
        // const mesh3 = new THREE.Mesh(new THREE.TorusKnotGeometry(0.8, 0.35, 100, 16), material)

        const sectionMeshes = []
        for (let i = 0; i < caseStudyItems.length; i++) {
            const image = caseStudyItems[i].querySelector('img')
            const bounds = image.getBoundingClientRect()

            const texture = textureLoader.load(image.src)
            texture.needsUpdate = true
            const material = new THREE.MeshBasicMaterial({ map: texture })
            const mesh = new THREE.Mesh(geometry, material)
            mesh.scale.set(1.0, bounds.height / bounds.width, 1.0)

            mesh.position.x = 1.175
            mesh.position.y = -objectsDistance * i
            sectionMeshes.push(mesh)
            scene.add(mesh)
        }

        // mesh1.position.x = 2
        // mesh2.position.x = -2
        // mesh3.position.x = 2

        // const objectsDistanceWithOffset =
        // mesh1.position.y = -objectsDistance * 0 // 0
        // mesh2.position.y = -objectsDistance * 1 // 4
        // mesh3.position.y = -objectsDistance * 2 // 8

        // Lights
        const directionalLight = new THREE.DirectionalLight('#ffffff', 1)
        directionalLight.position.set(1, 1, 0)
        scene.add(directionalLight)

        // // Particles
        // const particlesCount = 200
        // const positions = new Float32Array(particlesCount * 3)

        // for (let i = 0; i < particlesCount; i++) {
        //     positions[i * 3 + 0] = (Math.random() - 0.5) * 10
        //     positions[i * 3 + 1] = objectsDistance * 0.5 - Math.random() * objectsDistance * sectionMeshes.length
        //     positions[i * 3 + 2] = (Math.random() - 0.5) * 10
        // }

        // const particlesGeometry = new THREE.BufferGeometry()
        // particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

        // // Material
        // const particlesMaterial = new THREE.PointsMaterial({
        //     color: 0x00ff00,
        //     sizeAttenuation: textureLoader,
        //     size: 0.03,
        // })

        // // Points
        // const particles = new THREE.Points(particlesGeometry, particlesMaterial)
        // scene.add(particles)

        // Sizes
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight,
        }

        // Scroll
        let scrollY = window.scrollY - offsetTop
        window.addEventListener('scroll', () => {
            scrollY = window.scrollY - offsetTop
        })

        // Resize
        window.addEventListener('resize', () => {
            // Update sizes
            sizes.width = window.innerWidth
            sizes.height = window.innerHeight
            offsetTop = caseStudies.getBoundingClientRect().top

            // Update scroll
            scrollY = window.scrollY - offsetTop

            // Update camera
            camera.aspect = sizes.width / sizes.height
            camera.updateProjectionMatrix()

            // Update renderer
            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        })

        // Camera
        const cameraGroup = new THREE.Group()
        scene.add(cameraGroup)

        const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100)
        camera.position.z = 6
        cameraGroup.add(camera)

        // Renderer
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true,
            antialias: true,
        })

        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        // Cursor
        // const cursor = {}
        // cursor.x = 0
        // cursor.y = 0

        // window.addEventListener('mousemove', event => {
        //     cursor.x = event.clientX / sizes.width - 0.5
        //     cursor.y = event.clientY / sizes.height - 0.5
        // })

        const clock = new THREE.Clock()
        let previousTime = 0

        // Animate
        const tick = () => {
            const elapsedTime = clock.getElapsedTime()
            const deltaTime = elapsedTime - previousTime
            previousTime = elapsedTime

            // Animate the camera
            camera.position.y = (-scrollY / sizes.height) * objectsDistance

            // const parallaxX = cursor.x * 0.5
            // const parallaxY = -cursor.y * 0.5
            // cameraGroup.position.x += (parallaxX - cameraGroup.position.x) * 5 * deltaTime
            // cameraGroup.position.y += (parallaxY - cameraGroup.position.y) * 5 * deltaTime

            // Renderer
            renderer.render(scene, camera)

            // Callback
            window.requestAnimationFrame(tick)
        }

        tick()
    },
}
