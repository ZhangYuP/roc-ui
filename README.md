## 鹏 —— 一个 Vue UI 组件

[![Build Status](https://www.travis-ci.org/ZhangYuP/roc-ui.svg?branch=master)](https://www.travis-ci.org/ZhangYuP/roc-ui)

## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架，希望对你有用。

## 开始使用

1. 添加 CSS 样式

使用本框架前，请在 CSS 中开启 border-box

```css
*，*::before,*::after{box-sizing: border-box;}
```
IE 8 及以上浏览器都支持此样式。

2. 安装 roc-ui
```
npm install --save roc-ui-1
```
3. 引入 roc-ui
```
import {Button, ButtonGroup, Icon} from 'roc-ui-1'
import 'roc-ui-1/dist/index.css'

export default {
  name: 'app',
  components: {
    'r-button': Button,
    'r-button-group': ButtonGroup,
    'r-icon': Icon
  }
}
```

## 文档

[官方文档](https://github.com/ZhangYuP/roc-ui)

## 提问

[issues](https://github.com/ZhangYuP/roc-ui/issues)

## 联系方式

邮箱：zyp5318@qq.com

## 贡献代码

[Pull requests](https://github.com/ZhangYuP/roc-ui/pulls)
