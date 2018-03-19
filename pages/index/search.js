//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    searchword:"",
    showHistory:true,
    navArr:[false,false],
    data1:[],
    data2:[]
  },
  onLoad: function () {
    
  },
  chageKeyword:function(e){
    this.setData({searchword:e.detail.value})
  },
  search:function(){
    var words = this.data.searchword;
    this.setData({showHistory:false});
    if(!this.data.navArr[0] && !this.data.navArr[1]){
        this.setData({navArr:[true,false]});
    }
  },
  tapNav:function(e){
    if(this.data.showHistory){
        return
    }
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
