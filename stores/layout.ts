import { defineStore } from 'pinia'

interface State {
  headerTitle: string
}

export const useLayoutStore = defineStore('layout', {
  state: (): State => ({
    headerTitle: ''
  }),

  getters: {
    //
  },

  actions: {
    init(newState: Partial<State>) {
      if (newState.headerTitle) this.headerTitle = newState.headerTitle
    },
    setHeaderTitle(newHeaderTitle: string) {
      this.headerTitle = newHeaderTitle
    }
  },
})

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useCounter, import.meta.hot))
// }
