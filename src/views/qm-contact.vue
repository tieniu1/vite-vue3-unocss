<template>
  <div class="contact-x">
    <div class="inter-contact">
      <section class="w-full py-12 md:py-24 lg:py-32">
        <div class="container mx-auto items-center justify-center gap-4 px-4 text-center md:px-6">
          <h2 class="text-3xl font-bold mb-20 tracking-tighter text-gray-800 md:text-4xl/tight">
            {{ $t('global.联系方式') }}
          </h2>
          <div class="space-y-3 w-400px mx-auto">
            <p
              class="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
            ></p>

            <el-form
              ref="form"
              :rules="rules"
              :model="formObj"
              label-width="auto"
              size="large"
              label-position="top"
              class="contact-form"
            >
              <el-form-item :label="$t('global.姓名')" prop="fullName">
                <el-input v-model="formObj.fullName" />
              </el-form-item>
              <el-form-item :label="$t('global.手机号')" prop="phoneNumber">
                <el-input v-model="formObj.phoneNumber" />
              </el-form-item>
              <el-form-item :label="$t('global.验证码')" prop="verificationCode">
                <div flex w-full items-center gap-2>
                  <el-input v-model="formObj.verificationCode" class="flex-1" />
                  <el-button @click="handleSendCode" class="!w-100px" :disabled="disabledCode">{{
                    disabledCode ? count + $t('global.秒') : $t('global.发送验证码')
                  }}</el-button>
                </div>
              </el-form-item>
              <el-form-item class="!w-full">
                <div flex justify-center m-auto mt-6>
                  <el-button type="primary" @click="onSubmit" size="large" class="button">{{
                    $t('global.提交')
                  }}</el-button>
                </div>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import i18n from '@/i18n'
import { validatePhoneNumber, validateFullName } from '@/utils/validators'
import { registerAPI, getCodeAPI } from '@/api/APIcustomer.js'
import { ElMessage } from 'element-plus'

const formObj = reactive({
  fullName: '占三',
  phoneNumber: '173636535251',
  verificationCode: ''
})

const rules = reactive({
  fullName: [{ required: true, validator: validateFullName, trigger: 'blur' }],
  phoneNumber: [{ required: true, validator: validatePhoneNumber, trigger: 'blur' }],
  verificationCode: [
    { required: true, message: i18n.t('placeholder.请输入验证码'), trigger: 'blur' }
  ]
})
const count = ref(0)
const disabledCode = ref(false)
let timer = null
const handleStartTimer = () => {
  const TIME_COUNT = 4 //倒计时60秒
  console.log('timer----', timer)
  if (!timer) {
    count.value = TIME_COUNT
    disabledCode.value = true
    timer = setInterval(() => {
      if (count.value > 0 && count.value <= TIME_COUNT) {
        count.value--
      } else {
        disabledCode.value = false
        clearInterval(timer)
        timer = null
      }
    }, 1000)
  }
}
// 获取验证码
const handleSendCode = async () => {
  try {
    const results = await getCodeAPI()
    console.log('results000000', results)
    if (results.body) {
      // 开启倒计时
      handleStartTimer()
      ElMessage.success(i18n.t('tip.验证码已发送'))
    } else {
      ElMessage.error(i18n.t('tip.获取验证码失败'))
    }
  } catch (error) {
    ElMessage.error(i18n.t('tip.获取验证码失败'))
  }
}
// 提交
const onSubmit = async () => {
  try {
    const results = await registerAPI()

    if (results.body) {
      console.log('提交成功')
    }
  } catch (error) {
    console.log('获取提交失败')
  }
  console.log('submit!')
}
</script>
<style lang="less" scoped>
.inter-contact {
  @apply max-w-[1400px] min-w-[1200px]  py-20px;
}
.contact-form {
  :deep {
    label {
      font-size: 16px !important;
    }
    .el-input__wrapper {
      @apply h-12;
    }
    .el-button {
      @apply h-12.5;
    }
  }
}
.button {
  @apply w-50 h-12  leading-12 text-4 bg-blue-500 hover:bg-blue-400;
}
</style>
