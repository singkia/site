# FXCK! 项目技术文档

## 项目结构
```
site/
├── docs/                # 文档目录
├── effects/             # 效果文件目录
│   ├── gradient.html    # 渐变文字效果
│   └── crt.html         # CRT显示器效果
├── index.html           # 主入口文件
└── worker.js            # Worker脚本
```

## 效果实现说明

### 渐变文字效果 (gradient.html)
- 使用CSS渐变背景
- 文字裁剪效果
- 流动动画

### CRT效果 (crt.html)
- 模拟CRT显示器特性
- 扫描线效果
- 色彩偏移
- 亮度波动

## 随机效果加载机制
1. `index.html` 随机选择效果文件
2. 使用Fetch API动态加载效果
3. 错误处理确保基本显示

## 扩展指南
1. 添加新效果：
   - 在effects目录创建HTML文件
   - 在index.html的effects数组中添加文件名
2. 效果要求：
   - 独立完整的HTML结构
   - 保持"FXCK!"文字展示
   - 响应式设计

## 版本记录
- 2025-03-29 v1.1
  - 改用iframe加载效果
  - 修复空白页面问题
  - 排除previews目录

- 2025-03-29 v1.0
  - 初始版本
  - 实现随机效果加载
  - 完成两种效果实现

## 目录说明
- `effects/`: 正式效果文件
- `previews/`: 临时预览文件(不上传)
