---
title: Collapse
---

# 标签

## 默认打开

**展示**

<ClientOnly>
  <collapse-demos-1></collapse-demos-1>
</ClientOnly>

**代码**
```html
<r-collapse :selected.sync="selectedTab">
  <r-collapse-item name="1" title="标题1">内容1</r-collapse-item>
  <r-collapse-item name="2" title="标题2">内容2</r-collapse-item>
  <r-collapse-item name="3" title="标题3">内容3</r-collapse-item>
</r-collapse>
```
```javascript
data(){
  return {
    selectedTab: ['1', '2']
  }
}
```

## 设置只能同时打开一个

**展示**

<ClientOnly>
  <collapse-demos-2></collapse-demos-2>
</ClientOnly>

**代码**
```html
<r-collapse :selected.sync="selectedTab" single>
  <r-collapse-item name="1" title="标题1">内容1</r-collapse-item>
  <r-collapse-item name="2" title="标题2">内容2</r-collapse-item>
  <r-collapse-item name="3" title="标题3">内容3</r-collapse-item>
</r-collapse>
```
```javascript
data(){
  return {
    selectedTab: ['1']
  }
}
```
