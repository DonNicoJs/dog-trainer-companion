<template>
  <h4>Click on the number to double it!</h4>
  <button @click="counterStore.doubleCounter">
    {{ counterStore.counter }}
  </button>
  <div>
    <button @click="counterStore.decrementCounter">-</button>
    <button @click="counterStore.incrementCounter">+</button>
  </div>
  <div>{{ counterStore.evenOrOdd }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCounterStore } from 'src/stores/counter-store';

export default defineComponent({
  name: 'ExampleComponent',
  setup() {
    const counterStore = useCounterStore();

    return {
      counterStore,
    };
  },
});
</script>
