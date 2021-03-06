import axios from 'axios'
import { ApiResult } from '../types/ApiResult'

const BASE_URL = 'https://opendata.resas-portal.go.jp/api/v1'

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {
    'X-API-KEY': import.meta.env.VITE_API_KEY,
  },
})

// 都道府県名データを取得する
export const getPrefectureData = async <T>(): Promise<
  ApiResult<T> | string
> => {
  let response
  try {
    response = await instance.get('/prefectures')
  } catch (error) {
    return 'Failed to get prefecture data.'
  }

  if (response.status === 200 && response.data.message === null) {
    return response.data as ApiResult<T>
  } else {
    return response.data.message
  }
}

// 人口データを取得する
export const getPopulationData = async <T>(
  prefCode: number
): Promise<ApiResult<T> | string> => {
  let response
  try {
    response = await instance.get('/population/composition/perYear', {
      params: { prefCode: prefCode, cityCode: '-' },
    })
  } catch (error) {
    return 'Failed to get population data.'
  }

  if (response.status === 200 && response.data.message === null) {
    return response.data as ApiResult<T>
  } else {
    return response.data.message
  }
}
