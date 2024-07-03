import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'

import { ElLoading } from 'element-plus'
let loadingInstance: any = {}
declare module 'axios' {
  interface AxiosResponse<T = any> {
    message: string
    body: any
    results: any
  }
}

class HttpRequest {
  baseURL: string
  timeout: number
  constructor() {
    // this.baseURL = 'https://test.renee-arts.com/v1to2patch/api/' // 清除缓存
    this.baseURL = import.meta.env.VITE_API_BASE_URL
    this.timeout = 10000
  }

  // 设置拦截器
  setInterceptor(instance: AxiosInstance) {
    // 请求拦截器
    instance.interceptors.request.use((config) => {
      const token = localStorage.getItem('token')
      if (token) {
        config.headers['Authorization'] = JSON.parse(token) // 让每个请求携带自定义token 请根据实际情况自行修改
      }
      config.headers['default-role-type'] = 2
      config.headers['customer-id'] = 'YIJIE_2017_FAKE'

      return config // 只是扩展请求的配置
    })
    //  返回结果拦截器
    instance.interceptors.response.use(
      (res) => {
        loadingInstance.close()
        return res.data // 接口里面配合的
      },
      (err) => {
        loadingInstance.close()
        return Promise.reject(err) // 失败抛出异常
      }
    )
  }

  request(options: AxiosRequestConfig) {
    // 通过request方法来进行请求操作
    //  每次请求可以创建一个新的实例，业务不复杂可以不创建实例，直接用axios
    const instance = axios.create()
    loadingInstance = ElLoading.service()
    const config = {
      baseURL: this.baseURL,
      timeout: this.timeout,
      ...options
    }
    this.setInterceptor(instance) // 给当前实例设置拦截器
    return instance(config) //产生一个 promise
  }

  get(url: string, data: object = {}, config?: AxiosRequestConfig) {
    //axios.get('/xxx',{params:xxx})
    return this.request({
      url,
      method: 'get',
      ...data,
      ...config
    })
  }
  post(url: string, data: object = {}, config?: AxiosRequestConfig) {
    return this.request({
      url,
      method: 'post',
      data,
      ...config
    })
  }
  put(url: string, data: object = {}, config?: AxiosRequestConfig) {
    return this.request({
      url,
      method: 'put',
      data,
      ...config
    })
  }
  // 上传文件
  /*
     使用方法.
     const result = await request.postFormdata('/upload', {
      files: fileList.value.map((v) => v.raw)
    })
  */
  postFormdata(url: string, data: { [key: string]: any[] } = {}, config?: AxiosRequestConfig) {
    const formData = new FormData()
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        for (const item of data[key]) {
          formData.append(key, item)
        }
      }
    }
    return this.request({
      url,
      method: 'post',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      ...config
    })
  }
}
export default new HttpRequest()
