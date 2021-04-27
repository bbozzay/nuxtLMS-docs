<template>
  <div class="article_index">
    <layout-single-index :articles="articles" />
  </div>
</template>

<script>
import { getCurrentPostIndex } from "~/utilities/query.js";
export default {
  async asyncData(data) {
    return getCurrentPostIndex(data);
  },
  head() {
    return {
      title: "Docs"
    }
  }
}
</script>

<style lang="scss">
  @import "~/assets/scss/article_index";
</style>