import {createRouter, createWebHistory} from 'vue-router'
import pageNotFound from '@/router/page-not-found/pageNotFound'
import login from '@/router/auth/login'
import {getToken} from "../helper/http/cookie";

// Route page white list
const WHITE_LIST_PAGE = ['login', 'page-not-found']
export const ROOT_ROUTE = 'home'
export const LOGIN_ROUTE = 'login'

// Route page view
const modules = import.meta.globEager('./modules/*.js')
const routeModuleList = []
Object.keys(modules).forEach((key) => {
    const mod = modules[key].default || {}
    const modList = Array.isArray(mod) ? [...mod] : [mod]
    routeModuleList.push(...modList)
})
export const LIST_ROUTES = routeModuleList

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes: [...LIST_ROUTES, pageNotFound, login]
})

// Guards login user action
router.beforeEach(async (to) => {
    if (!getToken() && !WHITE_LIST_PAGE.includes(to.name)) {
        return {name: LOGIN_ROUTE}
    }
    if (getToken() && to.name === LOGIN_ROUTE) {
        return {name: ROOT_ROUTE}
    }
})

export default router
