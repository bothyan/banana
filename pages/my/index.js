//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {}
  },
  onLoad: function () {
    var that = this;
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo
      })
    } else {
      wx.getUserInfo({
        success:function(res){
          app.globalData.userInfo = res.userInfo
          that.setData({
            userInfo: res.userInfo
          })
        }
      })
    }
  },
  edit:function(){
    wx.navigateTo({
      url: 'edit'
    })
  },
  mygroup:function(){
    wx.navigateTo({
      url: 'mygroup'
    })
  },
  myactivity:function(){
    wx.navigateTo({
      url: 'myactivity'
    })
  },
  collection:function(){
    wx.navigateTo({
      url: 'collection'
    })
  },
  message:function(){
    wx.navigateTo({
      url: 'message'
    })
  }
})
