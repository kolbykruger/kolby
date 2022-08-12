<template>
    <form
        name="vue-contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
        enctype="multipart/form-data"
        class="form"
        ref="form"
    >
        <div class="form-section" v-for="(field, index) in form.fields" :key="index">
            <TextField v-if="field.type == 'text'" :field="field" />
            <TextareaField v-if="field.type == 'textarea'" :field="field" />
            <PhoneField v-if="field.type == 'tel'" :field="field" />
            <EmailField v-if="field.type == 'email'" :field="field" />
            <CheckboxField v-if="field.type == 'checkbox'" :field="field" />
            <RadioField v-if="field.type == 'radio'" :field="field" />
            <FileField v-if="field.type == 'file'" :field="field" />
            <Group v-if="field.type == 'group'" :field="field" />
        </div>
        <div class="form-section">
            <div class="form-submit">
                <Button
                    size="normal"
                    type="button button-type-inverse"
                    :magnetic="true"
                    @click.stop.prevent="submit"
                    @clicked.stop.prevent="submit"
                >
                    {{ form.button ? form.button : 'Submit' }}
                    <template #posticon><Send /></template>
                </Button>
            </div>
        </div>
    </form>
</template>

<script>
import TextField from './Fields/TextField.vue'
import TextareaField from './Fields/TextareaField.vue'
import PhoneField from './Fields/PhoneField.vue'
import EmailField from './Fields/EmailField.vue'
import CheckboxField from './Fields/CheckboxField.vue'
import RadioField from './Fields/RadioField.vue'
import FileField from './Fields/FileField.vue'
import Group from './Fields/Group.vue'
import Send from '~/assets/svg/duotone/send.svg?inline'

export default {
    props: {
        form: Object,
    },
    components: {
        TextField,
        TextareaField,
        PhoneField,
        EmailField,
        CheckboxField,
        RadioField,
        FileField,
        Group,
        Send,
    },
    methods: {
        submit(e) {
            e.preventDefault()
            let myForm = this.$refs.form
            let formData = new FormData(myForm)

            fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString(),
            })
                .then(() => {
                    console.log('Form successfully submitted')
                    // console.log('Form contents: ')
                    // for (const [key, value] of formData) {
                    //     console.log(`${key}: ${value}\n`)
                    // }
                    // Form submitted / navigate to thank-you
                    this.$router.push({ path: '/thank-you' })
                })
                .catch(error => alert(error))
        },
    },
}
</script>
