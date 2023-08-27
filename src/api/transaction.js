import axiosRequest from '@/helper/http/httpRequest'

export function getTransactionApi(data) {
    return axiosRequest({
        url: '/transaction',
        method: 'get',
        data,
        isParams: true,
    })
}


export function getTransactionUserApi(data, id) {
    return axiosRequest({
        url: `/transaction/${id}`,
        method: 'get',
        data,
        isParams: true,
    })
}
