// pages/end/end.js
var util = require('../../utils/util.js')
var color_purple = require('../color/purple.js')
var color_yellow = require('../color/yellow.js')
var color_blue = require('../color/blue.js')
var color_brown = require('../color/brown.js')
var color_gray = require('../color/gray.js')
var color_green = require('../color/green.js')
var color_white = require('../color/white.js')
var color_orange = require('../color/orange.js')
var color_red = require('../color/red.js')
var tone = require('../color/tone.js')
var urlList = require('../color/urlList.js')
var about = require('../color/about.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //1：紫 2：蓝 3：棕 4：绿 5：黄 6：橘 7：红 8：灰 9：白
    var color = getEnding();
    var name = wx.getStorageSync("username");
    var tone = getTone(color);

    var aboutcreative = about.creative[util.RandomNumBoth(0, 20)];
    var aboutlife = about.life[util.RandomNumBoth(0, 20)];
    var aboutartist = about.artist[util.RandomNumBoth(0, 20)];

    this.setData({
      bgsrc: tone.url,
      gamut: tone.colorBlock.gamut,
      ending: tone.ending.replaceThis("○○○", name),
      RGB: tone.colorBlock.RGB,
      CMYK: tone.colorBlock.CMYK,
      aboutLife: aboutlife.replaceThis("○○○", name),
      aboutCreative: aboutcreative.replaceThis("○○○", name),
      aboutArtist: aboutartist.replaceThis("○○○", name)
    });
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

//替换字段
String.prototype.replaceThis = function(f, e) { //吧f替换成e
  var reg = new RegExp(f, "g"); //创建正则RegExp对象   
  return this.replace(reg, e);
}

function getEnding() {
  var list = wx.getStorageSync("colorList");
  var color = util.Maxarr(list);
  return color;
}

function getTone(num) {
  var resultJson = {};
  if (num == '1') {
    var random = util.RandomNumBoth(0, 62);
    resultJson["colorBlock"] = color_purple.pruple[random];
    resultJson["ending"] = tone.tone.purple;
    resultJson["url"] = urlList.urlList.purple;
  } else if (num == '2') {
    var random = util.RandomNumBoth(0, 63);
    resultJson["colorBlock"] = color_blue.blue[random];
    resultJson["ending"] = tone.tone.blue;
    resultJson["url"] = urlList.urlList.blue;
  } else if (num == '3') {
    var random = util.RandomNumBoth(0, 31);
    resultJson["colorBlock"] = color_brown.brown[random];
    resultJson["ending"] = tone.tone.brown;
    resultJson["url"] = urlList.urlList.brown;
  } else if (num == '4') {
    var random = util.RandomNumBoth(0, 73);
    resultJson["colorBlock"] = color_green.green[random];
    resultJson["ending"] = tone.tone.green;
    resultJson["url"] = urlList.urlList.green;
  } else if (num == '5') {
    var random = util.RandomNumBoth(0, 70);
    resultJson["colorBlock"] = color_yellow.yellow[random];
    resultJson["ending"] = tone.tone.yellow;
    resultJson["url"] = urlList.urlList.yellow;
  } else if (num == '6') {
    var random = util.RandomNumBoth(0, 24);
    resultJson["colorBlock"] = color_orange.orange[random];
    resultJson["ending"] = tone.tone.orange;
    resultJson["url"] = urlList.urlList.orange;
  } else if (num == '7') {
    var random = util.RandomNumBoth(0, 111);
    resultJson["colorBlock"] = color_red.red[random];
    resultJson["ending"] = tone.tone.red;
    resultJson["url"] = urlList.urlList.red;
  } else if (num == '8') {
    var random = util.RandomNumBoth(0, 59);
    resultJson["colorBlock"] = color_gray.gray[random];
    resultJson["ending"] = tone.tone.gray;
    resultJson["url"] = urlList.urlList.gray;
  } else if (num == '9') {
    var random = util.RandomNumBoth(0, 19);
    resultJson["colorBlock"] = color_white.white[random];
    resultJson["ending"] = tone.tone.white;
    resultJson["url"] = urlList.urlList.white;
  }
  return resultJson;
}