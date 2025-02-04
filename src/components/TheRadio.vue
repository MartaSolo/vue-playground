<script setup>
const handleClick = () => {
  console.log("handleClick");
};

const handleKeyUp = () => {
  console.log("handleKeyUp");
}
</script>

<template>
  <div class="radio__group">
    <div>
      <label for="radio1">Label 1</label>
      <input
        type="radio"
        id="radio1"
        name="test"
        @click="handleClick"
        @keyup.space="handleKeyUp"
      />
    </div>
    <div>
      <label for="radio2">Label 2</label>
      <input
        type="radio"
        id="radio2"
        name="test"
        @click="handleClick"
        @keyup.space="handleKeyUp"
      />
    </div>
  </div>
</template>

<style lang="css" scoped>

</style>