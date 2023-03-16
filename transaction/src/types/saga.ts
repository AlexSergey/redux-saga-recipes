export interface ResponseGenerator<T, H = {}, R = {}> {
  data?: T,
  headers?: T,
  request?: R,
  status?: number,
  statusText?: string
}
