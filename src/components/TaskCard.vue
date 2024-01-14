<script setup>
import { ref } from "vue";

const props = defineProps({
  title: String,
  desc: String,
  date: String,
  completed: Boolean,
  onCheck: Function,
  onDelete: Function,
});

const currentDate = new Date();
const dueDate = new Date(props.date);
const warnDate = new Date(props.date);
warnDate.setDate(warnDate.getDate() - 1);

const comp = ref(props.completed);
</script>

<template>
  <div class="taskCard">
    <div class="controls">
      <button class="checkmark" :class="{ checked: comp, unchecked: !comp }" @click="() => {
          comp = !comp;
          onCheck(comp);
        }
        ">
        <font-awesome-icon icon="fa-solid fa-check" />
      </button>
      <button type="button" @click="onDelete">
        <font-awesome-icon icon="fa-solid fa-trash-can" />
      </button>
    </div>
    <div>
      <h2>{{ title }}</h2>
      <p>{{ desc }}</p>
      <p :class="{
        safe: currentDate < warnDate,
        warn: currentDate <= dueDate && currentDate > warnDate,
        danger: currentDate > dueDate,
      }">
        {{ date }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "src/styles/mixins/@_main.scss";
@import "src/styles/variables/@_main.scss";

.taskCard {
  padding: $space-s;
  background: var(--overlay);
  border-bottom: $border var(--pine);
  @include fl(r, null, null, $space-xs);
  flex-wrap: wrap;

  .controls {
    margin-top: $space-2xs;
    @include fl(r, null, null, $space-xs);

    button {
      @include linkButton;
      height: $space-m;
      width: $space-m;
      padding: 0;
      @include fl(r, c, c);

      border-radius: $radius;

      color: var(--love);
    }

    .checkmark {
      width: $space-m;
      height: $space-m;

      @include fl(r, c, c);

      border-radius: $radius;
      cursor: pointer;
    }

    .checked {
      background: var(--pine);
      color: white;
    }

    .unchecked {
      background: var(--hl-med);
      color: black;
    }
  }

  .safe {
    color: var(--foam);
  }

  .warn {
    color: var(--gold);
  }

  .danger {
    color: var(--love);
  }
}
</style>
