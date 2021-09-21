import smConfig from './sm.json'

if (!smConfig.apiEndpoint) {
    console.warn(
        "Looks like Slice Machine hasn't been bootstraped already.\nCheck the `Getting Started` section of the README file :)"
    )
}

const { getStoriesPaths } = require('slice-machine-ui/helpers/storybook')

export default {
    // Target (https://go.nuxtjs.dev/config-target)
    target: 'static',
    globalName: 'app',
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'Home - Kolby Kruger',
        meta: [
            {
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: ''
            }
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico'
            }
        ]
    },
    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        '@/assets/css/vendors/preflight.scss',
        '@/assets/css/style.scss',
        '@/assets/fonts/ogg/ogg.css',
        '@/assets/fonts/tt-commons/tt-commons.css'
    ],
    styleResources: {
        scss: ['@/assets/css/internals.scss']
    },
    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        { src: '~/plugins/flickity.js', ssr: false }
        // { src: '~/plugins/prism', mode: 'client' }
    ],
    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,
    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: ['@nuxt/image', '@nuxtjs/style-resources'],
    // Transpile
    transpile: ['gsap', 'three'],
    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        '@nuxt/image',
        [
            '@nuxtjs/prismic',
            {
                endpoint: smConfig.apiEndpoint || '',
                apiOptions: {
                    routes: [
                        {
                            type: 'page',
                            path: '/:uid'
                        }
                    ]
                }
            }
        ],
        ['nuxt-sm']
    ],
    generate: {
        fallback: true
    },
    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        transpile: ['vue-slicezone', 'nuxt-sm']
    },
    storybook: {
        stories: [...getStoriesPaths() /*...*/]
    },
    image: {
        provider: 'prismic',
        prismic: {
            //baseURL: 'https://images.unsplash.com'
        },
        screens: {
            sm: 600,
            md: 800,
            lg: 1200,
            xl: 1920,
            xxl: 2560
        }
    },
    loading: '~/components/Loading/Loading.vue',
    // Transitions
    // pageTransition: {
    //     name: 'page',
    //     mode: 'out-in',
    //     beforeEnter(el) {
    //         console.log('Before enter...')
    //     }
    // }
    pageTransition: {
        name: 'page',
        mode: 'out-in'
    },
    scrollToTop: true
}
