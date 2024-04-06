<script setup>

</script>

<template>
  <el-container class="layout-container">
    <!--左侧菜单-->
    <el-aside class="el-aside">
      <div class="el-aside-logo"></div>
      <el-menu class="el-menu" router>
        <el-menu-item class="el-menu-item" index="/deploy">
          <img src="../assets/images/layout/deploy.png" alt="" class="img">
        </el-menu-item>
        <el-menu-item class="el-menu-item" index="/monitor">
          <img src="../assets/images/layout/monitor.png" alt="" class="img">
        </el-menu-item>
        <el-menu-item class="el-menu-item" index="/visualization">
          <img src="../assets/images/layout/visualization.png" alt="" class="img">
        </el-menu-item>
      </el-menu>
    </el-aside>
    <!--右侧主区域-->
    <el-container class="body">
      <!--头部区域-->
      <el-header class="el-header">
        <div>
          <h1 class="h1">渗透能制氢实时检测系统</h1>
        </div>
        <el-row :gutter="20" class="el-header-row">
          <el-col :span="3">
            <img src="@/assets/images/layout/refresh.png" alt="" class="header-img">
          </el-col>
          <el-col :span="3">
            <img src="@/assets/images/layout/full.png" alt="" class="header-img">
          </el-col>
          <el-col :span="5">
            <el-button type="success">普通</el-button>
          </el-col>
          <el-col :span="5">
            <el-button type="warning">严重</el-button>
          </el-col>
          <el-col :span="5">
            <el-button type="danger">事故</el-button>
          </el-col>
          <el-col :span="3" class="el-col">
            <img src="@/assets/images/layout/people.png" alt="" class="header-img">
          </el-col>
        </el-row>
      </el-header>
      <!--主要区域-->
      <el-main style="padding: 5px">
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
    background-color: #048197;

    .el-aside-logo {
      height: 70px;
      background: url("@/assets/images/Layout/logo.png") no-repeat center / 40px auto;
    }

    .el-menu {
      background-color: #048197;
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

      .h1 {
        font-size: 30px;
        font-weight: bold;
        color: #7ec9d2;
      }

      .el-header-row {
        width: 400px;

        .el-col{
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .header-img{
          width: 25px;
          height: 25px;
        }
      }
    }
  }
}
</style>