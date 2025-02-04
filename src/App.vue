<script setup lang="ts">
import TheProducts from "@/components/TheProducts.vue";
import TheSummary from "@/components/TheSummary.vue";
import TheInput from "@/components/TheInput.vue";
import TheRadio from "@/components/TheRadio.vue";
import TheCard from "@/components/TheCard.vue";
import card from "@/mocks/card";
</script>

<template>
  <TheProducts />
  <TheSummary />
  <TheInput />
  <TheRadio />
  <TheCard
    :title="card.title"
    :description="card.description"
    :kicker="card.kicker"
  />
</template>

<style scoped></style>
