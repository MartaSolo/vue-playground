<script>
export default {
  data() {
    return {
      step: 1,
    };
  },
  methods: {
    onKeyUpEnter(event) {
      console.log("onKeyUpEnter fired");
      console.log("event.target", event.target);
      event.target.blur();
      this.step++;
    },
    nextStep() {
      console.log("next step fired");
      this.step++;
      console.log("this.step", this.step);
    },
    previousStep() {
      console.log("previous step fired");
      this.step--;
      console.log("this.step", this.step);
    },
  },
};
</script>

<template>
  <div v-if="step === 1">
    <h3>Step 1</h3>
    <label for="name">Name</label>
    <input type="text" id="name" @keyup.enter="onKeyUpEnter" />
  </div>
  <div v-if="step === 2">
    <h3>Step 2</h3>
    <label for="surname">Surname</label>
    <input type="text" id="surname" @keyup.enter="onKeyUpEnter" />
  </div>
  <div v-if="step === 3">
    <h3>Step 3</h3>
    <label for="surname">Surname</label>
    <input type="text" id="surname" @keyup.enter="onKeyUpEnter" />
  </div>
  <button @click="previousStep">Previous</button>
  <button @click="nextStep">Next</button>
</template>

<style scoped>
div {
  margin-top: 2rem;
}

label {
  padding: 2rem;
}
button {
  display: inline-block;
  margin: 2rem;
}
</style>
