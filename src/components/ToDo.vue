<script setup>
import { ref, watch } from "vue";
import TaskCard from "./TaskCard.vue";
import AddTask from "./AddTask.vue";

const props = defineProps({
  // tasks list
  tasks: Array,
  deleteTask: Function,
  addTask: Function,
  onCheck: Function,
});

// current tab
const currentTab = ref("todo");

const tick = ref(true);

// track number of completed and incomplete tasks
const completed = ref(0);
const incomplete = ref(0);

// update no of completed and incompleted tasks
watch(tick, () => {
  let comp = 0;
  let incomp = 0;
  for (let i = 0; i < props.tasks.length; i++) {
    if (props.tasks[i].completed) comp++;
  }
  incomp = props.tasks.length - comp;

  completed.value = comp;
  incomplete.value = incomp;
});

// init update tracked numbers
tick.value = !tick.value;
</script>

<template>
  <div class="todo">
    <!-- tabs for filtering tasks -->
    <div class="tabs">
      <button type="button" :class="{ active: currentTab === 'todo' }" @click="() => (currentTab = 'todo')">
        To-Do
      </button>
      <button type="button" :class="{ active: currentTab === 'completed' }" @click="() => (currentTab = 'completed')">
        Completed
      </button>
      <button type="button" :class="{ active: currentTab === 'incomplete' }" @click="() => (currentTab = 'incomplete')">
        Incomplete
      </button>
    </div>

    <!-- show add task only if current tab is todo -->
    <template v-if="currentTab === 'todo'">
      <AddTask :addTask="addTask" />
    </template>

    <!-- if current tab is todo display all task cards -->
    <template v-if="currentTab === 'todo'">
      <TaskCard v-for="task in props.tasks" :key="task.id" :title="task.title" :desc="task.desc" :date="task.date"
        :completed="task.completed" :on-check="(comp) => {
            onCheck(task, comp);
            tick = !tick;
          }
          " :on-delete="() => deleteTask(task)" />
    </template>

    <!-- else if current tab is completed display only completed cards -->
    <template v-else-if="currentTab === 'completed'">
      <!-- if complete tasks are not 0 render tasks -->
      <template v-if="completed > 0">
        <template v-for="task in props.tasks" :key="task.id">
          <TaskCard v-if="task.completed" :title="task.title" :desc="task.desc" :date="task.date"
            :completed="task.completed" :on-check="(comp) => {
                onCheck(task, comp);
                tick = !tick;
              }
              " :on-delete="() => deleteTask(task)" />
        </template>
      </template>

      <!-- else render no incomplete tasks -->
      <template v-else>
        <h3 class="info">No completed tasks</h3>
      </template>
    </template>

    <!-- else if current tab is incomplete display only incomplete cards -->
    <template v-else-if="currentTab === 'incomplete'">
      <!-- if incomplete tasks are not 0 render tasks -->
      <template v-if="incomplete > 0">
        <template v-for="task in props.tasks" :key="task.id">
          <TaskCard v-if="!task.completed" :title="task.title" :desc="task.desc" :date="task.date"
            :completed="task.completed" :on-check="(comp) => {
                onCheck(task, comp);
                tick = !tick;
              }
              " :on-delete="() => deleteTask(task)" />
        </template>
      </template>

      <!-- else render no incomplete tasks -->
      <template v-else>
        <h3 class="info">No incomplete tasks</h3>
      </template>
    </template>
  </div>
</template>

<style lang="scss" scoped>
@import "src/styles/mixins/@_main.scss";
@import "src/styles/variables/@_main.scss";

h3 {
  margin-top: $space-xs;
}

.todo {
  max-width: 768px;
  width: 100%;
  padding: $space-m;
  margin: 0 auto;
}

.tabs {
  width: 100%;

  .active {
    background: var(--overlay);
  }

  button {
    font-size: $step-0;
    background: var(--base);

    border: none;
    outline: none;

    cursor: pointer;
    color: var(--text);
    padding: $space-2xs;
  }
}
</style>
