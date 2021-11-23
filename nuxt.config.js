import smConfig from './sm.json'
import { getStoriesPaths } from 'slice-machine-ui/helpers/storybook'

if (!smConfig.apiEndpoint) {
    console.warn(
        "Looks like Slice Machine hasn't been bootstraped already.\nCheck the `Getting Started` section of the README file :)"
    )
}

export default {
    target: 'static',
    globalName: 'app',
    features: {
        store: true,
        layouts: true,
        meta: true,
        middleware: true,
        transitions: true,
        deprecations: false,
        validate: false,
        asyncData: true,
        fetch: false,
        clientOnline: true,
        clientPrefetch: true,
        componentAliases: true,
        componentClientOnly: true,
    },
    head: {
        title: 'Home // Kolby Kruger',
        meta: [
            {
                charset: 'utf-8',
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: '',
            },
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico',
            },
        ],
    },
    css: [
        '@/assets/css/vendors/preflight.scss',
        '@/assets/css/style.scss',
        '@/assets/fonts/ogg/ogg.css',
        '@/assets/fonts/tt-commons/tt-commons.css',
    ],
    styleResources: {
        scss: ['@/assets/css/internals.scss'],
    },
    plugins: [
        {
            src: '~/plugins/flickity.js',
            ssr: false,
        },
    ],
    components: true,
    buildModules: ['@nuxt/image'],
    transpile: ['gsap', 'three'],
    modules: [
        '@nuxt/image',
        '@nuxtjs/style-resources',
        [
            '@nuxtjs/prismic',
            {
                endpoint: smConfig.apiEndpoint || '',
                apiOptions: {
                    routes: [
                        {
                            type: 'page',
                            path: '/:uid',
                        },
                    ],
                },
            },
        ],
        ['nuxt-sm'],
    ],
    generate: {
        fallback: true,
    },
    build: {
        transpile: ['vue-slicezone', 'nuxt-sm'],
    },
    storybook: {
        stories: ['~/.slicemachine/assets/**/*.stories.@(js|jsx|ts|tsx|svelte)', '~/assets/css/internals.scss'],
    },
    image: {
        provider: 'prismic',
        prismic: {},
        screens: {
            sm: 600,
            md: 800,
            lg: 1200,
            xl: 1920,
            xxl: 2560,
        },
    },
    loading: '~/components/Loading/Loading.vue',
    pageTransition: {
        name: 'page',
        mode: 'out-in',
    },
    //scrollToTop: true,
    router: {
        middleware: 'pages',
    },
    ignore: [...getStoriesPaths().map(path => path.replace('../', '~/'))],
}
