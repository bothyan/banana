//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    navWords:["类型","筛选"],
    navArr:[false,false]

  },
  onLoad: function () {
    
  },
  tapNav:function(e){
    var index = e.currentTarget.dataset.index;
    var navs = [false,false];
    navs[index] = !navs[index];
    this.setData({navArr:navs});
  },
  tapTypes1:function(e){
    var word = e.currentTarget.dataset.word;
    var words = this.data.navWords;
    words[0] = word;
    this.setData({navWords:words});
    this.changeNav(0);
  },
  tapTypes2:function(e){
    var word = e.currentTarget.dataset.word;
    var words = this.data.navWords;
    words[1] = word;
    this.setData({navWords:words});
    this.changeNav(1);
  },
  changeNav:function(index){
    var navs = this.data.navArr;
    navs[index] = !navs[index];
    this.setData({navArr:navs});
  }
})
