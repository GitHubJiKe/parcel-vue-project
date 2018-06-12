<template>
  <header class="my_header">
    <h1 :style="{'text-align':`${direction}`}">{{text}}</h1>
  </header>
</template>
<script>
export default {
  name: "Header",
  props: {
    text: {
      type: String,
      default: "Header"
    },
    direction: {
      type: String,
      default: "center"
    }
  }
};
</script>
<style scoped>
.my_header {
  width: 100%;
  height: 60px;
}
.my_header > h1 {
  padding: 0 30px;
}
</style>


