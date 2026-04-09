<script setup lang="ts">
import { IconArrowNarrowLeft, IconArrowNarrowRight,IconClockHour3Filled, IconEyeFilled } from '@tabler/icons-vue';
import {
  genre1, genre2, genre3, genre4, genre5,
  popGenre1, popGenre2, popGenre3, popGenre4,
  trending1, trending2, trending3, trending4, trending5,
  newRelease1, newRelease2, newRelease3, newRelease4, newRelease5,
  mustWatch1, mustWatch2, mustWatch3, mustWatch4,
  rating4, rating45,
} from '~/assets/dynamic-image-path/moviesImages.ts';
import { useRouter } from 'vue-router'


const router = useRouter()
const genres = ref([
  {
    id: 1,
    name: 'Action',
    image: genre1,
  },
  {
    id: 2,
    name: 'Adventure',
    image: genre2,
  },
  {
    id: 3,
    name: 'Comedy',
    image: genre3,
  },
  {
    id: 4,
    name: 'Drama',
    image: genre4,
  },
  {
    id: 5,
    name: 'Horror',
    image: genre5,
  },
])

const trending = ref([
  {
    id: 1,
    timing: '1h 30min',
    subscribers:'2K',
    image: trending1,
  },
  {
    id: 2,
    timing: '1h 57min',
    subscribers:'1.5K',
    image: trending2,
  },
  {
    id: 3,
    timing: '2h 10min',
    subscribers:'1.8K',
    image: trending3,
  },
  {
    id: 4,
    timing: '2h 20min',
    subscribers:'3K',
    image: trending4,
  },
  {
    id: 5,
    timing: '1h 42min',
    subscribers:'5K',
    image: trending5,
  },
])

const popularGenres = ref([
  {
    id: 1,
    name: 'Action',
    image: popGenre1,
  },
  {
    id: 2,
    name: 'Adventure',
    image: popGenre2,
  },
  {
    id: 3,
    name: 'Comedy',
    image: popGenre3,
  },
  {
    id: 4,
    name: 'Drama',
    image: popGenre4,
  },
])

const newRelease = ref([
  {
    id: 1,
    title: 'Released at 14 April 2023',
    image: newRelease1,
  },
  {
    id: 2,
    title: 'Released at 22 April 2023',
    image: newRelease2,
  },
  {
    id: 3,
    title: 'Released at 13 April 2023',
    image: newRelease3,
  },
  {
    id: 4,
    title: 'Released at 19 April 2023',
    image: newRelease4,
  },
  {
    id: 5,
    title: 'Released at 11 April 2023',
    image: newRelease5,
  },
])

const mustWatch = ref([
  {
    id: 1,
    timing: '1h 57min',
    subscribers: '20K',
    rating:rating45,
    image: mustWatch1,
  },
  {
    id: 2,
    timing: '1h 30min',
    subscribers: '20K',
    rating:rating4,
    image: mustWatch2,
  },
  {
    id: 3,
    timing: '1h 42min',
    subscribers: '20K',
    rating:rating45,
    image: mustWatch3,
  },
  {
    id: 4,
    timing: '2h 10min',
    subscribers: '20K',
    rating:rating4,
    image: mustWatch4,
  },
])
</script>

