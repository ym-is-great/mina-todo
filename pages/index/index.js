// pages/index/index.js
Page({
  data:{
    input: {
      class: '',
      value: ''
    },
    items:[
    ]
  },
  /**
   * 输入框获取焦点事件
   */
  focus: function(e) {
    this.setData({ 'input.class': 'focused' });
  },
  /**
   * 输入框失去焦点事件
   */
  blur: function(e) {
    this.setData({ 'input.class': '' });
  },
  /**
   * 输入框内容提交事件
   */
  confirm: function(e) {
    if (e.detail.value) {
      this.data.items.push({ name: e.detail.value, status: 0 });
      this.setData({ 'items' : this.data.items });
      this.setData({ 'input.value' : '' });
    }
  },
  /**
   * 复选框选中事件
   */
  check: function(e) {
    let index = e.detail.value[0];
    this.data.items[index].status = 1;
    this.setData({ 'items' : this.data.items });
  },
  /**
   * 复选框取消选中事件
   */
  uncheck: function(e) {
    for (let i=0; i<this.data.items.length; i++) {
      this.data.items[i].status = 0;
    }
    for (let i=0; i<e.detail.value.length; i++) {
      let index = e.detail.value[i];
      this.data.items[index].status = 1;
    }
    this.setData({ 'items' : this.data.items });
  },
  /**
   * 删除按钮点击事件
   */
  remove: function(e) {
    let index = e.target.dataset.index;
    this.data.items.splice(index, 1);
    this.setData({ 'items' : this.data.items });
  }
})