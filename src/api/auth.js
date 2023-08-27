import axiosRequest from '@/helper/http/httpRequest'

export function loginApi(data) {
  return axiosRequest({
    url: '/auth/login',
    method: 'post',
    data
  })
}

export function getUserInfo() {
  return axiosRequest({
    url: '/me',
    method: 'get',
  })
}
