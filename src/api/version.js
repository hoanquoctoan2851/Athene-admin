import axiosRequest from '@/helper/http/httpRequest'

export function getListVersionApi(data,os) {
    return axiosRequest({
        url: `/version/${os}`,
        method: 'get',
        data,
        isParams: true,
    })
}

export function deleteVersionApi(id) {
    return axiosRequest({
        url: `/version/delete/${id}`,
        method: 'post',
    })
}


export function createVersionApi(data) {
    return axiosRequest({
        url: `/version/create`,
        method: 'post',
        data,
    })
}

export function updateVersionApi(data, id) {
    return axiosRequest({
        url: `/version/update/${id}`,
        method: 'post',
        data,
    })
}

