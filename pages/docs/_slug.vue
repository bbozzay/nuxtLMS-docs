<template>
  <div class="w-full max-w-8xl mx-auto">
    <div class="lg:flex container mx-auto">
      <div id="content-wrapper" class="article_content min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible">
        <guide-next-previous class="mobile-only" :links="nextPreviousLinks"/>
        <guide-content :article="article"/>
        <hr class="border-gray-200 mt-12 mb-6">
        <guide-next-previous :links="nextPreviousLinks"/>
      </div>
      <guide-sidebar :tableOfContents="tableOfContents"/>
      <!--<ad-pagespeed />-->
    </div>
  </div>
</template>

<script>
import { getCurrentPost } from "~/utilities/query.js";
export default {
  data() {
    return {
      fetchArticle: false
    }
  },
  // Pre-render content
  async asyncData(data) {
    const tableOfContents = await data.store.getters["courses/tableOfContents"](data)
    console.log("table of contents", tableOfContents)
    const nextPreviousLinks = await data.store.getters["courses/nextPreviousLinks"](data, tableOfContents, data.route.params.slug)
    let { article } = await getCurrentPost(data);
    article = article.access_level ? false : article
    return {
      article,
      tableOfContents,
      nextPreviousLinks
    }
  },
  head() {
    return {
      title: "Porn Recovery Guide"
    }
  }
  // async fetch(data) {
  //   let { article } = await getCurrentPost(data);
  //   this.fetchArticle = article
  //   console.log("data", this.fetchArticle)
  // },
  // fetchOnServer: false
}
</script>
<style lang="scss">
  @import "~/assets/scss/article_single";
  .article_content {
    order: 2;
  }
  .mobile-only {

    @media only screen and (min-width: "1127px") {
      visibility: hidden;
      // display: none;
    }
  }
</style>