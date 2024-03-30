<template>
  <div class="min-h-screen flex relative lg:static surface-ground">
    <NuxtLoadingIndicator />
    <SideBar></SideBar>
    <div class="min-h-screen flex flex-column relative flex-auto">
      <TopBar></TopBar>
      <div class="p-5 flex flex-column flex-auto">
        <div
          class="border-2 border-dashed surface-border border-round surface-section flex-auto"
        >
          <NuxtPage />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SideBar from "~/components/layout/SideBar.vue";
import TopBar from "~/components/layout/TopBar.vue";
</script>
