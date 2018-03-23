//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    navArr:[true,false],
    data1:[],
    data2:[]
  },
  onLoad: function () {
    
  },
  tapNav:function(e){
    var index = e.currentTarget.dataset.index;
    var arr = [false,false];
    arr[index] = true;
    this.setData({navArr:arr});
  },
  tapHistory:function(e){
    var word = e.currentTarget.dataset.word;
    this.setData({searchword:word});
  }
})
