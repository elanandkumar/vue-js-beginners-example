<template>
  <div @click="() => this.$emit('clicked', ++clickCount)">Clicker</div>
</template>

<script>
export default {
  name: "Clicker",
  data() {
    return {
      clickCount: 0
    };
  }
};
</script>

<!-- scoped styled -->
<style scoped>
div {
  text-decoration: underline;
  font-size: 22px;
  cursor: pointer;
}
</style>
