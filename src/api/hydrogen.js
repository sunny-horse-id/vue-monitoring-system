import request from "@/utils/request.js";

export const getHydrogenAPI = (date) => {
    return request.get('/hydrogen?date=' + date)
}