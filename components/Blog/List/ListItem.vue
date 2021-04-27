<template>
  <div class="md:flex">
    <NuxtLink :to="path">
      <div class="mt-4 md:mt-0 md:ml-6">
        <h2>{{ title }}</h2>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
