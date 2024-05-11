<script setup>
// 引入logStore
import {useLogStore} from "@/stores/log.js";
import router from "@/router/index.js";

// 进行log选择
const logStore = useLogStore()

function selectLog(index) {
  router.push("/")
  logStore.setLog(index)
}

// 页面刷新
function refresh() {
  location.reload();
}

// 退出登录功能的实现
const logout = () => {
  sessionStorage.removeItem("token")
  router.push("/login")
  setTimeout(() => {
    window.location.reload();
  }, 300)
}
const username = sessionStorage.getItem('username');
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
        <template v-if="username === 'ziyang'">
          <el-menu-item class="el-menu-item" index="/monitor">
            <img src="../assets/images/layout/monitor.png" alt="" class="img">
          </el-menu-item>
        </template>
      </el-menu>
    </el-aside>
    <!--右侧主区域-->
    <el-container class="body">
      <!--头部区域-->
      <el-header class="el-header">
        <div>
          <h1 class="h1">渗透能发电制氢监测系统</h1>
        </div>
        <el-row :gutter="20" class="el-header-row">
          <el-col :span="6"></el-col>
          <el-col :span="3">
            <img src="@/assets/images/layout/refresh.png" alt="" class="header-img" @click="refresh()">
          </el-col>
          <el-col :span="6">
            <el-button type="warning" @click="selectLog(0)">故障</el-button>
            <div
                style="border-radius: 10px; width: 30px; height: 20px; background-color: #E6A23D;position: absolute; left: 205px; top: -5px;box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);">
              <span
                  style="display: flex;justify-content: center;align-items: center;width: 100%;  color: white; font-size: small; font-weight: bold">{{
                  logStore.warningLogLength
                }}</span>
            </div>
          </el-col>
          <el-col :span="6">
            <el-button type="danger" @click="selectLog(1)">事故</el-button>
            <div
                style="border-radius: 10px; width: 30px; height: 20px; background-color: #F36D6A;position: absolute; left: 305px; top: -5px;box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);">
              <span
                  style="display: flex;justify-content: center;align-items: center;width: 100%;  color: white; font-size: small; font-weight: bold">{{
                  logStore.errLogLength
                }}</span>
            </div>
          </el-col>
          <el-col :span="3" class="el-col">

            <el-dropdown>
              <el-button style="margin: 0; padding: 0; border: none;">
                <img src="@/assets/images/layout/people.png" alt="" class="header-img">
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </el-col>
        </el-row>
      </el-header>
      <!--主要区域-->
      <el-main style="padding: 5px">
        <RouterView/>
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

  .body {
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

        .el-col {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .header-img {
          width: 25px;
          height: 25px;
        }
      }
    }
  }
}
</style>