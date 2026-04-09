<script setup lang="ts">
import { IconPlayerPlayFilled, IconArrowNarrowLeft, IconArrowNarrowRight } from '@tabler/icons-vue';
import AccordionItem from "./AccordionItem.vue";
import FreeTrialSection from '../components/FreeTrialSection'
import img1 from '~/assets/images/home/categories/cate-image1.png'
import img2 from '~/assets/images/home/categories/cate-image2.png'
import img3 from '~/assets/images/home/categories/cate-image3.png'
import img4 from '~/assets/images/home/categories/cate-image4.png'
import img5 from '~/assets/images/home/categories/cate-image5.png'
import smartPhones from '~/assets/images/home/streaming-icon/smart-phones.svg'
import tablet from '~/assets/images/home/streaming-icon/tablet.svg'
import smartTv from '~/assets/images/home/streaming-icon/smart-tv.svg'
import laptop from '~/assets/images/home/streaming-icon/laptop.svg'
import gaming from '~/assets/images/home/streaming-icon/gaming.svg'
import VR from '~/assets/images/home/streaming-icon/VR.svg'
const categories = ref([
  {
    id: 1,
    name: 'Action',
    image: img1,
  },
  {
    id: 2,
    name: 'Adventure',
    image: img2,
  },
  {
    id: 3,
    name: 'Comedy',
    image: img3,
  },
  {
    id: 4,
    name: 'Drama',
    image: img4,
  },
  {
    id: 5,
    name: 'Horror',
    image: img5,
  },
])

const streaming = ref([
  {
    id: 1,
    name: 'Smartphones',
    image: smartPhones,
  },
  {
    id: 2,
    name: 'Tablet',
    image: tablet,
  },
  {
    id: 3,
    name: 'Smart TV',
    image: smartTv,
  },
  {
    id: 4,
    name: 'Laptops',
    image: laptop,
  },
  {
    id: 5,
    name: 'Gaming Consoles',
    image: gaming,
  },
  {
    id: 6,
    name: 'VR Headsets',
    image: VR,
  },
])

const items = [
  { title: "What is StreamVibe?", description: "StreamVibe is a streaming service that allows you to watch movies and shows on demand." },
  { title: "How much does StreamVibe cost?", description: "Watch on mobile, tablet, laptop, and smart TV." },
  { title: "What content is available on StreamVibe?", description: "Free and premium plans are available." },
  { title: "How can I watch StreamVibe?", description: "Yes, you can cancel your subscription anytime." },

  { title: "How do I sign up for StreamVibe?", description: "Download shows and watch offline anytime." },
  { title: "What is the StreamVibe free trial?", description: "Stream on multiple devices simultaneously." },
  { title: "How do I contact StreamVibe customer support?", description: "Yes, parental controls are supported." },
  { title: "What are the StreamVibe payment methods?", description: "Enjoy ultra-HD streaming with premium plans." },
];

const plans = ref([
  {
    id: 1,
    title: "Basic Plan",
    description: "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
    price: 9.99
  },
  {
    id: 2,
    title: "Standard Plan",
    description: "Access to a wider selection of movies and shows, including most new releases and exclusive content",
    price: 12.99
  },
  {
    id: 3,
    title: "Premium Plan",
    description: "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
    price: 14.99
  },
])

const openIndex = ref(0);

// split data
const leftItems = computed(() => items.slice(0, 4));
const rightItems = computed(() => items.slice(4, 8));

const toggleAccordion = (index) => {
  openIndex.value = openIndex.value === index ? -1 : index;
};
</script>

