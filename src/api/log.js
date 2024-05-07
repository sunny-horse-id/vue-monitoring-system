import request from "@/utils/request.js";

export const getLogListAPI = (type) => {
    return request.get('/log?type='+type)
}

export const deleteLogAPI = (id) => {
    return request.delete('/log?id='+id)
}