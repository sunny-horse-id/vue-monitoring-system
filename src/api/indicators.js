import request from "@/utils/request.js";

export const getIndicatorsAPI = (preNorm) => {
    return request.post('/norm', preNorm)
}