<template>
  <div class="lg:border border-[#262626] rounded-xl p-0 lg:p-10 xl:p-12.5 relative flex flex-col gap-12.5 lg:gap-20 xl:gap-25">
    <button class="hidden lg:flex bg-[#E50000] py-2 xl:py-2.5 px-5 xl:px-6 rounded-lg text-base xl:text-[20px] font-semibold absolute -top-5 left-8">Movies</button>

    <!-- Our Genres div -->
    <div class="flex flex-col gap-5 lg:gap-10 xl:gap-12.5">
      <div class="text-white flex justify-between items-center">
        <p class="text-[24px] lg:text-[30px] xl:text-[38px] font-bold">Our Genres</p>
        <div class="bg-[#0F0F0F] border border-[#1F1F1F] p-3 xl:p-4 rounded-xl hidden lg:flex items-center gap-3 xl:gap-4 h-17 xl:h-22">
          <div class="bg-[#1A1A1A] border border-[#1F1F1F] rounded-lg p-2.5 xl:p-3.5 text-white w-11 xl:w-14 h-11 xl:h-14 flex items-center">
            <IconArrowNarrowLeft size="28"/>
          </div>
          <div>
            <img src="~/assets/images/progress-indicators.png"/>
          </div>
          <div class="bg-[#1A1A1A] border border-[#1F1F1F] rounded-lg p-2.5 xl:p-3.5 text-white w-11 xl:w-14 h-11 xl:h-14 flex items-center">
            <IconArrowNarrowRight size="28"/>
          </div>
        </div>
      </div>

      <!-- Genres image div -->
      <div class="overflow-x-auto w-full">
        <div class="grid grid-flow-col auto-cols-[100%] sm:auto-cols-[50%] md:auto-cols-[33.333%] xl:auto-cols-[19.2%] gap-3 lg:gap-4">
          <div
            v-for="item in genres"
            :key="item.id"
            class="bg-[#1A1A1A] border border-[#262626] p-5 lg:p-6 xl:p-7.5 rounded-xl cursor-pointer"
            @click="router.push({path:'/movie-details'})"
          >
            <img
              :src="item.image"
              :alt="item.name"
              class="w-full rounded-lg"
            />

            <div class="flex justify-between items-center gap-3 text-white mt-3">
              <p class="text-sm lg:text-base xl:text-lg font-semibold">
                {{ item.name }}
              </p>

              <IconArrowNarrowRight
                class="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="flex lg:hidden justify-center">
        <img src="~/assets/images/start-indicator.svg"/>
      </div>
    </div>

    <!-- Popular Top 10 In Genres -->
    <div class="flex flex-col gap-5 lg:gap-10 xl:gap-12.5">
      <div class="text-white flex justify-between items-center">
        <p class="text-[24px] lg:text-[30px] xl:text-[38px] font-bold">Popular Top 10 In Genres</p>
        <div class="bg-[#0F0F0F] border border-[#1F1F1F] p-3 xl:p-4 rounded-xl hidden lg:flex items-center gap-3 xl:gap-4 h-17 xl:h-22">
          <div class="bg-[#1A1A1A] border border-[#1F1F1F] rounded-lg p-2.5 xl:p-3.5 text-white w-11 xl:w-14 h-11 xl:h-14 flex items-center">
            <IconArrowNarrowLeft size="28"/>
          </div>
          <div>
            <img src="~/assets/images/progress-indicators.png"/>
          </div>
          <div class="bg-[#1A1A1A] border border-[#1F1F1F] rounded-lg p-2.5 xl:p-3.5 text-white w-11 xl:w-14 h-11 xl:h-14 flex items-center">
            <IconArrowNarrowRight size="28"/>
          </div>
        </div>
      </div>

      <!-- Top 10 In Genres image div -->
      <div class="overflow-x-auto w-full">
        <div class="grid grid-flow-col auto-cols-[100%] sm:auto-cols-[50%] md:auto-cols-[33.333%] xl:auto-cols-[24%] gap-3 lg:gap-4">
          <div
            v-for="item in popularGenres"
            :key="item.id"
            class="bg-[#1A1A1A] border border-[#262626] p-5 lg:p-6 xl:p-7.5 rounded-xl cursor-pointer"
            @click="router.push({path:'/movie-details'})"
          >
            <img
              :src="item.image"
              :alt="item.name"
              class="w-full rounded-lg"
            />

            <div class="flex justify-between items-center gap-3 text-white">
              <div class="flex flex-col">
                <button class="text-sm lg:text-[16px] font-semibold bg-[#E50000] p-2 xl:p-2.5 rounded-[5px] h-6.25 xl:h-8 flex items-center">Top 10 In</button>
                <p class="text-sm lg:text-base xl:text-lg font-semibold">
                  {{ item.name }}
                </p>
              </div>
              <IconArrowNarrowRight class="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6" />
            </div>
          </div>
        </div>
      </div>

      <div class="flex lg:hidden justify-center">
        <img src="~/assets/images/start-indicator.svg"/>
      </div>
    </div>

    <!-- Trending Now  div-->
    <div class="flex flex-col gap-5 lg:gap-10 xl:gap-12.5">
      <div class="text-white flex justify-between items-center">
        <p class="text-[24px] lg:text-[30px] xl:text-[38px] font-bold">Trending Now</p>
        <div class="bg-[#0F0F0F] border border-[#1F1F1F] p-3 xl:p-4 rounded-xl hidden lg:flex items-center gap-3 xl:gap-4 h-17 xl:h-22">
          <div class="bg-[#1A1A1A] border border-[#1F1F1F] rounded-lg p-2.5 xl:p-3.5 text-white w-11 xl:w-14 h-11 xl:h-14 flex items-center">
            <IconArrowNarrowLeft size="28"/>
          </div>
          <div>
            <img src="~/assets/images/progress-indicators.png"/>
          </div>
          <div class="bg-[#1A1A1A] border border-[#1F1F1F] rounded-lg p-2.5 xl:p-3.5 text-white w-11 xl:w-14 h-11 xl:h-14 flex items-center">
            <IconArrowNarrowRight size="28"/>
          </div>
        </div>
      </div>

      <!-- Trending image div -->
      <div class="overflow-x-auto w-full">
        <div class="grid grid-flow-col auto-cols-[100%] sm:auto-cols-[50%] md:auto-cols-[33.333%] xl:auto-cols-[19.2%] gap-3 lg:gap-4">
          <div
            v-for="item in trending"
            :key="item.id"
            class="bg-[#1A1A1A] border border-[#262626] p-5 lg:p-6 xl:p-7.5 rounded-xl flex flex-col gap-3 lg:gap-4 xl:gap-5 cursor-pointer"
            @click="router.push({path:'/movie-details'})"
          >
            <img
              :src="item.image"
              alt="image"
              class="w-full rounded-lg"
            />

            <div class="flex justify-between items-center gap-3 text-[#999999]">
              <div class="bg-[#141414] border border-[#262626] py-1 xl:py-1.5 px-2 xl:px-2.5 rounded-full flex items-center gap-0.5">
                <IconClockHour3Filled class="w-5 xl:w-6"/>
                <p class="text-xs xl:text-base font-medium">{{ item.timing }}</p>
              </div>

              <div class="bg-[#141414] border border-[#262626] py-1 xl:py-1.5 px-2 xl:px-2.5 rounded-full flex items-center gap-0.5">
                <IconEyeFilled class="w-5 xl:w-6"/>
                <p class="text-xs xl:text-base font-medium">{{item.subscribers}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex lg:hidden justify-center">
        <img src="~/assets/images/start-indicator.svg"/>
      </div>
    </div>

    <!-- New Releases -->
    <div class="flex flex-col gap-5 lg:gap-10 xl:gap-12.5">
      <div class="text-white flex justify-between items-center">
        <p class="text-[24px] lg:text-[30px] xl:text-[38px] font-bold">New Releases</p>
        <div class="bg-[#0F0F0F] border border-[#1F1F1F] p-3 xl:p-4 rounded-xl hidden lg:flex items-center gap-3 xl:gap-4 h-17 xl:h-22">
          <div class="bg-[#1A1A1A] border border-[#1F1F1F] rounded-lg p-2.5 xl:p-3.5 text-white w-11 xl:w-14 h-11 xl:h-14 flex items-center">
            <IconArrowNarrowLeft size="28"/>
          </div>
          <div>
            <img src="~/assets/images/progress-indicators.png"/>
          </div>
          <div class="bg-[#1A1A1A] border border-[#1F1F1F] rounded-lg p-2.5 xl:p-3.5 text-white w-11 xl:w-14 h-11 xl:h-14 flex items-center">
            <IconArrowNarrowRight size="28"/>
          </div>
        </div>
      </div>

      <!-- New Releases image div -->
      <div class="overflow-x-auto w-full">
        <div class="grid grid-flow-col auto-cols-[100%] sm:auto-cols-[50%] md:auto-cols-[33.333%] xl:auto-cols-[19.2%] gap-3 lg:gap-4">
          <div
            v-for="item in newRelease"
            :key="item.id"
            class="bg-[#1A1A1A] border border-[#262626] p-5 lg:p-6 xl:p-7.5 rounded-xl flex flex-col gap-3 lg:gap-4 xl:gap-5"
          >
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full rounded-lg"
            />

            <div class="flex justify-between items-center gap-3 text-[#999999]">
              <div class="bg-[#141414] border border-[#262626] py-1.5 px-5.5 rounded-full flex justify-center gap-0.5 w-full">
                <p class="text-xs xl:text-[16px] font-medium">{{ item.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex lg:hidden justify-center">
        <img src="~/assets/images/start-indicator.svg"/>
      </div>
    </div>

    <!-- Must - Watch Movies div-->
    <div class="flex flex-col gap-5 lg:gap-10 xl:gap-12.5">
      <div class="text-white flex justify-between items-center">
        <p class="text-[24px] lg:text-[30px] xl:text-[38px] font-bold">Must - Watch Movies</p>
        <div class="bg-[#0F0F0F] border border-[#1F1F1F] p-3 xl:p-4 rounded-xl hidden lg:flex items-center gap-3 xl:gap-4 h-17 xl:h-22">
          <div class="bg-[#1A1A1A] border border-[#1F1F1F] rounded-lg p-2.5 xl:p-3.5 text-white w-11 xl:w-14 h-11 xl:h-14 flex items-center">
            <IconArrowNarrowLeft size="28"/>
          </div>
          <div>
            <img src="~/assets/images/progress-indicators.png"/>
          </div>
          <div class="bg-[#1A1A1A] border border-[#1F1F1F] rounded-lg p-2.5 xl:p-3.5 text-white w-11 xl:w-14 h-11 xl:h-14 flex items-center">
            <IconArrowNarrowRight size="28"/>
          </div>
        </div>
      </div>

      <!-- Must - Watch image div -->
      <div class="overflow-x-auto w-full">
        <div class="grid grid-flow-col auto-cols-[100%] sm:auto-cols-[50%] md:auto-cols-[33.333%] xl:auto-cols-[24%] gap-3 lg:gap-4">
          <div
            v-for="item in mustWatch"
            :key="item.id"
            class="bg-[#1A1A1A] border border-[#262626] p-5 lg:p-6 xl:p-7.5 rounded-xl flex flex-col gap-3 lg:gap-4 xl:gap-5 cursor-pointer"
            @click="router.push({path:'/movie-details'})"
          >
            <img
              :src="item.image"
              alt="image"
              class="w-full rounded-lg"
            />

            <div class="flex justify-between items-center gap-0 xl:gap-3 text-[#999999]">
              <div class="bg-[#141414] border border-[#262626] py-1 xl:py-1.5 px-2 xl:px-2.5 rounded-full flex items-center gap-0.5">
                <IconClockHour3Filled class="w-5 xl:w-6"/>
                <p class="text-xs xl:text-base font-medium">{{ item.timing }}</p>
              </div>

              <div class="bg-[#141414] border border-[#262626] py-1 xl:py-1.5 px-2 xl:px-2.5 rounded-full flex items-center gap-0.5">
                <img :src="item.rating" class="h-3.5 xl:h-4.5 md:w-14 lg:w-full"/>
                <p class="text-xs xl:text-base font-medium">{{item.subscribers}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex lg:hidden justify-center">
        <img src="~/assets/images/start-indicator.svg"/>
      </div>
    </div>
  </div>
</template>