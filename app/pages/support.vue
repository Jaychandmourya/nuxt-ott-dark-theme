<script setup lang="ts">
import AccordionItem from "../components/AccordionItem.vue";
import FreeTrialSection from '../components/FreeTrialSection'
import { VueTelInput } from 'vue-tel-input'
import 'vue-tel-input/vue-tel-input.css'

const openIndex = ref(0);
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

// split data
const leftItems = computed(() => items.slice(0, 4));
const rightItems = computed(() => items.slice(4, 8));

const toggleAccordion = (index: any) => {
  openIndex.value = openIndex.value === index ? -1 : index;
};
</script>

<template>
  <section class="w-full text-white pt-35.5! lg:pt-34.5! xl:pt-42.5! px-4 lg:px-20 xl:px-40.5">
    <!-- Hero section -->
    <div class="grid grid-cols-12 lg:gap-12.5 xl:gap-20">
      <!-- First Div (4 columns) -->
      <div class="col-span-12 lg:col-span-4">
        <div class="flex flex-col gap-2.5">
          <h1 class="text-[28px] lg:text-[38px] xl:text-[48px] leading-[150%] font-bold">
            Welcome to our support page!
          </h1>
          <p class="text-sm lg:text-base xl:text-lg text-[#999999]">
            We're here to help you with any problems you may be having with our product.
          </p>
        </div>

        <div class="w-full mt-10">
          <img
            src="~/assets/images/support/support-hero-image.png"
            class="w-full bg-cover"
            alt="Support"
          />
        </div>
      </div>

      <!-- Second Div (8 columns) -->
      <div class="col-span-12 lg:col-span-8">
        <div class="bg-[#0F0F0F] p-6 lg:p-10 xl:p-12.5 rounded-xl border border-[#262626] flex flex-col gap-12.5">
          <!-- First and last name -->
          <div class="grid grid-cols-12 gap-5 xl:gap-12.5 w-full">
            <!-- First Name -->
            <div class="col-span-12 md:col-span-6 flex flex-col gap-3 xl:gap-4">
              <label class="text-base xl:text-lg font-semibold">First Name</label>
              <input
                type="text"
                placeholder="Enter First Name"
                class="bg-[#141414] p-4 xl:p-5 rounded-lg border border-[#262626] text-[#999999] w-full"
              />
            </div>

            <!-- Last Name -->
            <div class="col-span-12 md:col-span-6 flex flex-col gap-3 xl:gap-4">
              <label class="text-base xl:text-lg font-semibold">Last Name</label>
              <input
                type="text"
                placeholder="Enter Last Name"
                class="bg-[#141414] p-4 xl:p-5 rounded-lg border border-[#262626] text-[#999999] w-full"
              />
            </div>
          </div>

          <!-- Email and Phone -->
          <div class="grid grid-cols-12 gap-5 xl:gap-12.5 w-full">
            <div class="col-span-12 md:col-span-6 flex flex-col gap-3 xl:gap-4 w-full">
              <label class="text-base xl:text-lg font-semibold">Email</label>
              <input type="text" placeholder="Enter your Email" class="bg-[#141414] p-4 xl:p-5 rounded-lg border border-[#262626] text-[#999999] w-full"/>
            </div>

            <div class="col-span-12 md:col-span-6 flex flex-col gap-3 xl:gap-4 w-full">
              <label class="text-base xl:text-lg font-semibold">Phone Number</label>
              <VueTelInput />
            </div>
          </div>

          <div class="flex gap-5 xl:gap-12.5 w-full">
            <div class="flex flex-col gap-3 xl:gap-4 w-full">
              <label class="text-base xl:text-lg font-semibold">Message</label>
              <textarea placeholder="Enter your Message" rows="3" class="bg-[#141414] p-4 xl:p-5 rounded-lg border border-[#262626] text-[#999999]"/>
            </div>
          </div>

          <div class="flex gap-12.5 w-full">
            <div class="flex flex-wrap gap-4 justify-between items-center w-full">
              <div class="form-group">
                <input type="checkbox" id="html">
                <label for="html" class="text-[#999999] text-base xl:text-lg">I agree with Terms of Use and Privacy Policy</label>
              </div>

              <button class="bg-[#E50000] py-4.5 px-6 rounded-lg lg:text-sm xl:text-lg font-semibold">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Frequently section -->
    <div class="text-white lg:mt-15 mt-10 xl:mt-25 mx-4 flex flex-col gap-10 lg:gap-15 xl:gap-20">
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
            :index="String(i + 5)"
            :title="item.title"
            :description="item.description"
            :isOpen="openIndex === i + 4"
            @toggle="toggleAccordion(i + 4)"
          />
        </div>
      </div>
    </div>

    <!-- Free trial section -->
    <div class="lg:mt-15 mt-10 xl:mt-25">
      <FreeTrialSection/>
    </div>
  </section>
</template>
<style>
.vue-tel-input {
    border-radius: 8px !important;
    display: flex;
    border: 1px solid #262626;  
    text-align: left;
    padding: 10px;
}

@media (min-width: 1025px) {
  .vue-tel-input {
    padding: 13px; /* 1024px and up */
  }
}
.vti__dropdown-list{
  background-color: #141414;
}
.vti__dropdown:hover{
  background-color: #141414;
}

.vue-tel-input:focus-within {
    box-shadow: inset 0 0px 0px #00000013, 0 0 0px #FFFFFF !important;
    border-color: #FFFFFF !important;
}

.new {
  padding: 50px;
}

.form-group input {
  padding: 0;
  height: initial;
  width: initial;
  margin-bottom: 0;
  display: none;
  cursor: pointer;
}

.form-group label {
  position: relative;
  cursor: pointer;
}

.form-group label:before {
  content:'';
  -webkit-appearance: none;
  background-color: transparent;
  border: 1px solid #262626;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
  padding: 11px;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  margin-right: 10px;
  border-radius: 4px;
}

.form-group input:checked + label:after {
  content: '';
  display: block;
  position: absolute;
  top: 2px;
  left: 9px;
  width: 6px;
  height: 14px;
  border: solid #FFFFFF;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}
</style>