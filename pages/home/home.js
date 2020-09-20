// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    html: '<a><div><span></span> <span>反馈</span></div></a>',
    tabsData: [
      {
        id: 0,
        title: '分页1',
        isActive: true,
      },
      {
        id: 1,
        title: '分页2',
        isActive: false,
      },
      {
        id: 2,
        title: '分页3',
        isActive: false,
      },
    ],
  },

  handleItemTap(e) {
    console.log('xxxxx----->', e);
    const {index} = e.currentTarget.dataset;
    let {tabsData} = this.data;
    console.log('tabsData----->', tabsData);
    tabsData.forEach((oItem,iIndex)=> iIndex === index?oItem.isActive=true:oItem.isActive=false)
    this.setData({tabsData});
  },

  onClick(e) {
    console.log('child-params->', e.detail.params);
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

  }
})