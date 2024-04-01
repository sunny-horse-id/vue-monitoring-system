<script setup>
import {ref, onMounted} from "vue";
import moment from "moment";

/* 当前时间的获取与显示 */
let nowTime = ref();
const getTime = () => {
  nowTime.value = moment().format("YYYY-MM-DD  hh:mm:ss");
};
onMounted(() => {
  setInterval(() => {
    getTime();
  }, 1000);
})
</script>

<template>
  <header class="home-header">
    <div class="container">
      <span class="blank"></span>
      <h1>制氢实时检测系统</h1>
      <h2>{{ nowTime }}</h2>
    </div>
  </header>
</template>

<style scoped lang="scss">
.home-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: blanchedalmond;
  .container {
    display: flex; /* 使用 Flexbox 布局 */
    justify-content: space-between; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    .blank{
      width: 200px;
    }
    h1 {
      font-weight: bold;
      color: blue;
    }

    h2 {
      color: #cbcbc9;
    }
  }
}
</style>