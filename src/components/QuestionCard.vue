<template>
  <q-card class="my-card bg-grey-9 text-white" bordered>
    <q-card-section>
      <div class="text-subtitle2">{{ cardContent.question }}</div>
    </q-card-section>

    <q-separator dark inset />

    <q-card-section v-if="!isCardRevealed">
      <q-icon name="question_mark" size="xl" />
    </q-card-section>
    <q-card-section v-else> {{ cardContent.answer }} </q-card-section>

    <q-card-actions>
      <q-btn flat @click="onReveal">
        <span v-if="!isCardRevealed">Reveal</span>
        <span v-else>Hide</span>
      </q-btn>
      <q-btn flat @click="onNext">Next</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import domestication from 'src/assets/data/domestication.json';

export default defineComponent({
  name: 'QuestionCard',
  setup() {
    const isCardRevealed = ref(false);
    const cardIndex = ref(0);

    const cardContent = computed(() => {
      return domestication[cardIndex.value];
    });

    const onReveal = () => {
      isCardRevealed.value = !isCardRevealed.value;
    };

    const onNext = () => {
      isCardRevealed.value = false;
      cardIndex.value = Math.floor(Math.random() * domestication.length);
    };

    return {
      isCardRevealed,
      onReveal,
      onNext,
      cardContent,
    };
  },
});
</script>
