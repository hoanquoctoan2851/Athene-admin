import axios from 'axios'
import {getToken} from '@/helper/http/cookie'
import {logOut} from "@/helper";

const service = axios.create({
    baseURL: import.meta.env.VITE_BASE_API_URL,
    timeout: 20000,
    headers: {}
})
let reqConfig
service.interceptors.request.use(
    (config) => {
        if (getToken()) {
            config.headers.Authorization = 'Bearer ' + getToken()
        }
        if (config.isDownLoadFile) {
            config.responseType = 'blob'
        }
        if (config.isUploadFile) {
            config.headers['Content-Type'] = 'multipart/form-data'
        }
        reqConfig = config
        if (config.isParams) {
            config.params = config.data
        }

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    async (response) => {
        if (reqConfig.isDownLoadFile) {
            return response
        }
        let res = response.data
        const statusCode = response.status
        switch (statusCode) {
            case 200:
                break
            case 201:
                break
            case 422:
                res = {
                    ...res,
                    error_response: ''
                }
                break
            case 403:
                break
            case 401:
                break
            case 500:
                break
            default:
        }
        if (statusCode === 200 || statusCode === 201 || statusCode === 422 || statusCode === 401) {
            if (reqConfig.isAlertErrorMsg && statusCode === 200) {
                // console.log('200 message')
            }
            return res
        } else {
            if (reqConfig.isAlertErrorMsg) {
                // console.log('message error')
            }
            if (statusCode.toString().startsWith('5')) {
                // console.log('message error 500')
            }
            return Promise.reject(new Error(res.message || 'error'))
        }
    },
    async (error) => {
        if (error.response?.status === 401) {
            logOut()
        }
        return Promise.reject(error.response?.data?.error)
    }
)

export function axiosRequest({
                                 url,
                                 method,
                                 data,
                                 isParams,
                                 isQuery,
                                 isUploadFile,
                                 isDownLoadFile,
                                 isAlertErrorMsg = true
                             }) {
    return service({
        url,
        method: method ?? 'get',
        data: data ?? {},
        isQuery: isQuery ?? false,
        isParams: isParams ?? false,
        isUploadFile: isUploadFile ?? false,
        isDownLoadFile: isDownLoadFile ?? false,
        isAlertErrorMsg
    })
}

export default axiosRequest
