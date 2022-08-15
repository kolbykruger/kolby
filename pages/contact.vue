<template>
    <main class="page page-contact" id="content">
        <div class="page-contents">
            <slice-zone class="slices" type="contact" uid="contact" />
            <Pageheading name="Get in touch." />
            <section class="contact">
                <div class="container">
                    <h2>Have a project, or want to talk?</h2>
                    <div class="contact-grid">
                        <Form :form="form" v-if="form" />
                        <div class="contact-details">
                            <div class="contact-information-section">
                                <h3>Say hello</h3>
                                <p><a :href="'mailto:' + $store.state.contact.email">hi@kolby.dev</a></p>
                            </div>
                            <div class="contact-information-section">
                                <h3>Social</h3>
                                <p>
                                    <a :href="$store.state.contact.socials.github" target="_blank">Github</a><br />
                                    <a :href="$store.state.contact.socials.linkedin" target="_blank">LinkedIn</a>
                                </p>
                            </div>
                            <div class="contact-information-section">
                                <h3>About</h3>
                                <p>
                                    <nuxt-link to="/about" href="">About</nuxt-link><br />
                                    <nuxt-link to="/insights" href="">Insights</nuxt-link><br />
                                    <nuxt-link to="/resume" href="">Resume</nuxt-link><br />
                                    <nuxt-link to="/work" href="">Work</nuxt-link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>

<script>
import { ContactMeta } from '~/mixins/meta/ContactMeta.js'

import SliceZone from 'vue-slicezone'
import Pageheading from '~/components/Pageheading/Pageheading.vue'
import Send from '~/assets/svg/duotone/send.svg?inline'
import Form from '~/components/Form/Form.vue'

export default {
    components: {
        Pageheading,
        SliceZone,
        Send,
        Form,
    },
    mixins: [ContactMeta],
    async asyncData({ $prismic, params, error }) {
        const document = await $prismic.api.query($prismic.predicates.at('document.type', 'contact'))

        if (document) {
            return { document }
        } else {
            error({ statusCode: 404, message: 'Page not found' })
        }
    },
    data() {
        return {
            form: {
                options: {
                    method: 'POST',
                    honeypot: true,
                    recaptcha: true,
                    button: 'Submit',
                },
                fields: [
                    {
                        name: 'field',
                        type: 'group',
                        columns: 2,
                        fields: [
                            {
                                id: 'first-name',
                                name: 'First name',
                                placeholder: 'Jane',
                                type: 'text',
                                required: true,
                            },
                            {
                                id: 'last-name',
                                name: 'Last name',
                                placeholder: 'Doe',
                                type: 'text',
                                required: true,
                            },
                        ],
                    },
                    {
                        id: 'email',
                        name: 'Email',
                        placeholder: 'janedoe@example.com',
                        type: 'email',
                        required: true,
                    },
                    {
                        id: 'phone',
                        name: 'Phone',
                        placeholder: '(000) 000-0000',
                        type: 'tel',
                        required: false,
                    },
                    {
                        id: 'company',
                        name: 'Company',
                        placeholder: 'Company',
                        type: 'text',
                        required: false,
                    },
                    {
                        id: 'details',
                        name: 'Details',
                        placeholder: '',
                        type: 'textarea',
                        required: true,
                        limit: 1000,
                    },
                    {
                        id: 'services',
                        name: 'What can I help you with?',
                        type: 'checkbox',
                        required: true,
                        options: [
                            'Accessibility',
                            'Consulting',
                            'Website design',
                            'Website development',
                            'UX / UI',
                            'Not sure...',
                        ],
                    },
                    {
                        id: 'budget',
                        name: 'What is your budget?',
                        type: 'radio',
                        required: false,
                        options: ['Less than $5k', '$5k — $10k', 'More than $10k'],
                    },
                    {
                        id: 'source',
                        name: 'Where did you find out about me?',
                        placeholder: '',
                        type: 'text',
                        required: true,
                    },
                ],
            },
        }
    },
}
</script>

<style lang="scss">
.page-contact {
    .artwork {
        display: none;

        @include mq('tablet') {
            display: block;
        }
    }
}
.contact {
    .container {
        > h2 {
            @include fs-xl;
        }
    }
    &-grid {
        display: flex;
        flex-direction: column-reverse;

        @include mq('tablet') {
            display: grid;
            grid-template-columns: 1fr minmax(200px, 20%);
            grid-gap: 3em;
        }
    }

    &-details {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 3em;

        @include mq('tablet') {
            display: block;
        }

        h3 {
            @include fs-lg;
        }

        .contact-information-section:last-of-type {
            display: none;

            @include mq('tablet') {
                display: block;
            }
        }
    }
}
</style>
