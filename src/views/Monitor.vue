<script setup>
import { ref, watch, nextTick, onMounted } from 'vue';
import * as echarts from 'echarts';
import {getDataAPI} from "@/api/data.js";
import {getLogListAPI} from "@/api/log.js";
import {useLogStore} from "@/stores/log.js";

// 使用按钮控制柱状图
const isShow = ref(true)
const select = (index) => {
  isShow.value = index
  switch (index) {
    case true:
      setTimeout(() => {
        getErrChart();
      }, 1);
      break
    case false:
      setTimeout(() => {
        getErrTotalChart();
      }, 1);
      break
  }
}

// 日期常量
const times = ref([]);
// 生成日期
const getTimes = () => {
  for (let hour = 0; hour <= 23; hour++) {
    for (let minute = 0; minute < 60; minute += 10) {
      let formattedTime = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      times.value.push(formattedTime);
    }
  }
}
// 转载时生成数据
onMounted(async () => {
  await getTimes();
  await getDataData();
  getErrData()
  getLogListData(0)
  getLogListData(1)
})

let mySet = ref(new Set())
const times_err = ref([])
// 模拟总的数据
const totalData = ref([])
const getDataData = async () => {
  const res = await getDataAPI()
  totalData.value = res.data
  await getErrData()
  await getTimesErr()
}
const getTimesErr = () => {
  const setArray = Array.from(mySet.value);
  setArray.sort((a, b) => a - b)
  for (let i = 0; i < setArray.length; i++) {
    times_err.value.push(times.value[setArray[i]])
    for (let k = 0; k < 5; k++) {
      if (k === 0) {
        if (totalData.value[0]["date_" + setArray[i]] > 22 || totalData.value[0]["date_" + setArray[i]] < 18) {
          errData.value[k]["date_" + i] = totalData.value[0]["date_" + setArray[i]]
        } else {
          errData.value[k]["date_" + i] = '-'
        }
      } else if (k === 1) {
        if (totalData.value[1]["date_" + setArray[i]] > 11 || totalData.value[1]["date_" + setArray[i]] < 9) {
          errData.value[k]["date_" + i] = totalData.value[1]["date_" + setArray[i]]
        } else {
          errData.value[k]["date_" + i] = '-'
        }
      } else if (k === 2) {
        if (totalData.value[2]["date_" + setArray[i]] > 55 || totalData.value[2]["date_" + setArray[i]] < 45) {
          errData.value[k]["date_" + i] = totalData.value[2]["date_" + setArray[i]]
        } else {
          errData.value[k]["date_" + i] = '-'
        }
      } else if (k === 3) {
        if (totalData.value[3]["date_" + setArray[i]] === 0) {
          errData.value[k]["date_" + i] = totalData.value[3]["date_" + setArray[i]]
        } else {
          errData.value[k]["date_" + i] = '-'
        }
      } else {
        if (totalData.value[4]["date_" + setArray[i]] > 55 || totalData.value[4]["date_" + setArray[i]] < 45) {
          errData.value[k]["date_" + i] = totalData.value[4]["date_" + setArray[i]]
        } else {
          errData.value[k]["date_" + i] = '-'
        }
      }
    }
  }
  console.log(times_err.value)
}
// 模拟错误数据
const errData = ref([
  {"name": "发电侧电压/V"},
  {"name": "发电侧电流/A"},
  {"name": "氢气罐压力"},
  {"name": "储能侧健康度/%"},
  {"name": "流体浓度梯度"}
])
const getErrData = async () => {
  for (let i = 0; i < totalData.value.length; i++) {
    for (let k = 0; k < 144; k++) {
      if (i === 0) {
        if (totalData.value[0]["date_" + k] > 22 || totalData.value[0]["date_" + k] < 18) {
          mySet.value.add(k)
        }
      } else if (i === 1) {
        if (totalData.value[1]["date_" + k] > 11 || totalData.value[1]["date_" + k] < 9) {
          mySet.value.add(k)
        }
      } else if (i === 2) {
        if (totalData.value[2]["date_" + k] > 55 || totalData.value[2]["date_" + k] < 45) {
          mySet.value.add(k)
        }
      } else if (i === 3) {
        if (totalData.value[3]["date_" + k] === 0) {
          mySet.value.add(k)
        }
      } else {
        if (totalData.value[4]["date_" + k] > 55 || totalData.value[4]["date_" + k] < 45) {
          mySet.value.add(k)
        }
      }
    }
  }
}

function getErrChart() {
  const chartDom = document.getElementById('Err');
  const myChart = echarts.init(chartDom);
  const option = {
    legend: {
      top: '5px',
      right: '45px'
    },
    tooltip: {},
    dataset: {
      source: [
        ['季度', '发电侧电压', '发电测电流', '氢气罐压力', '储能侧健康度', '流体浓度梯度'],
        ['1', 7, 5, 6, 3, 4],
        ['2', 8, 6, 6, 2, 4],
        ['3', 5, 3, 5, 3, 3],
        ['4', 4, 2, 4, 2, 2],
      ]
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
      },
      {
        type: 'bar',
        itemStyle: {
          color: '#08c8e8' // 修改第二个柱子的颜色
        }
      },
      {
        type: 'bar',
        itemStyle: {
          color: '#b40fd8' // 修改第二个柱子的颜色
        }
      },
      {
        type: 'bar',
        itemStyle: {
          color: '#deed04' // 修改第二个柱子的颜色
        }
      }
    ]
  };

  option && myChart.setOption(option);
}

