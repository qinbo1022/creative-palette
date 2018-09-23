// pages/question/question.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: null,
  },
  voteTitle: function (e) {
    this.data.name = e.detail.value;
  },

  /**
   * 点击开始事件
   */
  start: function () {
    var name = this.data.name;
    var color = [];
    if (!name) {
      wx.showToast({
        title: "请输入您的大名~",
        icon: "none"
      })
    } else {
      wx.setStorageSync("username",name);
      wx.setStorage({
        key: 'colorList',
        data: color,
        success:function(){
          wx.navigateTo({
            url: '../question/question'
          })
        }
      })
    }

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