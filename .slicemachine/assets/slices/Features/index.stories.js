import MyComponent from '../../../../slices/Features'
import SliceZone from 'vue-slicezone'

export default {
    title: 'slices/Features',
}

export const _DefaultSlice = () => ({
    components: {
        MyComponent,
        SliceZone,
    },
    methods: {
        resolve() {
            return MyComponent
        },
    },
    data() {
        return {
            mock: {
                variation: 'default-slice',
                name: 'Default slice',
                slice_type: 'features',
                items: [
                    {
                        Icon: 'duotone/nut',
                        Title: [{ type: 'heading3', text: 'Implement dynamic niches', spans: [] }],
                        Description: [
                            {
                                type: 'paragraph',
                                text: 'Ex fugiat in voluptate consectetur officia incididunt nisi nulla quis laborum nostrud. Fugiat aliqua Lorem tempor officia dolore commodo do enim elit.',
                                spans: [],
                            },
                        ],
                    },
                    {
                        Icon: 'duotone/nut',
                        Title: [{ type: 'heading3', text: 'Engineer compelling functionalities', spans: [] }],
                        Description: [
                            {
                                type: 'paragraph',
                                text: 'Culpa exercitation ipsum ea dolor ex qui cupidatat laboris officia exercitation aliqua excepteur laborum. Est cillum cillum irure amet nisi sint et ipsum tempor veniam eiusmod eiusmod cillum.',
                                spans: [],
                            },
                        ],
                    },
                    {
                        Icon: 'duotone/nut',
                        Title: [{ type: 'heading3', text: 'Harness strategic e-business', spans: [] }],
                        Description: [
                            {
                                type: 'paragraph',
                                text: 'Cillum officia cillum proident occaecat eiusmod reprehenderit culpa tempor ipsum nulla minim minim reprehenderit. Elit voluptate culpa ut consectetur cupidatat velit cillum aliqua fugiat mollit id. Sunt incididunt cupidatat ut minim aute amet deserunt aliqua commodo ullamco pariatur.',
                                spans: [],
                            },
                        ],
                    },
                    {
                        Icon: 'duotone/nut',
                        Title: [{ type: 'heading3', text: 'Syndicate cutting-edge blockchains', spans: [] }],
                        Description: [
                            {
                                type: 'paragraph',
                                text: 'Adipisicing exercitation ea laboris aute aliquip pariatur mollit.',
                                spans: [],
                            },
                        ],
                    },
                ],
                primary: {
                    title: [{ type: 'heading2', text: 'Incentivize cross-platform methodologies', spans: [] }],
                    description: [
                        {
                            type: 'paragraph',
                            text: 'Culpa voluptate velit in. Ad adipisicing velit id labore eu adipisicing eiusmod aliqua aliquip dolore laboris. Nisi nisi commodo anim ullamco quis fugiat.',
                            spans: [],
                        },
                    ],
                    Alignment: 'Left',
                },
                id: '_DefaultSlice',
            },
        }
    },
    template: '<SliceZone :slices="[mock]" :resolver="resolve" />',
})
_DefaultSlice.storyName = 'Default slice'

export const _FeaturesWithLink = () => ({
    components: {
        MyComponent,
        SliceZone,
    },
    methods: {
        resolve() {
            return MyComponent
        },
    },
    data() {
        return {
            mock: {
                variation: 'featuresWithLink',
                name: 'Features - with Link',
                slice_type: 'features',
                items: [
                    {
                        Icon: 'optimize web-enabled e-commerce',
                        Title: [{ type: 'heading3', text: 'Recontextualize extensible functionalities', spans: [] }],
                        Description: [
                            {
                                type: 'paragraph',
                                text: 'Dolor occaecat minim id reprehenderit veniam pariatur sint voluptate aliquip enim ullamco nisi nostrud laboris. Commodo non eu in sint excepteur sint enim. Duis proident laborum anim minim duis est adipisicing exercitation nulla culpa consectetur dolor qui.',
                                spans: [],
                            },
                        ],
                        Relationship: { link_type: 'Web', url: 'http://google.com' },
                    },
                    {
                        Icon: 'reintermediate viral deliverables',
                        Title: [{ type: 'heading3', text: 'Engineer B2C mindshare', spans: [] }],
                        Description: [
                            {
                                type: 'paragraph',
                                text: 'Cupidatat aliqua voluptate sint. Laborum dolore mollit sunt consequat in cupidatat qui.',
                                spans: [],
                            },
                        ],
                        Relationship: { link_type: 'Web', url: 'https://prismic.io' },
                    },
                ],
                primary: {
                    title: [{ type: 'heading2', text: 'Enable clicks-and-mortar infomediaries', spans: [] }],
                    description: [{ type: 'paragraph', text: 'Do enim ipsum duis laborum eiusmod minim.', spans: [] }],
                    Alignment: 'Center',
                },
                id: '_FeaturesWithLink',
            },
        }
    },
    template: '<SliceZone :slices="[mock]" :resolver="resolve" />',
})
_FeaturesWithLink.storyName = 'Features - with Link'