function getErrTotalChart() {
  const chartDom = document.getElementById('ErrTotal');
  const myChart = echarts.init(chartDom);
  const option = {
    tooltip: {},
    dataset: {
      source: [
        ['季度', '总数'],
        ['1', 24],
        ['2', 16],
        ['3', 21],
        ['4', 13],
      ]
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
    ]
  }
  option && myChart.setOption(option);
}

// 初始化加载绘制的图表
setTimeout(() => {
  getErrChart();
}, 1);

// 修改上面表格的颜色
// eslint-disable-next-line no-unused-vars
function topTableCellStyle({row, column, rowIndex, columnIndex}) {
  if (rowIndex === 0) {
    if (totalData.value[0]["date_" + (columnIndex - 1)] > 22 || totalData.value[0]["date_" + (columnIndex - 1)] < 18) {
      return {
        textAlign: 'center',
        background: 'red',
        color: 'white',
        borderRadius: '20px' // 背景区域的圆角
      };
    }
  } else if (rowIndex === 1) {
    if (totalData.value[1]["date_" + (columnIndex - 1)] > 11 || totalData.value[1]["date_" + (columnIndex - 1)] < 9) {
      return {
        textAlign: 'center',
        background: 'red',
        color: 'white',
        borderRadius: '20px' // 背景区域的圆角
      };
    }
  } else if (rowIndex === 2) {
    if (totalData.value[2]["date_" + (columnIndex - 1)] > 55 || totalData.value[2]["date_" + (columnIndex - 1)] < 45) {
      return {
        textAlign: 'center',
        background: 'red',
        color: 'white',
        borderRadius: '20px' // 背景区域的圆角
      };
    }
  } else if (rowIndex === 3) {
    if (totalData.value[3]["date_" + (columnIndex - 1)] === 0) {
      return {
        textAlign: 'center',
        background: 'red',
        color: 'white',
        borderRadius: '20px' // 背景区域的圆角
      };
    }
  } else {
    if (totalData.value[4]["date_" + (columnIndex - 1)] > 55 || totalData.value[4]["date_" + (columnIndex - 1)] < 45) {
      return {
        textAlign: 'center',
        background: 'red',
        color: 'white',
        borderRadius: '20px' // 背景区域的圆角
      };
    }
  }
  return {textAlign: 'center',}
}

// 下面的表格的颜色
// eslint-disable-next-line no-unused-vars
function bottomTableCellStyle({row, column, rowIndex, columnIndex}) {
  return {textAlign: 'center',}
}

// 选择日期
const selectedDate = ref('2023-4-21'); // 初始化选择的日期为空
watch(selectedDate, newValue => {
  nextTick(() => {
    const input = document.querySelector('.el-input__inner');
    if (input) {
      input.placeholder = newValue;
    }
    getDataData()
  });
});
const logStore = useLogStore()
const getLogListData = async (type) => {
  const res = await getLogListAPI(type)
  if (type) {
    logStore.setErrLogLength(res.data.length)
  } else {
    logStore.setWarningLogLength(res.data.length)
  }
}
</script>

<template>
  <el-card>
    <el-date-picker
        v-model="selectedDate"
        type="date"
        :clearable="false"
        style="width: 115px;position: absolute;z-index: 999; top:85px"
    />
    <el-table :data="totalData" style="width: 100%; position: relative; top: -5px" height="313px"
              :row-style="{height:'55px'}" :cell-style="topTableCellStyle">
      <el-table-column fixed prop="name" width="130" header-align="center"/>
      <el-table-column v-for="(item, index) in times" :key="index" :prop="'date_' + index" :label="item" width="100"
                       header-align="center"/>
    </el-table>
  </el-card>
  <el-row style="margin-top: 5px" :gutter="5">
    <el-date-picker
        v-model="selectedDate"
        type="date"
        :clearable="false"
        style="width: 115px;position: absolute;z-index: 999; top:15px; left: 20px"
    />
    <el-col :span="15">
      <el-card style="height: 298px">
        <el-table :data="errData" style="width: 100%; position: relative; top: -10px" height="290px"
                  :row-style="{height:'50px'}" :cell-style="bottomTableCellStyle">
          <el-table-column fixed prop="name" width="130" header-align="center"/>
          <el-table-column v-for="(item, index) in times_err" :key="index" :prop="'date_' + index" :label="item"
                           width="100" header-align="center"/>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="9">
      <el-card style="height: 298px">
        <el-container style="position: relative; top: -5px">
          <el-button :type="isShow ? 'success' : 'primary'" :plain="!isShow" @click="select(true)" style="z-index: 999">
            季度故障详细分布
          </el-button>
          <el-button :type="!isShow ? 'success' : 'primary'" :plain="isShow" @click="select(false)"
                     style="z-index: 999">季度故障总计
          </el-button>
        </el-container>
        <div v-if="isShow===true" id="Err"
             style="width: 115%; height: 285px; position: relative; left: -20px; top:10px"></div>
        <div v-if="isShow===false" id="ErrTotal"
             style="width: 115%; height: 310px; position: relative; left: -20px; top:-30px"></div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style scoped>

</style>