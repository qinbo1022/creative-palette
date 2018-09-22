// pages/test/test.js
var promisify = require('util.js')
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
    wx.showLoading({
      title: '生成专属色...',
    })
    var myCanvasWidth = 0;
    var myCanvasHeight = 0;

    //1：紫 2：蓝 3：棕 4：绿 5：黄 6：橘 7：红 8：灰 9：白
    var color = getEnding();
    var name = wx.getStorageSync("username");
    var tone = getTone(color);

    var aboutcreative = about.creative[util.RandomNumBoth(0, 20)];
    var aboutlife = about.life[util.RandomNumBoth(0, 20)];
    var aboutartist = about.artist[util.RandomNumBoth(0, 20)];

    wx.getSystemInfo({
      success: function(res) {
        myCanvasWidth = res.windowWidth
        myCanvasHeight = res.windowHeight
      },
    })
    this.setData({
      canvasWidth: myCanvasWidth,
      canvasHeight: myCanvasHeight
    })

    const wxGetImageInfo = promisify.promisify(wx.getImageInfo)

    Promise.all([
      wxGetImageInfo({
        src: tone.url
      }),
      wxGetImageInfo({
        src: 'http://t1.aixinxi.net/o_1cnr92p7dc7s1qsmvg2ldvjo3a.png-j.jpg'
      })
    ]).then(res => {
      const ctx = wx.createCanvasContext('shareCanvas')
      ctx.setFillStyle(colorRGB2Hex(tone.colorBlock.RGB))
      console.log(colorRGB2Hex(tone.colorBlock.RGB));
      ctx.fillRect(0, 0, myCanvasWidth, myCanvasHeight)
      // 底图
      ctx.drawImage(res[0].path, 0, 0, myCanvasWidth, myCanvasHeight)

      // 颜色
      ctx.setTextAlign('center') // 文字居中
      ctx.setFillStyle('#000000') // 文字颜色：黑色
      ctx.setFontSize(22) // 文字字号：22px
      ctx.fillText(tone.colorBlock.gamut, myCanvasWidth / 3.5, myCanvasHeight / 3.4)

      ctx.setTextAlign('left') // 文字居中
      ctx.setFillStyle('#000000') // 文字颜色：黑色
      ctx.setFontSize(15) // 文字字号：22px
      ctx.fillText("CMYK：" + tone.colorBlock.CMYK, myCanvasWidth / 4.9, myCanvasHeight / 3)

      ctx.setTextAlign('left') // 文字居中
      ctx.setFillStyle('#000000') // 文字颜色：黑色
      ctx.setFontSize(15) // 文字字号：22px
      ctx.fillText("RGB：" + tone.colorBlock.RGB, myCanvasWidth / 4.9, myCanvasHeight / 2.75)

      ctx.setTextAlign('left') // 文字居中
      ctx.setFillStyle('#000000') // 文字颜色：黑色
      ctx.setFontSize(15) // 文字字号：22px
      changeline(ctx,tone.ending.replaceThis("○○○", name),16, myCanvasWidth / 4.9, myCanvasHeight / 2.5, 16)
      // // 小程序码
      // const qrImgSize = 180
      // ctx.drawImage(res[1].path, (600 - qrImgSize) / 2, 530, qrImgSize, qrImgSize)


      ctx.setTextAlign('left') // 文字居中
      ctx.setFillStyle('#000000') // 文字颜色：黑色
      ctx.setFontSize(15) // 文字字号：22px
      ctx.fillText("『关于创意』", myCanvasWidth / 4.9, myCanvasHeight / 1.75)
      ctx.fillText("『关于生活』", myCanvasWidth / 4.9, myCanvasHeight / 1.53)
      ctx.fillText("『关于艺术家』", myCanvasWidth / 4.9, myCanvasHeight / 1.36)

      ctx.setTextAlign('left') // 文字居中
      ctx.setFillStyle('#000000') // 文字颜色：黑色
      ctx.setFontSize(11) // 文字字号：22px
      changeline(ctx,aboutlife.replaceThis("○○○", name),24, myCanvasWidth / 4.4, myCanvasHeight / 1.68, 15)
      changeline(ctx,aboutcreative.replaceThis("○○○", name),24, myCanvasWidth / 4.4, myCanvasHeight / 1.48, 15)
      changeline(ctx,aboutartist.replaceThis("○○○", name),24, myCanvasWidth / 4.4, myCanvasHeight / 1.32, 15)

      ctx.stroke()
      ctx.draw()
      wx.hideLoading()
    })

  },
  createNewImg: function() {
    const wxCanvasToTempFilePath = promisify.promisify(wx.canvasToTempFilePath)
    const wxSaveImageToPhotosAlbum = promisify.promisify(wx.saveImageToPhotosAlbum)

    wxCanvasToTempFilePath({
      canvasId: 'shareCanvas'
    }, this).then(res => {
      return wxSaveImageToPhotosAlbum({
        filePath: res.tempFilePath
      })
    }).then(res => {
      wx.showToast({
        title: '已保存到相册'
      })
    })
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



function colorRGB2Hex(color) {
  var rgb = color.split(',');
  var r = parseInt(rgb[0].split('(')[1]);
  var g = parseInt(rgb[1]);
  var b = parseInt(rgb[2].split(')')[0]);

  var hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  return hex;
}

function canvasTextAutoLine(str, initX, initY, lineHeight, ctx, canvasWidth) {
  var lineWidth = 0;
  var lastSubStrIndex = 0;
  for (let i = 0; i < str.length; i++) {
    lineWidth += ctx.measureText(str[i]).width;
    if (lineWidth > canvasWidth - initX) { //减去initX,防止边界出现的问题 
      ctx.fillText(str.substring(lastSubStrIndex, i), initX, initY);
      initY += lineHeight;
      lineWidth = 0;
      lastSubStrIndex = i;
    }
    if (i == str.length - 1) {
      ctx.fillText(str.substring(lastSubStrIndex, i + 1), initX, initY);
    }
  }
}
function changeline(ctx,str,num,initx,inity,lineHeight){
  // var word = ctx.measureText(str[i]).width;
  ctx.fillText(str.substring(0, num), initx, inity);
  ctx.fillText(str.substring(num, str.length), initx, inity + lineHeight);
}