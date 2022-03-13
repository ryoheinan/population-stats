<script setup lang="ts">
  import { computed } from 'vue'
  import { usePrefStore } from '../store'
  import Chart from './Chart.vue'

  const prefStore = usePrefStore()

  const dataset = computed(() => Object.values(prefStore.prefData))
</script>

<template>
  <section>
    <h2>グラフ</h2>
    <p v-if="dataset.length === 0">データが取得できませんでした。</p>
    <Chart v-else title="test" :dataset="dataset" />
  </section>
</template>
