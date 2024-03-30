<template>
  <div
    id="app-sidebar-1"
    class="surface-section h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none"
    style="width: 280px"
  >
    <div class="flex flex-column h-full">
      <div
        class="flex align-items-center px-5 flex-shrink-0"
        style="height: 60px"
      >
        <span>Dog Trainer</span>
      </div>
      <div class="overflow-y-auto">
        <ul class="list-none p-3 m-0">
          <li>
            <div
              v-ripple
              class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer p-ripple"
              v-styleclass="{
                selector: '@next',
                enterClass: 'hidden',
                enterActiveClass: 'slidedown',
                leaveToClass: 'hidden',
                leaveActiveClass: 'slideup',
              }"
            >
              <span class="font-medium">Chapters</span>
              <i class="pi pi-chevron-down"></i>
            </div>
            <ul class="list-none p-0 m-0 overflow-hidden">
              <li v-for="chapter of chapters" :key="chapter">
                <NuxtLink
                  v-ripple
                  class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                  :to="`/chapters/${chapter}`"
                >
                  <i class="pi pi-home mr-2"></i>
                  <span class="font-medium capitalize">{{ chapter }}</span>
                </NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- <div class="mt-auto">
        <hr class="mb-3 mx-3 border-top-1 border-none surface-border" />
        <a
          v-ripple
          class="m-3 flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
        >
          <img
            src="/images/blocks/avatars/circle/avatar-f-1.png"
            class="mr-2"
            style="width: 28px; height: 28px"
          />
          <span class="font-medium">Amy Elsner</span>
        </a>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: content } = await useAsyncData("chapters", () =>
  queryContent().find()
);
const chapters = content.value?.reduce((prev, curr) => {
  return [...prev, curr.title?.toLocaleLowerCase()];
}, []);
</script>
