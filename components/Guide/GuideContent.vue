<template>
  <article class="prose max-w-none">
    <h1 class="text-xl">{{ article.title }}</h1>
    <nuxt-content :document="article" ref="body"/>
    <luminous-box></luminous-box>
  </article>
</template>

<script>
export default {
  props: {
    article: {
      required: true
    },
    backButton: {
      default: false
    }
  },
  head() {
    return {
      title: this.article.meta_title ? this.article.meta_title : this.article.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.article.description
        },
        {
          hid: "robots",
          name: "robots",
          content: "all"
        }
      ]
    }
  },
}
</script>

<style lang="scss">
  @media (min-width: 1280px) {
    .prose img {
      width: 120%;
      margin-left: -10%;
      max-width: 100vw;
    }
  }
  .prose img {
    box-shadow: 0px 0px 5px #aaa;
  }
  .prose .standard_image {
    width: auto;
    margin-left: auto;
    margin-right: auto;
  }
  .full-width {
    left: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    max-width: 100vw;
    position: relative;
    right: 50%;
    width: 100vw;
  }
  figcaption {
    @apply mb-8;
  }

</style>