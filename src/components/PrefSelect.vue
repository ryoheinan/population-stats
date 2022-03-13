<script setup lang="ts">
  import { ref } from 'vue'
  import { getPrefectureData } from '../module/resasApi'
  const prefectures = ref<Array<PrefResult>>()
  const checkedPrefs = ref([])

  interface PrefResult {
    prefCode: string
    prefName: string
  }
  const getData = async () => {
    const res = await getPrefectureData<Array<PrefResult>>()
    if (typeof res === 'string') {
      return res
    }
    prefectures.value = res.result
  }
  getData()
</script>

<template>
  <section>
    <h2>都道府県</h2>
    <p v-if="!prefectures">データが取得できませんでした。</p>
    <div>Checked prefs: {{ checkedPrefs }}</div>
    <div v-for="p in prefectures" :key="p.prefCode">
      <input
        type="checkbox"
        :id="p.prefCode"
        :value="p.prefCode"
        v-model="checkedPrefs"
      />
      <label :for="p.prefCode" data-testid="prefecture">{{ p.prefName }}</label>
    </div>
  </section>
</template>
