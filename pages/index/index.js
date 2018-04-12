// pages/index/index.js

let app = getApp()

Page({
    data: {
        focus: false,
        newItem: null,
        items: []
    },
    onLoad: function () {
        this.autoload()
    },
    onHide: function () {
        this.autosave()
    },
    // 自动保存
    autosave: function () {
        if (this.data.items.length) {
            wx.setStorageSync('items', this.data.items)
        }
        else {
            wx.removeStorageSync('items')
        }
    },
    // 自动加载
    autoload: function () {
        let autosavedItems = wx.getStorageSync('items')
        if (autosavedItems) {
            this.setData({
                'items': autosavedItems
            })
        }
    },
    // 焦点事件
    focusInput: function (event) {
        this.setData({
            'focus': true
        })
    },
    // 失焦事件
    blurInput: function (event) {
        this.setData({
            'newItem': this.data.newItem,
            'focus': false
        })
    },
    // 输入事项
    inputItem: function (event) {
        this.data.newItem = event.detail.value
    },
    // 添加事项
    addItem: function () {
        if (this.data.newItem) {
            this.data.items.push({ content: this.data.newItem, completed: false })
            this.setData({ 
                'items': this.data.items,
                'newItem': null
            })
            this.autosave()
        }
    },
    // 勾选事项
    checkItem: function (event) {
        let index = event.currentTarget.dataset.index
        this.data.items[index].completed = !this.data.items[index].completed
        this.setData({
            'items': this.data.items
        })
        this.autosave()
    },
    // 删除待办事项
    removeItem: function (event) {
        let index = event.currentTarget.dataset.index
        this.data.items.splice(index, 1)
        this.setData({
            'items': this.data.items
        })
        this.autosave()
    }
})