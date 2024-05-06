import axios from 'axios';
import { useTokenStore } from '@/stores/token';
import router from '@/router';
const baseURL = '/api';
const instance = axios.create({ baseURL });

//请求拦截器
instance.interceptors.request.use(
    (config) => {
        const tokenStore = useTokenStore()
        if (tokenStore.token) {
            config.headers.Authorization = tokenStore.token
        }
        return config
    },
    (err) => {
        return Promise.reject(err);
    }
)

//响应拦截器
instance.interceptors.response.use(
    result => {
        if (result.data.code === 0) {
            return result.data
        }
        // eslint-disable-next-line no-undef
        ElMessage.error(result.data.message ? result.data.message : '服务异常')
        return Promise.reject(result.data);
    },
    err => {
        if (err.response.status === 401) {
            // eslint-disable-next-line no-undef
            ElMessage.error('请先登录');
            router.push('/login')
        } else {
            // eslint-disable-next-line no-undef
            ElMessage.error('服务异常');
        }
        return Promise.reject(err);
    }
)

export default instance;