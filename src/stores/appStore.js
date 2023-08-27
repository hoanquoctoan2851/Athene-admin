import { defineStore } from 'pinia'
import { store } from './index.js'
export const useAppStore = defineStore('appStore', {
  state: () => ({
    isExpandSider: true,
    messageNotification: {
      type: 'success',
      message: ''
    },
    valueTabToken: 'ATH',
    valueTabVersion: 'ios',
  }),
  actions: {
    setExpandSider(data) {
      this.isExpandSider = data
    },
    setValueTabToken(data) {
      this.valueTabToken = data
    },

    setValueTabVersion(data) {
      this.valueTabVersion = data
    },


  }
})

export function useAppStoreWithOut() {
  return useAppStore(store)
}
