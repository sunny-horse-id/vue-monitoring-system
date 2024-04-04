<script setup>

</script>

<template>
  <el-container class="layout-container">
    <!--左侧菜单-->
    <el-aside class="el-aside">
      <div class="el-aside-logo"></div>
      <el-menu class="el-menu" router>
        <el-menu-item class="el-menu-item" index="">
          <img src="@/assets/images/deploy.png" alt="" class="img">
        </el-menu-item>
        <el-menu-item class="el-menu-item" index="">
          <img src="@/assets/images/monitor.png" alt="" class="img">
        </el-menu-item>
        <el-menu-item class="el-menu-item" index="">
          <img src="@/assets/images/visualization.png" alt="" class="img">
        </el-menu-item>
      </el-menu>
    </el-aside>
    <!--右侧主区域-->
    <el-container class="body">
      <!--头部区域-->
      <el-header class="el-header">
        <div></div>
        <div></div>
      </el-header>
      <!--主要区域-->
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.layout-container {
  height: 100vh;

  .el-aside {
    width: 50px;
    background-color: #009cfd;

    .el-aside-logo {
      height: 70px;
      background: url("@/assets/images/logo.png") no-repeat center / 40px auto;
    }

    .el-menu {
      background-color: #009cfd;
      border-right: none;

      .el-menu-item {
        display: flex;
        justify-content: center;
        align-items: center;

        .img {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
  .body{

    .el-header {
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>