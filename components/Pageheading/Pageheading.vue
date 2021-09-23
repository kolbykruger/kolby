<template>
    <section class="pageheading">
        <div class="container" :data-type="type">
            <div class="pageheading-name" v-if="typeof name == 'object'">
                <h1>{{ name[0].text }}</h1>
            </div>

            <div class="pageheading-name" v-else>
                <h1>{{ name || 'Pageheading' }}</h1>
            </div>
        </div>
    </section>
</template>

<script>
import { gsap } from 'gsap'

export default {
    name: 'pageheading',
    props: {
        name: [String, Object, Array]
    },
    computed: {
        type() {
            return typeof this.name
        },
        letter() {
            const type = this.type
            return type == 'object' ? this.name[0].text.charAt(0) : this.name.charAt(0)
        }
    }
}
</script>

<style lang="scss">
.pageheading {
    position: relative;

    .container {
        padding-top: 10vh;
    }

    &-name {
        clip-path: polygon(-100% 0, 200% 0, 200% 100%, -100% 100%);

        h1 {
            transform: translateY(150%);
            animation: pageheading-in 0.92s cubic-bezier(0.23, 1, 0.32, 1) forwards;
            animation-delay: 0.12s;

            @keyframes pageheading-in {
                0% {
                    transform: translate(0%, 150%) rotate(5deg);
                }
                100% {
                    transform: translate(0%, 0%) rotate(0deg);
                }
            }
        }
    }
}
</style>
