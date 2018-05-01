//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls : [  
      { image: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg" },  
      { image: "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg" },  
      { image: "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg" }  
    ],
    banners:[],
    myOrganizations:[],
    activitiesOfThisWeek:[],
    hitsOrganizations:[],
    tagList:[],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000  
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
    this.getIndexData();
    this.getTagList();
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
  getIndexData:function(){
    var that = this;
    app.getJson(app.urlMap.indexData,"get",{
      ydbz_token:app.globalData.ydbz_token
    },function(res){
      res.data.data.banners.map(function(item,key){
        item.headImg = app.globalData.picHost + item.headImg 
        return item;
      });
      res.data.data.myOrganizations.map(function(item,key){
        item.headImg = app.globalData.picHost + item.headImg; 
        item.updateTime = item.updateTime.substr(0 , 10);
        return item;
      });
      res.data.data.activitiesOfThisWeek.map(function(item,key){
        item.headImg = app.globalData.picHost + item.headImg; 
        item.updateTime = item.updateTime.substr(0 , 10);
        return item;
      });
      res.data.data.hitsOrganizations.map(function(item,key){
        item.headImg = app.globalData.picHost + item.headImg; 
        item.updateTime = item.updateTime.substr(0 , 10);
        return item;
      });
      that.setData({
        banners:res.data.data.banners,
        myOrganizations:res.data.data.myOrganizations,
        activitiesOfThisWeek:res.data.data.activitiesOfThisWeek,
        hitsOrganizations:res.data.data.hitsOrganizations
      })
    });
  },
  getTagList:function(){
    var that = this;
    app.getJson(app.urlMap.groundTag,"get",{
      ydbz_token:app.globalData.ydbz_token,
      page:1,
      pageSize:15
    },function(res){
      that.setData({
        tagList:res.data.data.list,
      })
    });
  },
  toGroupTagList:function(e){
    var id = e.currentTarget.dataset.tag;
    wx.navigateTo({
      url:"../group/index?tag="+id
    });
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
  toGroupSortList:function(e){
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url:"../group/index?sort="+id
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
