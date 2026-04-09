<template>
  <!-- <div class="min-h-screen relative">
    <Header />
    <slot />
    <Footer class="mt-25"/>
  </div> -->

  <div class="min-h-screen flex flex-col bg-[#141414]">
  <Header />

  <!-- Main Content -->
  <main class="flex-1">
    <slot />
  </main>

  <!-- Footer always at bottom -->
  <Footer class="mt-25" />
</div>

</template>