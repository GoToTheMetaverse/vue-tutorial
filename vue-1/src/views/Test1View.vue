<template>
  <h1>Test1View</h1>
  <div>{{ a }}</div>
  <button @click="onClick()">click</button>
</template>
<script>
export default {
  data() {
    return {
      a: 0,
    };
  },
  mounted() {
    this.a = 1;
  },
  methods: {
    onClick() {
      this.a++;
    },
  },
};
</script>
