import request from "@/utils/request.js";

export const getPerSecondAPI = (prePower) => {
    return request.get('/power/perSecond?prePower='+prePower)
}

export const getPerMinuteAPI = (date) => {
    return request.get('/power/minute?date='+date)
}

export const getPerHourAPI = (date) => {
    return request.get('/power/hour?date='+date)
}