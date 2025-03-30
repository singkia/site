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

#### CSS实现
- **渐变背景**：使用CSS变量定义线性渐变色彩，通过JavaScript动态更新
- **文字裁剪**：使用`background-clip: text`和`color: transparent`实现文字渐变填充效果
- **霓虹发光**：多层`text-shadow`创建霓虹灯发光效果，不同颜色和模糊半径营造立体感
- **文字描边**：使用`-webkit-text-stroke`增强文字可见性
- **动画效果**：
  - `flowColors`：通过改变`background-position`实现渐变色流动
  - `pulseGlow`：使用`filter: brightness()`实现脉冲发光效果

#### JavaScript动态效果
- **HSL色彩生成**：使用HSL色彩空间生成鲜艳霓虹色，控制饱和度(98-100%)和亮度(40-55%)
- **预定义色系**：包含5种霓虹色组合，确保色彩和谐
- **随机渐变生成**：
  - 随机选择6-8个颜色
  - 50%概率使用预定义色系，50%概率使用随机色
  - 首尾颜色相同实现无缝循环
  - 倾向于水平或垂直方向的渐变角度
- **动画参数随机化**：
  - 随机动画方向(normal/reverse/alternate/alternate-reverse)
  - 随机动画时长(10-20秒)
  - 随机贝塞尔曲线参数，确保平滑过渡
- **定时更新**：每20-30秒随机更新一次所有参数，实现持续变化效果

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
