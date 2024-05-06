import request from "@/utils/request.js";

export const getPerSecondAPI = (prePower) => {
    return request.get('/power/perSecond?prePower='+prePower)
}