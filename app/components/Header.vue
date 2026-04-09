<script setup>
import { ref } from 'vue'
import { IconSearch, IconBell, IconMenuDeep, IconX } from '@tabler/icons-vue';
import { useRoute } from 'vue-router'

const route = useRoute()
const isOpen = ref(false)

const navLinks = [
  { name: 'index', path: '/' },
  { name: 'Movies & Shows', path: '/movie-show' },
  { name: 'Support', path: '/support' },
  { name: 'Subscriptions', path: '/subscription' }
]

const isActive = (path) => {
  // Exact match
  if (route.path === path) return true;

  // Keep Movies & Shows active on detail pages
  if (
    path === "/movie-show" && route.path === "/show-details" || route.path === "/movie-details"
  ) {
    return true;
  }

  return false;
};
</script>

<template>
  <header class="fixed top-0 left-0 right-0 w-full mt-10 md:mt-0 z-50">
    <div class="mx-4 lg:mx-20 xl:mx-40.5 py-4 flex items-center justify-between">

      <!-- LEFT: Logo -->
      <div class="flex items-center gap-2">
        <img src="~/assets/images/logo.png" class="w-41.5 xl:w-49.75"/>
      </div>

      <!-- CENTER: Desktop Menu -->
      <nav
        class="hidden lg:flex items-center gap-2.5 xl:gap-8 text-sm text-gray-300 bg-[#0F0F0F] px-2 py-2.5 border-4 rounded-xl border-[#1F1F1F]"
      >
        <NuxtLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="text-sm xl:text-lg font-medium leading-[150%] py-3 px-5 xl:px-6 xl:py-3.5 rounded-lg cursor-pointer header-link"
          :class="isActive(link.path)
            ? 'text-white bg-[#1A1A1A] border border-[#1A1A1A]'
            : 'hover:text-white'"
        >
          {{ link.name }}
        </NuxtLink>
      </nav>

      <!-- RIGHT: Search (Desktop) + Menu (Mobile) -->
      <div class="flex items-center gap-4">

        <!-- Search Icon (Desktop only) -->
        <div class="hidden lg:flex items-center text-white gap-3.5 xl:gap-7.5">
          <IconSearch class="w-6 xl:w-8.5 h-6 xl:h-8.5"/>
          <IconBell class="w-6 xl:w-8.5 h-6 xl:h-8.5"/>
        </div>

        <!-- Hamburger (Mobile only) -->
        <button
          class="lg:hidden w-12 h-12 p-3 rounded-md bg-[#1A1A1A] border border-[#262626] flex items-center justify-center text-white"
          @click="isOpen = true"
        >
          <IconMenuDeep size="24"/>
        </button>

      </div>
    </div>

    <!-- MOBILE MENU DIALOG -->
    <transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-black/80 backdrop-blur z-50"
        @click.self="isOpen = false"
      >
        <div class="bg-[#111] p-6 rounded-b-2xl animate-slideDown">

          <!-- Dialog Header -->
          <div class="flex items-center justify-between mb-6">

            <!-- Logo inside dialog -->
            <div class="flex items-center gap-2">
              <img src="~/assets/images/logo.png" class="w-41.5"/>
            </div>

            <button
              class="w-12 h-12 p-3 rounded-md bg-[#1A1A1A] border border-[#262626] text-white"
              @click="isOpen = false"
            >
              <IconX size="24"/>
            </button>
          </div>

          <!-- Mobile Nav -->
          <nav class="flex flex-col gap-3 text-lg text-gray-300">
            <NuxtLink
              v-for="link in navLinks"
              :key="link.path"
              :to="link.path"
              class="hover:text-white"
              :class="isActive(link.path)
                ? 'text-white bg-[#1A1A1A] border border-[#1A1A1A] py-2 px-3 rounded-lg'
                : 'hover:text-white'"
            >
              {{ link.name }}
            </NuxtLink>
          </nav>
        </div>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes slideDown {
  from {
    transform: translateY(-15px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-slideDown {
  animation: slideDown 0.3s ease-out;
}

/* .router-link-active:focus-visible {
    outline: -webkit-focus-ring-color auto 0px !important;
} */
</style>
