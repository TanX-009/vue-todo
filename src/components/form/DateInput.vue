<script setup>
defineProps({
  update: Function,
  label: String,
  variant: String,
  required: Boolean,
});
</script>

<template>
  <div class="box">
    <label for="label">{{ label || "" }}</label>
    <input @input="update" :class="variant" type="date" :id="label" :required="required" />
  </div>
</template>

<style lang="scss" scoped>
@import "src/styles/mixins/@_main.scss";
@import "src/styles/variables/@_main.scss";

.box {
  @include fl(c, null, null);

  label {
    @include label;
  }

  input {
    @include input;

    border-radius: $radius;
    color: var(--text);

    &::-webkit-calendar-picker-indicator {
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 24 24"><path fill="%23bbbbbb" d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"/></svg>');
    }
  }
}
</style>
