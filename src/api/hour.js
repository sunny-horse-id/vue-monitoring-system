import request from "@/utils/request.js";

export const getHourAPI = () => {
    return request.get('/hour')
}