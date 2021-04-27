<template>
  <div class="article_content">
    <article class="prose lg:prose-xl max-w-none">
      <h1 class="text-xl">{{ article.title }}</h1>
      <nuxt-content :document="article" ref="body"/>
      <luminous-box></luminous-box>
    </article>
  </div>
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
  }
}
</script>

<style lang="scss">
  article {
    @apply mt-6;
  }
  @media (min-width: 1242px) {
    .prose img {
      width: 120%;
      margin-left: -10%;
      max-width: 100vw;
    }
  }
  .prose .standard_image {
    width: auto;
    margin: 0 auto;
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

</style>