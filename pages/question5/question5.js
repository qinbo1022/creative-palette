// pages/question/question.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    No: "01",
    question: "走在路上，发现地上有一滩水，你会怎么做？",
    anwser: [{
      item: "A",
      anwserItem: "拿出手机拍摄倒影照片",
      color: ['1', '2']
    }, {
      item: "B",
      anwserItem: "将旁边叶子当作小船，投入水中",
      color: ['3', '6']
    }, {
      item: "C",
      anwserItem: "若无其事的走过水滩",
      color: ['4', '5']
    }, {
      item: "D",
      anwserItem: "观察自己的水面倒影",
      color: ['7', '8']
    }],
  },
  changeItem: function(e) {
    var currentItem = e.detail.value;
    var colorWeight1 = "";
    var colorWeight2 = "";
    //1：紫 2：蓝 3：棕 4：绿 5：黄 6：橘 7：红 8：灰 9：白
    if (currentItem === 'A') {
      colorWeight1 = "5";
      colorWeight2 = "1";
    } else if (currentItem === 'B') {
      colorWeight1 = "4";
      colorWeight2 = "9";
    } else if (currentItem === 'C') {
      colorWeight1 = "3";
      colorWeight2 = "8";
    } else if (currentItem === 'D') {
      colorWeight1 = "2";
      colorWeight2 = "7";
    }
    wx.getStorage({
      key: 'colorList',
      success: function(res) {
        var colorList = res.data;
        colorList.push(colorWeight1);
        colorList.push(colorWeight2);
        wx.setStorage({
          key: 'colorList',
          data: colorList,
          success: function() {
            wx.navigateTo({
              url: '../question6/question6'
            })
          }
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})