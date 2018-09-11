const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
//取数组里边重复次数最大的值
function Maxarr(arr) {
  var temp = []; //对象数组
  var i;
  arr.sort();
  temp[0] = {
    value: arr[0],
    index: 1
  }; //保存数组元素出现的次数和值
  for (i = 1; i < arr.length; i++) {
    if (arr[i] == arr[i - 1]) {
      temp[temp.length - 1].index++;
    } else { //不相同则新增一个对象元素
      temp.push({
        index: 1,
        value: arr[i]
      });
    }
  }
  temp.sort(function (a, b) { //按照出现次数从大到小排列
    return a.index < b.index;
  })
  var max = temp[0].index;
  var maxV = temp[0].value;
  var second = temp[1].index;
  var secondV = temp[1].value;

  return maxV;
}

//取随机数
function RandomNumBoth(Min, Max) {
  var Range = Max - Min;
  var Rand = Math.random();
  var num = Min + Math.round(Rand * Range); //四舍五入
  return num;
}


module.exports = {
  formatTime: formatTime,
  Maxarr: Maxarr,
  RandomNumBoth:RandomNumBoth
}
