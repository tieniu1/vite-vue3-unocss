<template>
  <div :class="showMenu ? 'menu-nav-show' : ''">
    <!-- Navbar -->
    <nav class="bg-white shadow-lg relative">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">
          <div class="flex space-x-7">
            <!-- Logo -->
            <div>
              <a href="#" class="flex items-center py-4 px-2">
                <span class="font-semibold text-gray-500 text-lg">Logo</span>
              </a>
            </div>
            <!-- Primary Navbar items -->
            <div
              :class="[
                'md:flex',
                showMenu ? 'flex-col items-center' : 'hidden',
                'items-center space-x-1',
                'menu-nav'
              ]"
            >
              <a href="#" class="py-4 px-2 text-gray-500 border-b-4 border-blue-500 font-semibold"
                >Home</a
              >
              <a
                href="#"
                class="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
                >Services</a
              >
              <a
                href="#"
                class="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
                >About</a
              >
              <a
                href="#"
                class="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
                >Contact</a
              >
            </div>
          </div>
          <!-- Secondary Navbar items -->
          <div class="hidden md:flex items-center space-x-3">
            <a
              href=""
              class="py-2 px-2 font-medium text-gray-500 rounded hover:bg-gray-200 transition duration-300"
              >Log In</a
            >
            <a
              href=""
              class="py-2 px-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-400 transition duration-300"
              >Sign Up</a
            >
          </div>
          <!-- Mobile menu button -->
          <div class="md:hidden flex items-center">
            <button class="outline-none" @click="menuBtnClick">
              <svg
                class="w-6 h-6 text-gray-500 hover:text-blue-500"
                :class="{ 'text-blue-500': showMenu }"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
            <button class="hidden outline-none mobile-menu-button" @click="menuBtnClick">X</button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <div class="bg-white py-20">
      <div class="container box-border mx-auto px-6">
        <h2 class="text-4xl font-bold mb-2 text-gray-800">Responsive Demo</h2>
        <h3 class="text-2xl mb-8 text-gray-600">Using Tailwind CSS</h3>
        <button
          class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400 transition duration-300"
        >
          Get Started
        </button>
      </div>
    </div>

    <!-- Content Section -->
    <div class="container box-border mx-auto px-6 py-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h3 class="text-lg font-semibold mb-2">Card 1</h3>
          <p class="text-gray-600">This is a simple card with some text content.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h3 class="text-lg font-semibold mb-2">Card 2</h3>
          <p class="text-gray-600">This is a simple card with some text content.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h3 class="text-lg font-semibold mb-2">Card 3</h3>
          <p class="text-gray-600">This is a simple card with some text content.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h3 class="text-lg font-semibold mb-2">Card 4</h3>
          <p class="text-gray-600">This is a simple card with some text content.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h3 class="text-lg font-semibold mb-2">Card 5</h3>
          <p class="text-gray-600">This is a simple card with some text content.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h3 class="text-lg font-semibold mb-2">Card 6</h3>
          <p class="text-gray-600">This is a simple card with some text content.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showMenu = ref(false)

const menuBtnClick = () => {
  showMenu.value = !showMenu.value
}
</script>
<style lang="scss" scoped>
.menu-nav-show {
  hieght: calc(100vh - 4rem);
  @apply overflow-hidden;
  .menu-nav {
    @apply absolute bg-red left-0 top-0 w-full flex flex-col pb-full;
    margin: 0 !important;
    > div {
      @apply flex-1;
    }
  }

  .mobile-menu-button {
    @apply: block  relative z-100 p-1;
  }
}
</style>
