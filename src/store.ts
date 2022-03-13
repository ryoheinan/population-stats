import { defineStore } from 'pinia'

interface State {
  [key: number]: { label: string; data: Array<{ year: number; value: number }> }
}

export const usePrefStore = defineStore('prefecture', {
  state: () => {
    return {
      prefData: {} as State,
    }
  },
  getters: {
    getDataset: (state) => {
      console.log(Object.values(state.prefData))
      return Object.values(state.prefData)
    },
  },
  actions: {
    set(
      prefCode: number,
      prefName: string,
      data: Array<{ year: number; value: number }>
    ) {
      this.prefData[prefCode] = { label: prefName, data }
    },
    remove(prefCode: number) {
      delete this.prefData[prefCode]
    },
  },
})
