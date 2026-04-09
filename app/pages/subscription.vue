<script setup lang="ts">
import FreeTrialSection from '../components/FreeTrialSection'

const billingType = ref<string>('monthly')
const activePlan = ref<string>('standard')
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

const header = ref([
  {
    id: 1,
    title: 'Features',
    label:''
  },
  {
    id: 2,
    title: 'Basic',
    label:''
  },
  {
    id: 3,
    title: 'Standard',
    label:'Popular'
  },
  {
    id: 4,
    title: 'Premium',
    label:''
  }
])

const planData = ref([
  {
    id: '01',
    features: 'Price',
    basic: '$9.99/Month',
    standard: '$12.99/Month',
    premium:'$14.99/Month'
  },
  {
    id: '02',
    features: 'Content',
    basic: 'Access to a wide selection of movies and shows, including some new releases.',
    standard: 'Access to a wider selection of movies and shows, including most new releases and exclusive content',
    premium:'Access to a widest selection of movies and shows, including all new releases and Offline Viewing'
  },
  {
    id: '03',
    features: 'Devices',
    basic: 'Watch on one device simultaneously',
    standard: 'Watch on Two device simultaneously',
    premium:'Watch on Two device simultaneously'
  },
  {
    id: '04',
    features: 'Free Trail',
    basic: '7 Days',
    standard: '7 Days',
    premium:'7 Days'
  },
  {
    id: '05',
    features: 'Cancel Anytime',
    basic: 'Yes',
    standard: 'Yes',
    premium:'Yes'
  },
  {
    id: '06',
    features: 'HDR',
    basic: 'No',
    standard: 'Yes',
    premium:'Yes'
  },
  {
    id: '07',
    features: 'Dolby Atmos',
    basic: 'No',
    standard: 'Yes',
    premium:'Yes'
  },
  {
    id: '08',
    features: 'Ad - Free',
    basic: 'No',
    standard: 'Yes',
    premium:'Yes'
  },
  {
    id: '09',
    features: 'Offline Viewing',
    basic: 'No',
    standard: 'Yes, for select titles.',
    premium:'Yes, for all titles.'
  },
  {
    id: '10',
    features: 'Family Sharing',
    basic: 'No',
    standard: 'Yes, up to 5 family members.',
    premium:'Yes, up to 6 family members.'
  },
])


const mobilePlanData = ref({
  basic: {
    price: '$9.99/Month',
    trial: '5 Days',
    content: 'Limited movies and shows',
    devices: '1 Device',
    cancel: 'Yes',
    hdr: 'No',
    dolby: 'No',
    adFree: 'No',
    offline: 'No',
    family: '1 Member'
  },
  standard: {
    price: '$12.99/Month',
    trial: '7 Days',
    content: 'Access to a wider selection of movies and shows, including most new releases and exclusive content',
    devices: '2 Devices',
    cancel: 'Yes',
    hdr: 'Yes',
    dolby: 'Yes',
    adFree: 'Yes',
    offline: 'Yes, for select titles',
    family: '5 Members'
  },
  premium: {
    price: '$19.99/Month',
    trial: '14 Days',
    content: 'All content including 4K exclusives',
    devices: '4 Devices',
    cancel: 'Yes',
    hdr: 'Yes',
    dolby: 'Yes',
    adFree: 'Yes',
    offline: 'Yes',
    family: '8 Members'
  }
})

const plan = computed(() => mobilePlanData.value[activePlan.value])

const yearlyPlans = computed(() =>
  plans.value.map(plan => ({
    ...plan,
    price: +(plan.price * 12 * 0.8).toFixed(2)
  }))
)

const activePlans = computed(() =>
  billingType.value === 'monthly'
    ? plans.value
    : yearlyPlans.value
)

const selectBilling = (type: string) => {
  billingType.value = type
}

</script>

