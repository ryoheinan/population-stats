<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { LineChart, ExtractComponentData } from 'vue-chart-3'
  import { Chart, ChartData, ChartOptions, registerables } from 'chart.js'

  interface Props {
    title: string
    dataset: Array<{
      label: string
      data: Array<{ year: number; value: number }>
    }>
  }
  const props = defineProps<Props>()

  Chart.register(...registerables)
  const lineRef = ref<ExtractComponentData<typeof LineChart>>()

  const options = ref<ChartOptions<'line'>>({
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: props.title,
      },
    },
    parsing: {
      xAxisKey: 'year',
      yAxisKey: 'value',
    },
  })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const testData = computed<ChartData<any>>(() => ({
    labels: [
      1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015,
      2020, 2025, 2030, 2035, 2040, 2045,
    ],
    datasets: props.dataset,
    parsing: {
      xAxisKey: 'year',
      yAxisKey: 'value',
    },
  }))
</script>

<template>
  <div>
    <LineChart ref="lineRef" :chartData="testData" :options="options" />
  </div>
</template>
