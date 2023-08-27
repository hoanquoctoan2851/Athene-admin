import {defineStore} from 'pinia'
import {store} from './index.js'
import {loginApi, getUserInfo} from "@/Api/auth";
import {setToken} from "@/helper/http/cookie";

export const userStore = defineStore('userStore', {
    state: () => ({
        userInfo: {},
    }),
    actions: {
        setUserInfo(data) {
            this.userInfo = data
        },
        async loginAction(data) {
            const res = await loginApi(data)
            const token = res.data?.accessToken
            setToken(token)
            return token
        },
        async getUserInfo() {
            const {data} = await getUserInfo()
            this.setUserInfo(data)
        }
    }
})

export function useUserStoreWithOut() {
    return userStore(store)
}
