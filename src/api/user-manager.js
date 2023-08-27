import axiosRequest from '@/helper/http/httpRequest'

export function getListUserApi(data) {
    return axiosRequest({
        url: '/list-user',
        method: 'get',
        data,
        isParams: true,
    })
}

export function bandUser(id) {
    return axiosRequest({
        url: `band/${id}`,
        method: 'get',
    })
}
