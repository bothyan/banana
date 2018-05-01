//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    tagList:[]
  },
  onLoad: function () {
    this.getTagList();
  },
  getTagList:function(){
    var that = this;
    app.getJson(app.urlMap.groundTag,"get",{
      ydbz_token:app.globalData.ydbz_token,
      page:1,
      pageSize:15
    },function(res){
      console.log(res);
      that.setData({
        tagList:res.data.data.list,
      });
    });
  },
  create:function(){

  },
  confirm:function(){

  },
  cancel:function(){

  }
})
