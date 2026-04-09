<script setup lang="ts">
import {
  IconPlayerPlayFilled,
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconPlus,
  IconThumbUp,
  IconVolume,
  IconLanguage,
  IconStar,
  IconCategory
} from '@tabler/icons-vue';

import FreeTrialSection from '../components/FreeTrialSection'
</script>

<template>
  <section class="w-full text-white pt-35.5! lg:pt-34.5! xl:pt-42.5! px-4 lg:px-20 xl:px-40.5">
    <!-- Hero section -->
    <div class="w-full flex gap-12.5 flex-col justify-end items-center bg-[url('~/assets/images/movies-shows/movie-details/movie-detail-hero-image.png')] bg-cover bg-center h-106.5 lg:h-177.25 xl:h-208.75 pt-12.5 pb-5 px-12.5 rounded-xl">
      <div class="flex flex-col gap-5 lg:gap-6 xl:gap-7.5">
        <div class="text-white flex flex-col justify-center items-center gap-1">
          <h1 class="text-[24px] lg:text-[30px] xl:text-[38px] font-bold leading-[150%]">Kantara</h1>
          <p class="hidden lg:flex text-[#999999] lg:text-base xl:text-lg font-medium max-w-298.5 text-center">A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.</p>
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
    </div>

    <div class="mt-10 lg:mt-15 xl:mt-25">
      <div class="grid grid-cols-12 gap-4">

        <!-- Description div -->
        <div class="col-span-12 lg:col-span-8 flex flex-col gap-5 xl:gap-7.5">

          <!-- Description div -->
          <div class="bg-[#1A1A1A] border border-[#262626] p-6 lg:p-10 xl:p-12.5 rounded-xl flex flex-col gap-2 lg:gap-2.5 xl:gap-3.5">
            <p class="text-sm lg:text-base xl:text-lg font-medium text-[#999999]">Description</p>
            <p class="text-sm lg:text-base xl:text-lg font-medium text-white">A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.</p>
          </div>

          <!-- Cast div -->
          <div class="bg-[#1A1A1A] border border-[#262626] p-6 lg:p-10 xl:p-12.5 rounded-xl flex flex-col gap-4 lg:gap-5 xl:gap-7.5">
            <div class="flex justify-between w-full">
              <p class="text-sm lg:text-base xl:text-lg font-medium text-[#999999]">Cast</p>
              <div class="flex gap-2.5">
                <button class="bg-[#141414] border border-[#262626] p-3 xl:p-3.5 rounded-full text-[#999999] w-11 xl:w-13 h-11 xl:h-13 flex items-center">
                  <IconArrowNarrowLeft class="w-6 h-6"/>
                </button>

                <button class="bg-[#141414] border border-[#262626] p-3 xl:p-3.5 rounded-full text-[#999999] w-11 xl:w-13 h-11 xl:h-13 flex items-center">
                  <IconArrowNarrowRight class="w-6 h-6"/>
                </button>
              </div>
            </div>

            <div class="flex gap-5 overflow-x-auto">
              <img src="~/assets/images/movies-shows/movie-details/cast-images/movie-cast1.png"/>
              <img src="~/assets/images/movies-shows/movie-details/cast-images/movie-cast2.png"/>
              <img src="~/assets/images/movies-shows/movie-details/cast-images/movie-cast3.png"/>
              <img src="~/assets/images/movies-shows/movie-details/cast-images/movie-cast4.png"/>
              <img src="~/assets/images/movies-shows/movie-details/cast-images/movie-cast5.png"/>
              <img src="~/assets/images/movies-shows/movie-details/cast-images/movie-cast6.png"/>
              <img src="~/assets/images/movies-shows/movie-details/cast-images/movie-cast7.png"/>
              <img src="~/assets/images/movies-shows/movie-details/cast-images/movie-cast8.png"/>
            </div>
          </div>

          <!-- Reviews div -->
          <div class="bg-[#1A1A1A] border border-[#262626] p-6 lg:p-10 xl:p-12.5 rounded-xl flex flex-col gap-2 lg:gap-2.5 xl:gap-3.5">
            <div class="flex justify-between items-center w-full">
              <p class="text-sm lg:text-base xl:text-lg font-medium text-[#999999]">Reviews</p>
              <button class="bg-[#141414] border border-[#262626] py-3 px-3 xl:py-3.5 xl:px-4 rounded-lg text-sm xl:text-lg text-white font-medium flex gap-1">
                <IconPlus class="w-6 h-6"/>
                Add Your Review
              </button>
            </div>

            <div class="flex gap-5">
              <div class="bg-[#0F0F0F] border border-[#262626] p-6 lg-p-7.5 xl:p-10 rounded-xl gap-5 flex flex-col">
                <div class="flex flex-wrap justify-between w-full items-center">
                  <div>
                    <p class="text-base lg:text-lg xl:text-[20px] text-white font-medium">Aniket Roy</p>
                    <p class="text-[#999999] text-sm lg:text-base xl:text-lg font-medium">From India</p>
                  </div>
                  <div class="bg-[#141414] border border-[#262626] py-1 xl:py-1.5 px-2 xl:px-2.5 rounded-[51px] flex items-center gap-1">
                    <img src="~/assets/images/icons/rating-icon/rating4.5.svg" class="h-3.5 xl:h-4.5"/>
                    <p class="text-sm xl:text-lg font-medium text-[#999999]">4.5</p>
                  </div>
                </div>
                <div>
                  <p class="text-[#999999] text-sm lg:text-base xl:text-lg">This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.</p>
                </div>
              </div>

              <div class="bg-[#0F0F0F] border border-[#262626] p-6 lg-p-7.5 xl:p-10 rounded-xl gap-5 hidden sm:flex flex-col">
                <div class="flex flex-wrap justify-between w-full items-center">
                  <div>
                    <p class="text-base lg:text-lg xl:text-[20px] text-white font-medium">Swaraj</p>
                    <p class="text-[#999999] text-sm lg:text-base xl:text-lg font-medium">From India</p>
                  </div>
                  <div class="bg-[#141414] border border-[#262626] py-1 xl:py-1.5 px-2 xl:px-2.5 rounded-[51px] flex items-center gap-1">
                    <img src="~/assets/images/icons/rating-icon/rating5.svg" class="h-3.5 xl:h-4.5"/>
                    <p class="text-sm xl:text-lg font-medium text-[#999999]">5</p>
                  </div>
                </div>

                <div>
                  <p class="text-[#999999] text-sm lg:text-base xl:text-lg">A restless king promises his lands to the local tribals in exchange of a stone (Panjurli, a deity of Keradi Village) wherein he finds solace and peace of mind.</p>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-center gap-2.5">
              <div class="bg-[#141414] border border-[#262626] rounded-full p-3 xl:p-3.5  text-white w-11 xl:w-13 h-11 xl:h-13 flex items-center">
                <IconArrowNarrowLeft class="w-6"/>
              </div>
              <div>
                <img src="~/assets/images/progress-indicators.png"/>
              </div>
              <div class="bg-[#141414] border border-[#262626] rounded-full p-3 xl:p-3.5  text-white w-11 xl:w-13 h-11 xl:h-13 flex items-center">
                <IconArrowNarrowRight class="w-6"/>
              </div>
            </div>
          </div>
        </div>

        <!--  Released div -->
        <div class="col-span-12 lg:col-span-4">
          <div class="bg-[#1A1A1A] border border-[#262626] rounded-xl p-6 lg:p-10 xl:p-12.5 flex flex-col gap-5 lg:gap-6 xl:gap-7.5">
            <!--  Released Year div -->
            <div class="flex flex-col gap-2.5 xl:gap-3.5">
              <label class="text-sm lg:text-base xl:text-lg font-medium text-[#999999] flex items-center gap-1"> <img src="~/assets/images/icons/calendar.svg" class="w-5 xl:w-6"/> Released Year</label>
              <p class="text-base lg:text-lg xl:text-[20px] font-semibold text-white">2022</p>
            </div>

            <!-- Available Languages div -->
            <div class="flex flex-col gap-2.5 xl:gap-3.5">
              <label class="text-sm lg:text-base xl:text-lg font-medium text-[#999999] flex items-center gap-1"> <IconLanguage class="w-5 xl:w-6"/> Available Languages</label>
              <div class="flex flex-wrap gap-2.5">
                <button class="bg-[#141414] border border-[#262626] py-1.5 xl:py-2 px-3 xl:px-3.5 rounded-lg text-sm xl:text-lg font-medium">English</button>
                <button class="bg-[#141414] border border-[#262626] py-1.5 xl:py-2 px-3 xl:px-3.5 rounded-lg text-sm xl:text-lg font-medium">Hindi</button>
                <button class="bg-[#141414] border border-[#262626] py-1.5 xl:py-2 px-3 xl:px-3.5 rounded-lg text-sm xl:text-lg font-medium">Tamil</button>
                <button class="bg-[#141414] border border-[#262626] py-1.5 xl:py-2 px-3 xl:px-3.5 rounded-lg text-sm xl:text-lg font-medium">Telegu</button>
                <button class="bg-[#141414] border border-[#262626] py-1.5 xl:py-2 px-3 xl:px-3.5 rounded-lg text-sm xl:text-lg font-medium">Kannada</button>
              </div>
            </div>

            <!-- Rating div -->
            <div class="flex flex-col gap-2.5 xl:gap-3.5">
              <label class="text-sm lg:text-base xl:text-lg font-medium text-[#999999] flex items-center gap-1"> <IconStar class="w-5 xl:w-6"/>Ratings</label>
              <div class="flex flex-wrap 2xl:flex-nowrap gap-2.5 w-full">
                <div class="bg-[#141414] border border-[#262626] rounded-lg p-3 lg:p-3.5 xl:p-4 flex flex-col gap-1 w-full">
                  <p class="text-sm lg:text-base xl:text-[20px] font-semibold">IMDb</p>
                  <div class="flex items-center gap-1">
                    <img src="~/assets/images/icons/rating-icon/rating4.5.svg" class="h-4.5"/>
                    <p class="text-sm xl:text-lg font-medium text-[#999999]">4.5</p>
                  </div>
                </div>

                <div class="bg-[#141414] border border-[#262626] rounded-lg p-3 lg:p-3.5 xl:p-4 flex flex-col gap-1 w-full">
                  <p class="text-sm lg:text-base xl:text-[20px] font-semibold">Streamvibe</p>
                  <div class="flex items-center gap-1">
                    <img src="~/assets/images/icons/rating-icon/rating4.5.svg" class="h-4.5"/>
                    <p class="text-sm xl:text-lg font-medium text-[#999999]">4</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Gernes div -->
            <div class="flex flex-col gap-2.5 xl:gap-3.5">
              <label class="text-sm lg:text-base xl:text-lg font-medium text-[#999999] flex items-center gap-1"> <IconCategory class="w-5 xl:w-6"/> Gernes</label>
              <div class="flex flex-wrap gap-2.5">
                <button class="bg-[#141414] border border-[#262626] py-1.5 xl:py-2 px-3 xl:px-3.5 rounded-lg text-sm xl:text-lg font-medium">Action</button>
                <button class="bg-[#141414] border border-[#262626] py-1.5 xl:py-2 px-3 xl:px-3.5 rounded-lg text-sm xl:text-lg font-medium">Adventure</button>
              </div>
            </div>

            <!-- Director div -->
            <div class="flex flex-col gap-2.5 xl:gap-3.5">
              <label class="text-sm lg:text-base xl:text-lg font-medium text-[#999999] flex items-center gap-1"> Director</label>
              <div class="flex flex-wrap gap-2.5">
                <div class="bg-[#141414] border border-[#262626] rounded-lg p-3 xl:p-3.5 flex items-center gap-2.5 w-full">
                  <div>
                    <img src="~/assets/images/movies-shows/movie-details/cast-images/movie-cast1.png" class="w-11.75 xl:w-14.25 h-12.5 xl:h-15 rounded-lg"/>
                  </div>
                  <div>
                    <p class="text-white text-base xl:text-lg font-medium">Rishab Shetty</p>
                    <p class="text-[#999999] text-sm xl:text-base font-medium">From India</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Music div -->
            <div class="flex flex-col gap-2.5 xl:gap-3.5">
              <label class="text-sm lg:text-base xl:text-lg font-medium text-[#999999] flex items-center gap-1"> Music</label>
              <div class="flex flex-wrap gap-2.5">
                <div class="bg-[#141414] border border-[#262626] rounded-lg p-3 xl:p-3.5 flex items-center gap-2.5 w-full">
                  <div>
                    <img src="~/assets/images/movies-shows/movie-details/cast-images/music-man-image.png" class="w-11.75 xl:w-14.25 h-12.5 xl:h-15 rounded-lg"/>
                  </div>
                  <div>
                    <p class="text-white text-base xl:text-lg font-medium">B. Ajaneesh Loknath</p>
                    <p class="text-[#999999] text-sm xl:text-base font-medium">From India</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div class="mt-10 lg:mt-15 xl:mt-25">
      <FreeTrialSection/>
    </div>
  </section>
</template>