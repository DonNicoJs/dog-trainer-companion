<template>
  <div class="grid">
    <div
      class="col-12 lg:col-4 p-3"
      v-for="(question, index) of questions"
      @click="answer(question)"
    >
      <div
        class="shadow-2 border-round surface-card mb-3 h-full flex-column justify-content-between flex"
      >
        <div class="p-4">
          <div class="flex align-items-center">
            <span
              class="inline-flex border-circle align-items-center justify-content-center bg-green-100 mr-3"
              style="width: 38px; height: 38px"
            >
              <i class="pi pi-question text-xl text-green-600"></i>
            </span>
            <span class="text-900 font-medium text-2xl">
              Domanda {{ index + 1 }}
            </span>
          </div>
          <div class="text-900 my-3 text-xl font-medium"></div>
          <p class="mt-0 mb-3 text-700 line-height-3">
            {{ question.question }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <Dialog
    v-model:visible="visible"
    :modal="true"
    :closable="false"
    :showHeader="false"
    :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
    :style="{ width: '45vw' }"
  >
    <form class="flex flex-column w-full mt-4">
      <p class="font-semibold text-xl mt-0 mb-4 text-900 text-center">
        {{ currentQuestion.question }}
      </p>

      <div
        v-for="answer of possibleAnswers"
        class="flex justify-content-between w-full align-items-center border-1 p-3 border-round surface-border mb-2 cursor-pointer"
        :class="{ 'surface-hover': currentAnswer === 'Visa' }"
        @click="currentAnswer = answer"
      >
        <p class="font-medium text-xl mt-0 mb-0 mr-2 text-900">
          {{ answer }}
        </p>

        <RadioButton
          name="answer"
          :value="answer"
          v-model="currentAnswer"
        ></RadioButton>
      </div>
    </form>
    <template #footer>
      <div class="flex mt-3 justify-content-between align-items-center">
        <Button
          @click="close"
          icon="pi pi-times"
          label="Cancel"
          class="p-button-text m-0"
        ></Button>
        <Button
          @click="close"
          icon="pi pi-check"
          :disabled="!isValidAnswer"
          label="Save"
          class="m-0"
        ></Button>
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import shuffle from "lodash/shuffle";

const route = useRoute();
const chapter = route.params.chapter.toString();

const { data: content } = await useAsyncData(chapter, () =>
  queryContent(chapter).findOne()
);

const questions = computed(() => {
  return content?.value?.body;
});

const answers = computed(() => {
  return questions.value.reduce((prev, curr) => {
    return [...prev, curr.answer];
  }, []);
});

const visible = ref(false);
const currentQuestion = ref(null);
const currentAnswer = ref(null);
const possibleAnswers = ref([]);

const answer = (question) => {
  visible.value = true;
  currentQuestion.value = question;

  const prunedAnswer = answers.value.filter((o) => {
    return o !== question.answer;
  });
  const shuffledAnswers = shuffle(prunedAnswer).slice(0, 3);
  shuffledAnswers.push(question.answer);

  possibleAnswers.value = shuffle(shuffledAnswers);
};

const isValidAnswer = computed(() => {
  return currentAnswer.value === currentQuestion.value.answer;
});

const close = () => {
  visible.value = false;
  currentQuestion.value = null;
  possibleAnswers.value = [];
  currentAnswer.value = null;
};
</script>
