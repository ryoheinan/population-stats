export interface ApiResult<T> {
  message: null | string
  result: T
}

export interface ApiError extends ApiResult<null> {
  message: string
  description: string
}
