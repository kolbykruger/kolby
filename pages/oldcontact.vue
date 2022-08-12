OLD Contact
<template>
    <main class="page" id="content">
        <div class="page-contents">
            <Pageheading name="Contact" />

            <section>
                <div class="container">
                    <pre><code>{{ form }}</code></pre>
                    <form
                        name="vue-contact"
                        method="post"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        data-netlify-recaptcha="true"
                        class="form"
                    >
                        <input type="hidden" name="form-name" value="vue-contact" />
                        <div class="form-section">
                            <div class="grid grid-col-2 grid-gap-md">
                                <div class="form-field">
                                    <h2 class="form-section--label">First name</h2>
                                    <label for="firstname" class="visually-hidden">First Name</label>
                                    <input
                                        type="text"
                                        id="firstname"
                                        name="firstname"
                                        placeholder="Jane"
                                        autocomplete="off"
                                        required="required"
                                        v-model="form.firstname"
                                    />
                                    <span class="form-field--decor"></span>
                                </div>
                                <div class="form-field">
                                    <h2 class="form-section--label">Last name</h2>
                                    <label for="lastname" class="visually-hidden">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastname"
                                        name="lastname"
                                        placeholder="Doe"
                                        autocomplete="off"
                                        v-model="form.lastname"
                                    />
                                    <span class="form-field--decor"></span>
                                </div>
                            </div>
                        </div>
                        <div class="form-section">
                            <div class="grid grid-col-2 grid-gap-md">
                                <div class="form-field">
                                    <h2 class="form-section--label">Email</h2>
                                    <label for="email" class="visually-hidden">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="janedoe@example.com"
                                        autocomplete="off"
                                        required="required"
                                        v-model="form.email"
                                    />
                                    <span class="form-field--decor"></span>
                                </div>
                                <div class="form-field">
                                    <h2 class="form-section--label">Phone</h2>
                                    <label for="email" class="visually-hidden">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="(000) 000-0000"
                                        autocomplete="off"
                                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                        v-model="form.phone"
                                    />
                                    <span class="form-field--decor"></span>
                                </div>
                            </div>
                        </div>
                        <div class="form-section">
                            <div class="form-field">
                                <h2 class="form-section--label">Company</h2>
                                <label for="company" class="visually-hidden">Company</label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    placeholder="Jane's Spiced Meats"
                                    autocomplete="off"
                                    v-model="form.company"
                                />
                                <span class="form-field--decor"></span>
                            </div>
                        </div>
                        <div class="form-section">
                            <h2 class="form-section--label">Tell me about your project.</h2>
                            <div class="form-field">
                                <label for="details" class="visually-hidden">Tell me about your project.</label>
                                <textarea
                                    name="details"
                                    id="details"
                                    placeholder="My project is..."
                                    autocomplete="off"
                                    rows="1"
                                    maxlength="1000"
                                    @keyup="updateCharacters"
                                    v-model="form.details"
                                ></textarea>
                                <span class="form-field--decor"></span>
                                <p class="form-field--characters">
                                    <small>{{ textarea.characters.remaining }} characters left</small>
                                </p>
                            </div>
                        </div>
                        <div class="form-section">
                            <div class="form-field">
                                <input type="file" name="file" id="file" accept=".doc, .docx, .pdf" />
                                <label for="file">
                                    <h2 class="form-section--label">
                                        <span class="form-section--label-icon"> </span>
                                        Add attachment
                                    </h2>
                                </label>
                            </div>
                        </div>
                        <div class="form-section">
                            <h2 class="form-section--label">What can I do for you?</h2>
                            <div class="form-fields">
                                <div
                                    class="form-field form-field--checkbox"
                                    v-for="(opt, index) in formOptions.services.options"
                                    :key="index"
                                >
                                    <input
                                        :type="formOptions.services.type"
                                        :id="opt"
                                        :name="opt"
                                        :value="opt"
                                        v-model="form.service"
                                    />
                                    <label data-magnetic :for="opt">
                                        <span class="form-field--checkbox-icon"></span>
                                        {{ opt }}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="form-section">
                            <h2 class="form-section--label">What's your budget?</h2>
                            <div class="form-fields">
                                <div
                                    class="form-field form-field--radio"
                                    v-for="(opt, index) in formOptions.budget.options"
                                    :key="index"
                                >
                                    <input
                                        :type="formOptions.budget.type"
                                        :id="opt"
                                        :name="opt"
                                        :value="opt"
                                        v-model="form.budget"
                                    />
                                    <label data-magnetic :for="opt">
                                        <span class="form-field--radio-icon"></span>
                                        {{ opt }}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="form-section">
                            <h2 class="form-section--label">How did you find me?</h2>
                            <div class="form-field">
                                <label for="firstname" class="visually-hidden">How did you find me?</label>
                                <input
                                    type="text"
                                    id="source"
                                    name="source"
                                    placeholder="I found you on..."
                                    autocomplete="off"
                                    required="required"
                                    v-model="form.source"
                                />
                                <span class="form-field--decor"></span>
                            </div>
                        </div>
                        <div class="form-section">
                            <p class="visually-hidden">
                                <label> Don’t fill this out if you’re human: <input name="bot-field" /></label>
                            </p>
                        </div>
                        <div class="form-section">
                            <div class="form-recaptcha">
                                <div data-netlify-recaptcha="true"></div>
                            </div>
                        </div>
                        <div class="form-section">
                            <div class="form-submit">
                                <Button
                                    size="normal"
                                    type="button button-type-inverse"
                                    :magnetic="true"
                                    @click="formSubmit"
                                >
                                    <template #posticon><Send /></template>
                                    Send
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    </main>
</template>

<script>
import Pageheading from '~/components/Pageheading/Pageheading.vue'
import Send from '~/assets/svg/duotone/send.svg?inline'

export default {
    components: {
        Pageheading,
        Send,
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
                firstname: '',
                lastname: '',
                email: '',
                phone: '',
                company: '',
                details: '',
                service: [],
                budget: '',
                source: '',
            },
            formOptions: {
                services: {
                    type: 'checkbox',
                    options: [
                        'Accessibility',
                        'Consulting',
                        'Website design',
                        'Website development',
                        'UX / UI',
                        'Not sure...',
                    ],
                },
                budget: {
                    type: 'radio',
                    options: ['Less than $5k', '$5k — $10k', 'More than $10k'],
                },
            },
            textarea: {
                height: 0,
                characters: {
                    max: 1000,
                    remaining: 1000,
                },
            },
        }
    },
    methods: {
        formSubmit() {
            alert('SUBMITTED FORM')
        },
        updateCharacters(e) {
            this.textarea.characters.remaining = this.textarea.characters.max - this.form.details.length
            if (this.textarea.characters.remaining >= this.textarea.characters.max) {
                e.preventDefault()
            }
            this.resizeTextarea(e)
        },
        resizeTextarea(e) {
            if (this.textarea.height < e.target.scrollHeight) {
                this.textarea.height = e.target.scrollHeight + 2
                e.target.style.height = this.textarea.height + 'px'
            }
        },
    },
}
</script>
