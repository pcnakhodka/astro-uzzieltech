<template>
  <nav
    class="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-sky-800 shadow-md">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between space-x-2 lg:w-auto lg:static lg:block lg:justify-start">
        <a
          class="text-xl lg:text-4xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase flex"
          href="/">
          <img :src="logo" class="h-9 w-auto" alt="Uzziel Technologies Logo" width="100" height="100">
          <p class="text-base ml-2 mt-1">
            {{name}}
          </p>
        </a>
        <button class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" @click="setNavbarOpen" name="Mobile Navigation Menu">
          <span class="hidden">Application Menu</span>
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>
      <div class="lg:flex flex-grow items-center"
        :class="[navbarOpen ? 'block' : 'hidden']"
        id="example-navbar-warning">
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto lg:space-x-8">
          <li class="flex items-center" @click="setNavbarOpen">
            <a
              class="text-white px-3 py-2 flex items-center text-sm uppercase font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              href="/">
              Home
            </a>
          </li>
          <li class="flex items-center" @click="setNavbarOpen">
            <a
              class="text-white px-3 py-2 flex items-center text-sm uppercase font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              href="/portfolio">
              Portfolio
            </a>
          </li>
          <li class="flex items-center" @click="setNavbarOpen">
            <a
              class="text-white px-3 py-2 flex items-center text-sm uppercase font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              href="/blog">
              Blog
            </a>
          </li>
          <li class="flex items-center" @click="setNavbarOpen">
            <a
              class="text-white px-3 py-2 flex items-center text-sm uppercase font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import logo from '/images/logo.svg'

const name = 'Uzziel Tech'

</script>

<script>
export default{
  data(){
    return{
      navbarOpen: false
    }
  },
  methods:{
    setNavbarOpen(){
      this.navbarOpen = ! this.navbarOpen     
    }
  }
}
</script>
