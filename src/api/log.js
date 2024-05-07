import request from "@/utils/request.js";

export const getLogListAPI = (type) => {
    return request.get('/log?type='+type)
}