<template>
  <section class="w-full bg-[#141414] text-white">

    <!-- Hero section -->
    <div class="h-159.75 lg:h-273 w-full relative">
      <div class="h-125 lg:h-215 w-full bg-[url('~/assets/images/home/hero-image.png')] bg-cover bg-center" >
      </div>

      <div class="absolute top-30 lg:top-45 flex flex-col justify-center items-center w-full">
        <img src="~/assets/images/home/hero-center-image.png" class="w-50 lg:w-75"/>
      </div>
      <div class="absolute bottom-5 flex flex-col justify-center items-center w-full gap-3.5">
        <h2 class="font-bold text-[28px] lg:text-[48px] xl:text-[58px] text-center leading-[150%]">The Best Streaming Experience</h2>
        <div class="hidden lg:flex xl:max-w-274 lg:max-w-285 text-center text-[#999999] lg:text-sm xl:text-lg font-normal leading-[150%]">StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</div>
        <div class="flex lg:hidden text-center text-[#999999] text-sm font-normal leading-[150%]">StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere.</div>
          <button class="flex items-center bg-[#E50000] px-6 py-3.5 py-xl:py-4.5  rounded-lg gap-1 text-lg leading-[150%] font-semibold mt-7.5 lg:mt-12.5">
            <IconPlayerPlayFilled size="24"/>
              <span>Start Watching Now</span>
          </button>
      </div>
    </div>

    <!-- Categories section -->
    <div class="text-white mt-10 lg:mt-15 xl:mt-25 mx-4 lg:mx-20 xl:mx-40.5 flex flex-col gap-10 lg:gap-15 xl:gap-20">
      <div class="flex gap-5 justify-between items-center w-full">
        <div>
          <h2 class="text-[24px] lg:text-[28px] xl:text-[38px] font-bold leading-[150%]">Explore our wide variety of categories</h2>
          <p class="text-sm lg:text-[16px] xl:text-lg text-[#999999]">Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</p>
        </div>
        <div>
          <div class="hidden lg:flex bg-[#0F0F0F] border border-[#1F1F1F] lg:p-3 xl:p-4 rounded-xl items-center lg:gap-3 xl:gap-4">
            <div class="bg-[#1A1A1A] border border-[#1F1F1F] rounded-lg lg:p-2.5 xl:p-3.5  text-white">
              <IconArrowNarrowLeft size="28"/>
            </div>
            <div>
              <img src="~/assets/images/progress-indicators.png"/>
            </div>
            <div class="bg-[#1A1A1A] border border-[#1F1F1F] rounded-lg lg:p-2.5 xl:p-3.5  text-white">
              <IconArrowNarrowRight size="28"/>
            </div>
          </div>
        </div>
      </div>

      <!-- Category image  -->
      <div class="flex gap-5 justify-between w-full overflow-x-auto">

        <div
          v-for="item in categories"
          :key="item.id"
          class="bg-[#1A1A1A] border border-[#262626] p-5 lg:p-6 xl:p-7.5 rounded-xl min-w-55"
        >
          <img
            :src="item.image"
            :alt="item.name"
            class="w-full rounded-lg mb-4"
          />

          <div class="flex justify-between items-center gap-3 text-white">
            <p class="lg:text-[16px] xl:text-lg font-semibold">
              {{ item.name }}
            </p>
            <IconArrowNarrowRight class="lg:w-6 xl:w-7.5" />
          </div>
        </div>

      </div>
    </div>

    <!-- Provide streaming section -->
    <div class="text-white mt-25 mx-4 lg:mx-20 xl:mx-40.5 flex flex-col gap-10 lg:gap-15 xl:gap-20">
      <div class="flex justify-between items-center w-full">
        <div>
          <h2 class="text-[24px] lg:text-[28px] xl:text-[38px] font-bold leading-[150%]">We Provide you streaming experience across various devices.</h2>
          <p class="text-sm lg:text-[16px] xl:text-lg text-[#999999] max-w-324.25">With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.</p>
        </div>
      </div>

      <!-- Streaming div -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 xl:gap-7.5 w-full">
        <div
          v-for="item in streaming"
          :key="item.id"
          class="bg-[radial-gradient(80%_80%_at_100%_0%,rgba(229,0,0,0.35)_0%,rgba(229,0,0,0.15)_0%,rgba(229,0,0,0.05)_70%,transparent_100%)] p-6 lg:p-10 xl:p-12.5 rounded-xl border border-[#262626] flex flex-col gap-5 lg:gap-6 xl:gap-7.5">
          <div class="flex items-center gap-4">
            <div class="bg-[#141414] border border-[#1F1F1F] p-2.5 xl:p-4 rounded-xl w-11 lg:w-13.5 xl:w-18 h-11 lg:h-13.5 xl:h-18 flex justify-center text-whites">
              <img :src="item.image"/>
            </div>
            <p class="text-lg lg:text-[20px] xl:text-[24px] font-semibold">{{ item.name }}</p>
          </div>
          <div>
            <p class="text-sm lg:text-[16px] xl:text-lg text-[#999999] max-w-103.25">StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
          </div>
        </div>
      </div>
    </div>


    <!-- Frequently section -->
    <div class="text-white lg:mt-15 mt-10 xl:mt-25 mx-4 lg:mx-20 xl:mx-40.5 flex flex-col gap-10 lg:gap-15 xl:gap-20">
      <div class="flex flex-wrap justify-between items-end w-full gap-3">
        <div>
          <h2 class="text-[24px] lg:text-[28px] xl:text-[38px] font-bold leading-[150%]">Frequently Asked Questions</h2>
          <p class="text-sm lg:text-[16px] xl:text-lg text-[#999999] max-w-324.25">Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.</p>
        </div>
        <button class="bg-[#E50000] px-5 xl:px-6 py-3.5 xl:py-4.5 rounded-lg text-white lg:text-sm xl:text-lg font-semibold">Ask a Question</button>
      </div>

      <!-- Questions div -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-10 xl:gap-20">
        <!-- LEFT COLUMN (1–4) -->
        <div class="space-y-4">
          <AccordionItem
            v-for="(item, i) in leftItems"
            :key="i"
            :index="String(i + 1).padStart(2, '0')"
            :title="item.title"
            :description="item.description"
            :isOpen="openIndex === i"
            @toggle="toggleAccordion(i)"
          />
        </div>

        <!-- RIGHT COLUMN (5–8) -->
        <div class="space-y-4">
          <AccordionItem
            v-for="(item, i) in rightItems"
            :key="i + 4"
            :index="String(i + 5).padStart(2, '0')"
            :title="item.title"
            :description="item.description"
            :isOpen="openIndex === i + 4"
            @toggle="toggleAccordion(i + 4)"
          />
        </div>
      </div>
    </div>


    <!-- Choose the plan section -->
    <div class="text-white lg:mt-15 mt-10 xl:mt-25 mx-4 lg:mx-20 xl:mx-40.5 flex flex-col gap-10 lg:gap-15 xl:gap-20">
      <div class="flex flex-wrap justify-between items-center w-full gap-3">
        <div>
          <h2 class="text-[24px] lg:text-[28px] xl:text-[38px] font-bold leading-[150%]">Choose the plan that's right for you</h2>
          <p class="text-sm lg:text-[16px] xl:text-lg text-[#999999] max-w-324.25">Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!</p>
        </div>
        <div class="bg-[#0F0F0F] p-2 xl:p-2.5 border border-[#262626] rounded-[10px] text-white">
          <button class="text-sm xl:text-lg font-medium bg-[#1F1F1F] py-2 xl:py-3.5 px-5 xl:px-6 rounded-[10px]">Monthly</button>
          <button class=" text-[#999999] text-sm xl:text-lg font-medium py-2 xl:py-3.5 px-5 xl:px-6 rounded-[10px]">Yearly</button>
        </div>
      </div>
      <!-- the plan div -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 xl:gap-7.5 w-full">
        <div
          v-for="plan in plans"
          :key="plan.id"
          class="bg-[#1A1A1A] border border-[#262626] p-6 lg:p-10 xl:p-12.5 rounded-xl text-white flex flex-col w-fit gap-7.5 lg:gap-10 xl:gap-12.5"
        >
          <div>
            <p class="text-lg lg:text-[20px] xl:text-[24px] font-bold">{{ plan.title }}</p>
            <p class="text-sm lg:text-base xl:text-lg text-[#999999]">{{ plan.description }}</p>
          </div>
          <div>
            <p class="text-[24px] lg:text-[30px] xl:text-[40px] font-semibold text-white">${{ plan.price }} <span class="text-[#999999] text-sm lg:text-base xl:text-lg font-medium">/month</span></p>
          </div>
          <div class="flex gap-5">
            <button class="text-sm xl:text-lg font-semibold bg-[#141414] border border-[#262626] px-4 xl:px-6 py-3.5 xl:py-4.5 rounded-lg">Start Free Trial</button>
            <button class="text-sm xl:text-lg font-semibold bg-[#E50000] px-4 xl:px-6 py-3.5 xl:py-4.5 rounded-lg">Start Free Trial</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Free trial section -->
    <div class="lg:mt-15 mt-10 xl:mt-25 mx-4 lg:mx-20 xl:mx-40.5">
      <FreeTrialSection/>
    </div>
  </section>
</template>