// pages/question/question.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    No: "01",
    radioCheckVal:0,
    question: "走在路上发现了一朵小花，你会怎么做？",
    anwser: [{
      item: "A",
      anwserItem: "摘下小花，用力闻"
    }, {
      item: "B",
      anwserItem: "拍照分享朋友圈"
    }, {
      item: "C",
      anwserItem: "拿出纸笔，画出心中之花"
    }, {
      item: "D",
      anwserItem: "靠近仔细看"
    }],
  },
  changeItem: function(e) {
    var currentItem = e.detail.value;
    var colorWeight1 = "";
    var colorWeight2 = "";

    this.setData({
      radioCheckVal:currentItem
    });

    //1：紫 2：蓝 3：棕 4：绿 5：黄 6：橘 7：红 8：灰 9：白
    if (currentItem === 'A') {
      colorWeight1 = "2";
      colorWeight2 = "7";
    } else if (currentItem === 'B') {
      colorWeight1 = "1";
      colorWeight2 = "6";
    } else if (currentItem === 'C') {
      colorWeight1 = "9";
      colorWeight2 = "5";
    } else if (currentItem === 'D') {
      colorWeight1 = "8";
      colorWeight2 = "4";
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
              url: '../question2/question2'
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