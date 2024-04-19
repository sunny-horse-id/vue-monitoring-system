<script setup>
// 引入相关依赖
import {ref} from "vue";
import * as echarts from 'echarts';
import {useLogStore} from "@/stores/log.js";

// 获取pinia全局数据
const logStore = useLogStore()

// 选择日志类型
const logType = ref(['故障日志', '事故日志'])

// 警告弹窗
const centerDialogVisible = ref(false)

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

// 使用按钮选择图标图表
const selectedIconButtons = ref(0)

function selectIconButtons(index) {
  selectedIconButtons.value = index;
  switch (index) {
    case 0:
      setTimeout(() => {
        monthPower();
        perDay();
      }, 1);
      break;
    case 1:
      break
    case 2:
      break
    case 3:
      break
    case 4:
      break
  }
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
        label: {
          show: true,
          position: 'top'
        },
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

// 使用echarts绘制图表-月发电量
function monthPower() {
  const chartDom = document.getElementById('MonthPower');
  const myChart = echarts.init(chartDom);
  const option = {
    title: {
      text: '每月总发电与上网电量(kWh)',
      top: '10px',
      left: '55px'
    },
    legend: {
      right: '85px',
      top: '15px'
    },
    tooltip: {},
    dataset: {
      source: [
        ['product', '总发电量', '上网电量'],
        ['1', 73.4, 55.1],
        ['2', 82.5, 65.2],
        ['3', 53.9, 39.1],
        ['4', 53.9, 39.1],
        ['5', 82.5, 65.2],
        ['6', 73.4, 55.1],
        ['7', 82.5, 65.2],
        ['8', 82.5, 65.2],
        ['9', 73.4, 55.1],
        ['10', 100, 39.1],
        ['11', 53.9, 39.1],
        ['12', 53.9, 39.1]
      ]
    },
    label: {
      show: true,
      position: 'top'
    },
    xAxis: {type: 'category'},
    yAxis: {},
    series: [
      {
        type: 'bar',
        itemStyle: {
          color: '#62D4CA' // 修改第一个柱子的颜色
        }
      },
      {
        type: 'bar',
        itemStyle: {
          color: '#80FFA5' // 修改第二个柱子的颜色
        }
      }
    ]
  };

  option && myChart.setOption(option);
}

// 使用echarts绘制图表-近30天总发电与上网电量
function perDay() {
  const chartDom = document.getElementById('PerDay');
  const myChart = echarts.init(chartDom);
  const option = {
    color: ['#80FFA5', '#00DDFF'],
    title: {
      top: '20px',
      left: '20px',
      text: '近30天总发电与上网电量(kWh)'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      right: '30px',
      top: '20px',
      data: ['总发电量', '上网电量']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: [1, 2, 3, 4, 5, 6, 7, 8,
          9, 10, 11, 12, 13, 14, 15, 16,
          17, 18, 19, 20, 21, 22, 23, 24,
          25, 26, 27, 28, 29, 30]
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '上网电量',
        type: 'line',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(128, 255, 165)'
            },
            {
              offset: 1,
              color: 'rgb(1, 191, 236)'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        // 数值小于总发电量的值
        data: [1.2, 1.1, 0.9, 1.2, 1.3, 1.4, 1.5,
          1.6, 1.7, 1.8, 1.9, 1.0, 1.1, 1.2, 1.3,
          1.4, 1.5, 1.6, 1.7, 2.0, 1.9, 1.6, 1.1,
          1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8],
        z: 999,
      },
      {
        name: '总发电量',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(0, 221, 255)'
            },
            {
              offset: 1,
              color: 'rgb(77, 119, 255)'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        // 总发电量的值
        data: [2.2, 3.2, 4.5, 2.3, 2.5, 2.3, 1.8,
          2.2, 2.5, 2.8, 3.0, 3.3, 3.5, 3.0, 2.0,
          1.8, 1.8, 2.0, 2.3, 2.5, 2.3, 1.8, 2.2,
          2.5, 2.8, 3.0, 3.3, 3.5, 3.0, 2.0]
      },
    ]
  };

  option && myChart.setOption(option);
}

// 初始化加载绘制的图表
setTimeout(() => {
  perMinute();
  monthPower();
  perDay();
}, 1);

