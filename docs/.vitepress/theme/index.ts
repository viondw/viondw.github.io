// @ts-nocheck
import DefaultTheme from "vitepress/theme";
import "./styles/index.scss";
import "./styles/rainbow.css"; // [!code ++] 新增导入CSS
import { watch } from "vue"; // [!code ++] 新增导入watch

let homePageStyle: HTMLStyleElement | undefined; // [!code ++] 新增样式变量

export default {
  ...DefaultTheme,
  // 修改enhanceApp参数解构，兼容原ctx用法 // [!code ++]
  enhanceApp(ctx) { 
    // 保持原默认增强逻辑
    DefaultTheme.enhanceApp(ctx);

    // 新增路由监听逻辑（仅在客户端运行） // [!code ++]
    if (typeof window !== 'undefined') { // [!code ++]
      watch( // [!code ++]
        () => ctx.router.route.data.relativePath, // [!code ++] 通过ctx.router访问
        (newPath) => { // [!code ++]
          const isHome = newPath === '' || newPath === '/'; // [!code ++]
          updateHomePageStyle(isHome); // [!code ++]
        },
        { immediate: true } // [!code ++]
      ); // [!code ++]
    } // [!code ++]
  }
};

// 新增样式切换函数 // [!code ++]
function updateHomePageStyle(value: boolean) { 
  // ...（保持原官方示例代码不变）
}

