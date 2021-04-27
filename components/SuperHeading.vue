<template>
  <h1 class="superHeading">{{ title }}<span>{{ subtitle }}</span></h1>
</template>

<script>
export default {
  props: {
    title: {
      default: "Make Money Coding"
    },
    subtitle: {
      default: "(without a job)"
    }
  }
}
</script>

<style lang="scss" scoped>
  .superHeading {
    @apply text-5xl;
    @apply font-semibold;
    position: relative;
    display: inline-block;

    span {
      display: block;
      color: purple;

      @screen sm {
        position: absolute;
        top: 0;
        font-size: 60%;
        right: 0;
        transform: translate(50%, -50%) rotate(4deg);
        font-style: italic;
      }
    }
  }
</style>