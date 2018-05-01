//app.js
App({
  globalData: {
    ydbz_token:wx.getStorageSync('ydbz_token') || "",
    userInfo: null,
    host:"https://www.yuandibaozha.com/ydbz",
    picHost:"http://p5tgolex9.bkt.clouddn.com/"
  },
  urlMap:{},
  onLaunch: function () {
    // 展示本地存储能力
    var that = this;
    that.initUrlMap();
    if(this.globalData.ydbz_token == ""){
    // 登录
      wx.login({
        success: function(res){
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          wx.request({
              url: that.globalData.host+'/v1.0/weapp/common/doLogin/',
              /*header: {
                  'content-type': 'application/json' // 默认值
              },*/
              header: {
                  "Content-Type": "application/x-www-form-urlencoded",
                  "X-Requested-With": "XMLHttpRequest"
              },
              method:"post",
              data:{
                jsCode:res.code
              },
              success: function(res) {   
                var ydbz_token = res.data.data.extMap.ydbz_token;
                wx.setStorageSync('ydbz_token', ydbz_token);
                that.globalData.ydbz_token = ydbz_token;
              }
          })
        }
      })
    }
    // 获取用户信息
    wx.getSetting({
      success: function(res){
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              that.globalData.userInfo = res.userInfo;
              that.getJson(that.urlMap.updateUserInfo,"post",{
                ydbz_token:that.globalData.ydbz_token,
                nickName:res.userInfo.nickName,
                avatarUrl:res.userInfo.avatarUrl,
                gender:res.userInfo.gender, 
                city:res.userInfo.city,  
                province:res.userInfo.province,  
                country:res.userInfo.country,  
                language:res.userInfo.language
              },function(res){
                console.log(res);   
              });
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                //this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  initUrlMap:function(){
    var host = this.globalData.host
    var urlMap = {
      login: host+"/v1.0/weapp/common/doLogin/",
      updateUserInfo:host+"/v1.0/weapp/client/updateWeixinInfo",
      indexData: host+"/v1.0/weapp/client/indexData",
      groundTag: host+"/v1.0/weapp/client/organizationTagList",
      groupSort: host+"/v1.0/weapp/client/organizationSortList",
      grounpList:host+"/v1.0/weapp/client/organization/organizationList"
    };
    this.urlMap = urlMap;
  },
  getJson:function(url,method,data,successCallBack){
    var that = this;
    wx.request({
      url: url,
      header: {
          'content-type': 'application/json'
      },
      method:method,
      data:data,
      success: function(res) {   
        successCallBack(res);
      }
    })
  }
})