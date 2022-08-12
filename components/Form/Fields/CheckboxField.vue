<template>
    <div class="form-fields">
        <h2 class="form-section--label">
            {{ field.name }}
            <span v-if="field.required" class="form--required">*</span>
        </h2>
        <div class="form-field form-field--checkbox" v-for="(option, index) in field.options" :key="index">
            <input :type="field.type" :id="option" :name="field.name" :value="option" v-model="value" />
            <label data-magnetic :for="option">
                <span class="form-field--checkbox-label">{{ option }}</span>
                <span class="form-field--checkbox-icon" v-if="value.includes(option)">
                    <CheckMark />
                </span>
            </label>
        </div>
    </div>
</template>

<script>
import CheckMark from '~/assets/svg/line/check.svg?inline'
export default {
    props: {
        field: Object,
    },
    components: {
        CheckMark,
    },
    data() {
        return {
            value: [],
        }
    },
}
</script>

<style lang="scss" scoped></style>
