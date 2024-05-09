import request from "@/utils/request.js";

export const getDataAPI = () => {
    return request.get('/data')
}