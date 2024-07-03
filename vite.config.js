import { fileURLToPath, URL } from 'node:url'
import UnoCSS from 'unocss/vite'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), '')
  const isStaging = env.VITE_NAME === 'staging'

  return {
    plugins: [
      vue(),
      UnoCSS(),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ],
    base: './',
    build: {
      outDir: isStaging ? 'dist-staging' : 'dist'
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    // vite 配置
    define: {
      __APP_ENV__: JSON.stringify(env)
    }
    // 配置前端服务地址和端口
    // server: {
    //   host: '0.0.0.0',
    //   port: 8991,
    //   // 设置反向代理，跨域
    //   proxy: {
    //     '/api': {
    //       // 后台地址
    //       target: 'http://127.0.0.1:3000/',
    //       changeOrigin: true,
    //       rewrite: (path) => path.replace(/^\/api/, '')
    //     }
    //   }
    // }
  }
})
