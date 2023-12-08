import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0,
  }),
  getters: {
    evenOrOdd: (state) => (state.counter % 2 === 0 ? 'even' : 'odd'),
  },
  actions: {
    incrementCounter() {
      this.counter++;
    },
    decrementCounter() {
      this.counter--;
    },
    doubleCounter() {
      this.counter = this.counter * 2;
    },
  },
});
