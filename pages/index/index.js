// pages/index/index.js
Page({
    data: {
        newItem: '',
        items: []
    },
    // 输入项目
    inputItem: function (event) {
        this.data.newItem = event.detail.value
    },
    // 添加事项
    addItem: function () {
        if (this.data.newItem) {
            this.data.items.push({ content: this.data.newItem, status: 0 });
            this.setData({ 
                'items': this.data.items,
                'newItem': ''
            });
        }
    },
    // 选中待办事项
    check: function (e) {
        let index = e.detail.value[0];
        this.data.items[index].status = 1;
        this.setData({ 'items': this.data.items });
    },
    // 取消选中待办事项
    uncheck: function (e) {
        for (let i = 0; i < this.data.items.length; i++) {
            this.data.items[i].status = 0;
        }
        for (let i = 0; i < e.detail.value.length; i++) {
            let index = e.detail.value[i];
            this.data.items[index].status = 1;
        }
        this.setData({ 'items': this.data.items });
    },
    // 删除待办事项
    removeItem: function (e) {
        let index = e.target.dataset.index;
        this.data.items.splice(index, 1);
        this.setData({ 'items': this.data.items });
    }
})