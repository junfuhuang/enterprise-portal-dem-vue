# 企业门户 - Vue 3 + Nuxt 版本

这是一个基于 Nuxt 3、Vue 3 组合式 API、TypeScript 和 Tailwind CSS 构建的企业门户 demo。

## 技术栈

- ⚡ **Nuxt 3** - Vue.js 框架
- 🎨 **Vue 3** - 使用组合式 API (Composition API)
- 📘 **TypeScript** - 类型安全
- 🎨 **Tailwind CSS** - 实用优先的 CSS 框架
- 🎯 **lucide-vue-next** - 图标库

## 功能特性

- ✅ 响应式导航栏（移动端适配）
- ✅ Hero 横幅区域
- ✅ 功能特性展示
- ✅ 数据统计面板
- ✅ 新闻资讯模块
- ✅ 完整的页脚信息
- ✅ 完全类型安全（TypeScript）
- ✅ 组件化架构

## 项目结构

```
.
├── components/          # Vue 组件
│   ├── Header.vue      # 导航栏
│   ├── Hero.vue        # 首页横幅
│   ├── Features.vue    # 功能展示
│   ├── Statistics.vue  # 数据统计
│   ├── News.vue        # 新闻资讯
│   └── Footer.vue      # 页脚
├── assets/
│   └── css/
│       └── main.css    # Tailwind CSS 入口
├── App.vue             # 主应用组件
├── nuxt.config.ts      # Nuxt 配置
├── tailwind.config.js  # Tailwind 配置
└── package.json        # 依赖配置
```

## 安装步骤

### 1. 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:3000` 查看应用

### 3. 构建生产版本

```bash
npm run build
```

### 4. 预览生产版本

```bash
npm run preview
```

## 组件说明

### Header.vue
- 响应式导航栏
- 移动端菜单切换
- 搜索、登录、注册功能

### Hero.vue
- 主视觉横幅
- CTA 按钮
- 数据统计展示

### Features.vue
- 6个核心功能卡片
- 图标 + 说明
- 悬停效果

### Statistics.vue
- 4个关键数据指标
- 渐变背景
- 趋势展示

### News.vue
- 3篇新闻文章
- 图片 + 摘要
- 分类标签

### Footer.vue
- 公司信息
- 多列链接
- 社交媒体图标

## 与 React 版本的对比

| 特性 | React 版本 | Vue 3 版本 |
|------|-----------|-----------|
| 状态管理 | `useState` | `ref` / `reactive` |
| 副作用 | `useEffect` | `watchEffect` / `watch` |
| 计算属性 | `useMemo` | `computed` |
| 组件语法 | JSX | `<template>` |
| 样式绑定 | className | class / :class |
| 事件处理 | onClick | @click |

## 开发提示

1. **组合式 API**: 所有组件都使用 `<script setup>` 语法
2. **类型安全**: 启用了 TypeScript 严格模式
3. **自动导入**: Nuxt 会自动导入组件和组合式函数
4. **响应式**: 使用 `ref` 和 `reactive` 管理状态

## 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## React 版本

想要 React + TypeScript 版本？请查看姊妹仓库：
[enterprise-portal-dem-react](https://github.com/junfuhuang/enterprise-portal-dem-react)

## 许可证

MIT

## 作者

Created with ❤️ by [junfuhuang](https://github.com/junfuhuang)
