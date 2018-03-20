//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    navArr:[true,false]
  },
  onLoad: function () {
    
  },
  create:function(){

  },
  uploadPic:function(){

  },
  share:function(){
   
  },
  join:function(){

  },
  tapNav:function(e){
    var index = e.currentTarget.dataset.index;
    var arr = [false,false];
    arr[index] = true;
    this.setData({navArr:arr});
  }
})
