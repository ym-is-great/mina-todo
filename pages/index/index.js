// pages/index/index.js

const app = getApp()

Page({
  data: {
    focus: false,
    input: null,
    items: []
  },
  onLoad: function () {
    this.load()
  },
  onHide: function () {
    this.save()
  },
  // 保存
  save: function () {
    if (this.data.items.length) {
      wx.setStorageSync('items', this.data.items)
    } else {
      wx.removeStorageSync('items')
    }
  },
  // 加载
  load: function () {
    let items = wx.getStorageSync('items')
    if (items) {
      this.setData({ items })
    }
  },
  // 输入框获取焦点
  focus: function (event) {
    this.setData({
      'focus': true
    })
  },
  // 输入框失去焦点
  blur: function (event) {
    this.setData({
      'input': this.data.input,
      'focus': false
    })
  },
  // 用户输入
  input: function (event) {
    this.data.input = event.detail.value
  },
  // 添加项目
  add: function () {
    if (this.data.input) {
      if (this.data.items.find(item => item.content == this.data.input)) {
        this.setData({
          'input': null
        })
        wx.showModal({
          title: '提示',
          content: '已存在相同任务',
        })
      } else {
        this.data.items.unshift({ content: this.data.input, completed: false })
        this.setData({
          'items': this.data.items,
          'input': null
        })
        this.save()
      }
    }
  },
  // 勾选项目
  check: function (event) {
    let index = event.currentTarget.dataset.index
    this.data.items[index].completed = !this.data.items[index].completed
    this.setData({
      'items': this.data.items
    })
    this.save()
  },
  // 移出项目
  remove: function (event) {
    let index = event.currentTarget.dataset.index
    this.data.items.splice(index, 1)
    this.setData({
      'items': this.data.items
    })
    this.save()
  }
})
