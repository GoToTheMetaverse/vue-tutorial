<template>
  <h1>Test1CompositionView</h1>
  <div>{{ a }}</div>
  <button @click="onClick()">click</button>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import { onMounted, ref } from "vue";

export default defineComponent({
  setup() {
    let a = ref();
    onMounted(() => {
      a.value = 1;
    });

    const onClick = () => {
      a.value++;
    };

    return {
      a,
      onClick,
    };
  },
});
</script>
