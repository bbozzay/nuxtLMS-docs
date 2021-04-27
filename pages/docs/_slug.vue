<template>
  <div class="article_content">
    <button-back-to-parent />
    <layout-single-post :article="article"/>
  </div>
</template>

<script>
import { getCurrentPost } from "~/utilities/query.js";
export default {
  async asyncData(data) {
    return getCurrentPost(data)
  },
  head() {
    return {
      title: "Docs"
    }
  }
}
</script>
<style lang="scss">
  @import "~/assets/scss/article_single";
</style>