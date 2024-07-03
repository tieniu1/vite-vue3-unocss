import i18n from '@/i18n'

export const isPhoneNumber = (num) => {
  //检查是否是手机号
  return /^1[2,3,4,5,6,7,8,9]\d{9}$/.test(num)
}
export const isEmail = (email) => {
  return /^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*\.[a-z]{2,}$/.test(
    email
  )
}
export const isName = (name) => {
  //检测中英文姓名
  return /[a-zA-Z\u4E00-\u9FA5]+$/.test(name)
}

// 校验中英文名
export const validateFullName = (rule, value, callback) => {
  const trimValue = typeof value === 'string' ? value.trim(value) : ''
  if (!trimValue) {
    callback(new Error(i18n.t('placeholder.请输入姓名')))
  } else if (!isName(trimValue)) {
    callback(new Error(i18n.t('placeholder.请输入正确的姓名')))
  } else {
    callback()
  }
}

export const validatePass = (rule, value, callback) => {
  const reg = /^(?=.*[a-zA-Z])(?=.*\d)[^]{8,16}$/
  if (value === '') {
    // 请输入密码
    callback(new Error(i18n.t('placeholder.请输入密码')))
  } else if (!reg.test(value)) {
    // 密码至少8位，至少1个字母和1个数字
    callback(new Error(i18n.t('placeholder.密码至少8位，至少1个字母和1个数字')))
  } else {
    callback()
  }
}
export const validatePhoneNumber = (rule, value, callback) => {
  if (isPhoneNumber(value)) {
    callback()
  } else {
    // 请输入正确手机号
    callback(new Error(i18n.t('placeholder.请输入正确手机号')))
  }
}
export const validateEmail = (rule, value, callback) => {
  //  邮箱
  if (isEmail(value)) {
    callback()
  } else {
    // 请输入正确邮箱
    callback(new Error(i18n.t('placeholder.请输入正确的邮箱地址')))
  }
}
export const validateUsername = (rule, value, callback) => {
  if (this.usernameType === 1) {
    if (isPhoneNumber(value)) {
      callback()
    } else {
      // 请输入正确手机号
      callback(new Error(i18n.t('placeholder.请输入正确手机号')))
    }
    //  手机号
  } else if (this.usernameType === 0) {
    //  邮箱
    if (isEmail(value)) {
      callback()
    } else {
      // 请输入正确邮箱
      callback(new Error(i18n.t('placeholder.请输入正确的邮箱地址')))
    }
  }
}

export default {
  validatePass,
  validateUsername
}
