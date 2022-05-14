<template>
  <h1>Test1SetupView</h1>
  <div>{{ a }}</div>
  <button @click="onClick()">click</button>
</template>

<script setup>
import { onMounted, ref } from "vue";

let a = ref(0);
onMounted(() => {
  a.value = 1;
});

const onClick = () => {
  a.value++;
};
</script>
