import PageNotFound from '@/views/Page-not-found/index.vue'
import LayoutWhite from "@/layout/LayoutWhite.vue";
export const PAGE_NOT_FOUND = 'page-not-found'
const pageNotFound = {
  path: '/',
  name: PAGE_NOT_FOUND,
  title: 'PageNotFound',
  component: LayoutWhite,
  redirect: '/page-not-found',
  children: [
    {
      path: '/:pathMatch(.*)*',
      component: PageNotFound,
      alias: 'page-not-found',
      name: PAGE_NOT_FOUND,
    }
  ]
}

export default pageNotFound
