<template>
  <div class="layoutHome">
    <home-hero />
    <div>
      <div class="container mx-auto">
        <h3>Stack:</h3>
        <ul>
          <li>NuxtJS</li>
          <li>Stripe</li>
          <li>Netlify</li>
          <li>Nuxt $auth</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cta: false
    }
  },
  head() {
    return {
      title: "Nuxt Static Learning Management System"
    }
  }
}
</script>

<style lang="scss" scoped>
  hr {
    @apply mb-12;
  }

  .sectionLearn {
    background: #000;
    color: #fff;

    &__grid {
      @screen sm {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 2rem;
        align-items: center;
      } 
    }
  }
</style>