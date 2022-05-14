<template>
  <h1>Test1Setup2View</h1>
  <div>{{ a }}</div>
  <button @click="onClick()">click</button>
</template>

<script setup>
import { onMounted } from "vue";

let a = $ref(0);
onMounted(() => {
  a = 1;
});

const onClick = () => {
  a++;
};
</script>
