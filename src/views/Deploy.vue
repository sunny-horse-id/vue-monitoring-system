<script setup>
import {ref} from "vue";

const power = ref(2.1)
const current = ref(6.7)
const buttons = ref(['按钮1', '按钮2'])
const selectedButton = ref(0)
function selectButton(index) {
  // 当按钮被点击时更新选中状态
  selectedButton.value = index;
}
</script>

<template>
  <div class="page-container">
    <!--上部分-->
    <el-row :gutter="8">
      <!--左侧-->
      <el-col :span="5">
        <el-card>
          <!--上半部分-->
          <div class="div-header">
            <el-row :gutter="1">
              <el-col :span="2">
                <div class="bar"></div>
              </el-col>
              <el-col :span="22">
                <p class="p-header">站点信息</p>
              </el-col>
            </el-row>
          </div>
          <div>
            <div class="div-normal">
              <img src="@/assets/images/Deploy/powerStation.png" alt="" class="div-img">
              <p class="div-p">
                电站名称&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;渗透能电站</p>
            </div>
            <div class="div-normal">
              <img src="@/assets/images/Deploy/position.png" alt="" class="div-img">
              <p class="div-p">位置</p>
            </div>
            <div class="div-normal">
              <img src="@/assets/images/Deploy/store.png" alt="" class="div-img">
              <p class="div-p">装机容量</p>
            </div>
            <div class="div-normal">
              <img src="@/assets/images/Deploy/number.png" alt="" class="div-img">
              <p class="div-p">控制逆变器数量</p>
            </div>
          </div>
          <!--中间部分-->
          <div class="div-header">
            <el-row :gutter="1">
              <el-col :span="2">
                <div class="bar"></div>
              </el-col>
              <el-col :span="22">
                <p class="p-header">能效信息</p>
              </el-col>
            </el-row>
          </div>
          <div>
            <div class="div-normal">
              <img src="@/assets/images/Deploy/electricity.png" alt="" class="div-img">
              <p class="div-p">总发电量</p>
            </div>
            <div class="div-normal">
              <img src="@/assets/images/Deploy/hours.png" alt="" class="div-img">
              <p class="div-p">年使用小时数</p>
            </div>
            <div class="div-normal">
              <img src="@/assets/images/Deploy/income.png" alt="" class="div-img">
              <p class="div-p">总收益</p>
            </div>
          </div>
          <!--下半部分-->
          <el-row :gutter="20">
            <el-col :span="12" class="el-col-center" style="padding: 0">
              <div>
                <div style="text-align: center;">
                  <div class="special-p">{{ power }}</div>
                </div>
                <div style="text-align: center;">
                  实时发电功率(kW)
                </div>
              </div>
            </el-col>
            <el-col :span="12" class="el-col-center" style="padding: 0">
              <div>
                <div style="text-align: center;">
                  <div class="special-p">{{ current }}</div>
                </div>
                <div style="text-align: center;">
                  实时电流(A)
                </div>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <!--中间-->
      <el-col :span="14">
        <el-card>
          777
        </el-card>
      </el-col>
      <!--右侧-->
      <el-col :span="5">
        <el-card>
          888
        </el-card>
      </el-col>
    </el-row>
    <!--下部分-->
    <el-row :gutter="8" class="el-row-footer">
      <!--左侧-->
      <el-col :span="5">
        <el-card>
          <div class="div-header">
            <el-row :gutter="1">
              <el-col :span="2">
                <div class="bar"></div>
              </el-col>
              <el-col :span="22">
                <p class="p-header">气象信息</p>
              </el-col>
            </el-row>
          </div>
          <el-row :gutter="20" style="margin-top: 5px">
            <el-col :span="8">
              <div class="el-col-center">
                <img src="@/assets/images/Deploy/temperature.png" alt="" class="lower-left-img">
              </div>
              <p style="margin: 0; padding: 0; text-align: center; font-size: small">环境温度</p>
              <p style="margin: 0; padding: 0; text-align: center; font-weight: bold;">28.5ºC</p>
            </el-col>
            <el-col :span="8">
              <div class="el-col-center">
                <img src="@/assets/images/Deploy/humidity.png" alt="" class="lower-left-img">
              </div>
              <p style="margin: 0; padding: 0; text-align: center; font-size: small">环境湿度</p>
              <p style="margin: 0; padding: 0; text-align: center; font-weight: bold;">82.6％</p>
            </el-col>
            <el-col :span="8">
              <div class="el-col-center">
                <img src="@/assets/images/Deploy/windSpeed.png" alt="" class="lower-left-img">
              </div>
              <p style="margin: 0; padding: 0; text-align: center; font-size: small">风速</p>
              <p style="margin: 0; padding: 0; text-align: center; font-weight: bold;">28.5ºC</p>
            </el-col>
          </el-row>
          <el-row :gutter="20" style="margin-top: 5px">
            <el-col :span="8">
              <div class="el-col-center">
                <img src="@/assets/images/Deploy/windForce.png" alt="" class="lower-left-img">
              </div>
              <p style="margin: 0; padding: 0; text-align: center; font-size: small">风力</p>
              <p style="margin: 0; padding: 0; text-align: center; font-weight: bold;">2</p>
            </el-col>
            <el-col :span="8">
              <div class="el-col-center">
                <img src="@/assets/images/Deploy/windDirection.png" alt="" class="lower-left-img">
              </div>
              <p style="margin: 0; padding: 0; text-align: center; font-size: small">风向</p>
              <p style="margin: 0; padding: 0; text-align: center; font-weight: bold;">0</p>
            </el-col>
            <el-col :span="8">
              <div class="el-col-center">
                <img src="@/assets/images/Deploy/windDirectionParameters.png" alt="" class="lower-left-img">
              </div>
              <p style="margin: 0; padding: 0; text-align: center; font-size: small">风向参数</p>
              <p style="margin: 0; padding: 0; text-align: center; font-weight: bold;">0</p>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <!--右侧-->
      <el-col :span="19">
        <el-card>
          <div class="div-header">
            <el-row :gutter="1">
              <el-col :span="4" style="display: flex">
                <div class="bar"></div>
                <div style="width: 15px"></div>
                <p class="p-header">功率及发电趋势</p>
              </el-col>
              <el-col :span="20">
              </el-col>
            </el-row>
          </div>
          <div>
            <el-button
                v-for="(button, index) in buttons"
                :key="index"
                :plain="true"
                :type="selectedButton === index ? 'primary' : 'default'"
                @click="selectButton(index)"
            >
              {{ button }}
            </el-button>

            <div v-if="selectedButton === 0">
              <!-- 第一个按钮被选中时显示的内容 -->
              内容1
            </div>
            <div v-else-if="selectedButton === 1">
              <!-- 第二个按钮被选中时显示的内容 -->
              内容2
            </div>
            <!-- 可以继续添加其他按钮对应的内容 -->

          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.page-container {
  min-height: 100%;
  box-sizing: border-box;

  .div-header {
    height: 30px;
  }

  .bar {
    height: 28px;
    width: 5px;
    background-color: #409D92;
  }

  .p-header {
    font-size: 20px;
    font-weight: normal;
    margin-top: 1px;
  }

  .div-normal {
    height: 40px;

    display: flex;
    align-items: center;

    .div-p {
      margin-left: 10px;
    }

    .div-img {
      height: 30px;
      width: 30px;
    }
  }

  .el-row-footer {
    margin-top: 8px;
  }

  .el-col-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .special-p {
    font-family: electronicFont, serif;
    font-weight: bold;
    font-size: 20px;
    color: #048197;
    margin: 5px;
  }

  .lower-left-img {
    width: 30px;
    height: 30px;
  }
}
</style>