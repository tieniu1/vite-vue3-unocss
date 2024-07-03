import { defineConfig, presetAttributify, presetUno } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives' // 支持@apply
export default defineConfig({
  presets: [
    presetAttributify({
      /* preset options */
    }),
    presetUno()
  ],
  transformers: [transformerDirectives()],
  shortcuts: {
    // 全局简易变量在这里配置
    // 'btn-green': 'text-white bg-green-500 hover:bg-green-700'
  }
})
