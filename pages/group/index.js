//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    navWords:["类型","筛选"],
    navArr:[false,false],
    tagList:[],
    sortList:[],
    tagId:"",
    sortId:"",
    grounpList:[],
    groupParam:{
      ydbz_token:app.globalData.ydbz_token,
      page:1,
      pageSize:15,
      keyword:"",
      onlyShowMy:false
    }
  },
  onLoad:function (option) {
    this.setData({
      tagId: option.tag||"",
      sortId: option.sort||""
    });
    var groupParam = this.data.groupParam;
    groupParam.sort = this.data.sortId;
    groupParam.tag = this.data.tagId;
    var words = this.data.navWords;
    words[0] = this.data.tagId || "类型";
    this.setData({navWords:words,groupParam:groupParam});
    this.getTagList();
    this.getSortList();
    this.getGroupList();
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
      });
    });
  },
  getSortList:function(){
    var that = this;
    app.getJson(app.urlMap.groupSort,"get",{
      ydbz_token:app.globalData.ydbz_token
    },function(res){
      that.setData({
        sortList:res.data.data,
      });
      that.data.sortList.forEach(function(value,index){
        if(value.value == that.data.sortId){
          var words = that.data.navWords;
          words[1] = value.text;
          that.setData({navWords:words});
        }
      });
    });
  },
  getGroupList:function(){
    var that = this;
    console.log(that.data.groupParam);
    app.getJson(app.urlMap.grounpList,"get",that.data.groupParam,function(res){
      res.data.data.list.map(function(item,key){
        item.headImg = app.globalData.picHost + item.headImg; 
        item.updateTime = item.updateTime.substr(0 , 10);
        return item;
      });
      that.setData({
        grounpList:res.data.data.list,
      });   
    });
  },
  tapNav:function(e){
    var index = e.currentTarget.dataset.index;
    var navs = [false,false];
    navs[index] = !navs[index];
    this.setData({navArr:navs});
  },
  tapTypes1:function(e){
    var word = e.currentTarget.dataset.word;
    var words = this.data.navWords;
    words[0] = word;
    this.setData({navWords:words});
    this.changeNav(0);
    var groupParam = this.data.groupParam;
    groupParam.tag = word;
    this.setData({groupParam:groupParam});
    this.getGroupList();
  },
  tapTypes2:function(e){
    var word = e.currentTarget.dataset.word;
    var words = this.data.navWords;
    words[1] = word;
    this.setData({navWords:words});
    this.changeNav(1);
    var groupParam = this.data.groupParam;
    groupParam.sort = e.currentTarget.dataset.id;
    this.setData({groupParam:groupParam});
    this.getGroupList();
  },
  changeNav:function(index){
    var navs = this.data.navArr;
    navs[index] = !navs[index];
    this.setData({navArr:navs});
  }
})
