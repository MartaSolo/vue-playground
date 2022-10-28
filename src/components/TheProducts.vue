<script setup lang="ts">
import { useApi } from "@/composables/api.js";

const { data, error } = useApi("https://dummyjson.com/products");
</script>

<template>
  <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
  <div v-else-if="data">
    Data loaded:
    <div class="product" v-for="product in data.products" :key="product.id">
      {{ product.title }}
    </div>
  </div>
  <div v-else>Loading...</div>
</template>

<style scoped>
.product {
  background-color: palevioletred;
  margin-bottom: 25px;
}
</style>