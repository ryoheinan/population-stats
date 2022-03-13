<script setup lang="ts">
  import { ref } from 'vue'
  import { getPopulationData, getPrefectureData } from '../module/resasApi'
  import { usePrefStore } from '../store'

  // 都道府県名データのインターフェース
  interface Prefecture {
    prefCode: number
    prefName: string
    isChecked?: boolean
  }

  // カテゴリー（例: 総人口）ごとのデータ
  interface CategoryData {
    label: string
    data: Array<{ year: number; value: number }>
  }

  // 結果を表すインターフェース
  interface PopulationResult {
    boundaryYear: number
    data: Array<CategoryData>
  }

  const prefStore = usePrefStore()

  const prefectures = ref<Array<Prefecture>>()

  const getPrefData = async () => {
    const res = await getPrefectureData<Array<Prefecture>>()
    if (typeof res === 'string') {
      alert('データが取得できませんでした。')
    } else {
      prefectures.value = res.result
    }
  }

  const prefChange = async (pref: Prefecture) => {
    pref.isChecked = pref.isChecked ? false : true
    if (pref.isChecked) {
      const res = await getPopulationData<PopulationResult>(pref.prefCode)
      if (typeof res === 'string') {
        alert('データが取得できませんでした。')
      } else {
        prefStore.set(pref.prefCode, pref.prefName, res.result.data[0].data)
      }
    } else {
      prefStore.remove(pref.prefCode)
    }
  }

  getPrefData()
</script>

<template>
  <section>
    <h2>都道府県</h2>
    <div v-for="p in prefectures" :key="p.prefCode">
      <input type="checkbox" :id="`${p.prefCode}`" @change="prefChange(p)" />
      <label :for="`${p.prefCode}`" data-testid="prefecture">{{
        p.prefName
      }}</label>
    </div>
  </section>
</template>
