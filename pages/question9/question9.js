// pages/question/question.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    No: "01",
    question: "假期只剩最后一天，工作/作业还没做完，你会怎么做？",
    anwser: [{
      item: "A",
      anwserItem: "放弃挣扎，躺在床上祈祷明天停班/停课",
      color: ['1', '2']
    }, {
      item: "B",
      anwserItem: "认命，努力完成",
      color: ['3', '6']
    }, {
      item: "C",
      anwserItem: "呼朋引伴，一起同心协力完成",
      color: ['4', '5']
    }, {
      item: "D",
      anwserItem: "『不小心』把水打翻到电脑/作业本上，只好放弃",
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
      colorWeight2 = "9";
    } else if (currentItem === 'B') {
      colorWeight1 = "8";
      colorWeight2 = "4";
    } else if (currentItem === 'C') {
      colorWeight1 = "7";
      colorWeight2 = "3";
    } else if (currentItem === 'D') {
      colorWeight1 = "6";
      colorWeight2 = "2";
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
            console.log(getCurrentPages());
            console.loge(getCurrentPages().pop());
            wx.reLaunch({
              url: '../end/end'
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