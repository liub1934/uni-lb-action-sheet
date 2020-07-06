<p align="center">
  <a href="https://github.com/liub1934/uni-lb-action-sheet">
    <img src="https://img.shields.io/github/stars/liub1934/uni-lb-action-sheet">
  </a>
  <a href="https://github.com/liub1934/uni-lb-action-sheet/fork">
    <img src="https://img.shields.io/github/forks/liub1934/uni-lb-action-sheet">
  </a>
  <a href="https://github.com/liub1934/uni-lb-action-sheet/issues">
    <img src="https://img.shields.io/github/issues/liub1934/uni-lb-action-sheet">
  </a>
  <a href="https://www.npmjs.com/package/uni-lb-action-sheet">
    <img src="https://img.shields.io/npm/v/uni-lb-action-sheet">
  </a>
  <a href="https://npmcharts.com/compare/uni-lb-action-sheet?minimal=true">
    <img src="https://img.shields.io/npm/dm/uni-lb-action-sheet">
  </a>
  
  <a href="https://github.com/liub1934/uni-lb-action-sheet/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/liub1934/uni-lb-action-sheet">
  </a>
</p>

工做项目需要，开发了一个可自定义的 Action 操作列表，支持左右滑动，可配置性强，可自定义性高。  
Github：[uni-lb-action-sheet](https://github.com/liub1934/uni-lb-action-sheet)  
插件市场：[uni-lb-action-sheet](https://ext.dcloud.net.cn/plugin?id=2236)

![image](https://image.liubing.me/2020/07/05/ac1bb24b5db1b.png)

## 兼容性

App + H5 + 各平台小程序（快应用、360、nvue 未测试）

## 引入插件

单独引入，在需要使用的页面上 import 引入即可

```html
<template>
  <view>
    <lb-action-sheet></lb-action-sheet>
  </view>
</template>

<script>
  import LbActionSheet from '@/components/lb-action-sheet'
  export default {
    components: {
      LbActionSheet
    }
  }
</script>
```

全局引入，`main.js`中 import 引入并注册即可全局使用

```jsvascript
import LbActionSheet from '@/components/lb-action-sheet'
Vue.component("lb-action-sheet", LbActionSheet)
```

easycom 引入

`pages.json`加上如下配置：

```json
"easycom": {
  "autoscan": true,
  "custom": {
    "lb-action-sheet": "@/components/lb-action-sheet/index.vue"
  }
}
```

npm 安装引入：

```shell
npm install uni-lb-action-sheet
```

```jsvascript
import LbActionSheet from 'uni-lb-action-sheet'
```

## 操作列表数据基本格式，更多字段详情见下`Actions`字段详解

```json
[
  {
    "name": "wx",
    "label": "微信",
    "image": "/static/wx.png"
  },
  {
    "name": "qq",
    "label": "QQ",
    "image": "/static/qq.png"
  },
  {
    "name": "zfb",
    "label": "支付宝",
    "image": "/static/zfb.png"
  },
  {
    "name": "tt",
    "label": "头条",
    "image": "/static/tt.png"
  }
]
```

## 调用显示

通过`ref`形式手动调用`show`方法显示，隐藏同理调用`hide`

```text
<lb-action-sheet ref="actionSheet"></lb-action-sheet>

this.$refs.actionSheet.show() // 显示
this.$refs.actionSheet.hide() // 隐藏
```

## 插槽使用

选择器支持一些可自定义化的插槽，如自定义底部取消按钮，可使用插槽，使用方法如下：

```html
<lb-action-sheet>
  <view slot="footer">我是自定义取消</view>
</lb-action-sheet>
```

其他插槽见下。

## 参数及事件

### Props

| 参数                   | 说明                                 | 类型    | 可选值     | 默认值             |
| :--------------------- | :----------------------------------- | :------ | :--------- | :----------------- |
| actions                | 操作列表数据，详细说明见下`Actions`  | Array   | -          | -                  |
| full                   | 是否整屏宽度显示                     | Boolean | true/false | false              |
| column-num             | 每列的图标个数                       | Number  | -          | 4                  |
| row-num                | 行数                                 | Number  | -          | 1                  |
| grid-height            | 每个格子的高度，单位 px              | Number  | -          | 80                 |
| image-width            | 图片图标的宽度                       | String  | -          | 30px               |
| image-height           | 图片图标的高度，未指定同 image-width | String  | -          | -                  |
| icon-prefix            | icon 图标指定前缀                    | String  | -          | -                  |
| icon-size              | icon 图标大小                        | String  | -          | 30px               |
| icon-color             | icon 图标颜色                        | String  | -          | -                  |
| label-color            | 图标文字颜色                         | String  | -          | #303133            |
| label-size             | 图标文字大小                         | String  | -          | 14px               |
| radius                 | 弹出区域圆角支持                     | String  | -          | 10px               |
| cancel-text            | 取消文字                             | String  | -          | 取消               |
| cancel-color           | 取消文字颜色                         | String  | -          | #606266            |
| cancel-size            | 取消文字大小                         | String  | -          | 16px               |
| close-on-click         | 点击图标是否关闭弹出区域             | Boolean | true/false | true               |
| close-on-click-mask    | 点击遮罩层是否关闭弹出区域           | Boolean | true/false | true               |
| mask-color             | 遮罩层背景色                         | String  | -          | rgba(0, 0, 0, 0.4) |
| indicator-dots         | 是否显示面板指示点                   | Boolean | true/false | true               |
| indicator-size         | 面板指示点大小                       | String  | -          | 8px                |
| indicator-color        | 面板指示点颜色                       | String  | -          | #c0c4cc            |
| indicator-active-color | 当前选中的指示点颜色                 | String  | -          | #909399            |
| animation              | 是否显示动画效果                     | Boolean | true/false | true               |
| inline                 | 是否 inline 模式                     | Boolean | true/false | false              |
| z-index                | 层级，遮罩层层级默认-1               | Number  | -          | 99                 |

### Actions

| 字段        | 说明                                                                              | 类型          | 可选值 | 默认值 |
| :---------- | :-------------------------------------------------------------------------------- | :------------ | :----- | :----- |
| name        | 数据 name，需唯一                                                                 | String/Number | -      | -      |
| label       | 数据文字                                                                          | String        | -      | -      |
| image       | 图片地址，与 icon 只需要设置一个                                                  | String        | -      | -      |
| imageWdith  | 图标宽度，如无设置，取`props`中的`image-width`                                    | String        | -      | -      |
| imageHeight | 图标宽度, 如无设置，取`props`中的`image-height`，需要小于`props`中的`grid-height` | String        | -      | -      |
| icon        | 图标 icon，与 image 只需要设置一个                                                | String        | -      | -      |
| iconSize    | 图标大小, 如无设置，取`props`中的`icon-size`                                      | String        | -      | -      |
| iconColor   | 图标颜色, 如无设置，取`props`中的`icon-color`                                     | String        | -      | -      |
| disabled    | 是否禁用                                                                          | Boolean       | -      | -      |

### 方法

| 方法名 | 说明         | 参数 |
| :----- | :----------- | :--- |
| show   | 打开操作面板 | -    |
| hide   | 关闭操作面板 | -    |

### Events

| 事件名称 | 说明                                     | 回调参数 |
| :------- | :--------------------------------------- | :------- |
| show     | 打开操作面板时触发                       | -        |
| hide     | 关闭操作面板时触发                       | -        |
| cancel   | 点击面板取消时触发，会同时触发`hide`事件 | -        |

### 插槽

| 插槽名 | 说明         |
| :----- | :----------- |
| footer | 底部取消按钮 |

## 其他

其他功能参考示例 Demo 代码。
