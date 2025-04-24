// stores/menu.ts
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', {
  state: () => ({
    isMenuChecked: false
  }),
  actions: {
    toggleMenu() {
      this.isMenuChecked = !this.isMenuChecked
      console.log('menu state =>', this.isMenuChecked)
    }
  }
})
