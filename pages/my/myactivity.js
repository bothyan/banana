//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    navArr:[true,false,false],
    data1:[],
    data2:[],
    data3:[]
  },
  onLoad: function () {
    
  },
  tapNav:function(e){
    var index = e.currentTarget.dataset.index;
    var arr = [false,false,false];
    arr[index] = true;
    this.setData({navArr:arr});
  }
})
