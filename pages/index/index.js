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
  // onLoad:function(options){
  //   // 页面初始化 options为页面跳转所带来的参数
  // },
  // onReady:function(){
  //   // 页面渲染完成
  // },
  // onShow:function(){
  //   // 页面显示
  // },
  // onHide:function(){
  //   // 页面隐藏
  // },
  // onUnload:function(){
  //   // 页面关闭
  // },
  /**
   * 获取焦点事件
   */
  focus: function(e) {
    this.setData({ 'input.class': 'focused' });
  },
  /**
   * 失去焦点事件
   */
  blur: function(e) {
    this.setData({ 'input.class': '' });
  },
  /**
   * 提交事件
   */
  confirm: function(e) {
    if (e.detail.value) {
      this.data.items.push({ name: e.detail.value, status: 0 });
      this.setData({ 'items' : this.data.items });
      this.setData({ 'input.value' : '' });
    }
  },
  /**
   * 选中事件
   */
  check: function(e) {
    let index = e.detail.value[0];
    this.data.items[index].status = 1;
    this.setData({ 'items' : this.data.items });
  },
  /**
   * 取消选中事件
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
  remove: function(e) {
    let index = e.target.dataset.index;
    this.data.items.splice(index, 1);
    this.setData({ 'items' : this.data.items });
  }
})