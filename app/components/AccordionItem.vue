<script setup lang="ts">
defineProps({
  title: String,
  description: String,
  index: String,
  isOpen: Boolean,
});

defineEmits(["toggle"]);
</script>

<template>
  <div class="overflow-hidden transition-all w-full">
    <!-- Header -->
    <button
      class="w-full flex items-center justify-between p-5 lg:p-6 xl:p-8.5 text-left transition"
      @click="$emit('toggle')"
    >
      <div class="flex items-center gap-4">
        <div class="bg-[#1F1F1F] border border-[#262626] p-3 lg:p-4 xl:p-5 rounded-[10px] text-[16px] xl:text-[20px] font-semibold w-10.5 lg:w-12.5 xl:w-15.5 flex justify-center">
          {{ index }}
        </div>
        <div>
          <h3 class="text-lg lg:text-[20px] xl:text-[22px] font-medium text-white">
            {{ title }}
          </h3>
        </div>
      </div>

      <!-- Icon -->
      <span
        class="text-[30px] text-white transition-transform duration-300 cursor-pointer"
        :class="isOpen && 'rotate-180'"
      >
        {{ isOpen ? "−" : "+" }}
      </span>
    </button>

    <!-- Red line (only when open) -->

    <!-- Content -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="max-h-0 opacity-0"
      enter-to-class="max-h-60 opacity-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="max-h-60 opacity-100"
      leave-to-class="max-h-0 opacity-0"
    >
      <div
        v-if="isOpen"
        class="pl-18 lg:pl-24 xl:pl-30 pb-6 text-[#666666] text-sm lg:text-[16px] xl:text-lg"
      >
      {{ description }}
      </div>
    </transition>

    <transition name="fade">
      <div class="h-0.5 bg-[linear-gradient(90deg,#E5000000,#E50000,#E5000000)]"></div>
    </transition>
  </div>
</template>