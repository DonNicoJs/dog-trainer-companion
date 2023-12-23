<template>
  <div align="center">Remaining Cards: {{ workingDeck.length }}</div>

  <q-card
    class="my-card bg-grey-9 text-white"
    bordered
    v-if="workingDeck.length !== 0"
  >
    <q-card-section>
      <div class="text-subtitle2">
        {{ cardContent.question }}
      </div>
    </q-card-section>

    <q-separator dark inset />

    <q-card-section v-if="!isCardRevealed" class="text-center">
      <q-icon name="question_mark" size="xl" />
    </q-card-section>
    <q-card-section v-else> {{ cardContent.answer }} </q-card-section>

    <q-card-actions align="right">
      <q-btn flat @click="onClick">
        <span v-if="!isCardRevealed">Reveal</span>
        <span v-else>Next</span>
      </q-btn>
    </q-card-actions>
  </q-card>
  <q-card class="my-card bg-grey-9 text-white" align="center" bordered v-else>
    FINISHED
  </q-card>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import type { Ref } from 'vue';

interface Card {
  question: string;
  answer: string;
}

const shuffleArray = (array: number[]) => {
  let shuffledArray = array.slice(); // Create a copy of the array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    // Generate a random index
    let j = Math.floor(Math.random() * (i + 1));
    // Swap elements at indices i and j
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const props = defineProps<{
  deck: Array<Card>;
}>();

const isCardRevealed = ref(false);

const workingDeck: Ref<number[]> = ref(
  shuffleArray(Array.from(props.deck.keys()))
);

const cardIndex = ref(workingDeck.value[0]);

const cardContent = computed(() => {
  return props.deck[cardIndex.value];
});

const onClick = () => {
  if (isCardRevealed.value) {
    workingDeck.value.splice(0, 1);
    cardIndex.value = workingDeck.value[0];
  }
  isCardRevealed.value = !isCardRevealed.value;
};
</script>
