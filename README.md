# React Hook 基础使用

Hook 是 React 16.8 的新增特性

Hook 都是些函数，这些函数能让你不使用class的情况下还能 “钩入” React state 及生命周期等特性。

## 组件信息
1. Class组件：有状态组件
2. 函数组件：无状态组件

状态：State

## React 16.8 新增的 Hook

## State Hook

### useState
`useState` 是一个Hook，它本质是一个函数，接收初始状态，返回一个数组，其中包含两个值，第一个是当前状态，第二个是一个函数，用来更新状态。

`useState()`方法里唯一的参数就是初始state。不同于class 的是，我们可以按照需要使用数字或字符串对其进行赋值，而不一定是对象。

useState返回值为：当前 state 以及更新 state 的函数。

## Effect Hook
Effect Hook 可以让你在函数组件中进行数据获取，设置订阅以及进行操作 DOM等，我们称他为副作用。
