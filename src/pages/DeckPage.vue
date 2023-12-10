<template>
  <q-page>
    <h2 class="text-center">Deck Page</h2>
    <div class="column items-center">
      <q-tabs v-model="tab">
        <q-tab
          v-for="section in tabs"
          :name="section"
          :key="section"
          :label="section"
        >
        </q-tab>
      </q-tabs>

      <div class="col">
        <QuestionDeck :deck="deck" :key="tab" />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import QuestionDeck from 'src/components/QuestionDeck.vue';

import domestication from 'src/assets/data/domestication.json';
import psychology from 'src/assets/data/psychology.json';

const sections = { domestication, psychology };

const tabs = Object.keys(sections);
const tab = ref(tabs[0] as keyof typeof sections);

const deck = computed(() => {
  return sections[tab.value];
});
</script>
