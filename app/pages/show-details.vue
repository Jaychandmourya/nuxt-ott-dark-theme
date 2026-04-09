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
  IconCategory,
  IconArrowDown,
  IconClockHour3,
  IconArrowUp
} from '@tabler/icons-vue';

import seasonsEpisodes1 from '~/assets/images/movies-shows/show-details/seasons-episodes/seasons-episodes1.png'
import seasonsEpisodes2 from '~/assets/images/movies-shows/show-details/seasons-episodes/seasons-episodes2.png'
import seasonsEpisodes3 from '~/assets/images/movies-shows/show-details/seasons-episodes/seasons-episodes3.png'
import seasonsEpisodes4 from '~/assets/images/movies-shows/show-details/seasons-episodes/seasons-episodes4.png'
import seasonsEpisodes5 from '~/assets/images/movies-shows/show-details/seasons-episodes/seasons-episodes5.png'

import FreeTrialSection from '../components/FreeTrialSection'


const episodes = [
  {
    id: 1,
    title: "Chapter One : The Vanishing of Will Byers",
    duration: "49 min",
    description:
      "On his way from a friend’s house, young Will sees something terrifying. Nearby, a sinister secret lurks in the depths of a government lab.",
    image: seasonsEpisodes1,
  },
  {
    id: 2,
    title: "Chapter Two: The Weirdo on Maple Street",
    duration: "56 min",
    description:
      "Lucas, Mike and Dustin try to talk to the girl they found in the woods. Hopper questions an anxious Joyce about an unsettling phone call.",
    image: seasonsEpisodes2,
  },
  {
    id: 3,
    title: "Chapter Three: Holly, Jolly",
    duration: "52 min",
    description: "An increasingly concerned Nancy looks for Barb and finds out what Jonathan's been up to. Joyce is convinced Will is trying to talk to her.",
    image: seasonsEpisodes3,
  },
  {
    id: 4,
    title: "Chapter Four: The Body",
    duration: "51 min",
    description: "Refusing to believe Will is dead, Joyce tries to connect with her son. The boys give Eleven a makeover.",
    image: seasonsEpisodes4,
  },
  {
    id: 5,
    title: "Chapter Five: The Flea and the Acrobat",
    duration: "53 min",
    description: "Hopper breaks into the lab while Nancy and Jonathan confront the force that took Will. The boys ask Mr. Clarke how to travel to another dimension.",
    image: seasonsEpisodes5,
  },
];
</script>

