<script setup>
// 引入相关依赖
import {ref} from "vue";
import * as echarts from 'echarts';

// 实时显示电流和功率
const power = ref(2.1)
const current = ref(6.7)

// 使用按钮选择柱状图
const buttons = ref(['分', '时', '日', '月', '年'])
const selectedButton = ref(0)
function selectButton(index) {
  selectedButton.value = index;
  switch (index) {
    case 0:
      setTimeout(() => {
        perMinute();
      }, 1);
      break;
    case 1:
      //perHour();
      break;
    case 2:
      //perDay();
      break;
    case 3:
      //perMonth();
      break;
    case 4:
      //perYear();
      break;
  }
}

// 使用按钮控制视频和图片
const videoAndImage = ref(['视频信息', '站点照片']);
const selectedVideoAndImage = ref(0);
function selectVideoAndImage(index) {
  selectedVideoAndImage.value = index;
}

// 使用按钮选择报警分析和报警类型
const alarmAnalysisAndAlarmType = ref(['报警分析', '报警类型分析']);
const selectedAlarmAnalysisAndAlarmType = ref(0);
function selectAlarmAnalysisAndAlarmType(index) {
  selectedAlarmAnalysisAndAlarmType.value = index;
  switch (index) {
    case 0:
      setTimeout(() => {
        alarmAnalysis();
      }, 1);
      break;
    case 1:
      //alarmType();
      break;
  }
}

// 加载绘制的图表
setTimeout(() => {
  perMinute();
  alarmAnalysis();
}, 1);

// 使用echarts绘制图表-报警类型
function alarmAnalysis() {
  const chartDom = document.getElementById('AlarmAnalysis');
  const myChart = echarts.init(chartDom);

  const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: '事故分析',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 0, name: '普通', itemStyle: { color: 'rgb(50,205,50)' } },
          { value: 1182, name: '严重', itemStyle: { color: 'rgb(231,162,63)' } },
          { value: 14, name: '事故', itemStyle: { color: 'red' } },
        ]
      }
    ]
  };

  option && myChart.setOption(option);
}