// 日志数据
const warningData = [
  {
    date: '2024-04-19 17:44:05',
    place: '发电侧',
    content: '流体PH过高'
  },
  {
    date: '2024-04-19 17:44:05',
    place: '发电侧',
    content: '流体PH过高'
  },
  {
    date: '2024-04-19 17:44:05',
    place: '发电侧',
    content: '流体PH过高'
  },
  {
    date: '2024-04-19 17:44:05',
    place: '发电侧',
    content: '流体PH过高'
  },
  {
    date: '2024-04-19 17:44:05',
    place: '发电侧',
    content: '流体PH过高'
  },
  {
    date: '2024-04-19 17:44:05',
    place: '发电侧',
    content: '流体PH过高'
  },
  {
    date: '2024-04-19 17:44:05',
    place: '发电侧',
    content: '流体PH过高'
  },
  {
    date: '2024-04-19 17:44:05',
    place: '发电侧',
    content: '流体PH过高'
  },
  {
    date: '2024-04-19 17:44:05',
    place: '发电侧',
    content: '流体PH过高'
  },
]
const errorData = [
  {
    date: '2024-04-19 18:44:10',
    place: '制氢侧',
    content: '储气罐泄露'
  },
  {
    date: '2024-04-19 18:44:10',
    place: '制氢侧',
    content: '储气罐泄露'
  },
  {
    date: '2024-04-19 18:44:10',
    place: '制氢侧',
    content: '储气罐泄露'
  },
  {
    date: '2024-04-19 18:44:10',
    place: '制氢侧',
    content: '储气罐泄露'
  },
  {
    date: '2024-04-19 18:44:10',
    place: '制氢侧',
    content: '储气罐泄露'
  },
  {
    date: '2024-04-19 18:44:10',
    place: '制氢侧',
    content: '储气罐泄露'
  },
  {
    date: '2024-04-19 18:44:10',
    place: '制氢侧',
    content: '储气罐泄露'
  },
  {
    date: '2024-04-19 18:44:10',
    place: '制氢侧',
    content: '储气罐泄露'
  },
  {
    date: '2024-04-19 18:44:10',
    place: '制氢侧',
    content: '储气罐泄露'
  },
]
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
              <img src="@/assets/images/Deploy/store.png" alt="" class="div-img">
              <p class="div-p">装机容量</p>
            </div>
            <div class="div-normal">
              <img src="@/assets/images/Deploy/hours.png" alt="" class="div-img">
              <p class="div-p">连续使用小时数</p>
            </div>
          </div>
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
          <!--下半部分-->
          <div class="div-header" style="margin-top: 10px">
            <el-row :gutter="1">
              <el-col :span="2">
                <div class="bar"></div>
              </el-col>
              <el-col :span="22">
                <p class="p-header">完成指标</p>
              </el-col>
            </el-row>
          </div>
          <!--日历进度-->
          <div class="box-text">
            <span class="normal-text">日历进度</span>
            <span class="light-text">85%</span>
          </div>
          <div class="calendar-bar-shadow">
            <div class="bar-light" style="width: 85%"></div>
          </div>
          <div class="box-text">
            <span class="normal-text">1天</span>
            <span class="normal-text">366天</span>
          </div>
          <!--总发电量-->
          <div class="box-text">
            <span class="normal-text">总发电量(上网电量)</span>
            <span class="light-text">60%(<span style="color: #80FFA5">30%</span>)</span>
          </div>
          <div class="calendar-bar-shadow">
            <div class="bar-light" style="width: 60%">
              <div class="special-bar-light" style="width: 50%"></div>
            </div>
          </div>
          <div class="box-text">
            <span class="normal-text">0</span>
            <span class="normal-text">100万kWh</span>
          </div>
          <!--氢气产量-->
          <div class="box-text">
            <span class="normal-text">氢气产量</span>
            <span class="light-text">70%</span>
          </div>
          <div class="calendar-bar-shadow">
            <div class="bar-light" style="width: 70%"></div>
          </div>
          <div class="box-text">
            <span class="normal-text">0</span>
            <span class="normal-text">1000mol</span>
          </div>
        </el-card>
      </el-col>
      <!--中间-->
      <el-col :span="12">
        <div style="height: 328px">
          <el-card style="height: 100%">
            <div v-if="selectedIconButtons === 0">
              <div>
                <div id="MonthPower" style="width: 118%; height: 210px; position: relative; top: -15px; left: -50px"></div>
              </div>
              <div>
                <div id="PerDay" style="width: 105%; height: 170px; position: relative; top: -75px; left: -15px"></div>
              </div>
            </div>
            <div v-if="selectedIconButtons === 1"></div>
            <div v-if="selectedIconButtons === 2"></div>
            <div v-if="selectedIconButtons === 3"></div>
            <div v-if="selectedIconButtons === 4"></div>
          </el-card>
        </div>
        <div style="margin-top: 5px">
          <el-card style="">
            <el-row :gutter="20" style="margin-top: 5px">
              <el-col :span="5">
                <div class="el-col-center">
                  <img src="@/assets/images/Deploy/total.png" alt="" class="lower-left-img"
                       @click="selectIconButtons(0)">
                </div>
                <p style="padding: 0; text-align: center; font-size: small; margin: 5px 0 0;">总发电量</p>
                <div v-if="selectedIconButtons===0" style="width: 50px; height: 5px; background-color: #5FA6FE;margin-top: 10px; position: absolute;
                top: 45px; left: 50px"></div>
              </el-col>
              <el-col :span="5">
                <div class="el-col-center">
                  <img src="@/assets/images/Deploy/v.png" alt="" class="lower-left-img" @click="selectIconButtons(1)">
                </div>
                <p style="padding: 0; text-align: center; font-size: small; margin: 5px 0 0;">制氢速率</p>
                <div v-if="selectedIconButtons===1" style="width: 50px; height: 5px; background-color: #5FA6FE;margin-top: 10px; position: absolute;
                top: 45px; left: 198px"></div>
              </el-col>
              <el-col :span="5">
                <div class="el-col-center">
                  <img src="@/assets/images/Deploy/h2.png" alt="" class="lower-left-img" @click="selectIconButtons(2)">
                </div>
                <p style="padding: 0; text-align: center; font-size: small; margin: 5px 0 0;">氢气容量</p>
                <div v-if="selectedIconButtons===2" style="width: 50px; height: 5px; background-color: #5FA6FE;margin-top: 10px; position: absolute;
                top: 45px; left: 346px"></div>
              </el-col>
              <el-col :span="5">
                <div class="el-col-center">
                  <img src="@/assets/images/Deploy/get.png" alt="" class="lower-left-img" @click="selectIconButtons(3)">
                </div>
                <p style="padding: 0; text-align: center; font-size: small; margin: 5px 0 0;">糠酸产量</p>
                <div v-if="selectedIconButtons===3" style="width: 50px; height: 5px; background-color: #5FA6FE;margin-top: 10px; position: absolute;
                top: 45px; left: 495px"></div>
              </el-col>
              <el-col :span="4">
                <div class="el-col-center">
                  <img src="@/assets/images/Deploy/year-get.png" alt="" class="lower-left-img"
                       @click="selectIconButtons(4)">
                </div>
                <p style="padding: 0; text-align: center; font-size: small; margin: 5px 0 0;">经济收益</p>
                <div v-if="selectedIconButtons===4" style="width: 50px; height: 5px; background-color: #5FA6FE;margin-top: 10px; position: absolute;
                top: 45px; left: 628px"></div>
              </el-col>
            </el-row>
          </el-card>
        </div>
      </el-col>
      <!--右侧-->
      <el-col :span="7">
        <el-card>
          <div class="div-header">
            <el-row :gutter="1">
              <el-col :span="2">
                <div class="bar"></div>
              </el-col>
              <el-col :span="22">
                <p class="p-header">
                  {{logType[logStore.logValue]}}
                </p>
              </el-col>
            </el-row>
          </div>
          <div style="margin-top: 10px">
            <el-table :data="warningData" style="width: 100%" height="350px" v-if="logStore.logValue === 0">
              <el-table-column fixed prop="date" label="时间" width="115" />
              <el-table-column prop="place" label="位置" width="75" />
              <el-table-column prop="content" label="内容" width="100" />
              <el-table-column label="操作" width="100px">
                <el-button type="success" round>已解决</el-button>
              </el-table-column>
            </el-table>
            <el-table :data="errorData" style="width: 100%" height="350px" v-if="logStore.logValue === 1">
              <el-table-column fixed prop="date" label="时间" width="115" />
              <el-table-column prop="place" label="位置" width="75" />
              <el-table-column prop="content" label="内容" width="100" />
              <el-table-column label="操作" width="100px">
                <el-button type="success" round>已解决</el-button>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
        <el-dialog
            v-model="centerDialogVisible"
            width="500"
            align-center
        >
          <template #title>
            <div style="display: flex;align-items: center;">
              <img src="@/assets/images/Deploy/warning.png" alt="" style="width: 25px; height: 25px">
              <div style="font-weight: bold; font-size: x-large">警告</div>
            </div>
          </template>
          <span>警告：系统出现故障，请尽快检查！</span>
          <template #footer>
            <div class="dialog-footer">
              <el-button type="danger" @click="centerDialogVisible = false">确定</el-button>
            </div>
          </template>
        </el-dialog>
      </el-col>
    </el-row>
    <!--下部分-->
    <el-row :gutter="8" class="el-row-footer">
      <!--左侧-->
      <el-col :span="5">
        <el-card style="height: 99%">
          <el-row :gutter="10" style="height: 45%">
            <el-col :span="12" class="footer-left-item">
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
            <el-col :span="12" class="footer-left-item">
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

  .box-text {
    display: flex;
    justify-content: space-between;
    margin-top: 3px;
    width: 100%;

    .normal-text {
      font-size: 13px;
    }

    .light-text {
      font-size: 13px;
      color: #62D4CA;
      font-weight: bolder;
    }
  }

  .calendar-bar-shadow {
    width: 100%;
    height: 10px;
    background-color: #85867e;
  }

  .bar-light {
    position: relative;
    height: 10px;
    background-color: #62D4CA;

    .special-bar-light {
      position: relative;
      height: 10px;
      background-color: #80FFA5;
    }
  }
}
</style>