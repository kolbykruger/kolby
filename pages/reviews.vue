<template>
    <main class="page" id="content">
        <div class="page-contents">
            <Pageheading name="Reviews" />

            <Transition name="list" tag="div">
                <div v-if="!visibility">
                    <section>
                        <div class="container">
                            <p>
                                Some of my clients prefer anonymity. Please email me at
                                <a href="mailto:hi@kolby.dev">hi@kolby.dev</a> to request access to my reviews.
                            </p>
                            <form class="form form-contain" action="POST" @submit.prevent="validate()">
                                <div class="form-section">
                                    <div class="form-field">
                                        <h2 class="form-section--label">
                                            Password
                                            <span class="form--required">*</span>
                                        </h2>
                                        <label for="Password" class="visually-hidden">Password</label>
                                        <input
                                            type="password"
                                            id="Password"
                                            name="Password"
                                            placeholder="**********"
                                            autocomplete="off"
                                            required="true"
                                            v-model="passcode"
                                            minlength="3"
                                        />
                                        <span class="form-field--decor"></span>
                                    </div>
                                    <div class="form-submit">
                                        <Button size="normal" type="button button-type-inverse" :magnetic="true">
                                            Submit
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
                <slice-zone class="slices" type="reviews" uid="reviews" v-if="visibility" />
            </Transition>
        </div>
    </main>
</template>

<script>
import Pageheading from '~/components/Pageheading/Pageheading.vue'
import SliceZone from 'vue-slicezone'

export default {
    components: {
        Pageheading,
        SliceZone,
    },
    async asyncData({ $prismic, params, error }) {
        const document = await $prismic.api.getSingle('reviews')

        if (document) {
            return { document }
        } else {
            error({ statusCode: 404, message: 'Page not found' })
        }
    },
    data() {
        return {
            visibility: false,
            password: 'pineappleonpizza',
            passcode: '',
        }
    },
    methods: {
        validate() {
            this.visibility = this.passcode.toString() == this.password.toString() ? true : false
        },
    },
}
</script>

<style lang="scss">
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>
