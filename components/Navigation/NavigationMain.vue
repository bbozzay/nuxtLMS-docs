<template>
  <nav id="header" class="w-full z-10 top-0 bg-white">
    <NavigationProgress />
    <div
      class="container mx-auto flex flex-wrap items-center justify-between mt-0 py-3"
  >
    <global-logo />

      <!-- <div class="block lg:hidden pr-4">
        <button
          @click="isOpen = !isOpen" 
          id="nav-toggle"
          class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-teal-500 appearance-none focus:outline-none"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
          <div :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4">
          </div>
      </div> -->
      <div
        id="nav-content"
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block mt-2 lg:mt-0 md:bg-transparent z-20 bg-gray-100"
      >
        <!-- <div
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 md:bg-transparent z-20 bg-gray-100"
        id="nav-content"
      > -->
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
          <li class="mr-3">
            <nuxt-link
              v-for="route in routes"
              :key="route.index"
              :to="route.path"
              :class="`inline-block py-2 px-4 no-underline${route.className ? ' ' + route.className : ' text-gray-900'}`"
            >
              {{ route.name }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        {
          name: "Documentation",
          path: "/docs",
          mobile: true,
          desktop: true,
        },
        {
          name: "Learn",
          path: "/learn",
          mobile: true,
          desktop: true,
        }
      ],
    }
  },
  computed: {
    mobileNav() {
      return this.routes.filter((r) => r.mobile == true)
    },
    currentRoute() {
      return this.$route.path
    } 
  }
}
</script>

<style lang="scss" scoped>
ul a:not(.btn) {
  position: relative;
  &:after {
    position: absolute;
    bottom: 1px;
    // top: 4px;
    left: 50%;
    transform: translateX(-50%);
    @apply bg-gray-900;
    content: "";
    display: block;
    width: 0px;
  }
  &:hover {
    @apply text-gray-500;
    transition: .25s color ease-out;
  }
  &:hover:not(.nuxt-link-active, .btn) {
    &:after {
      // width: 100%;
      width: 4px;
      height: 4px;
      border-radius: 200%;
      animation-name: squeeze;
      animation-duration: .25s;
      animation-timing-function: ease-out;
    }
  }
  @keyframes squeeze {
    from {
      width: 20%;
      border-radius: 0%;
    } 
    to {
      width: 4px;
      border-radius: 200%;
    } 
  }
}
.nuxt-link-active:not(.btn) {
  @apply text-gray-500;

  &:after {
    @apply bg-gray-500;
    border-radius: 200%;
    width: 4px;
    height: 4px;
  }
}
#header {
  background: #ffffff;
}
</style>
