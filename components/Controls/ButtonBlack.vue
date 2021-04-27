<template>
    <a :href="href" :class="className">
        <slot></slot>
    </a>
</template>

<script>
export default {
    props: {
        href: {
            type: String
        }
    },
    data() {
        return {
            className: "btn inline-block py-2 px-4 no-underline border border-black rounded-sm hover:bg-white hover:text-gray-900 text-white bg-black"
        }
    }
}
</script>