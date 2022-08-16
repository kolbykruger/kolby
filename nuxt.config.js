import smConfig from './sm.json'
import { scrollBehavior } from './plugins/route.js'

if (!smConfig.apiEndpoint) {
    console.warn(
        "Looks like Slice Machine hasn't been bootstraped already.\nCheck the `Getting Started` section of the README file :)"
    )
}

export default {
    target: 'static',
    ssr: false,
    globalName: 'app',
    head: {
        title: 'Kolby Kruger  — Web designer and developer in Vermont',
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
                content:
                    'The portfolio of a Web Designer and Developer from Vermont, who designs creative and high impact websites.',
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
        '@/assets/fonts/tt-commons/optimized/tt-commons.css',
        '@/assets/fonts/monolisa/monolisa.css',
    ],
    styleResources: {
        scss: ['@/assets/css/internals.scss'],
    },
    plugins: [
        {
            src: '~/plugins/flickity.js',
            ssr: false,
        },
        {
            src: '~/plugins/gsap.js',
            ssr: false,
        },
    ],
    components: true,
    buildModules: [
        '@nuxt/image',
        '@nuxtjs/svg',
        [
            '@nuxtjs/google-analytics',
            {
                id: 'UA-79905161-1',
            },
        ],
    ],
    transpile: ['gsap'],
    modules: [
        '@nuxt/image',
        '@nuxtjs/sitemap',
        '@nuxtjs/robots',
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
    image: {
        provider: 'prismic',
        prismic: {},
        screens: {
            'phone-small': 375,
            phone: 460,
            'phone-large': 600,
            tablet: 768,
            'laptop-small': 1024,
            laptop: 1200,
            'laptop-large': 1350,
            'desktop-small': 1600,
            desktop: 1920,
            'desktop-large': 2560,
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
        scrollBehavior,
    },
    sitemap: {
        hostname: 'https://kolby.dev',
        gzip: true,
        exclude: ['/reviews', '/no-script', '/slice-simulator', '/thank-you', '/admin/**'],
    },
    robots: {
        UserAgent: '*',
        Disallow: '/thank-you',
        Disallow: '/no-script',
        Disallow: '/reviews',
        Disallow: '/slice-simulator',
        Sitemap: 'https://kolby.dev/sitemap.xml',
    },
}