// 使用echarts绘制图表-每分钟
function perMinute() {
  const chartDom = document.getElementById('PerMinute');
  const myChart = echarts.init(chartDom);

  const option = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['12:30', '12:40', '12:50', '13:00', '13:10', '13:20', '13:30']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [0.1, 0.4, 0.3, 0.2, 0.3, 0.5, 0.3],
        type: 'line',
        smooth: true, // To make the line smooth
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(2,12,32,0.8)' // Gradient start color
          }, {
            offset: 1,
            color: 'rgba(5,143,241,0.3)' // Gradient end color
          }])
        }
      }
    ]
  };
  option && myChart.setOption(option);
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
        <div style="height: 328px">
          <el-card style="height: 100%">TODO</el-card>
        </div>
        <div style="margin-top: 5px">
          <el-card style="">
            <el-row :gutter="20" style="margin-top: 5px">
              <el-col :span="4">
                <div class="el-col-center">
                  <img src="@/assets/images/Deploy/total.png" alt="" class="lower-left-img">
                </div>
                <p style="padding: 0; text-align: center; font-size: small; margin: 5px 0 0;">总发电量</p>
              </el-col>
              <el-col :span="4">
                <div class="el-col-center">
                  <img src="@/assets/images/Deploy/net.png" alt="" class="lower-left-img">
                </div>
                <p style="padding: 0; text-align: center; font-size: small; margin: 5px 0 0;">上网电量</p>
              </el-col>
              <el-col :span="4">
                <div class="el-col-center">
                  <img src="@/assets/images/Deploy/v.png" alt="" class="lower-left-img">
                </div>
                <p style="padding: 0; text-align: center; font-size: small; margin: 5px 0 0;">制氢速率</p>
              </el-col>
              <el-col :span="4">
                <div class="el-col-center">
                  <img src="@/assets/images/Deploy/h2.png" alt="" class="lower-left-img">
                </div>
                <p style="padding: 0; text-align: center; font-size: small; margin: 5px 0 0;">氢气容量</p>
              </el-col>
              <el-col :span="4">
                <div class="el-col-center">
                  <img src="@/assets/images/Deploy/get.png" alt="" class="lower-left-img">
                </div>
                <p style="padding: 0; text-align: center; font-size: small; margin: 5px 0 0;">糠酸产量</p>
              </el-col>
              <el-col :span="4">
                <div class="el-col-center">
                  <img src="@/assets/images/Deploy/year-get.png" alt="" class="lower-left-img">
                </div>
                <p style="padding: 0; text-align: center; font-size: small; margin: 5px 0 0;">经济收益</p>
              </el-col>
            </el-row>
          </el-card>
        </div>
      </el-col>
      <!--右侧-->
      <el-col :span="5">
        <el-card>
          <!--上部-->
          <div>
            <el-button
                v-for="(button, index) in videoAndImage"
                :key="index"
                :plain="true"
                :type="selectedVideoAndImage === index ? 'primary' : 'default'"
                @click="selectVideoAndImage(index)"
                style="width: 60px; height: 21px; margin: 1px;"
            >
              {{ button }}
            </el-button>
            <div v-if="selectedVideoAndImage === 0" style="display: flex;align-items: center;justify-content: center;">
              <img src="../assets/images/Deploy/default-video.png" alt="" style="width: 200px; height: 200px; margin: 10px">
            </div>
            <div v-if="selectedVideoAndImage === 1" style="display: flex;align-items: center;justify-content: center;">
              <img src="../assets/images/Deploy/default-img.png" alt="" style="width: 200px; height: 200px; margin: 10px">
            </div>
          </div>
          <!--下部-->
          <div style="max-height: 256px">
            <el-button
                v-for="(button, index) in alarmAnalysisAndAlarmType"
                :key="index"
                :plain="true"
                :type="selectedAlarmAnalysisAndAlarmType === index ? 'primary' : 'default'"
                @click="selectAlarmAnalysisAndAlarmType(index)"
                style="width: 90px; height: 21px; margin: 1px;"
            >
              {{ button }}
            </el-button>
            <div v-if="selectedAlarmAnalysisAndAlarmType === 0">
              <el-row :gutter="5">
                <el-col :span="10">
                  <div id="AlarmAnalysis" style="width: 125px; height: 125px; position: absolute; top:10px; left: -10px"></div>
                </el-col>
                <el-col :span="14">
                  <div>
                    <div class="div-header;" style="background-color: rgba(50,205,50,0.37); margin-top: 9px;">
                      <el-row :gutter="1">
                        <el-col :span="2">
                          <div style="height: 32px;width: 5px;background-color: rgb(50,205,50);"></div>
                        </el-col>
                        <el-col :span="14">
                          <p style=" margin: 6px 0 0;">普通&nbsp;<span style="color: rgb(50,205,50)">0</span></p>
                        </el-col>
                        <el-col :span="8" style="display: flex; justify-content: flex-end; align-items: center; position: absolute; right: 0; top:5px">
                          <div style="border-radius: 10px; height: 22px; width: 50px; background-color: rgb(50,205,50)">
                            <p style="text-align: center; margin: 0; color: white">0%</p>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                    <div class="div-header;" style="background-color: rgba(231,162,63,0.37); margin-top: 9px;">
                      <el-row :gutter="1">
                        <el-col :span="2">
                          <div style="height: 32px;width: 5px;background-color: rgb(231,162,63);"></div>
                        </el-col>
                        <el-col :span="14">
                          <p style=" margin: 6px 0 0;">普通&nbsp;<span style="color: rgb(231,162,63)">1182</span></p>
                        </el-col>
                        <el-col :span="8" style="display: flex; justify-content: flex-end; align-items: center; position: absolute; right: 0; top:5px">
                          <div style="border-radius: 10px; height: 22px; width: 50px; background-color: rgb(231,162,63)">
                            <p style="text-align: center; margin: 0; color: white">98.8%</p>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                    <div class="div-header;" style="background-color: rgba(255,0,0,0.37); margin-top: 9px;">
                      <el-row :gutter="1">
                        <el-col :span="2">
                          <div style="height: 32px;width: 5px;background-color: red;"></div>
                        </el-col>
                        <el-col :span="14">
                          <p style=" margin: 6px 0 0;">普通&nbsp;<span style="color: red">14</span></p>
                        </el-col>
                        <el-col :span="8" style="display: flex; justify-content: flex-end; align-items: center; position: absolute; right: 0; top:5px">
                          <div style="border-radius: 10px; height: 22px; width: 50px; background-color: red">
                            <p style="text-align: center; margin: 0; color: white">1.2%</p>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div v-if="selectedAlarmAnalysisAndAlarmType === 1" style="display: flex;align-items: center;justify-content: center;">
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!--下部分-->
    <el-row :gutter="8" class="el-row-footer">
      <!--左侧-->
      <el-col :span="5">
        <el-card style="height: 99%">
          <el-row :gutter="10" style="height: 45%">
            <el-col :span="12"  class="footer-left-item">
              <img src="@/assets/images/Deploy/temperature.png" alt="" class="item-img">
              <span class="item-text-top">流体温度</span>
              <span class="item-text-bottom">28.5℃</span>
            </el-col>
            <el-col :span="12" class="footer-left-item">
              <img src="@/assets/images/Deploy/velocity.png" alt="" class="item-img">
              <span class="item-text-top">液体流速</span>
              <span class="item-text-bottom">2m/s</span>
            </el-col>
          </el-row>
          <el-row :gutter="10" style="height: 45%; margin-top: 5px">
            <el-col :span="12"  class="footer-left-item">
              <img src="@/assets/images/Deploy/concentration.png" alt="" class="item-img">
              <span class="item-text-top">浓度梯度</span>
              <span class="item-text-bottom">2mol/L</span>
            </el-col>
            <el-col :span="12" class="footer-left-item">
              <img src="@/assets/images/Deploy/ph.png" alt="" class="item-img">
              <span class="item-text-top">流体pH</span>
              <span class="item-text-bottom">7.0</span>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <!--右侧-->
      <el-col :span="19">
        <el-card>
          <div class="div-header">
            <el-row :gutter="1">
              <el-col :span="5" style="display: flex">
                <div class="bar"></div>
                <div style="width: 15px"></div>
                <p class="p-header">功率(kW)及发电趋势</p>
              </el-col>
              <el-col :span="19"></el-col>
            </el-row>
          </div>
          <div style="max-height: 145px">
            <el-row :gutter="20">
              <el-col :span="2">
                <div style="display: flex; flex-direction: column; align-items: center;">
                  <el-button
                      v-for="(button, index) in buttons"
                      :key="index"
                      :plain="true"
                      :type="selectedButton === index ? 'primary' : 'default'"
                      @click="selectButton(index)"
                      style="width: 21px; height: 21px; margin: 4px; z-index: 999;"
                  >
                    {{ button }}
                  </el-button>
                </div>
              </el-col>
              <el-col :span="22">
                <div v-if="selectedButton === 0" class="echarts-bar" id="PerMinute"></div>
                <div v-else-if="selectedButton === 1"></div>
                <div v-if="selectedButton === 2"></div>
                <div v-else-if="selectedButton === 3"></div>
                <div v-if="selectedButton === 4"></div>
              </el-col>
            </el-row>
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

    .footer-left-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .item-img {
        width: 40px;
        height: 40px;
      }

      .item-text-top {
        font-size: small;
        margin: 1px;
      }

      .item-text-bottom {
        font-size: large;
        font-weight: bold;
      }
    }
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

  .echarts-bar {
    position: absolute;
    left: 20px;
    top: -40px;
    width: 100%;
    height: 250px;
  }
}
</style>