<script setup>
defineProps({
  name: String,
  update: Function,
  label: String,
  placeholder: String,
  variant: String,
  required: Boolean,
});
</script>

<template>
  <div class="box">
    <label :for="name">{{ label || "" }}</label>
    <input @input="update" :class="variant" type="text" :placeholder="placeholder" :id="name"
      :required="required || false" />
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
  }
}
</style>
