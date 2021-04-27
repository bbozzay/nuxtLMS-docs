<template>
    <div class="guideCard border-0 rounded-lg max-w-sm">
        <nuxt-link to="/learn/build-fast-websites">
            <h2>Build Fast Websites</h2>
            <p class="mb-6 mt-2">High-performance web-development techniques.</p>
            <div class="guideCard__arrow">Start Here <icon-arrow-right /></div>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    props: {

    }
}
</script>
<style lang="scss">
    $transitionTiming: .25s;
    .guideCard {
        background: #fff;
        color: #000;
        @apply p-8;
        transition: all $transitionTiming ease-in;

        &:hover {
            background: #444;
            color: #fff;
            transition: all $transitionTiming ease-out;

            .arrowRight {
                @apply ml-4;
                transition: all $transitionTiming ease-in;
                path {
                    stroke: #fff;
                }
            }
        }

        &__arrow {
            display: flex;
            align-items: center;
        }
        .arrowRight {
            @apply ml-2;
            transition: all $transitionTiming ease-out;
            path {
                stroke: #000;
            }
        }
    }
</style>