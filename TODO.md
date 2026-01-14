# Project Roadmap & Ideas

## 交互与视觉增强 (Visual & Interaction)

- [ ] **3D 倾斜效果 (Tilt Effect)**
  - 为 Bento Grid 卡片增加鼠标跟随的 3D 倾斜效果 (类似 Apple TV 图标)。
  - 目标：增强页面立体感和高级感。
- [ ] **文字 Glitch 效果**
  - 在首页 "Jarvis" 名字或标题上增加赛博朋克风格的故障闪烁效果 (Load/Hover)。
  - 目标：契合 "Jarvis" 科技感主题。
- [ ] **微交互 (Micro-Interactions)**
  - 点击波纹效果 (Ripple Effect)。
  - 磁性按钮 (Magnetic Buttons)：按钮轻微吸附鼠标。
- [ ] **动态噪点背景 (Grainy Gradient Background)**
  - 增加淡淡的动态噪点纹理。
  - 目标：提升质感，减少纯色背景的单调感。

## 内容与功能 (Content & Features)

- [ ] **Steam 游戏集成**
  - 绑定 Steam API，实时展示游戏状态 ("Playing", "Online")。
  - 获取并展示游戏成就 (Achievements) 和最近游玩记录。
- [ ] **更多 Bento 卡片类型**
  - "Now Reading/Learning": 展示最近阅读书目或学习技术。
  - "Side Project" Mini App: 嵌入式小工具或游戏 (如贪吃蛇)。
  - GitHub 近期动态: 滚动展示 Commit Message。
- [ ] **彩蛋模式**
  - 根据时间 (如深夜) 自动切换特殊背景 (星空/代码雨)。

## 架构与性能 (Architecture & Performance)

- [ ] **启用 View Transitions**
  - 使用 Astro `ClientRouter` 实现无刷新页面切换。
  - 适配现有脚本 (`astro:page-load`)，解决状态重置问题 (如移动端菜单、搜索框)。
  - 目标：提供原生 App 般的流畅导航体验。

## 待办任务 (Pending Tasks)

- [ ] **Supabase 配置**
  - 完成数据库 Table 设置和 RPC 函数配置 (用于浏览量统计)。
  - 解决 Server 端口占用问题。

## 已完成 (Completed)

### 首页重构与增强

- [x] **Bento Grid 布局优化**
  - 移除旧版 "About Me" 代码片段展示。
  - 替换为 GitHub Contribution Heatmap (动态年份)。
  - 优化 "Intro Card": 极简自我介绍 ("Hi, I'm Jarvis")，移除 "Available for hire" 标签，增加网格背景。
  - 替换 Twitter 卡片为 "Music/Vibe" 卡片 (Spotify 风格，动态音频条)。
- [x] **交互动效**
  - **Spotlight Effect**: 鼠标跟随的高光聚光灯效果。
  - **Staggered Entrance**: 卡片交错入场动画。
  - **Infinite Marquee**: Toolkit 卡片技术栈图标无限滚动 (修复了滚动失效问题)。
  - **View Counter**: 集成 Supabase 浏览量统计 (UI 已就绪)。
- [x] **功能模块**
  - 移除 "Say Hi" 模块 (简化交互)。
  - 集成 CMD+K 全局搜索 (基于 Fuse.js)。
  - 创建 Supabase 客户端配置 (`src/lib/supabase.ts`, `.env`)。
