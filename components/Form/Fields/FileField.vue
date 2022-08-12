<template>
    <div class="form-field">
        <h2 class="form-section--label">
            {{ field.name }}
            <span v-if="field.required" class="form--required">*</span>
        </h2>
        <label :for="field.id" class="visually-hidden">{{ field.name }}</label>
        <input
            type="file"
            :id="field.id"
            :name="field.id"
            autocomplete="off"
            :required="field.required"
            accept="image/*"
            ref="file"
            @change="processFile($event)"
        />
        <span class="form-field--decor"></span>
        <p v-if="field.supporting">
            <small>{{ field.supporting }}</small>
        </p>
    </div>
</template>

<script>
export default {
    props: {
        field: Object,
    },
    methods: {
        processFile(e) {
            //this.$refs.file.value = e.target.files[0]
        },
    },
}
</script>

<style lang="scss" scoped></style>
