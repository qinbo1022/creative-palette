// pages/question/question.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    No: "01",
    question: "朋友的生日快到了还没买礼物，你会怎么做？",
    anwser: [{
      item: "A",
      anwserItem: "亲自去店面挑选",
      color: ['1', '2']
    }, {
      item: "B",
      anwserItem: "赶紧刷淘宝",
      color: ['3', '6']
    }, {
      item: "C",
      anwserItem: "自己亲手制作",
      color: ['4', '5']
    }, {
      item: "D",
      anwserItem: "找朋友一起出资合送",
      color: ['7', '8']
    }],
  },
  changeItem: function(e) {
    var currentItem = e.detail.value;
    var colorWeight1 = "";
    var colorWeight2 = "";
    //1：紫 2：蓝 3：棕 4：绿 5：黄 6：橘 7：红 8：灰 9：白
    if (currentItem === 'A') {
      colorWeight1 = "6";
      colorWeight2 = "2";
    } else if (currentItem === 'B') {
      colorWeight1 = "5";
      colorWeight2 = "1";
    } else if (currentItem === 'C') {
      colorWeight1 = "4";
      colorWeight2 = "9";
    } else if (currentItem === 'D') {
      colorWeight1 = "3";
      colorWeight2 = "8";
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
              url: '../question7/question7'
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