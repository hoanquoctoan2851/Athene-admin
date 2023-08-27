import { defineStore } from 'pinia'
import { store } from './index.js'
export const useLocaleStore = defineStore('locale', {
  state: () => ({ locale: window.localStorage.getItem('locale') || 'en' }),
  actions: {
    setLocale(locale) {
      this.locale = locale
      window.localStorage.setItem('locale', locale)
      window.location.reload()
    }
  }
})

export function useLocaleStoreWithOut() {
  return useLocaleStore(store)
}
