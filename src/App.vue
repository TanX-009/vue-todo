<script setup>
import { ref } from "vue";
import ToDo from "./components/ToDo.vue";

const raw = localStorage.getItem("tasks");
const local = JSON.parse(raw);

// tasks list
const tasks = ref(local || []);

// delete task function callback to update tasks list
function deleteTask(task) {
  tasks.value = tasks.value.filter((item) => item !== task);
  localStorage.setItem("tasks", JSON.stringify(tasks.value));
}

// add task function callback
function addTask(task) {
  tasks.value.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks.value));
}

function onCheck(task, comp) {
  const index = tasks.value.findIndex((element) => element === task);
  tasks.value[index].completed = comp;

  localStorage.setItem("tasks", JSON.stringify(tasks.value));
}
</script>

<template>
  <!-- todo component with tasks passed -->
  <ToDo :tasks="tasks" :delete-task="deleteTask" :add-task="addTask" :on-check="onCheck" />
</template>

<style lang="scss" scoped></style>
