<template>
  <div class="w-full px-4 text-xl text-gray-800 leading-normal">
    <ul>
      <li v-for="article of articles" :key="article.slug" class="mb-3">
        <NuxtLink :to="article.path" class="p-6 border block border-gray-900 border-solid">
          <span class="underline block text-2xl">{{ article.title }}</span>
          <span>{{ article.description }}</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    articles: {
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .nuxt-link-active {
    @apply border-dashed;
    @apply opacity-75;
  }
</style>