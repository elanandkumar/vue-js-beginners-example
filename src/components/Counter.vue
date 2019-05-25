<template>
  <button v-on:click="count++">Times: {{count}}</button>
</template>

<script>
export default {
  name: "Counter",
  props: {
    startCount: Number
  },
  data() {
    return { count: this.startCount };
  }
};
</script>
