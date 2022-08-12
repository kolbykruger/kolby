<template>
    <main class="page" id="content">
        <div class="page-contents">
            <Pageheading name="Contact" />
            <section>
                <div class="container">
                    <Form :form="form" v-if="form" />
                </div>
            </section>
        </div>
    </main>
</template>

<script>
import Pageheading from '~/components/Pageheading/Pageheading.vue'
import Send from '~/assets/svg/duotone/send.svg?inline'
import Form from '~/components/Form/Form.vue'

export default {
    components: {
        Pageheading,
        Send,
        Form,
    },
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
