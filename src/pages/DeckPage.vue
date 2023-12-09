<template>
  <q-page>
    <h1>Deck Page</h1>
    <div class="column items-center">
      <div class="col">
        <QuestionCard />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import QuestionCard from 'src/components/QuestionCard.vue';

export default defineComponent({
  name: 'DeckPage',
  components: {
    QuestionCard,
  },
});
</script>
