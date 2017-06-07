// pages/index/index.js
Page({
    data: {
        newItem: '',
        items: []
    },
    onLoad: function () {
        let items = wx.getStorageSync('items')
        if (items) {
            this.setData({
                'items': items
            })
        }
    },
    onUnload: function () {
    },
    // 缓存事项
    saveItems: function () {
        if (this.data.items.length) {
            wx.setStorageSync('items', this.data.items)
        }
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
                'newItem': ''
            })
            this.saveItems()
        }
    },
    // 勾选事项
    checkItem: function (event) {
        let index = event.currentTarget.dataset.index
        this.data.items[index].completed = !this.data.items[index].completed
        this.setData({
            'items': this.data.items
        })
        this.saveItems()
    },
    // 删除待办事项
    removeItem: function (event) {
        let index = event.currentTarget.dataset.index
        this.data.items.splice(index, 1)
        this.setData({
            'items': this.data.items
        })
        this.saveItems()
    }
})