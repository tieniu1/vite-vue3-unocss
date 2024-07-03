import request from '@/utils/request'
// 获取验证码
export const getCodeAPI = (body) => {
  // return request.post(``, body)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ code: 20, body: {} })
      // reject()
    }, 1000)
  })
}
// 注册
export const registerAPI = (body) => {
  // return request.post(``, body)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ code: 20, body: {} })
      // reject()
    }, 1000)
  })
}
