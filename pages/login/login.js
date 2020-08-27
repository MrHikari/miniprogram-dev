// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: '测试参数渲染!',
    array: ['x', 1, '22'],
    view: 'C',
    displayInput: '',
  },

  handleInput(e) {
    console.log('handle-------->');
    console.log('e-event-事件源------>', e);
    console.log('输入值-e.detail.value----->', e.detail.value);
    this.setData({ displayInput: e.detail.value });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('now------>share');
  },

  clickEvent: function(event) {
    console.log('ClickEvent------->', event);
  }
})