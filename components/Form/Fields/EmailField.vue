<template>
    <div class="form-field">
        <h2 class="form-section--label">
            {{ field.name }}
            <span v-if="field.required" class="form--required">*</span>
        </h2>
        <label for="firstname" class="visually-hidden">{{ field.name }}</label>
        <input
            type="email"
            :id="field.id"
            :name="field.name"
            :placeholder="field.placeholder"
            autocomplete="off"
            :required="field.required"
            v-model="value"
        />
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
        }
    },
}
</script>

<style lang="scss" scoped></style>