<template>
  <section class="w-full text-white pt-35.5! lg:pt-34.5! xl:pt-42.5! px-4 lg:px-20 xl:px-40.5">
    <!-- Hero section -->
    <div class="w-full flex gap-12.5 flex-col justify-end items-center bg-[url('~/assets/images/movies-shows/show-details/show-hero-image.png')] bg-cover bg-center h-106.5 lg:h-177.25 xl:h-208.75 pt-12.5 pb-5 px-12.5 rounded-xl">
      <div class="flex flex-col gap-5 lg:gap-6 xl:gap-7.5">
        <div class="text-white flex flex-col justify-center items-center gap-1">
          <h1 class="text-[24px] lg:text-[30px] xl:text-[38px] font-bold leading-[150%]">Stranger Things</h1>
          <p class="hidden lg:flex text-[#999999] lg:text-base xl:text-lg font-medium max-w-298.5 text-center">When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.</p>
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

        <!-- Seasons and Episodes div -->
        <div class="col-span-12 lg:col-span-8 flex flex-col gap-5 xl:gap-7.5">

          <!-- Seasons and Episodes div -->
          <div class="bg-[#1A1A1A] border border-[#262626] p-6 lg:p-10 xl:p-12.5 rounded-xl flex flex-col gap-2 lg:gap-2.5 xl:gap-3.5">
            <p class="text-sm lg:text-base xl:text-lg font-medium text-[#999999]">Seasons and Episodes</p>
            <div class="flex flex-col gap-5">

              <!-- Season 01 -->
              <div class="bg-[#0F0F0F] border border-[#262626] rounded-xl py-4 lg:py-5 xl:py-6 px-5 lg:px-10 xl:px-12.5 flex justify-between items-center">
                <div class="flex gap-2.5 items-center">
                  <p class="text-base lg:text-[20px] xl:text-[24px] font-semibold">Season 01</p>
                  <p class="tex-sm lg:text-base xl:text-lg font-medium text-[#999999]">9 Episodes</p>
                </div>
                <div class="bg-[#141414] border border-[#262626] p-3 xl:p-3.5 rounded-full">
                  <IconArrowDown class="w-5 xl:w-6 h-5 xl:h-6"/>
                </div>
              </div>

              <!-- Season 02 -->
              <div class="bg-[#0F0F0F] border border-[#262626] rounded-xl py-4 lg:py-5 xl:py-6 px-5 lg:px-10 xl:px-12.5 flex flex-col gap-5 lg:gap-6 xl:gap-7.5">
                <div class="flex justify-between items-center">
                  <div class="flex gap-2.5 items-center">
                    <p class="text-base lg:text-[20px] xl:text-[24px] font-semibold">Season 02</p>
                    <p class="tex-sm lg:text-base xl:text-lg font-medium text-[#999999]">5 Episodes</p>
                  </div>
                  <div class="bg-[#141414] border border-[#262626] p-3 xl:p-3.5 rounded-full">
                    <IconArrowUp class="w-5 xl:w-6 h-5 xl:h-6"/>
                  </div>
                </div>

                <div>
                  <div
                    v-for="(episode, index) in episodes"
                    :key="episode.id"
                    class="lg:py-7.5 xl:py-10 lg:flex items-center gap-5 border-[#262626] hidden"
                    :class="{
                      'border-t border-b': index === 0,
                      'border-b': index !== episodes.length - 1 && index !== 0,
                    }"
                  >
                    <!-- Episode Number -->
                    <div class="w-15">
                      <p class="text-[24px] xl:text-[30px] font-semibold text-[#999999]">
                        O{{ index + 1 }}
                      </p>
                    </div>

                    <!-- Image -->
                    <div>
                      <img
                        :src="episode.image"
                        alt="episode"
                      />
                    </div>

                    <!-- Content -->
                    <div class="flex flex-col gap-2.5 w-full">
                      <div class="flex flex-wrap justify-between items-center">
                        <p class="text-lg xl:text-[20px] font-semibold text-white">
                          {{ episode.title }}
                        </p>

                        <div class="bg-[#141414] border border-[#262626] p-1.5 xl:py-2 xl:px-2.5 text-[#999999] rounded-lg flex gap-1">
                          <IconClockHour3 class="w-5 xl:w-6 h-5 xl:h-6" />
                          <p class="text-sm xl:text-base font-medium">
                            {{ episode.duration }}
                          </p>
                        </div>
                      </div>

                      <p class="text-base xl:text-lg text-[#999999]">
                        {{ episode.description }}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  v-for="(episode, index) in episodes"
                  :key="episode.id"
                  class="p-5 flex flex-col gap-4.5 bg-[#141414] rounded-lg lg:hidden"
                  >
                    <!-- Episode Number -->
                    <!-- Image -->
                    <div class="flex items-center gap-4.5 w-full">
                      <div class="w-full">
                        <img
                          :src="episode.image"
                          alt="episode"
                          class="w-full h-29.5 sm:h-54.5"
                        />
                      </div>
                      <div class="w-15">
                        <p class="text-[24px] xl:text-[30px] font-semibold text-[#999999]">
                          O{{ index + 1 }}
                        </p>
                      </div>
                    </div>

                    <!-- Content -->
                    <div class="flex flex-col gap-2.5">
                      <div class="bg-[#141414] border border-[#262626] p-1.5 xl:py-2 xl:px-2.5 text-[#999999] rounded-lg flex w-fit gap-1">
                        <IconClockHour3 class="w-5 xl:w-6 h-5 xl:h-6" />
                        <p class="text-sm xl:text-base font-medium">
                          {{ episode.duration }}
                        </p>
                      </div>
                      <div class="flex items-center">
                        <p class="text-lg xl:text-[20px] font-semibold text-white">
                          {{ episode.title }}
                        </p>
                      </div>
                    </div>
                </div>
              </div>



              <!-- Season 03 -->
              <div class="bg-[#0F0F0F] border border-[#262626] rounded-xl py-4 lg:py-5 xl:py-6 px-5 lg:px-10 xl:px-12.5 flex justify-between items-center">
                <div class="flex gap-2.5 items-center">
                  <p class="text-base lg:text-[20px] xl:text-[24px] font-semibold">Season 03</p>
                  <p class="tex-sm lg:text-base xl:text-lg font-medium text-[#999999]">7 Episodes</p>
                </div>
                <div class="bg-[#141414] border border-[#262626] p-3 xl:p-3.5 rounded-full">
                  <IconArrowDown class="w-5 xl:w-6 h-5 xl:h-6"/>
                </div>
              </div>
            </div>
          </div>

          <!-- Description div -->
          <div class="bg-[#1A1A1A] border border-[#262626] p-6 lg:p-10 xl:p-12.5 rounded-xl flex flex-col gap-2 lg:gap-2.5 xl:gap-3.5">
            <p class="text-sm lg:text-base xl:text-lg font-medium text-[#999999]">Description</p>
            <p class="text-sm lg:text-base xl:text-lg font-medium text-white">When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl</p>
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

            <div class="flex gap-5 w-full overflow-x-auto">
              <img src="~/assets/images/movies-shows/show-details/show-cast-images/show-cast-images1.png" class="w-full"/>
              <img src="~/assets/images/movies-shows/show-details/show-cast-images/show-cast-images2.png" class="w-full"/>
              <img src="~/assets/images/movies-shows/show-details/show-cast-images/show-cast-images3.png" class="w-full"/>
              <img src="~/assets/images/movies-shows/show-details/show-cast-images/show-cast-images4.png" class="w-full"/>
              <img src="~/assets/images/movies-shows/show-details/show-cast-images/show-cast-images5.png" class="w-full"/>
              <img src="~/assets/images/movies-shows/show-details/show-cast-images/show-cast-images6.png" class="w-full"/>
              <img src="~/assets/images/movies-shows/show-details/show-cast-images/show-cast-images7.png" class="w-full"/>
              <img src="~/assets/images/movies-shows/show-details/show-cast-images/show-cast-images8.png" class="w-full"/>
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
                <button class="bg-[#141414] border border-[#262626] py-1.5 xl:py-2 px-3 xl:px-3.5 rounded-lg text-sm xl:text-lg font-medium">Sci-Fi TV</button>
                <button class="bg-[#141414] border border-[#262626] py-1.5 xl:py-2 px-3 xl:px-3.5 rounded-lg text-sm xl:text-lg font-medium">Teen TV Shows</button>
                <button class="bg-[#141414] border border-[#262626] py-1.5 xl:py-2 px-3 xl:px-3.5 rounded-lg text-sm xl:text-lg font-medium">US TV Shows</button>
              </div>
            </div>

            <!-- Director div -->
            <div class="flex flex-col gap-2.5 xl:gap-3.5">
              <label class="text-sm lg:text-base xl:text-lg font-medium text-[#999999] flex items-center gap-1"> Director</label>
              <div class="flex flex-wrap gap-2.5">
                <div class="bg-[#141414] border border-[#262626] rounded-lg p-3 xl:p-3.5 flex items-center gap-2.5 w-full">
                  <div>
                    <img src="~/assets/images/movies-shows/show-details/director-image.png" class="w-11.75 xl:w-14.25 h-12.5 xl:h-15 rounded-lg"/>
                  </div>
                  <div>
                    <p class="text-white text-base xl:text-lg font-medium">The Duffer Brothers</p>
                    <p class="text-[#999999] text-sm xl:text-base font-medium">From USA</p>
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
                    <img src="~/assets/images/movies-shows/show-details/music-image.png" class="w-11.75 xl:w-14.25 h-12.5 xl:h-15 rounded-lg"/>
                  </div>
                  <div>
                    <p class="text-white text-base xl:text-lg font-medium">Kyle Dixon</p>
                    <p class="text-[#999999] text-sm xl:text-base font-medium">From USA</p>
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