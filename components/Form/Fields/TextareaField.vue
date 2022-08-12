<template>
    <div class="form-field">
        <h2 class="form-section--label">
            {{ field.name }}
            <span v-if="field.required" class="form--required">*</span>
        </h2>
        <label for="firstname" class="visually-hidden">{{ field.name }}</label>
        <textarea
            :name="field.name"
            :id="field.id"
            :placeholder="field.placeholder"
            autocomplete="off"
            rows="1"
            maxlength="1000"
            @keyup="updateCharacters"
            v-model="value"
        ></textarea>
        <span class="form-field--decor"></span>
    </div>
</template>

<script>
export default {
    props: {
        field: Object,
    },
    data() {
        return {
            value: '',
            height: 0,
            chars: {
                max: 1000,
                remaining: 1000,
            },
        }
    },
    methods: {
        updateCharacters(e) {
            // this.chars.remaining = this.chars.max - this.value.length
            // if (this.chars.remaining >= this.chars.max) {
            //     e.preventDefault()
            // }
            // this.resizeTextarea(e)
        },
        resizeTextarea(e) {
            // if (this.height < e.target.scrollHeight) {
            //     this.height = e.target.scrollHeight + 2
            //     e.target.style.height = this.height + 'px'
            // }
        },
    },
}
</script>

<style lang="scss" scoped></style>
