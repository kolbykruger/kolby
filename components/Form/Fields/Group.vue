<template>
    <div class="grid grid-col-2 grid-gap-md">
        <div v-for="subfield in field.fields" :key="subfield.id">
            <TextField v-if="subfield.type == 'text'" :field="subfield" />
            <TextareaField v-else-if="subfield.type == 'textarea'" :field="subfield" />
            <PhoneField v-else-if="subfield.type == 'tel'" :field="subfield" />
            <EmailField v-else-if="subfield.type == 'email'" :field="subfield" />
            <CheckboxField v-else-if="subfield.type == 'checkbox'" :field="subfield" />
            <RadioField v-else-if="subfield.type == 'radio'" :field="subfield" />
        </div>
    </div>
</template>

<script>
import TextField from '../Fields/TextField.vue'
import TextareaField from '../Fields/TextareaField.vue'
import PhoneField from '../Fields/PhoneField.vue'
import EmailField from '../Fields/EmailField.vue'
import CheckboxField from '../Fields/CheckboxField.vue'
import RadioField from '../Fields/RadioField.vue'

export default {
    props: {
        field: Object,
    },
    components: {
        TextField,
        TextareaField,
        PhoneField,
        EmailField,
        CheckboxField,
        RadioField,
    },
}
</script>
