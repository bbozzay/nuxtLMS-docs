<template>
  <div
    id="progress"
    class="h-1 z-20 top-0"
    style="
      background: linear-gradient(
        to right,
        #4dc0b5 var(--scroll),
        transparent 0
      );
      --scroll: 0%;
    "
  />
</template>

<script>
export default {
  mounted() {
    document.addEventListener("scroll", this.progress)
  },
  // data() {
  //   return {
  //     barSelector: "#progress"
  //   }
  // },
  methods: {
    progress() {
      let bar = document.querySelector("#progress")
      let nav = document.querySelector("nav")
      let barContent = document.querySelector("main")
      let contentStart = barContent.offsetTop
      let contentHeight = barContent.offsetHeight
      // Where is the bar relative to the top
      let barY = bar.offsetHeight + bar.offsetTop

      // let scroll = (contentStart + window.scrollY) / ((window.innerHeight) - contentHeight) * 100;
      let scroll =
        ((contentStart + window.scrollY) /
          (contentHeight - window.innerHeight)) *
        100
      bar.style.setProperty("--scroll", scroll + "%")
      if (window.scrollY > barY) {
        nav.classList.add("shadow")
        barContent.classList.remove("bg-gray-100")
        barContent.classList.add("bg-white")
      } else {
        bar.classList.remove("shadow")
        barContent.classList.remove("bg-white")
        barContent.classList.add("bg-gray-100")
      }
    },
  },
}
</script>
