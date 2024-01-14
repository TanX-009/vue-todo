<script setup>
import { reactive, ref } from "vue";
import DateInput from "./form/DateInput.vue";
import TextInput from "./form/TextInput.vue";

defineProps({
  addTask: Function,
});

const form = ref(null);

let task = {
  title: "",
  desc: "",
  date: "",
  completed: false,
  stamp: "",
};
</script>

<template>
  <form :ref="form" class="addTask" @submit.prevent="(e) => {
      // add stamps to the task
      task.stamp = new Date().valueOf();

      addTask(task);

      // reset task value
      task = {
        title: '',
        desc: '',
        date: '',
        completed: false,
        stamp: '',
      };

      e.target.reset();
    }
    ">
    <!-- title input -->
    <TextInput :val="task.title" :update="(e) => (task.title = e.target.value)" label="" placeholder="Title" name="title"
      variant="center" required />
    <!-- descirption input -->
    <TextInput :val="task.desc" :update="(e) => (task.desc = e.target.value)" label="" placeholder="Description"
      name="desc" variant="center" />

    <div class="controls">
      <!-- date input -->
      <DateInput :val="task.date" :update="(e) => (task.date = e.target.value)" label="Due date" variant="center"
        name="dueDate" />
      <!-- submit button -->
      <button type="submit">Add task</button>
    </div>
  </form>
</template>

<style lang="scss" scoped>
@import "src/styles/mixins/@_main.scss";
@import "src/styles/variables/@_main.scss";

.addTask {
  padding: $space-s;
  background: var(--overlay);
  border-bottom: $border var(--pine);
  @include fl(c, null, null, 0);
}

.controls {
  margin-top: $space-xs;
  @include fl(r, sb, c, $space-xs);
  flex-wrap: wrap;

  button {
    @include linkButton;
    height: fit-content;
    font-weight: 700;
    border-radius: $radius;

    background: var(--rose);
    color: black;
  }
}
</style>
