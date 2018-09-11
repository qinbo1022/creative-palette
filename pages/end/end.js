// pages/end/end.js
var util = require('../../utils/util.js')
Page({
  weightEnd: {
    zi: "○○○属于紫色调，出场自带繁花盛开背景，高贵优雅说的就是○○○。",
    lan: "○○○属于蓝色调，性格独立充满理性，能站在客观角度判断事情。",
    qing: "○○○属于青色调，有块属于自我的小天地能获得心里的宁静。",
    lv: "○○○属于绿色调，热爱环保珍惜地球，梦想是世界和平。",
    huang: "○○○属于黄色调，快乐和自信是○○○永远的主旋律。",
    ju: "○○○属于橘色调，坦率亲切又开朗，是颗照耀他人的小太阳。",
    hong: "○○○属于红色调，对任何事物永怀热情和自信。",
    hei: "○○○属于黑色调，既低调又稳重，骨子里有著自己的执著。",
    bai: "○○○属于白色调，梦幻而纯洁，是个自带光环的小天使。",
    weidingyi: "○○○的颜色还没被发现，是只属于自己独一无二的全新色彩。"
  },
  /**
   * 页面的初始数据
   */
  data: {
    jielun: "结论",
    aboutCY: "关于创意",
    aboutSH: "关于生活",
    aboutYSJ: "关于艺术家",
    gamut: "魅惑紫",
    CMKY: "0,20,87,0",
    RGB: "252,211,55",
    RGB16: "#000000",
    color: {
      zi: [{
        gamut: "暗玉紫",
        CMYK: "35,94,77,53",
        RGB: "92,34,35",
        RGB16: "#5c2223"
      }, {
        gamut: "栗紫",
        CMYK: "0,20,87,0",
        RGB: "252,211,55",
        RGB16: "#000000"
      }, {
        gamut: "葡萄酱紫",
        CMYK: "0,20,87,0",
        RGB: "252,211,55",
        RGB16: "#000000"
      }],
      lan: [{
        gamut: "鸽蓝",
        CMYK: "0,20,87,0",
        RGB: "252,211,55",
        RGB16: "#000000"
      }, {
        gamut: "品蓝",
        CMYK: "0,20,87,0",
        RGB: "252,211,55",
        RGB16: "#000000"
      }, {
        gamut: "景泰蓝",
        CMYK: "0,20,87,0",
        RGB: "252,211,55",
        RGB16: "#000000"
      }],
      qing: [{
        gamut: "钢青",
        CMYK: "0,20,87,0",
        RGB: "252,211,55",
        RGB16: "#000000"
      }, {
        gamut: "靛青",
        CMYK: "0,20,87,0",
        RGB: "252,211,55",
        RGB16: "#000000"
      }, {
        gamut: "花青",
        CMYK: "0,20,87,0",
        RGB: "252,211,55",
        RGB16: "#000000"
      }],
      lv: [{
        gamut: "竹绿",
        CMYK: "0,20,87,0",
        RGB: "252,211,55",
        RGB16: "#000000"
      }, {
        gamut: "美蝶绿",
        CMYK: "0,20,87,0",
        RGB: "252,211,55",
        RGB16: "#000000"
      }, {
        gamut: "深海绿",
        CMYK: "0,20,87,0",
        RGB: "252,211,55",
        RGB16: "#000000"
      }],
      huang: [{
        gamut: "硫华黄",
        CMYK: "0,20,87,0",
        RGB: "252,211,55",
        RGB16: "#000000"
      }, {
        gamut: "草黄",
        CMYK: "0,20,87,0",
        RGB: "252,211,55",
        RGB16: "#000000"
      }, {
        gamut: "柠檬黄",
        CMYK: "0,20,87,0",
        RGB: "252,211,55",
        RGB16: "#000000"
      }],
      ju: [{
        gamut: "淡橘橙",
        CMYK: "0,20,87,0",
        RGB: "252,211,55",
        RGB16: "#000000"
      }, {
        gamut: "橘橙",
        CMYK: "0,20,87,0",
        RGB: "252,211,55",
        RGB16: "#000000"
      }, {
        gamut: "美人焦橘",
        CMYK: "0,20,87,0",
        RGB: "252,211,55",
        RGB16: "#000000"
      }],
      hong: [{
        gamut: "唐菖蒲红",
        CMYK: "0,20,87,0",
        RGB: "252,211,55",
        RGB16: "#000000"
      }, {
        gamut: "枣红",
        CMYK: "0,20,87,0",
        RGB: "252,211,55",
        RGB16: "#000000"
      }, {
        gamut: "莓红",
        CMYK: "0,20,87,0",
        RGB: "252,211,55",
        RGB16: "#000000"
      }],
      hei: [{
        gamut: "墨黑",
        CMYK: "0,20,87,0",
        RGB: "252,211,55",
        RGB16: "#000000"
      }, {
        gamut: "灰黑",
        CMYK: "0,20,87,0",
        RGB: "252,211,55",
        RGB16: "#000000"
      }, {
        gamut: "淡黑",
        CMYK: "0,20,87,0",
        RGB: "252,211,55",
        RGB16: "#000000"
      }],
      bai: [{
        gamut: "芡食白",
        CMYK: "0,20,87,0",
        RGB: "252,211,55",
        RGB16: "#000000"
      }, {
        gamut: "银鱼白",
        CMYK: "0,20,87,0",
        RGB: "252,211,55",
        RGB16: "#000000"
      }, {
        gamut: "云峰白",
        CMYK: "0,20,87,0",
        RGB: "252,211,55",
        RGB16: "#000000"
      }]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //1：紫 2：蓝 3：青 4：绿 5：黄 6：橘 7：红 8：黑 9：白
    var name = wx.getStorageSync("username");
    var color = "";
    var color1 = "";
    var gaumt1 = "";
    var cmky1 = "";
    var rgb1 = "";
    var rgb2 = "";
    var list = [];
    var endWeight = "";
    var that = this;
    var about1 = ["○○○是怪人，说不出来的那种怪，但怪的很可爱。", "○○○开脑洞时记得远离，○○○的脑洞大到可以把所有人都吸进去。", "○○○的特异功能是能找到每种东西的正确打开方式。"];
    var about2 = ["○○○常被人说房间很乱，那只是因为他们不懂○○○的乱中有序。", "饿了不找饿了吗找○○○，○○○会负责喂食你。", "千万别睡在○○○旁边，○○○睡嗨了会在床上翻跟斗。"];
    var about3 = ["○○○创作时和达芬奇一样，结合天文物理生物等多重学识领域，就是个旷世奇才！", "○○○犹如米开朗基罗转世，给○○○一支笔，○○○可以为你画出整幅创世纪。", "○○○和拉斐尔一样，能把每个女性画出圣母的感觉。"];

    wx.getStorage({
      key: 'colorList',
      success: function(req) {
        list = req.data;
        endWeight = util.Maxarr(list);
        var mathNum = util.RandomNumBoth(0, 2);
        if (endWeight == "1") {
          color = that.weightEnd.zi;
          color1 = color.replaceThis("○○○", name);
          gaumt1 = that.data.color.zi[mathNum].gamut;
          cmky1 = that.data.color.zi[mathNum].CMYK;
          rgb1 = that.data.color.zi[mathNum].RGB;
        } else if (endWeight == "2") {
          color = that.weightEnd.lan;
          color1 = color.replaceThis("○○○", name);
          gaumt1 = that.data.color.lan[mathNum].gamut;
          cmky1 = that.data.color.lan[mathNum].CMYK;
          rgb1 = that.data.color.lan[mathNum].RGB;
        } else if (endWeight == "3") {
          color = that.weightEnd.qing;
          color1 = color.replaceThis("○○○", name);
          gaumt1 = that.data.color.qing[mathNum].gamut;
          cmky1 = that.data.color.qing[mathNum].CMYK;
          rgb1 = that.data.color.qing[mathNum].RGB;
        } else if (endWeight == "4") {
          color = that.weightEnd.lv;
          color1 = color.replaceThis("○○○", name);
          gaumt1 = that.data.color.lv[mathNum].gamut;
          cmky1 = that.data.color.lv[mathNum].CMYK;
          rgb1 = that.data.color.lv[mathNum].RGB;
        } else if (endWeight == "5") {
          color = that.weightEnd.huang;
          color1 = color.replaceThis("○○○", name);
          gaumt1 = that.data.color.huang[mathNum].gamut;
          cmky1 = that.data.color.huang[mathNum].CMYK;
          rgb1 = that.data.color.huang[mathNum].RGB;
        } else if (endWeight == "6") {
          color = that.weightEnd.ju;
          color1 = color.replaceThis("○○○", name);
          gaumt1 = that.data.color.ju[mathNum].gamut;
          cmky1 = that.data.color.ju[mathNum].CMYK;
          rgb1 = that.data.color.ju[mathNum].RGB;
        } else if (endWeight == "7") {
          color = that.weightEnd.hong;
          color1 = color.replaceThis("○○○", name);
          gaumt1 = that.data.color.hong[mathNum].gamut;
          cmky1 = that.data.color.hong[mathNum].CMYK;
          rgb1 = that.data.color.hong[mathNum].RGB;
        } else if (endWeight == "8") {
          color = that.weightEnd.hei;
          color1 = color.replaceThis("○○○", name);
          gaumt1 = that.data.color.hei[mathNum].gamut;
          cmky1 = that.data.color.hei[mathNum].CMYK;
          rgb1 = that.data.color.hei[mathNum].RGB;
        } else if (endWeight == "9") {
          color = that.weightEnd.bai;
          color1 = color.replaceThis("○○○", name);
          gaumt1 = that.data.color.bai[mathNum].gamut;
          cmky1 = that.data.color.bai[mathNum].CMYK;
          rgb1 = that.data.color.bai[mathNum].RGB;
          rgb2 = that.data.color.bai[mathNum].RGB16;
        }
        about1 = about1[util.RandomNumBoth(0, 2)].replaceThis("○○○", name);
        about2 = about2[util.RandomNumBoth(0, 2)].replaceThis("○○○", name);
        about3 = about3[util.RandomNumBoth(0, 2)].replaceThis("○○○", name);
        console.log(rgb2);
        that.setData({
          jielun: color1,
          aboutCY: about1,
          aboutSH: about2,
          aboutYSJ: about3,
          gamut: gaumt1,
          cmyk: cmky1,
          rgb: rgb1,
          rgb2:rgb2
        })
      },
      fail: function(req) {
        console.log(req);
      }
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
String.prototype.replaceThis = function (f, e) { //吧f替换成e
  var reg = new RegExp(f, "g"); //创建正则RegExp对象   
  return this.replace(reg, e);
}