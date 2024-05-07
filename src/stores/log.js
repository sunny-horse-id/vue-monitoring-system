//导入pinia
import { defineStore } from 'pinia'
import {ref} from "vue";

//log为独一无二的名字
export const useLogStore = defineStore('log', () => {
    //需要的值
    const logValue = ref(0)
    const warningLogLength = ref(0)
    const errLogLength = ref(0)
    //获取List的方法
    const setLog = (index) => {
        logValue.value = index
    }
    // 设置警告数量
    const setWarningLogLength = (index) => {
        warningLogLength.value = index
    }
    // 设置事故数量
    const setErrLogLength = (index) => {
        errLogLength.value = index
    }
    //返回方法和所需List
    return {
        logValue,
        warningLogLength,
        errLogLength,
        setLog,
        setWarningLogLength,
        setErrLogLength
    }
})