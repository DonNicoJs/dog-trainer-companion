<template>
  <q-page>
    <h1>INDEX PAGE</h1>
    <ExampleComponent />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ExampleComponent from 'src/components/ExampleComponent.vue';

export default defineComponent({
  name: 'IndexPage',
  components: { ExampleComponent },
});
</script>
