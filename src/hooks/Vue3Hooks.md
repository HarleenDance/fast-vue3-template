<p align="center">
  <img align="center" style="width:200px" src="https://img-steward-online.goodaa.com.cn/568d4fc225de4b7e8067f9505ce97acb.png"/>
</p><br/>
<h1 align="center"><b>V3Hooks</b></h1>
<h4 align="center">针对 Vue3 的实用Hooks集合</h4>

<h4  align="center">
  V3Hooks也可以说是<a href="https://github.com/alibaba/hooks">ahooks</a>的Vue实现，绝大部分Api是保持一致的
</h4>
<br>

## 🔨 安装

<h4 align="center">
  <pre>npm i <a href="https://www.npmjs.com/package/v3hooks">v3hooks</a> --save</pre>
  <i>or</i>
  <pre>yarn add <a href="https://www.npmjs.com/package/v3hooks">v3hooks</a></pre>
</h4>

## 🏃 文档

<h4 align="center">
  <a href="https://yanzhandong868.gitbook.io/v3hooks/">使用文档</a>
</h4>

<br>

## ⚡ 使用

- **Async**
  - `useRequest` — 一个完整的管理异步数据请求的 Hook,<a href="https://ahooks.js.org/zh-CN/hooks/async">aHook useRequest</a>的 Vue3 实现，Api 完全一致，如果你使用过 aHook 这将无缝衔接到 Vue3.
- **Side**
  - `useDebounce` — 用于处理防抖值的 Hook.
  - `useDebounceFn` — 用于处理防抖函数的 Hook.
  - `useThrottle` — 用于处理节流值的 Hook.
  - `useThrottleFn` — 用于处理节流函数的 Hook.
  - `useInterval` — 用于处理 interval 的 Hook.
  - `useTimeout` — 用于处理 timeout 的 Hook.
  <!-- - **Browser** -->
- **State**
  - `useToggle` — 用于在两个状态值间切换的 Hook.
  - `useBoolean` — 优雅的管理 boolean 值的 Hook.
  - `useDate` — 用于处理时间格式化 Hook.
  - `useLocalStorage` — 简单高效管理 localStorage 的 Hook.
  - `useSessionStorage` — 简单高效管理 SessionStorage 的 Hook.
  - `useCookie` — 用于管理本地 Cookie Hook.
  - `useNetwork` — 用于获取网络状态 Hook.
  - `useSet` — 用于管理 Set 的 Hook.
  - `useMap` — 用于管理 Map 的 Hook.
  - `useWebSocket` — 用于处理 WebSocket 的 Hook。
  <!-- - `useRouteQuery` — 用于获取url query值的 Hook. -->
- **UI**
  - `useVirtualList` — 用于长列表虚拟化列表的 Hook.
  - `useDynamicList` — 用于管理列表状态 Hook.
  - `useMediaQuery` — 用于监听 mediaQuery 状态的 Hook。
  - `useExternal` — 用于加载异步资源的 Hook.
  - `useFullscreen` — 一个用于处理 dom 全屏的 Hook.
  - `useDocumentVisibility` — 可以获取页面可见状态的 Hook.
  - `useTextSelection` — 实时获取用户当前选取的文本内容及位置 Hook.
  - `useQRCode` — 用来生成二维码的 Hook.
- **Advanced**
  - `useLockFn` — 用于增加异步函数增加竞态锁，防并发 Hook.

## 常见问题

常见问题请见 [文档](https://github.com/yanzhandong/v3hooks/blob/master/docs/question.md)

## 🤝 感谢

如果这个项目对您有帮助，欢迎 Star
