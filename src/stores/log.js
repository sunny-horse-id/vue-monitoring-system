//导入pinia
import { defineStore } from 'pinia'
import {ref} from "vue";

//log为独一无二的名字
export const useLogStore = defineStore('log', () => {
    //需要的值
    const logValue = ref(0)
    //获取List的方法
    const getCategory = (index) => {
        logValue.value = index
    }
    //返回方法和所需List
    return {
        logValue,
        getCategory
    }
})