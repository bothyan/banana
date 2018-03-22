//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
   
  },
  cAddress:function(){
    wx.navigateTo({
      url:"../index/location"
    });
  },
  create:function(){

  },
  tabTime:function(){

  },
  cancel:function(){
    wx.navigateBack({
      delta: 1
    })
  }
})
