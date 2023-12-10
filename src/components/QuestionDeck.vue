<template>
  <q-card class="my-card bg-grey-9 text-white" bordered>
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
</template>

<script lang="ts" setup>
import { defineProps, ref, computed } from 'vue';
import type { Ref } from 'vue';

interface Card {
  question: string;
  answer: string;
}

const props = defineProps<{
  deck: Array<Card>;
}>();

const isCardRevealed = ref(false);
const cardIndex = ref(0);

const workingDeck: Ref<number[]> = ref(Array.from(props.deck.keys()));

const cardContent = computed(() => {
  return props.deck[cardIndex.value];
});

const onClick = () => {
  if (isCardRevealed.value) {
    workingDeck.value.splice(cardIndex.value, 1);
    cardIndex.value = Math.floor(Math.random() * workingDeck.value.length);
  }
  isCardRevealed.value = !isCardRevealed.value;
};
</script>
