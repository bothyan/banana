//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  onLoad: function () {
    
  },
  create:function(){

  },
  uploadPic:function(){

  },
  cAddress:function(){
    wx.navigateTo({
      url:"../index/location"
    });
  },
  cAtags:function(){
    wx.navigateTo({
      url:"tag"
    });
  }
})
