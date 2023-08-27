import router from '@/router'
import { removeToken } from '@/helper/http/cookie'
import { LOGIN_ROUTE } from '@/router'
import dayjs from 'dayjs'
export const scrollToTop = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  })
}

export const logOut = () => {
  removeToken()
  router.push({
    name: LOGIN_ROUTE
  })
}

export function formatDecimalNumber(number, maxNumber = 3, minNumber = 1) {
  try {
    const formattedNumber = new Intl.NumberFormat('en-US', {
      style: 'decimal',
      useGrouping: true,
      minimumFractionDigits: minNumber,
      maximumFractionDigits: maxNumber
    }).format(number)
    return formattedNumber
  } catch (error) {
    return 'Invalid input'
  }
}

export function formatDate(timestamp, format = 'DD/MM/YYYY hh:ss') {
  return dayjs(timestamp).format(format)
}


