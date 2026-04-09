<script setup lang="ts">
import { IconPlayerPlayFilled, IconArrowNarrowLeft, IconArrowNarrowRight, IconPlus, IconThumbUp, IconVolume } from '@tabler/icons-vue';
import Movie from '../components/movies-shows/Movie.vue';
import Show from '../components/movies-shows/Show.vue'
import FreeTrialSection from '../components/FreeTrialSection'

const isMobile = ref(false);
const activeTab = ref<string>('movies')

const checkScreen = () => {
  isMobile.value = window.innerWidth < 1024; // lg breakpoint
};

onMounted(() => {
  checkScreen();
  window.addEventListener("resize", checkScreen);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkScreen);
});
</script>

<template>
  <section class="w-full text-white pt-35.5! lg:pt-34.5! xl:pt-42.5! px-4 lg:px-20 xl:px-40.5">
    <!-- Hero section -->
    <div class="w-full flex gap-12.5 flex-col justify-end items-center bg-[url('~/assets/images/movies-shows/movie-show-hero.png')] bg-cover bg-center h-106.5 lg:h-177.25 xl:h-208.75 pt-12.5 pb-5 px-12.5 rounded-xl">
      <div class="flex flex-col gap-5 lg:gap-6 xl:gap-7.5">
        <div class="text-white flex flex-col justify-center items-center gap-1">
          <h1 class="text-[24px] lg:text-[30px] xl:text-[38px] font-bold leading-[150%]">Avengers : Endgame</h1>
          <p class="hidden lg:flex text-[#999999] lg:text-base xl:text-lg font-medium max-w-298.5 text-center">With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.</p>
        </div>
        <div class="flex flex-wrap gap-5 justify-center">
          <div class="w-full lg:w-fit">
            <button class="flex w-full justify-center lg:w-fit text-sm xl:text-lg font-semibold bg-[#E50000] lg:px-5 xl:px-6 py-3.5 rounded-lg"><IconPlayerPlayFilled/>Play Now</button>
          </div>
          <div class="flex gap-2 lg:gap-5 justify-center">
            <button class="flex bg-[#0F0F0F] border border-[#262626] p-3 xl:p-3.5 rounded-lg"><IconPlus class="w-6 xl:w-7"/></button>
            <button class="flex bg-[#0F0F0F] border border-[#262626] p-3 xl:p-3.5 rounded-lg"><IconThumbUp class="w-6 xl:w-7"/></button>
            <button class="flex bg-[#0F0F0F] border border-[#262626] p-3 xl:p-3.5 rounded-lg"><IconVolume class="w-6 xl:w-7"/></button>
          </div>
        </div>
      </div>
      <div class="hidden lg:flex justify-between items-center w-full">
        <button class="flex bg-[#0F0F0F] border border-[#262626] p-3.5 rounded-lg"><IconArrowNarrowLeft class="w-6 xl:w-7"/></button>
        <img src="~/assets/images/progress-indicators.png"/>
        <button class="flex bg-[#0F0F0F] border border-[#262626] p-3.5 rounded-lg"><IconArrowNarrowRight class="w-6 xl:w-7"/></button>
      </div>
    </div>

    <div class="bg-[#0F0F0F] border border-[#262626] rounded-lg p-2 flex lg:hidden mt-10">
      <button
        class="rounded-md py-3 px-5 text-sm font-medium w-full"
        :class="activeTab === 'movies' ? 'bg-[#1F1F1F] text-white': 'text-[#999999]'"
        @click="activeTab = 'movies'"
      >
        Movies
      </button>
      <button
        class="rounded-md py-3 px-5 text-sm font-medium w-full"
        :class="activeTab === 'shows' ? 'bg-[#1F1F1F] text-white': 'text-[#999999]'"
        @click="activeTab = 'shows'"
      >
        Shows
      </button>
    </div>
    <!-- MOBILE VIEW -->
    <div v-if="isMobile" class="mt-10 lg:mt-15 xl:mt-25">
      <Movie v-if="activeTab === 'movies'" />
      <Show v-else />
    </div>

    <!-- DESKTOP VIEW -->
    <div v-else class="mt-10 lg:mt-15 xl:mt-25 space-y-20">
      <Movie />
      <Show />
    </div>

    <div class="mt-10 lg:mt-15 xl:mt-25">
      <FreeTrialSection/>
    </div>
  </section>
</template>