<template>
  <div class="hello">
    <Test></Test>
  </div>
</template>

<script>
import Test from "./Test.vue";
export default {
  components: {
    Test
  }
};
</script>

<style lang="less" scoped>
.hello {
  width: 200px;
  height: 200px;
  background-color: red;
  div {
    width: 150px;
    height: 150px;
    background-color: purple;
    .world,
    .world1 {
      width: 100px;
      height: 100px;
      background-color: green;
    }
  }
}

.child {
  width: 50px;
  height: 50px;
  background-color: orange;
  .grand-child {
    width: 25px;
    height: 25px;
    background-color: tomato;
  }
}
</style>