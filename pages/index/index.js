//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
    //hasUserInfo: false,
    //canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onShow:function(){
    /*wx.chooseLocation({
        success:function(res){
          console.log(res);
        },
        fail:function(res){

        }
    });

     wx.openSetting({
      success:function(res){
        if (!res.authSetting["scope.userInfo"] || !res.authSetting["scope.userLocation"]) {
             //这里是授权成功之后 填写你重新获取数据的js
             //参考:
              that.getLogiCallback('',      function(){
                callback('')
              })                                   
        }
      }
    })*/
  },
  onLoad: function () {
    /*if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }*/
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  tapSearch:function(){
    wx.navigateTo({
      url:"search"
    });
  },
  tapBanner:function(e){

  },
  tapLocation:function(){
    wx.navigateTo({
      url:"location"
    });
  },
  tapGroupList:function(){
    wx.navigateTo({
      url:"../group/index"
    });
  },
  tapCreate:function(){
    wx.navigateTo({
      url:"../group/create"
    });
  },
  tapMygroup:function(){
    wx.navigateTo({
      url:"../my/mygroup"
    });
  },
  toGroupDetail:function(){
    wx.navigateTo({
      url:"../group/detail"
    });
  },
  toAcDetail:function(){
    wx.navigateTo({
      url:"../activity/detail"
    });
  }
})