<template>
  <section class="w-full text-white pt-35.5! lg:pt-34.5! xl:pt-42.5! px-4 lg:px-20 xl:px-40.5">

    <!-- Choose the plan section -->
    <div class="text-white flex flex-col gap-10 lg:gap-15 xl:gap-20">
      <div class="flex flex-wrap justify-between items-center w-full gap-3">
        <div>
          <h2 class="text-[24px] lg:text-[28px] xl:text-[38px] font-bold leading-[150%]">Choose the plan that's right for you</h2>
          <p class="text-sm lg:text-[16px] xl:text-lg text-[#999999] max-w-324.25">Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!</p>
        </div>
        <div class="bg-[#0F0F0F] p-2 xl:p-2.5 border border-[#262626] rounded-[10px] text-white w-full md:w-fit flex">

          <button
            class="text-sm xl:text-lg font-medium  py-2 xl:py-3.5 px-5 xl:px-6 rounded-[10px] w-full cursor-pointer"
            :class="billingType === 'monthly'
              ? 'bg-[#1F1F1F]'
              : 'bg-black'"
            @click="selectBilling('monthly')"
          >
            Monthly
          </button>

          <button
            class="text-sm xl:text-lg font-medium py-2 xl:py-3.5 px-5 xl:px-6 rounded-[10px] w-full cursor-pointer"
            :class="billingType === 'yearly'
              ? 'bg-[#1F1F1F]'
              : 'bg-black'"
            @click="selectBilling('yearly')"
          >
            Yearly
          </button>
        </div>
      </div>
      <!-- the plan div -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 xl:gap-7.5 w-full">
        <div
          v-for="plan in activePlans"
          :key="plan.id"
          class="bg-[#1A1A1A] border border-[#262626] p-6 lg:p-10 xl:p-12.5 rounded-xl text-white flex flex-col w-fit gap-7.5 lg:gap-10 xl:gap-12.5"
        >
          <div>
            <p class="text-lg lg:text-[20px] xl:text-[24px] font-bold">{{ plan.title }}</p>
            <p class="text-sm lg:text-base xl:text-lg text-[#999999]">{{ plan.description }}</p>
          </div>
          <div>
            <p class="text-[24px] lg:text-[30px] xl:text-[40px] font-semibold text-white">${{ plan.price }} <span class="text-[#999999] text-sm lg:text-base xl:text-lg font-medium">/{{ billingType === 'monthly' ? 'month' : 'year' }}</span></p>
          </div>
          <div class="flex gap-5">
            <button class="text-sm xl:text-lg font-semibold bg-[#141414] border border-[#262626] px-4 xl:px-6 py-3.5 xl:py-4.5 rounded-lg">Start Free Trial</button>
            <button class="text-sm xl:text-lg font-semibold bg-[#E50000] px-4 xl:px-6 py-3.5 xl:py-4.5 rounded-lg">Start Free Trial</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Compare our plans section -->
    <div class="mt-10 lg:mt-15 xl:mt-25 flex flex-col gap-15 xl:gap-20">
      <div class="text-white">
        <h1 class="text-[24px] lg:text-[38px] xl:text-[48px] font-bold leading-[150%]">Compare our plans and find the right one for you</h1>
        <p class="text-sm lg:text-base xl:text-lg text-[#999999]">StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you.</p>
      </div>

      <div>
        <table class="border border-[#262626] rounded-xl w-full hidden sm:block">
          <thead class="bg-[#0F0F0F] w-full">
            <th v-for="(head,index) in header" :key="index" class="text-lg xl:text-[20px] font-semibold p-4 lg:p-6 xl:p-7.5 text-start border-r border-[#262626]">{{ head.title }}</th>
          </thead>
          <tbody>
            <tr
              v-for="plan in planData"
              :key="plan.id"
              class="border-t border-[#262626]"
            >
            <td class="w-[25%] p-4 lg:p-6 xl:p-7.5 text-[#999999] border-r border-[#262626] text-base xl:text-lg font-medium">{{ plan.features }}</td>
            <td class="w-[25%] p-4 lg:p-6 xl:p-7.5 text-[#999999] border-r border-[#262626] text-base xl:text-lg font-medium">{{ plan.basic }}</td>
            <td class="w-[25%] p-4 lg:p-6 xl:p-7.5 text-[#999999] border-r border-[#262626] text-base xl:text-lg font-medium">{{ plan.standard }}</td>
            <td class="w-[25%] p-4 lg:p-6 xl:p-7.5 text-[#999999] border-r border-[#262626] text-base xl:text-lg font-medium">{{ plan.premium }}</td>
            </tr>
          </tbody>
        </table>

        <div class="sm:hidden flex flex-col gap-5">
          <div class="bg-[#0F0F0F] border border-[#262626] p-2 rounded-lg flex items-center w-full">
            <p
              v-for="type in ['basic', 'standard', 'premium']"
              :key="type"
              @click="activePlan = type"
              class="py-3 px-5 text-sm font-medium w-full text-center cursor-pointer rounded-md transition"
              :class="activePlan === type
                ? 'bg-[#1F1F1F] text-white'
                : 'text-[#999999]'"
            >
              {{ type.charAt(0).toUpperCase() + type.slice(1) }}
            </p>
          </div>

          <div class="bg-[#0F0F0F] border border-[#262626] p-6 rounded-xl w-full flex flex-col gap-6">
            <div class="flex gap-5 w-full">
              <div class="flex flex-col gap-1 w-full">
                <label class="text-sm font-medium text-[#999999]">Price</label>
                <p class="text-sm font-medium text-[#F1F1F3]">{{ plan.price }}</p>
              </div>

              <div class="flex flex-col gap-1 w-full">
                <label class="text-sm font-medium text-[#999999]">Free Trial</label>
                <p class="text-sm font-medium text-[#F1F1F3]">{{ plan.trial }}</p>
              </div>
            </div>

            <div class="flex flex-col gap-1">
              <label class="text-sm font-medium text-[#999999]">Content</label>
              <p class="text-sm font-medium text-[#F1F1F3]">{{ plan.content }}</p>
            </div>

            <div class="flex flex-col gap-1">
              <label class="text-sm font-medium text-[#999999]">Devices</label>
              <p class="text-sm font-medium text-[#F1F1F3]">{{ plan.devices }}</p>
            </div>

            <div class="flex gap-5">
              <div class="flex flex-col gap-1 w-full">
                <label class="text-sm font-medium text-[#999999]">Cancel Anytime</label>
                <p class="text-sm font-medium text-[#F1F1F3]">{{ plan.cancel }}</p>
              </div>

              <div class="flex flex-col gap-1 w-full">
                <label class="text-sm font-medium text-[#999999]">HDR</label>
                <p class="text-sm font-medium text-[#F1F1F3]">{{ plan.hdr }}</p>
              </div>
            </div>

            <div class="flex gap-5">
              <div class="flex flex-col gap-1 w-full">
                <label class="text-sm font-medium text-[#999999]">Dolby Atmos</label>
                <p class="text-sm font-medium text-[#F1F1F3]">{{ plan.dolby }}</p>
              </div>

              <div class="flex flex-col gap-1 w-full">
                <label class="text-sm font-medium text-[#999999]">Ad-Free</label>
                <p class="text-sm font-medium text-[#F1F1F3]">{{ plan.adFree }}</p>
              </div>
            </div>

            <div class="flex gap-5">
              <div class="flex flex-col gap-1 w-full">
                <label class="text-sm font-medium text-[#999999]">Offline Viewing</label>
                <p class="text-sm font-medium text-[#F1F1F3]">{{ plan.offline }}</p>
              </div>

              <div class="flex flex-col gap-1 w-full">
                <label class="text-sm font-medium text-[#999999]">Family Sharing</label>
                <p class="text-sm font-medium text-[#F1F1F3]">{{ plan.family }}</p>
              </div>
            </div>
          </div>
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