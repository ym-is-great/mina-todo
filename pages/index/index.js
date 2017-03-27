// pages/index/index.js
Page({
  data:{
    input: {
      class: '',
      value: ''
    },
    pending: [
      'TEST1',
      'TEST2',
      'TEST3'
    ],
    completed: [
    ],
    pendingItemChecked:   false,
    completedItemChecked: true
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
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
      this.data.pending.push(e.detail.value);
      this.setData({ 'pending' : this.data.pending });
      this.setData({ 'input.value' : '' });
    }
  },
  /**
   * 选中事件
   */
  check: function(e) {
    var array = e.detail.value;
    for(var i=0; i<array.length; i++) {
      this.data.completed.push(this.data.pending[array[i]]);
      this.data.pending.splice(array[i], 1);
      this.setData({ 'pending' : this.data.pending });
      this.setData({ 'completed' : this.data.completed });
    }
    this.setData({ 'pendingItemChecked' : this.data.pendingItemChecked });
  },
  /**
   * 取消选中事件
   */
  uncheck: function(e) {
  }
})