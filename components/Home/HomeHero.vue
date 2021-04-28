<template>
  <div class="homeHero">
    <div class="container mx-auto">
      <super-heading title="Serverless Gated Content System" subtitle="(Alpha)"/>
      <p class="text-xl mb-12">Open Source learning management system for Nuxt.</p>
      <vendor-netlify-subscribe :redirectPath="redirectPath" buttonText="Subscribe for Updates"></vendor-netlify-subscribe>
      </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      redirectPath: "/docs"
    }
  }
}
</script>


<style scoped>
  .homeHero {
    background-image: url("/uploads/home/hero.png");
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: 100%;
    @apply pt-32;
    @apply pb-64;
  }
</style>